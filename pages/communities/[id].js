import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import dbConnect from '../../lib/dbConnect';
import Community from '../../models/Community';
import Post from '../../models/Post';

export default function CommunityDetail({ initialCommunity, initialPosts }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { id } = router.query;

  const [community, setCommunity] = useState(initialCommunity);
  const [posts, setPosts] = useState(initialPosts || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [isMember, setIsMember] = useState(initialCommunity?.isMember || false);

  // Check if current user is a member
  useEffect(() => {
    if (session && community) {
      const member = community.members.some(member =>
        typeof member === 'object' ? member._id === session.user.id : member === session.user.id
      );
      setIsMember(member);
    }
  }, [session, community]);

  const joinCommunity = async () => {
    if (!session) {
      router.push('/auth/signin');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`/api/communities/${id}/join`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCommunity(data.data);
        setIsMember(true);
      } else if (response.status === 401) {
        router.push('/auth');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to join community');
      }
    } catch (error) {
      setError('Error joining community');
    } finally {
      setLoading(false);
    }
  };

  const leaveCommunity = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/communities/${id}/leave`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCommunity(data.data);
        setIsMember(false);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to leave community');
      }
    } catch (error) {
      setError('Error leaving community');
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (postData) => {
    if (!session) {
      router.push('/auth/signin');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...postData,
          communityId: id
        }),
      });

      if (response.ok) {
        const newPost = await response.json();
        setPosts(prev => [newPost.data, ...prev]);
        setShowCreatePost(false);
        setError('');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to create post');
      }
    } catch (error) {
      setError('Error creating post');
    } finally {
      setLoading(false);
    }
  };

  if (router.isFallback) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading community...</div>
        </div>
      </div>
    );
  }

  if (!community) {
    return (

      <div className="min-h-screen bg-gray-50 py-8">
        <div
          className="bg-cover bg-center bg-no-repeat py-8"
          style={{
            backgroundImage: community.backgroundImage?.url
              ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${community.backgroundImage.url})`
              : 'linear-gradient(rgba(59, 130, 246, 0.9), rgba(59, 130, 246, 0.9))'
          }}
        >
          {/* Your existing header content */}
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Community Not Found</h1>
            <p className="text-gray-600 mb-4">The community you're looking for doesn't exist.</p>
            <Link href="/communities" className="text-blue-600 hover:text-blue-800">
              ← Back to Communities
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>r/{community.name} | CommunityApp</title>
        <meta name="description" content={community.description} />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Community Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
                    r/
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">r/{community.name}</h1>
                    <p className="text-gray-600 mt-1">{community.description}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <span>Created by {community.creator?.name || 'Unknown'}</span>
                      <span>•</span>
                      <span>{community.members?.length || 0} members</span>
                      <span>•</span>
                      <span>Created {new Date(community.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 md:mt-0">
                {session ? (
                  isMember ? (
                    <div className="flex space-x-3">
                      <button
                        onClick={() => setShowCreatePost(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                      >
                        Create Post
                      </button>
                      <button
                        onClick={leaveCommunity}
                        disabled={loading}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium disabled:opacity-50"
                      >
                        {loading ? 'Leaving...' : 'Leave Community'}
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={joinCommunity}
                      disabled={loading}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium disabled:opacity-50"
                    >
                      {loading ? 'Joining...' : 'Join Community'}
                    </button>
                  )
                ) : (
                  <button
                    onClick={() => router.push('/auth/signin')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium"
                  >
                    Sign in to Join
                  </button>
                )}
              </div>
            </div>

            {/* Rules Section */}
            {community.rules && community.rules.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Community Rules</h3>
                <ul className="space-y-2">
                  {community.rules.map((rule, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-red-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-red-800">{error}</span>
              </div>
            </div>
          )}

          {/* Posts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content - Posts */}
            <div className="lg:col-span-3">
              {!isMember && session ? (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                  <p className="text-yellow-800">
                    You need to join this community to view and create posts.
                  </p>
                  <button
                    onClick={joinCommunity}
                    className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Join Community
                  </button>
                </div>
              ) : posts.length === 0 ? (
                <div className="bg-white rounded-lg shadow p-8 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">No posts yet</h3>
                  <p className="mt-2 text-gray-500">
                    {session ? 'Be the first to create a post in this community!' : 'Sign in to create the first post!'}
                  </p>
                  {session && isMember && (
                    <button
                      onClick={() => setShowCreatePost(true)}
                      className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Create Post
                    </button>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  {posts.map((post) => (
                    <PostCard key={post._id} post={post} />
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-6 sticky top-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4">About Community</h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">{community.description}</p>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Members</span>
                    <span className="font-medium text-gray-900">{community.members?.length || 0}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Created</span>
                    <span className="font-medium text-gray-900">
                      {new Date(community.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  {session && isMember && (
                    <button
                      onClick={() => setShowCreatePost(true)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium"
                    >
                      Create Post
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Create Post Modal */}
        {showCreatePost && (
          <CreatePostModal
            onClose={() => setShowCreatePost(false)}
            onSubmit={createPost}
            loading={loading}
          />
        )}
      </div>
    </>
  );
}

// Post Card Component
function PostCard({ post }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
              {post.title}
            </h3>
            <div className="flex items-center space-x-2 mt-1 text-sm text-gray-500">
              <span>Posted by {post.author?.name || 'Unknown'}</span>
              <span>•</span>
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>

        <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-100">
          <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
            <span>{post.upvotes?.length || 0}</span>
          </button>

          <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v6a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m-7 0H4a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
            <span>{post.downvotes?.length || 0}</span>
          </button>

          <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span>Comment</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Create Post Modal Component
function CreatePostModal({ onClose, onSubmit, loading }) {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() && formData.content.trim()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6">
        <h2 className="text-xl font-bold mb-4">Create Post</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter post title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <textarea
              required
              value={formData.content}
              onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
              rows="6"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your post content..."
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || !formData.title.trim() || !formData.content.trim()}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Creating...' : 'Create Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Server-side rendering
export async function getServerSideProps(context) {
  await dbConnect();

  const { id } = context.params;

  try {
    const community = await Community.findById(id)
      .populate('creator', 'name email')
      .populate('members', 'name email');

    if (!community) {
      return {
        notFound: true,
      };
    }

    // Get posts for this community
    const posts = await Post.find({ community: id })
      .populate('author', 'name email')
      .populate('community', 'name')
      .sort({ createdAt: -1 })
      .limit(20);

    return {
      props: {
        initialCommunity: JSON.parse(JSON.stringify(community)),
        initialPosts: JSON.parse(JSON.stringify(posts)),
      },
    };
  } catch (error) {
    console.error('Error fetching community:', error);
    return {
      notFound: true,
    };
  }
}