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

  // Check if current user is a member
  useEffect(() => {
    const checkMembership = async () => {
      if (!session || !id) {
        setIsMember(false);
        return;
      }

      setCheckingMembership(true);

      try {
        const response = await fetch(`/api/communities/${id}/check-membership`);
        
        if (response.ok) {
          const data = await response.json();
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

      const response = await fetch(`/api/communities/${id}/join`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const responseData = await response.json();

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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-blue-200 h-12 w-12"></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-blue-200 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-blue-200 rounded"></div>
                  <div className="h-4 bg-blue-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!community) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Community Not Found</h1>
            <p className="text-gray-600 mb-6">The community you're looking for doesn't exist or may have been removed.</p>
            <Link 
              href="/communities" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Communities
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>b/{community.name} | CommunityApp</title>
        <meta name="description" content={community.description} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
        <Header />

        {/* Enhanced Community Header */}
        <div
          className="relative bg-cover bg-center bg-no-repeat py-12 shadow-sm border-b border-white/20"
          style={{
            backgroundImage: community.backgroundImage?.url
              ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${community.backgroundImage.url})`
              : 'linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(147, 51, 234, 0.9))'
          }}
        >
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div className="flex-1">
                <div className="flex items-start space-x-6">
                  <div className="bg-white/20 backdrop-blur-sm text-white rounded-2xl w-20 h-20 flex items-center justify-center text-3xl font-bold border border-white/30 shadow-lg">
                    b/
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-white mb-3">b/{community.name}</h1>
                    <p className="text-white/90 text-lg leading-relaxed max-w-2xl">{community.description}</p>
                    <div className="flex items-center space-x-6 mt-4 text-sm text-white/80">
                      <div className="flex items-center gap-2">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>Created by {community.creator?.name || 'Unknown'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>{community.members?.length || 0} members</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>Created {community.createdAt}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Rules Section */}
                {community.rules && community.rules.length > 0 && (
                  <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Community Guidelines
                    </h3>
                    <ul className="space-y-3">
                      {community.rules.map((rule, index) => (
                        <li key={index} className="flex items-start text-white/90">
                          <span className="text-blue-300 mr-3 mt-1">•</span>
                          <span className="leading-relaxed">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Enhanced Action Buttons */}
              <div className="mt-6 md:mt-0">
                {session ? (
                  isMember ? (
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => setShowCreatePost(true)}
                        className="flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-50 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl border border-white/30"
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Create Post
                      </button>
                      <button
                        onClick={leaveCommunity}
                        disabled={loading}
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl text-sm font-medium disabled:opacity-50 transition-all duration-200 shadow-lg hover:shadow-xl border border-red-500/30"
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        {loading ? 'Leaving...' : 'Leave'}
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={joinCommunity}
                      disabled={loading}
                      className="flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 rounded-xl text-sm font-medium disabled:opacity-50 transition-all duration-200 shadow-lg hover:shadow-xl border border-white/30"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      {loading ? 'Joining...' : 'Join Community'}
                    </button>
                  )
                ) : (
                  <button
                    onClick={() => router.push('/auth/signin')}
                    className="flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 rounded-xl text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl border border-white/30"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Sign in to Join
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Enhanced Error Message */}
          {error && (
            <div className="bg-red-50/80 backdrop-blur-sm border border-red-200 rounded-2xl p-6 mb-8">
              <div className="flex items-center">
                <svg className="h-6 w-6 text-red-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-red-800 font-medium">{error}</span>
              </div>
            </div>
          )}

          {/* Posts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content - Posts */}
            <div className="lg:col-span-3">
              {session && !isMember ? (
                <div className="bg-yellow-50/80 backdrop-blur-sm border border-yellow-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-800 mb-3">Join to Participate</h3>
                  <p className="text-yellow-700 mb-6">
                    Become a member to view posts, join discussions, and share your thoughts with the community.
                  </p>
                  <button
                    onClick={joinCommunity}
                    className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Join Community
                  </button>
                </div>
              ) : posts.length === 0 ? (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">No posts yet</h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    {session && isMember ? 'Be the first to share something amazing with the community!' : 'Sign in and join to start the conversation!'}
                  </p>
                  {session && isMember && (
                    <button
                      onClick={() => setShowCreatePost(true)}
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      Create First Post
                    </button>
                  )}
                </div>
              ) : (
                <div>
                  {/* Enhanced Posts Header */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                        <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                        Community Posts
                      </h2>
                      <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                        {posts.length} {posts.length === 1 ? 'post' : 'posts'}
                      </span>
                    </div>
                  </div>

                  {/* Enhanced Posts List */}
                  <div className="space-y-6">
                    {posts.map((post) => (
                      <EnhancedPostCard key={post._id} post={post} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About Community
                </h3>

                <div className="space-y-5">
                  <div>
                    <p className="text-sm text-gray-600 leading-relaxed">{community.description}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Members
                      </span>
                      <span className="font-semibold text-gray-900">{community.members?.length || 0}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Created
                      </span>
                      <span className="font-semibold text-gray-900">{community.createdAt}</span>
                    </div>
                  </div>

                  {/* Enhanced Create Post Button */}
                  {session && isMember && (
                    <button
                      onClick={() => setShowCreatePost(true)}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      Create Post
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Create Post Modal */}
        {showCreatePost && (
          <EnhancedCreatePostModal
            onClose={() => setShowCreatePost(false)}
            onSubmit={createPost}
            loading={loading}
          />
        )}
      </div>
    </>
  );
}

// Enhanced Post Card Component
function EnhancedPostCard({ post }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-200/50 transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        {/* Enhanced Post Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 cursor-pointer mb-3 transition-colors duration-200">
              {post.title}
            </h3>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {post.author?.name || 'Unknown'}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {post.createdAt}
              </span>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div className="mb-4">
          <div
            className="text-gray-700 whitespace-pre-wrap leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          />
        </div>

        {/* Enhanced Post Actions */}
        <div className="flex items-center space-x-6 pt-4 border-t border-gray-100">
          <button className="flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors duration-200 group/upvote">
            <div className="w-10 h-10 bg-gray-100 group-hover/upvote:bg-green-50 rounded-xl flex items-center justify-center transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </div>
            <span className="font-medium text-sm">{post.upvotes?.length || 0}</span>
          </button>

          <button className="flex items-center gap-2 text-gray-500 hover:text-red-600 transition-colors duration-200 group/downvote">
            <div className="w-10 h-10 bg-gray-100 group-hover/downvote:bg-red-50 rounded-xl flex items-center justify-center transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v6a2 2 0 002 2h.095c.5 0 .905-.405-.905.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m-7 0H4a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </div>
            <span className="font-medium text-sm">{post.downvotes?.length || 0}</span>
          </button>

          <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors duration-200 group/comment">
            <div className="w-10 h-10 bg-gray-100 group-hover/comment:bg-blue-50 rounded-xl flex items-center justify-center transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <span className="font-medium text-sm">Comment</span>
          </button>

          <button className="flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors duration-200 group/share">
            <div className="w-10 h-10 bg-gray-100 group-hover/share:bg-purple-50 rounded-xl flex items-center justify-center transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
            <span className="font-medium text-sm">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Enhanced Create Post Modal Component
function EnhancedCreatePostModal({ onClose, onSubmit, loading }) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() && isContentValid) {
      onSubmit(formData);
    }
  };

  const handleContentChange = (content) => {
    setFormData((prev) => ({ ...prev, content }));
  };

  const getPlainText = (html) => {
    if (typeof document === "undefined") return html.replace(/<[^>]*>/g, "");
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const isContentValid = getPlainText(formData.content).trim().length > 0;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full p-8 max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create New Post
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Post Title *
            </label>
            <input
              type="text"
              required
              id="postTitle"
              name="title"
              value={formData.title}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, title: e.target.value }))
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/50 backdrop-blur-sm transition-all duration-200"
              placeholder="What would you like to share with the community?"
              maxLength={200}
            />
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-gray-500">
                Be specific and descriptive for better engagement
              </p>
              <p className="text-xs text-gray-500">
                {formData.title.length}/200 characters
              </p>
            </div>
          </div>

          {/* Content Editor */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Post Content *
            </label>
            <div className="border border-gray-300 rounded-xl overflow-hidden">
              <SimpleJoditEditor
                id="postContent"
                name="content"
                value={formData.content}
                onChange={(html) => setFormData({ ...formData, content: html })}
              />
            </div>
            <div className="flex justify-between items-center mt-3">
              <p className="text-xs text-gray-500">
                Use formatting tools to make your post engaging
              </p>
              <p className="text-xs text-gray-500">
                {getPlainText(formData.content).length} characters
              </p>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || !formData.title.trim() || !isContentValid}
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Publish Post
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const { default: clientPromise } = await import('../../lib/dbConnect');
    const { ObjectId } = await import('mongodb');

    const client = await clientPromise;
    const db = client.db();

    const { id } = context.params;

    try {
      const community = await db.collection('communities')
        .findOne({ _id: new ObjectId(id) });

      if (!community) {
        return {
          notFound: true,
        };
      }

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