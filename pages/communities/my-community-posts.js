import { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Header from "../components/Header";
import {
  FaUsers,
  FaCalendarAlt,
  FaPlus,
  FaSignInAlt,
  FaEye,
  FaHeart,
  FaShare,
  FaComment,
  FaRegHeart,
  FaRegComment,
  FaRegShareSquare,
  FaSearch,
  FaFilter,
  FaSort,
  FaFire,
  FaClock,
  FaEllipsisH,
  FaUserCircle,
  FaHome,
  FaComments,
  FaUserFriends,
  FaBaby,
  FaHandHoldingHeart,
  FaGlobeAmericas,
  FaThumbsUp,
  FaLaugh,
  FaSurprise,
  FaSadTear,
  FaAngry,
  FaBookmark,
  FaBell,
  FaCog,
  FaVideo,
  FaImages,
  FaNewspaper,
  FaSmile,
  FaTimes,
  FaPhotoVideo
} from 'react-icons/fa';

export default function MyCommunityPosts() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [communities, setCommunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [filterCommunity, setFilterCommunity] = useState('all');
  const [activeTab, setActiveTab] = useState('all');
  const [showReactions, setShowReactions] = useState(null);
  const [showCreatePost, setShowCreatePost] = useState(false);

  useEffect(() => {
    if (status === 'loading') return;

    if (!session) {
      signIn("google");
      return;
    }

    fetchMyCommunityPosts();
  }, [session, status]);

  const fetchMyCommunityPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/posts/my-communities');

      if (response.ok) {
        const data = await response.json();
        setPosts(data.posts || []);
        setCommunities(data.communities || []);
      } else {
        setError('Failed to load posts from your communities');
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError('Error loading posts');
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (postData) => {
    try {
      setLoading(true);
      const response = await fetch('/api/posts/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        const newPost = await response.json();
        setPosts(prev => [newPost, ...prev]);
        setShowCreatePost(false);
        alert('Post created successfully!');
        // Refresh posts
        fetchMyCommunityPosts();
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Error creating post');
    } finally {
      setLoading(false);
    }
  };

  const handlePostInteraction = async (postId, action) => {
    if (!session) return;

    try {
      const response = await fetch(`/api/posts/${postId}/${action}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        setPosts(prev => prev.map(post =>
          post._id === postId ? result.data : post
        ));
      }
    } catch (error) {
      console.error(`Error ${action} post:`, error);
    }
  };

  const handleAddComment = async (postId, commentData) => {
    if (!session) return;

    try {
      const response = await fetch(`/api/posts/${postId}/comments/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });

      if (response.ok) {
        const result = await response.json();
        setPosts(prev => prev.map(post =>
          post._id === postId ? result.data : post
        ));
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Failed to add comment');
      }
    } catch (error) {
      console.error('Error adding comment:', error);
      alert('Error adding comment');
    }
  };

  const handleLikeComment = async (postId, commentId) => {
    if (!session) return;

    try {
      const response = await fetch(`/api/posts/${postId}/comments/${commentId}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        setPosts(prev => prev.map(post =>
          post._id === postId ? result.data : post
        ));
      } else {
        console.error('Failed to like comment');
      }
    } catch (error) {
      console.error('Error liking comment:', error);
    }
  };

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

  // Filter and sort posts
  const filteredAndSortedPosts = posts
    .filter(post => {
      const plainTextContent = getPlainText(post.content);
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        plainTextContent.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCommunity = filterCommunity === 'all' || post.community?._id === filterCommunity;
      const matchesTab = activeTab === 'all' ||
        (activeTab === 'popular' && (post.upvotes?.length || 0) > 5) ||
        (activeTab === 'recent' && isRecentPost(post.createdAt));

      return matchesSearch && matchesCommunity && matchesTab;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'oldest':
          return new Date(a.createdAt) - new Date(b.createdAt);
        case 'popular':
          return (b.upvotes?.length || 0) - (a.upvotes?.length || 0);
        case 'comments':
          return (b.comments?.length || 0) - (a.comments?.length || 0);
        default:
          return 0;
      }
    });

  const isRecentPost = (createdAt) => {
    const postDate = new Date(createdAt);
    const now = new Date();
    const diffHours = (now - postDate) / (1000 * 60 * 60);
    return diffHours < 24;
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="max-w-8xl mx-auto px-4 py-6">
          <div className="animate-pulse space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-24"></div>
                  </div>
                </div>
                <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
                <div className="h-48 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
              <FaSignInAlt className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Sign In Required</h1>
            <p className="text-gray-600 mb-6">Please sign in to view posts from your communities.</p>
            <button
              onClick={() => signIn("google")}
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-700"
            >
              <FaSignInAlt className="w-5 h-5" />
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>My Community Posts | Belly Buds</title>
        <meta name="description" content="View posts from all your parenting communities in one place" />
      </Head>

      <div className="min-h-screen bg-gray-100">
        <Header />

        <div className="max-w-8xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Sidebar */}
            <div className="hidden lg:block lg:col-span-1 space-y-4">
              {/* User Profile Card */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {session.user.name?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{session.user.name}</h3>
                    <p className="text-sm text-gray-500">View your profile</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Communities</span>
                    <span className="font-semibold">{communities.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Posts</span>
                    <span className="font-semibold">{posts.length}</span>
                  </div>
                </div>
              </div>

              {/* Community Shortcuts */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Your Communities</h3>
                <div className="space-y-2">
                  {communities.slice(0, 5).map(community => (
                    <Link
                      key={community._id}
                      href={`/communities/${community._id}`}
                      className={`flex items-center space-x-3 w-full p-2 rounded-lg transition-colors ${filterCommunity === community._id ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
                        }`}
                    >
                      <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <FaUsers className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm font-medium">{community.name}</span>
                    </Link>
                  ))}
                  {communities.length > 5 && (
                    <Link
                      href="/communities"
                      className="flex items-center space-x-3 w-full p-2 rounded-lg hover:bg-gray-100 text-gray-600"
                    >
                      <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <FaEllipsisH className="w-4 h-4" />
                      </div>
                      <span className="text-sm">See more</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-4">
              {/* Create Post Card */}
              <div className="hidden lg:block bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {session.user.name?.charAt(0).toUpperCase()}
                  </div>
                  <button
                    onClick={() => setShowCreatePost(true)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full py-2 px-4 text-left transition-colors"
                  >
                    What is on your mind, {session.user.name?.split(' ')[0]}?
                  </button>
                </div>
              </div>

              {/* Filters */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Search posts..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-gray-100 border-none rounded-full py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="newest">Newest</option>
                    <option value="popular">Most Popular</option>
                    <option value="comments">Most Comments</option>
                  </select>
                </div>

                {/* Community Filter */}
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    onClick={() => setFilterCommunity('all')}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${filterCommunity === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                  >
                    All Communities
                  </button>
                  {communities.slice(0, 5).map(community => (
                    <button
                      key={community._id}
                      onClick={() => setFilterCommunity(community._id)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${filterCommunity === community._id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                      {community.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Posts Feed */}
              {filteredAndSortedPosts.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <FaNewspaper className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {searchTerm || filterCommunity !== 'all' ? 'No posts found' : 'No posts yet'}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {searchTerm || filterCommunity !== 'all'
                      ? 'Try adjusting your search terms or filters.'
                      : 'Be the first to post in your communities!'
                    }
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      href="/communities"
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Explore Communities
                    </Link>
                    <button
                      onClick={() => setShowCreatePost(true)}
                      className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Create First Post
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredAndSortedPosts.map((post) => (
                    <FacebookPostCard
                      key={post._id}
                      post={post}
                      session={session}
                      onLike={() => handlePostInteraction(post._id, 'like')}
                      onDislike={() => handlePostInteraction(post._id, 'dislike')}
                      onShare={() => sharePost(post)}
                      onAddComment={handleAddComment}
                      onLikeComment={handleLikeComment}
                      showReactions={showReactions === post._id}
                      onShowReactions={() => setShowReactions(post._id)}
                      onHideReactions={() => setShowReactions(null)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1 space-y-4">
              {/* News & Updates */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h3 className="font-semibold text-gray-900 mb-3">News & Updates</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <FaBaby className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">New parenting guidelines released</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                      <FaUsers className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Community meetup this weekend</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Suggested Communities */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-900">Suggested Communities</h3>
                  <Link href="/communities" className="text-sm text-blue-600 hover:text-blue-700">See All</Link>
                </div>
                <div className="space-y-3">
                  {communities.slice(0, 3).map(community => (
                    <Link
                      key={community._id}
                      href={`/communities/${community._id}`}
                      className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors"
                    >
                      <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <FaUsers className="w-4 h-4 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{community.name}</p>
                        <p className="text-xs text-gray-500">{community.members?.length || 0} members</p>
                      </div>
                    </Link>
                  ))}
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
            communities={communities}
            session={session}
          />
        )}
      </div>
    </>
  );
}

// Create Post Modal Component
function CreatePostModal({ onClose, onSubmit, loading, communities, session }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedCommunity, setSelectedCommunity] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) {
      alert('Please enter some content for your post');
      return;
    }

    const postData = {
      title: title.trim(),
      content: content.trim(),
      communityId: selectedCommunity || null,
      image: image
    };

    onSubmit(postData);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Basic file validation
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert('Image size should be less than 5MB');
        return;
      }
      setImage(file);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Create Post</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        {/* User Info */}
        <div className="flex items-center space-x-3 p-4 border-b">
          <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
            {session.user.name?.charAt(0).toUpperCase()}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{session.user.name}</h3>
            <select
              value={selectedCommunity}
              onChange={(e) => setSelectedCommunity(e.target.value)}
              className="text-sm text-gray-600 border-none bg-transparent focus:outline-none focus:ring-0"
            >
              <option value="">Select Community</option>
              {communities.map(community => (
                <option key={community._id} value={community._id}>
                  {community.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4">
          <div className="space-y-4">
            {/* Title Input */}
            <div>
              <input
                type="text"
                placeholder="Title (optional)"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Content Textarea */}
            <div>
              <textarea
                placeholder={`What is on your mind, ${session.user.name?.split(' ')[0]}?`}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                rows="6"
                required
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="flex items-center space-x-2 text-gray-600 cursor-pointer">
                <FaPhotoVideo className="w-5 h-5" />
                <span>Add Photo/Video</span>
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
              {image && (
                <div className="mt-2 text-sm text-gray-500">
                  Selected: {image.name}
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 mt-6 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || !content.trim()}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
            >
              {loading ? 'Posting...' : 'Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Facebook-style Post Card Component
function FacebookPostCard({ post, session, onLike, onDislike, onShare, onAddComment, onLikeComment, showReactions, onShowReactions, onHideReactions }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(post.upvotes?.includes(session?.user?.id));
  const [isDisliked, setIsDisliked] = useState(post.downvotes?.includes(session?.user?.id));
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);

  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false);
    } else {
      setIsLiked(true);
      setIsDisliked(false);
    }
    onLike();
  };

  const handleDislike = () => {
    if (isDisliked) {
      setIsDisliked(false);
    } else {
      setIsDisliked(true);
      setIsLiked(false);
    }
    onDislike();
  };

  const handleSubmitComment = async () => {
    if (!commentText.trim()) return;

    await onAddComment(post._id, {
      content: commentText,
      parentId: replyingTo
    });

    setCommentText('');
    setReplyingTo(null);
    setShowCommentInput(false);
  };

  const handleReply = (commentId) => {
    setReplyingTo(commentId);
    setShowCommentInput(true);
  };

  const handleLikeCommentClick = (commentId) => {
    onLikeComment(post._id, commentId);
  };

  const isCommentLiked = (comment) => {
    if (!session || !comment.likes) return false;
    return comment.likes.some(like => {
      // Check if like is null or undefined
      if (!like) return false;

      // Handle both object and string formats
      if (typeof like === 'object') {
        return like._id === session.user.id;
      } else {
        return like === session.user.id;
      }
    });
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
    <div className="bg-white rounded-lg shadow-sm">
      {/* Post Header */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              {post.author?.name?.charAt(0).toUpperCase() || 'U'}
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <h4 className="font-semibold text-gray-900">{post.author?.name || 'Unknown'}</h4>
                {post.community && (
                  <>
                    <span className="text-gray-500">•</span>
                    <Link
                      href={`/communities/${post.community._id}`}
                      className="text-sm text-blue-600 font-medium hover:underline"
                    >
                      {post.community.name}
                    </Link>
                  </>
                )}
              </div>
              <div className="flex items-center space-x-1 text-xs text-gray-500">
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                <span>•</span>
                <FaGlobeAmericas className="w-3 h-3" />
              </div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100">
            <FaEllipsisH className="w-5 h-5" />
          </button>
        </div>

        {/* Post Title */}
        {post.title && (
          <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2">
            <Link href={`/posts/${post._id}`} className="hover:text-blue-600 hover:underline">
              {post.title}
            </Link>
          </h3>
        )}

        {/* Post Content */}
        <div className="mt-3">
          <div
            className="text-gray-900 prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{
              __html: post.content
            }}
          />
        </div>
      </div>

      {/* Engagement Stats */}
      {((post.upvotes?.length || 0) > 0 || (post.comments?.length || 0) > 0) && (
        <div className="px-4 py-2 border-t border-b border-gray-200 flex justify-between text-sm text-gray-500">
          {(post.upvotes?.length || 0) > 0 && (
            <div className="flex items-center space-x-1">
              <div className="flex -space-x-1">
                <div className="h-4 w-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaThumbsUp className="w-2 h-2 text-blue-500" />
                </div>
              </div>
              <span>{post.upvotes?.length || 0}</span>
            </div>
          )}
          {(post.comments?.length || 0) > 0 && (
            <button
              onClick={() => setShowCommentInput(!showCommentInput)}
              className="hover:underline hover:text-blue-600"
            >
              {post.comments?.length || 0} comments
            </button>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="px-4 py-2">
        <div className="flex justify-between">
          {/* Like Button */}
          <button
            onClick={handleLike}
            className={`flex items-center justify-center space-x-2 flex-1 py-2 rounded-lg transition-colors ${isLiked ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:bg-gray-100'
              }`}
          >
            <FaThumbsUp className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
            <span className="font-medium">Like</span>
          </button>

          {/* Comment Button */}
          <button
            onClick={() => setShowCommentInput(!showCommentInput)}
            className="flex items-center justify-center space-x-2 flex-1 py-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <FaRegComment className="w-5 h-5" />
            <span className="font-medium">Comment</span>
          </button>

          {/* Share Button */}
          <button
            onClick={onShare}
            className="flex items-center justify-center space-x-2 flex-1 py-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <FaRegShareSquare className="w-5 h-5" />
            <span className="font-medium">Share</span>
          </button>
        </div>
      </div>

      {/* Comment Input */}
      {showCommentInput && (
        <div className="px-4 py-3 border-t border-gray-200">
          <div className="flex space-x-3">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {session.user.name?.charAt(0).toUpperCase()}
              </div>
            </div>
            <div className="flex-1">
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder={replyingTo ? "Write your reply..." : "Write a comment..."}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                rows="3"
              />
              <div className="flex justify-between items-center mt-2">
                {replyingTo && (
                  <span className="text-sm text-gray-500">
                    Replying to comment
                  </span>
                )}
                <div className="flex space-x-2">
                  {replyingTo && (
                    <button
                      onClick={() => setReplyingTo(null)}
                      className="text-sm text-gray-500 hover:text-gray-700 px-3 py-1 rounded"
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    onClick={handleSubmitComment}
                    disabled={!commentText.trim()}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
                  >
                    {replyingTo ? 'Reply' : 'Comment'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Comments Preview */}
      {post.comments && post.comments.length > 0 && (
        <div className="px-4 py-3 bg-gray-50 border-t">
          <div className="space-y-3">
            {topLevelComments.slice(0, 2).map((comment) => (
              <Comment
                key={comment._id}
                comment={comment}
                session={session}
                onReply={handleReply}
                onLike={() => handleLikeCommentClick(comment._id)}
                replies={getReplies(comment._id)}
                isLiked={isCommentLiked(comment)}
              />
            ))}
            {post.comments.length > 2 && (
              <Link
                href={`/posts/${post._id}`}
                className="text-sm text-gray-500 hover:text-gray-700 font-medium block"
              >
                View {post.comments.length - 2} more comments
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Comment Component
function Comment({ comment, session, onReply, onLike, replies = [], isLiked }) {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className="flex space-x-3">
      <div className="flex-shrink-0">
        <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
          {comment.author?.name?.charAt(0).toUpperCase() || 'U'}
        </div>
      </div>
      <div className="flex-1">
        <div className="bg-white rounded-2xl px-3 py-2 border">
          <div className="flex items-center space-x-2 mb-1">
            <span className="font-medium text-sm text-gray-900">{comment.author?.name}</span>
            <span className="text-xs text-gray-500">{new Date(comment.createdAt).toLocaleDateString()}</span>
          </div>
          <div
            className="text-sm text-gray-700"
            dangerouslySetInnerHTML={{ __html: comment.content }}
          />
        </div>

        <div className="flex space-x-4 mt-1 text-xs text-gray-500">
          <button
            onClick={onLike}
            className={`hover:underline ${isLiked ? 'text-blue-600 font-medium' : ''}`}
          >
            Like ({comment.likes?.length || 0})
          </button>
          <button
            onClick={() => onReply(comment._id)}
            className="hover:underline"
          >
            Reply
          </button>
        </div>

        {/* Replies */}
        {replies.length > 0 && (
          <div className="mt-2">
            <button
              onClick={() => setShowReplies(!showReplies)}
              className="text-xs text-blue-600 hover:text-blue-700 mb-1"
            >
              {showReplies ? 'Hide' : 'Show'} {replies.length} {replies.length === 1 ? 'reply' : 'replies'}
            </button>

            {showReplies && (
              <div className="space-y-2 mt-1 ml-4 pl-4 border-l-2 border-gray-200">
                {replies.map((reply) => (
                  <div key={reply._id} className="flex space-x-2">
                    <div className="flex-shrink-0">
                      <div className="h-6 w-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                        {reply.author?.name?.charAt(0).toUpperCase() || 'U'}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gray-100 rounded-2xl px-3 py-2">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-xs text-gray-900">{reply.author?.name}</span>
                          <span className="text-xs text-gray-500">{new Date(reply.createdAt).toLocaleDateString()}</span>
                        </div>
                        <div
                          className="text-sm text-gray-700"
                          dangerouslySetInnerHTML={{ __html: reply.content }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}