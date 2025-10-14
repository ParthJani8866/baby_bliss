import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Header from "../components/Header";
import SimpleJoditEditor from '../components/SimpleJoditEditor';


export default function CommunityDetail({ initialCommunity, initialPosts, error: serverError }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { id } = router.query;

  const [community, setCommunity] = useState(initialCommunity);
  const [posts, setPosts] = useState(initialPosts || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(serverError || '');
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [checkingMembership, setCheckingMembership] = useState(false);

  // Check if current user is a member - FIXED VERSION
  useEffect(() => {
    const checkMembership = async () => {
      if (!session || !id) {
        setIsMember(false);
        return;
      }

      setCheckingMembership(true);

      try {
        const response = await fetch(`/api/communities/${id}/check-membership`);
        console.log(response);

        if (response.ok) {
          const data = await response.json();
          console.log(data);

          setIsMember(data.isMember);
        } else {
          setIsMember(false);
        }
      } catch (error) {
        console.error('Error checking membership:', error);
        setIsMember(false);
      } finally {
        setCheckingMembership(false);
      }
    };

    checkMembership();
  }, [session, id]);


  const joinCommunity = async () => {
    if (!session) {
      router.push('/auth/signin');
      return;
    }

    try {
      setLoading(true);
      setError('');

      console.log('Joining community:', id);
      const response = await fetch(`/api/communities/${id}/join`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const responseData = await response.json();
      console.log('Join response:', responseData);

      if (response.ok) {
        setCommunity(responseData.data);
        setIsMember(true);
        setError('');
      } else if (response.status === 401) {
        router.push('/auth/signin');
      } else {
        setError(responseData.error || 'Failed to join community');
      }
    } catch (error) {
      console.error('Error joining community:', error);
      setError('Error joining community');
    } finally {
      setLoading(false);
    }
  };

  const leaveCommunity = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch(`/api/communities/${id}/leave`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const responseData = await response.json();
      console.log('Leave response:', responseData);

      if (response.ok) {
        setCommunity(responseData.data);
        setIsMember(false);
        setError('');
      } else {
        setError(responseData.error || 'Failed to leave community');
      }
    } catch (error) {
      console.error('Error leaving community:', error);
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
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">Loading community...</div>
        </div>
      </div>
    );
  }

  if (!community) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Community Not Found</h1>
            <p className="text-gray-600 mb-4">The community you&apos;re looking for doesn&apos;t exist.</p>
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
        <Header />

        {/* Community Header with Background Image */}
        <div
          className="bg-cover bg-center bg-no-repeat py-8 shadow-sm border-b"
          style={{
            backgroundImage: community.backgroundImage?.url
              ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${community.backgroundImage.url})`
              : 'linear-gradient(rgba(59, 130, 246, 0.9), rgba(59, 130, 246, 0.9))'
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold backdrop-blur-sm">
                    r/
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-white">r/{community.name}</h1>
                    <p className="text-white/90 mt-1">{community.description}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-white/80">
                      <span>Created by {community.creator?.name || 'Unknown'}</span>
                      <span>•</span>
                      <span>{community.members?.length || 0} members</span>
                      <span>•</span>
                      <span>Created {community.createdAt}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 md:mt-0">
                {session ? (
                  isMember ? (
                    // SHOW WHEN USER IS MEMBER
                    <div className="flex space-x-3">
                      <button
                        onClick={() => setShowCreatePost(true)}
                        className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                      >
                        Create Post
                      </button>
                      <button
                        onClick={leaveCommunity}
                        disabled={loading}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium disabled:opacity-50 transition-colors"
                      >
                        {loading ? 'Leaving...' : 'Leave Community'}
                      </button>
                    </div>
                  ) : (
                    // SHOW WHEN USER IS NOT MEMBER
                    <button
                      onClick={joinCommunity}
                      disabled={loading}
                      className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-md text-sm font-medium disabled:opacity-50 transition-colors"
                    >
                      {loading ? 'Joining...' : 'Join Community'}
                    </button>
                  )
                ) : (
                  // SHOW WHEN USER IS NOT SIGNED IN
                  <button
                    onClick={() => router.push('/auth/signin')}
                    className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Sign in to Join
                  </button>
                )}
              </div>
            </div>

            {/* Rules Section */}
            {community.rules && community.rules.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white mb-3">Community Rules</h3>
                <ul className="space-y-2">
                  {community.rules.map((rule, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      <span className="text-white/90">{rule}</span>
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
              {/* SHOW POSTS ONLY IF USER IS MEMBER OR NOT SIGNED IN */}
              {session && !isMember ? (
                // Show join prompt for signed-in non-members
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                  <p className="text-yellow-800 mb-4">
                    You need to join this community to view and create posts.
                  </p>
                  <button
                    onClick={joinCommunity}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Join Community
                  </button>
                </div>
              ) : posts.length === 0 ? (
                // Show empty state
                <div className="bg-white rounded-lg shadow p-8 text-center">
                  <svg className="mx-auto h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts yet</h3>
                  <p className="text-gray-500 mb-6">
                    {session && isMember ? 'Be the first to create a post in this community!' : 'Sign in and join to create posts!'}
                  </p>
                  {session && isMember && (
                    <button
                      onClick={() => setShowCreatePost(true)}
                      className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      Create First Post
                    </button>
                  )}
                </div>
              ) : (
                // SHOW POSTS LIST
                <div>
                  {/* Posts Header */}
                  <div className="bg-white rounded-lg shadow mb-6 p-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold text-gray-900">Community Posts</h2>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {posts.length} {posts.length === 1 ? 'post' : 'posts'}
                      </span>
                    </div>
                  </div>

                  {/* Posts List */}
                  <div className="space-y-6">
                    {posts.map((post) => (
                      <PostCard key={post._id} post={post} />
                    ))}
                  </div>
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
                      {community.createdAt}
                    </span>
                  </div>

                  {/* Show Create Post button in sidebar for members */}
                  {session && isMember && (
                    <button
                      onClick={() => setShowCreatePost(true)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium transition-colors"
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

// Post Card Component (keep the same as before)
function PostCard({ post }) {
  const [showFullContent, setShowFullContent] = useState(false);
  const contentPreview = post.content && post.content.length > 200 ? post.content.substring(0, 200) + '...' : post.content;

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-gray-100">
      <div className="p-6">
        {/* Post Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 cursor-pointer mb-2">
              {post.title}
            </h3>
            <div className="flex items-center space-x-3 text-sm text-gray-500">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {post.author?.name || 'Unknown'}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {post.createdAt}
              </span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div
            className="text-gray-700 whitespace-pre-wrap leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          />
        </div>

        {/* Post Actions */}
        <div className="flex items-center space-x-6 pt-4 border-t border-gray-100">
          <button className="flex items-center space-x-2 text-gray-500 hover:text-green-600 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
            <span className="font-medium">{post.upvotes?.length || 0}</span>
          </button>

          <button className="flex items-center space-x-2 text-gray-500 hover:text-red-600 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v6a2 2 0 002 2h.095c.5 0 .905-.405-.905.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m-7 0H4a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
            <span className="font-medium">{post.downvotes?.length || 0}</span>
          </button>

          <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="font-medium">Comment</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Create Post Modal Component (keep the same as before)
function CreatePostModal({ onClose, onSubmit, loading }) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = (e) => {
    console.log('dfsdff');

    e.preventDefault();
    if (formData.title.trim() && isContentValid) {
      onSubmit(formData);
    }
  };

  const handleContentChange = (content) => {
    setFormData((prev) => ({ ...prev, content }));
  };

  // Convert HTML to plain text for validation
  const getPlainText = (html) => {
    if (typeof document === "undefined") return html.replace(/<[^>]*>/g, "");
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const isContentValid = getPlainText(formData.content).trim().length > 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Create Post</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title *
            </label>
            <input
              type="text"
              required
              id="postTitle"         // ✅ add id
              name="title"           // ✅ add name
              value={formData.title}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, title: e.target.value }))
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter post title"
              maxLength={200}
            />
            <p className="text-xs text-gray-500 mt-1">
              {formData.title.length}/200 characters
            </p>
          </div>

          {/* CKEditor Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Content *
            </label>
            <SimpleJoditEditor
              id="postContent"    // ✅ add id
              name="content"      // ✅ add name
              value={formData.content}
              onChange={(html) => setFormData({ ...formData, content: html })}
            />
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-gray-500">
                Use the toolbar to format your text or upload media.
              </p>
              <p className="text-xs text-gray-500">
                {getPlainText(formData.content).length} characters
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || !formData.title.trim() || !isContentValid}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating..." : "Create Post"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    // Import MongoDB dependencies only on server-side
    const { default: clientPromise } = await import('../../lib/dbConnect');
    const { ObjectId } = await import('mongodb');

    const client = await clientPromise;
    const db = client.db();

    const { id } = context.params;

    try {
      // Get community
      const community = await db.collection('communities')
        .findOne({ _id: new ObjectId(id) });

      if (!community) {
        return {
          notFound: true,
        };
      }

      // Get posts for this community
      const posts = await db.collection('posts')
        .find({ community: new ObjectId(id) })
        .sort({ createdAt: -1 })
        .limit(20)
        .toArray();

      return {
        props: {
          initialCommunity: JSON.parse(JSON.stringify(community)),
          initialPosts: JSON.parse(JSON.stringify(posts)),
          error: null,
        },
      };
    } catch (error) {
      console.error('Error fetching community:', error);
      return {
        props: {
          error: 'Failed to load community data',
          initialCommunity: null,
          initialPosts: [],
        },
      };
    }
  } catch (error) {
    console.error('Database connection failed:', error);
    return {
      props: {
        error: 'Database connection failed',
        initialCommunity: null,
        initialPosts: [],
      },
    };
  }
}