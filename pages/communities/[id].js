import { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Header from "../components/Header";
import SimpleJoditEditor from '../components/SimpleJoditEditor';
import {
  FaUsers,
  FaCalendarAlt,
  FaPlus,
  FaSignInAlt,
  FaEye,
  FaSignOutAlt,
  FaUserPlus,
  FaUserCheck,
  FaExclamationTriangle,
  FaComments,
  FaHeart,
  FaShare,
  FaReply,
  FaArrowLeft,
  FaTimes,
  FaEdit,
  FaTrash,
  FaChevronDown,
  FaChevronUp,
  FaRegHeart,
  FaRegComment,
  FaRegShareSquare,
  FaBaby,
  FaHandHoldingHeart,
  FaUserFriends,
  FaHome,
  FaSeedling,
  FaChartLine,
  FaInfoCircle,
  FaLock,
  FaUnlock
} from 'react-icons/fa';

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
      signIn("google");
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
        signIn("google");
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
      signIn("google");
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
          comments:[],
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

  // Handle post interactions
  const handlePostInteraction = async (postId, action) => {
    if (!session) {
      signIn("google");
      return;
    }

    try {
      const response = await fetch(`/api/posts/${postId}/${action}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        // Update the post in the local state
        setPosts(prev => prev.map(post =>
          post._id === postId ? result.data : post
        ));
      } else {
        const errorData = await response.json();
        setError(errorData.error || `Failed to ${action} post`);
      }
    } catch (error) {
      console.error(`Error ${action} post:`, error);
      setError(`Error ${action} post`);
    }
  };

  // Handle comment actions
  const handleCommentAction = async (postId, commentId, data = {}) => {
    if (!session) {
      signIn("google");
      return;
    }

    try {
      let url = `/api/posts/${postId}/comments/create`;
      if (commentId) {
        url = `/api/posts/${postId}/comments/${commentId}/like`;
      }

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        setPosts(prev => prev.map(post =>
          post._id === postId ? result.data : post
        ));
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to handle comment');
      }
    } catch (error) {
      console.error('Error handling comment:', error);
      setError('Error handling comment');
    }
  };

  // Share post functionality
  const sharePost = async (post) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.content ? getPlainText(post.content).substring(0, 100) + '...' : '',
          url: `${window.location.origin}/posts/${post._id}`,
        });
      } catch (error) {
        console.log('Sharing cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      const postUrl = `${window.location.origin}/posts/${post._id}`;
      navigator.clipboard.writeText(postUrl).then(() => {
        alert('Post link copied to clipboard!');
      });
    }
  };

  const getPlainText = (html) => {
    if (typeof document === "undefined") return html.replace(/<[^>]*>/g, "");
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  if (router.isFallback) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50/30">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-teal-200 h-12 w-12"></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-teal-200 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-teal-200 rounded"></div>
                  <div className="h-4 bg-teal-200 rounded w-5/6"></div>
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50/30">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center">
              <FaExclamationTriangle className="w-10 h-10 text-red-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Community Not Found</h1>
            <p className="text-gray-600 mb-6">The community you{"'"}re looking for doesn{"'"}t exist or may have been removed.</p>
            <Link
              href="/communities"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaArrowLeft className="w-5 h-5" />
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
        <title>{community.name} | Belly Buds Parenting Community</title>
        <meta name="description" content={community.description} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50/30">
        <Header />

        {/* Enhanced Community Header */}
        <div
          className="relative bg-cover bg-center bg-no-repeat py-16 shadow-lg border-b border-white/20"
          style={{
            backgroundImage: community.backgroundImage?.url
              ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${community.backgroundImage.url})`
              : 'linear-gradient(135deg, rgba(20, 184, 166, 0.9), rgba(59, 130, 246, 0.9))'
          }}
        >
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div className="flex-1">
                <div className="flex items-start space-x-6">
                  <div className="bg-white/20 backdrop-blur-sm text-white rounded-2xl w-24 h-24 flex items-center justify-center text-4xl font-bold border border-white/30 shadow-2xl">
                    <FaComments className="w-10 h-10" />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-4xl font-bold text-white mb-4">#{community.name}</h1>
                    <p className="text-white/90 text-lg leading-relaxed max-w-2xl">{community.description}</p>
                    <div className="flex items-center space-x-6 mt-6 text-sm text-white/80">
                      <div className="flex items-center gap-3">
                        <FaUserFriends className="w-5 h-5" />
                        <span>Created by {community.creator?.name || 'Unknown'}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaUsers className="w-5 h-5" />
                        <span>{community.members?.length || 0} members</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaCalendarAlt className="w-5 h-5" />
                        <span>Created {community.createdAt}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 md:mt-0">
                {session ? (
                  isMember ? (
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => setShowCreatePost(true)}
                        className="flex items-center gap-3 bg-white text-teal-600 hover:bg-gray-50 px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-xl border border-white/30"
                      >
                        <FaPlus className="w-5 h-5" />
                        Create Post
                      </button>
                      <button
                        onClick={leaveCommunity}
                        disabled={loading}
                        className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-xl font-semibold disabled:opacity-50 transition-all duration-300 shadow-2xl hover:shadow-xl border border-red-500/30"
                      >
                        <FaSignOutAlt className="w-5 h-5" />
                        {loading ? 'Leaving...' : 'Leave'}
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={joinCommunity}
                      disabled={loading}
                      className="flex items-center gap-3 bg-white text-teal-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold disabled:opacity-50 transition-all duration-300 shadow-2xl hover:shadow-xl border border-white/30"
                    >
                      <FaUserPlus className="w-5 h-5" />
                      {loading ? 'Joining...' : 'Join Community'}
                    </button>
                  )
                ) : (
                  <button
                    onClick={() => signIn("google")}
                    className="flex items-center gap-3 bg-white text-teal-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-xl border border-white/30"
                  >
                    <FaSignInAlt className="w-5 h-5" />
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
                <FaExclamationTriangle className="h-6 w-6 text-red-400 mr-3" />
                <span className="text-red-800 font-semibold">{error}</span>
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
                    <FaLock className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-800 mb-3">Join to Participate</h3>
                  <p className="text-yellow-700 mb-6">
                    Become a member to view posts, join discussions, and share your thoughts with the community.
                  </p>
                  <button
                    onClick={joinCommunity}
                    className="inline-flex items-center gap-3 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaUserPlus className="w-5 h-5" />
                    Join Community
                  </button>
                </div>
              ) : posts.length === 0 ? (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-teal-100 p-12 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full flex items-center justify-center">
                    <FaEdit className="w-10 h-10 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">No posts yet</h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    {session && isMember ? 'Be the first to share something amazing with the community!' : 'Sign in and join to start the conversation!'}
                  </p>
                  {session && isMember && (
                    <button
                      onClick={() => setShowCreatePost(true)}
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-xl"
                    >
                      <FaPlus className="w-6 h-6" />
                      Create First Post
                    </button>
                  )}
                </div>
              ) : (
                <div>
                  {/* Enhanced Posts Header */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-teal-100 p-6 mb-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                        <FaComments className="w-6 h-6 text-teal-500" />
                        Community Posts
                      </h2>
                      <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
                        {posts.length} {posts.length === 1 ? 'post' : 'posts'}
                      </span>
                    </div>
                  </div>

                  {/* Enhanced Posts List */}
                  <div className="space-y-6">
                    {posts.map((post) => (
                      <EnhancedPostCard
                        key={post._id}
                        post={post}
                        session={session}
                        onLike={() => handlePostInteraction(post._id, 'like')}
                        onDislike={() => handlePostInteraction(post._id, 'dislike')}
                        onShare={() => sharePost(post)}
                        onComment={handleCommentAction}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-teal-100 p-6 sticky top-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-3">
                  <FaInfoCircle className="w-5 h-5 text-teal-500" />
                  About Community
                </h3>

                <div className="space-y-5">
                  <div>
                    <p className="text-sm text-gray-600 leading-relaxed">{community.description}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center gap-2">
                        <FaUsers className="w-4 h-4" />
                        Members
                      </span>
                      <span className="font-semibold text-gray-900">{community.members?.length || 0}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center gap-2">
                        <FaCalendarAlt className="w-4 h-4" />
                        Created
                      </span>
                      <span className="font-semibold text-gray-900">{community.createdAt}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center gap-2">
                        <FaUnlock className="w-4 h-4" />
                        Status
                      </span>
                      <span className="font-semibold text-teal-600">Public</span>
                    </div>
                  </div>

                  {/* Enhanced Create Post Button */}
                  {session && isMember && (
                    <button
                      onClick={() => setShowCreatePost(true)}
                      className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <FaPlus className="w-5 h-5" />
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

// Enhanced Post Card Component with Comments, Likes, and Share
function EnhancedPostCard({ post, session, onLike, onDislike, onShare, onComment }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);

  // FIXED: Simplified like/dislike checks
  const isLiked = session && post.upvotes && post.upvotes.includes(session.user.id);
  const isDisliked = session && post.downvotes && post.downvotes.includes(session.user.id);

  const handleLike = () => {
    if (!session) return;
    onLike();
  };

  const handleDislike = () => {
    if (!session) return;
    onDislike();
  };

  const handleAddComment = async () => {
    if (!commentText.trim() || !session) return;

    await onComment(post._id, null, { 
      content: commentText,
      parentId: replyingTo 
    });
    
    setCommentText('');
    setReplyingTo(null);
  };

  const handleReply = (commentId) => {
    setReplyingTo(commentId);
    setShowComments(true);
  };

  const handleLikeComment = (commentId) => {
    onComment(post._id, commentId);
  };

  // Get top-level comments (no parentId)
  const topLevelComments = post.comments?.filter(comment => !comment.parentId) || [];

  // Get replies for a specific comment
  const getReplies = (commentId) => {
    return post.comments?.filter(comment => 
      comment.parentId && comment.parentId.toString() === commentId.toString()
    ) || [];
  };

  return (
    <div 
      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-teal-100 hover:border-teal-200 transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        {/* Enhanced Post Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 hover:text-teal-600 cursor-pointer mb-3 transition-colors duration-200">
              {post.title}
            </h3>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <FaUserFriends className="w-4 h-4" />
                {post.author?.name || 'Unknown'}
              </span>
              <span className="flex items-center gap-2">
                <FaCalendarAlt className="w-4 h-4" />
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
        <div className="flex items-center justify-between pt-4 border-t border-teal-100">
          <div className="flex items-center space-x-4">
            {/* Like Button */}
            <button 
              onClick={handleLike}
              className="flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors duration-200 group/upvote"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-200 ${
                isLiked 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-gray-100 group-hover/upvote:bg-green-50'
              }`}>
                <FaHeart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </div>
              <span className="font-semibold text-sm">{post.upvotes?.length || 0}</span>
            </button>

            {/* Dislike Button */}
            <button 
              onClick={handleDislike}
              className="flex items-center gap-2 text-gray-500 hover:text-red-600 transition-colors duration-200 group/downvote"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-200 ${
                isDisliked 
                  ? 'bg-red-100 text-red-600' 
                  : 'bg-gray-100 group-hover/downvote:bg-red-50'
              }`}>
                <FaHeart className={`w-5 h-5 transform rotate-180 ${isDisliked ? 'fill-current' : ''}`} />
              </div>
              <span className="font-semibold text-sm">{post.downvotes?.length || 0}</span>
            </button>

            {/* Comment Button */}
            <button 
              onClick={() => setShowComments(!showComments)}
              className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors duration-200 group/comment"
            >
              <div className="w-12 h-12 bg-gray-100 group-hover/comment:bg-teal-50 rounded-xl flex items-center justify-center transition-colors duration-200">
                <FaRegComment className="w-5 h-5" />
              </div>
              <span className="font-semibold text-sm">{post.comments?.length || 0}</span>
            </button>
          </div>

          {/* Share Button */}
          <button 
            onClick={onShare}
            className="flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors duration-200 group/share"
          >
            <div className="w-12 h-12 bg-gray-100 group-hover/share:bg-purple-50 rounded-xl flex items-center justify-center transition-colors duration-200">
              <FaShare className="w-5 h-5" />
            </div>
            <span className="font-semibold text-sm">Share</span>
          </button>
        </div>

        {/* Comments Section */}
        {showComments && (
          <div className="mt-6 pt-6 border-t border-teal-100">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-3">
              <FaRegComment className="w-5 h-5 text-teal-500" />
              Comments ({post.comments?.length || 0})
            </h4>

            {/* Add Comment Form */}
            {session && (
              <div className="mb-6">
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                      <span className="text-teal-600 text-sm font-semibold">
                        {session.user.name?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <textarea
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder={replyingTo ? "Write your reply..." : "Add a comment..."}
                      className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none bg-white/50"
                      rows="3"
                    />
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-sm text-gray-500">
                        {replyingTo && 'Replying to comment'}
                      </span>
                      <div className="flex space-x-3">
                        {replyingTo && (
                          <button
                            onClick={() => setReplyingTo(null)}
                            className="text-sm text-gray-500 hover:text-gray-700 font-medium"
                          >
                            Cancel
                          </button>
                        )}
                        <button
                          onClick={handleAddComment}
                          disabled={!commentText.trim()}
                          className="bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                        >
                          {replyingTo ? 'Reply' : 'Comment'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Comments List */}
            <div className="space-y-4">
              {topLevelComments.map((comment) => (
                <Comment 
                  key={comment._id} 
                  comment={comment} 
                  session={session}
                  onReply={handleReply}
                  onLike={() => handleLikeComment(comment._id)}
                  replies={getReplies(comment._id)}
                />
              ))}
            </div>

            {(!post.comments || post.comments.length === 0) && (
              <div className="text-center py-8 text-gray-500">
                <FaRegComment className="w-12 h-12 mx-auto text-gray-300 mb-3" />
                <p>No comments yet. Be the first to comment!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Comment Component
function Comment({ comment, session, onReply, onLike, replies = [] }) {
  const [showReplies, setShowReplies] = useState(false);
  
  // FIXED: Simplified like check
  const isLiked = session && comment.likes && comment.likes.includes(session.user.id);

  const handleLike = () => {
    if (!session) return;
    onLike();
  };

  return (
    <div className="bg-teal-50 rounded-xl p-4">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
            <span className="text-teal-600 text-sm font-semibold">
              {comment.author?.name?.charAt(0).toUpperCase() || 'U'}
            </span>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className="font-semibold text-gray-900 text-sm">
              {comment.author?.name || 'Unknown'}
            </span>
            <span className="text-gray-500 text-xs">
              {comment.createdAt}
            </span>
          </div>
          <p className="text-gray-700 text-sm mb-3">{comment.content}</p>
          
          <div className="flex items-center space-x-4 text-xs">
            <button 
              onClick={handleLike}
              className={`flex items-center space-x-2 ${
                isLiked ? 'text-teal-600' : 'text-gray-500 hover:text-teal-600'
              }`}
            >
              <FaRegHeart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              <span className="font-medium">{comment.likes?.length || 0}</span>
            </button>
            
            {session && (
              <button 
                onClick={() => onReply(comment._id)}
                className="flex items-center space-x-2 text-gray-500 hover:text-teal-600"
              >
                <FaReply className="w-4 h-4" />
                <span>Reply</span>
              </button>
            )}
          </div>

          {/* Replies */}
          {replies.length > 0 && (
            <div className="mt-3">
              <button 
                onClick={() => setShowReplies(!showReplies)}
                className="flex items-center space-x-2 text-sm text-teal-600 hover:text-teal-700 mb-2 font-medium"
              >
                {showReplies ? <FaChevronUp className="w-3 h-3" /> : <FaChevronDown className="w-3 h-3" />}
                <span>{showReplies ? 'Hide' : 'Show'} {replies.length} {replies.length === 1 ? 'reply' : 'replies'}</span>
              </button>
              
              {showReplies && (
                <div className="space-y-3 mt-2 ml-4 pl-4 border-l-2 border-teal-200">
                  {replies.map((reply) => (
                    <div key={reply._id} className="bg-white rounded-xl p-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-semibold text-gray-900 text-sm">
                          {reply.author?.name || 'Unknown'}
                        </span>
                        <span className="text-gray-500 text-xs">
                          {reply.createdAt}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm">{reply.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
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
      <div className="bg-white rounded-2xl max-w-4xl w-full p-8 max-h-[90vh] overflow-y-auto shadow-2xl border border-teal-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <FaEdit className="w-6 h-6 text-teal-500" />
            Create New Post
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100"
          >
            <FaTimes className="w-6 h-6" />
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
              className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white/50 backdrop-blur-sm transition-all duration-200"
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
            <div className="border border-teal-200 rounded-xl overflow-hidden">
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
          <div className="flex justify-end space-x-4 pt-6 border-t border-teal-200">
            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-3 px-6 py-3 text-sm font-semibold text-gray-700 hover:text-gray-900 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200"
            >
              <FaTimes className="w-5 h-5" />
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || !formData.title.trim() || !isContentValid}
              className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white text-sm font-semibold rounded-xl hover:from-teal-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  Creating...
                </>
              ) : (
                <>
                  <FaEdit className="w-5 h-5" />
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
    const clientPromise = (await import('../../lib/dbConnect')).default;
    const client = await clientPromise;
    const db = client.db();
    const { ObjectId } = await import('mongodb');

    const { id } = context.params;

    try {
      // Get community with aggregation
      const community = await db.collection('communities')
        .aggregate([
          { $match: { _id: new ObjectId(id) } },
          // Lookup creator details
          {
            $lookup: {
              from: 'users',
              localField: 'creator',
              foreignField: '_id',
              as: 'creatorDetails'
            }
          },
          {
            $unwind: {
              path: '$creatorDetails',
              preserveNullAndEmptyArrays: true
            }
          },
          // Lookup member details
          {
            $lookup: {
              from: 'users',
              localField: 'members',
              foreignField: '_id',
              as: 'memberDetails'
            }
          },
          // Project the fields we need
          {
            $project: {
              name: 1,
              description: 1,
              backgroundImage: 1,
              rules: 1,
              createdAt: 1,
              updatedAt: 1,
              'creator.name': '$creatorDetails.name',
              'creator.email': '$creatorDetails.email',
              'creator._id': '$creatorDetails._id',
              members: '$memberDetails._id'
            }
          }
        ])
        .next();

      if (!community) {
        return {
          notFound: true,
        };
      }

      // Get posts for this community with aggregation
      const posts = await db.collection('posts')
        .aggregate([
          { $match: { community: new ObjectId(id) } },
          { $sort: { createdAt: -1 } },
          // Lookup author details
          {
            $lookup: {
              from: 'users',
              localField: 'author',
              foreignField: '_id',
              as: 'authorDetails'
            }
          },
          {
            $unwind: {
              path: '$authorDetails',
              preserveNullAndEmptyArrays: true
            }
          },
          // Lookup upvotes user details
          {
            $lookup: {
              from: 'users',
              localField: 'upvotes',
              foreignField: '_id',
              as: 'upvoteDetails'
            }
          },
          // Lookup downvotes user details
          {
            $lookup: {
              from: 'users',
              localField: 'downvotes',
              foreignField: '_id',
              as: 'downvoteDetails'
            }
          },
          // Lookup comment author details
          {
            $lookup: {
              from: 'users',
              localField: 'comments.author.id',
              foreignField: '_id',
              as: 'commentAuthorDetails'
            }
          },
          // Lookup comment likes user details
          {
            $lookup: {
              from: 'users',
              localField: 'comments.likes',
              foreignField: '_id',
              as: 'commentLikeDetails'
            }
          },
          // Project the fields we need
          {
            $project: {
              title: 1,
              content: 1,
              createdAt: 1,
              updatedAt: 1,
              'author.name': '$authorDetails.name',
              'author.email': '$authorDetails.email',
              'author._id': '$authorDetails._id',
              upvotes: '$upvoteDetails._id',
              downvotes: '$downvoteDetails._id',
              comments: {
                $map: {
                  input: '$comments',
                  as: 'comment',
                  in: {
                    _id: '$$comment._id',
                    content: '$$comment.content',
                    author: {
                      name: { 
                        $arrayElemAt: [
                          '$commentAuthorDetails.name',
                          { $indexOfArray: ['$commentAuthorDetails._id', '$$comment.author.id'] }
                        ]
                      },
                      email: {
                        $arrayElemAt: [
                          '$commentAuthorDetails.email',
                          { $indexOfArray: ['$commentAuthorDetails._id', '$$comment.author.id'] }
                        ]
                      },
                      _id: '$$comment.author.id'
                    },
                    likes: '$$comment.likes',
                    parentId: '$$comment.parentId',
                    createdAt: '$$comment.createdAt',
                    updatedAt: '$$comment.updatedAt'
                  }
                }
              }
            }
          }
        ])
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