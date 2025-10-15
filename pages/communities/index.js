import { useState, useEffect } from 'react';
import { useSession, getSession, signIn } from 'next-auth/react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from "../components/Header";
import {
  FaSearch,
  FaFilter,
  FaUsers,
  FaCalendarAlt,
  FaPlus,
  FaSignInAlt,
  FaEye,
  FaSignOutAlt,
  FaUserPlus,
  FaUserCheck,
  FaExclamationTriangle,
  FaHome,
  FaComments,
  FaUserFriends,
  FaChartLine,
  FaClock,
  FaSort,
  FaSortAmountDown,
  FaSortAmountUp,
  FaSeedling,
  FaHeart,
  FaBaby,
  FaHandHoldingHeart
} from 'react-icons/fa';

export default function CommunitiesList({ initialCommunities }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [communities, setCommunities] = useState(initialCommunities || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    fetchCommunities();
  }, []);

  const fetchCommunities = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/communities');

      if (response.ok) {
        const data = await response.json();
        setCommunities(data.data);
      } else if (response.status === 401) {
        await fetchPublicCommunities();
      } else {
        setError('Failed to fetch communities');
      }
    } catch (error) {
      console.error('Error fetching communities:', error);
      await fetchPublicCommunities();
    } finally {
      setLoading(false);
    }
  };

  const fetchPublicCommunities = async () => {
    try {
      const response = await fetch('/api/communities/public');
      if (response.ok) {
        const data = await response.json();
        setCommunities(data.data);
      } else {
        //setError('Unable to load communities');
      }
    } catch (error) {
      setError('Error loading communities');
    }
  };

  const filteredAndSortedCommunities = communities
    .filter(community =>
      community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      community.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'members':
          return b.members.length - a.members.length;
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'oldest':
          return new Date(a.createdAt) - new Date(b.createdAt);
        default:
          return 0;
      }
    });

  const joinCommunity = async (communityId) => {
    if (!session) {
      signIn("google");
      return;
    }

    try {
      const response = await fetch(`/api/communities/${communityId}/join`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        fetchCommunities();
      } else if (response.status === 401) {
        router.push('/auth');
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Failed to join community');
      }
    } catch (error) {
      alert('Error joining community');
    }
  };

  const leaveCommunity = async (communityId) => {
    try {
      const response = await fetch(`/api/communities/${communityId}/leave`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        fetchCommunities();
      } else if (response.status === 401) {
        router.push('/auth/signin');
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Failed to leave community');
      }
    } catch (error) {
      alert('Error leaving community');
    }
  };

  const isMember = (community) => {
    if (!session) return false;
    return community.members.some(member =>
      typeof member === 'object' ? member._id === session.user.id : member === session.user.id
    );
  };

  if (loading && communities.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50/30 py-8">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

  return (
    <>
      <Head>
        <title>Parenting Communities | Belly Buds</title>
        <meta name="description" content="Connect with other parents in our supportive communities. Share experiences, get advice, and build lasting friendships." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50/30">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <FaComments className="w-10 h-10 text-teal-600" />
              Parenting Communities
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with fellow parents, share experiences, and find support in our welcoming communities
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-teal-100 p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search parenting communities..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 bg-white/50 backdrop-blur-sm transition-all duration-200"
                  />
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
                    <FaSearch className="h-5 w-5 text-teal-400" />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div className="flex items-center gap-2 bg-white/50 rounded-lg px-3 py-2 border border-teal-200">
                  <FaFilter className="h-4 w-4 text-teal-500" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent border-none focus:ring-0 text-sm text-gray-700"
                  >
                    <option value="name">Sort by Name</option>
                    <option value="members">Most Members</option>
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                  </select>
                </div>

                {session ? (
                  <Link
                    href="/communities/create"
                    className="flex items-center gap-3 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaPlus className="w-5 h-5" />
                    Create Community
                  </Link>
                ) : (
                  <button
                    onClick={() => signIn("google")}
                    className="flex items-center gap-3 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaSignInAlt className="w-5 h-5" />
                    Sign in to Create
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50/80 backdrop-blur-sm border border-red-200 rounded-xl p-4 mb-6">
              <div className="flex items-center">
                <FaExclamationTriangle className="h-5 w-5 text-red-400 mr-3" />
                <span className="text-red-800">{error}</span>
              </div>
            </div>
          )}

          {/* Communities Grid */}
          {filteredAndSortedCommunities.length === 0 ? (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-teal-100 p-12 text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full flex items-center justify-center">
                <FaUserFriends className="w-10 h-10 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No communities found</h3>
              <p className="text-gray-600 mb-6 max-w-sm mx-auto">
                {searchTerm ? 'Try adjusting your search terms to find what you\'re looking for.' : 'Be the first to create a community and start building together!'}
              </p>
              {!searchTerm && session && (
                <Link
                  href="/communities/create"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <FaPlus className="w-5 h-5" />
                  Create First Community
                </Link>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedCommunities.map((community) => (
                <CommunityCard
                  key={community._id}
                  community={community}
                  session={session}
                  onJoin={joinCommunity}
                  onLeave={leaveCommunity}
                  isMember={isMember(community)}
                />
              ))}
            </div>
          )}

          {/* Stats Footer */}
          {communities.length > 0 && (
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-6 bg-white/80 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg border border-teal-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">{communities.length}</div>
                  <div className="text-sm text-gray-600">Total Communities</div>
                </div>
                <div className="h-8 w-px bg-teal-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{filteredAndSortedCommunities.length}</div>
                  <div className="text-sm text-gray-600">Showing</div>
                </div>
                <div className="h-8 w-px bg-teal-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {communities.reduce((total, comm) => total + (comm.members?.length || 0), 0)}
                  </div>
                  <div className="text-sm text-gray-600">Total Members</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// Enhanced Community Card with Professional Design
function CommunityCard({ community, session, onJoin, onLeave, isMember }) {
  const [isHovered, setIsHovered] = useState(false);

  const getCommunityIcon = (communityName) => {
    const name = communityName.toLowerCase();
    if (name.includes('pregnancy') || name.includes('expecting')) return <FaHeart className="w-6 h-6" />;
    if (name.includes('baby') || name.includes('newborn')) return <FaBaby className="w-6 h-6" />;
    if (name.includes('parent') || name.includes('mother')) return <FaHandHoldingHeart className="w-6 h-6" />;
    if (name.includes('support') || name.includes('help')) return <FaUserFriends className="w-6 h-6" />;
    return <FaComments className="w-6 h-6" />;
  };

  return (
    <div
      className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-teal-100 hover:border-teal-200 transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header with Gradient Background */}
      <div className="relative h-32 bg-gradient-to-br from-teal-500/20 to-blue-500/20 group-hover:from-teal-500/30 group-hover:to-blue-500/30 transition-all duration-300">
        {community.backgroundImage?.url ? (
          <img
            src={community.backgroundImage.url}
            alt={`${community.name} background`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl">
                {getCommunityIcon(community.name)}
              </span>
            </div>
          </div>
        )}

        {/* Member Status Badge */}
        <div className="absolute top-3 right-3">
          {isMember ? (
            <div className="flex items-center gap-2 bg-green-500/20 backdrop-blur-sm text-green-700 px-3 py-1.5 rounded-full text-xs font-semibold border border-green-500/30">
              <FaUserCheck className="h-3 w-3" />
              Member
            </div>
          ) : (
            <div className="flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm text-teal-700 px-3 py-1.5 rounded-full text-xs font-semibold border border-teal-500/30">
              <FaUsers className="h-3 w-3" />
              Public
            </div>
          )}
        </div>
      </div>

      <div className="p-6">
        {/* Community Info */}
        <div className="mb-4">
          <Link
            href={`/communities/${community._id}`}
            className="hover:no-underline block"
          >
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-200 mb-2 flex items-center gap-3">
              <span className="text-teal-500">#</span>
              {community.name}
            </h3>
          </Link>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {community.description}
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FaUsers className="h-4 w-4 text-teal-500" />
              <span className="font-medium">{community.members?.length || 0} members</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="h-4 w-4 text-blue-500" />
              <span>{new Date(community.createdAt).toLocaleDateString('en-US', { month: 'short', 'year': 'numeric' })}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-teal-100">
          <Link
            href={`/communities/${community._id}`}
            className="flex items-center gap-3 text-gray-600 hover:text-teal-600 transition-colors duration-200 group/visit"
          >
            <div className="w-12 h-12 bg-teal-50 group-hover/visit:bg-teal-100 rounded-xl flex items-center justify-center transition-colors duration-200">
              <FaEye className="h-5 w-5" />
            </div>
            <span className="text-sm font-semibold">Visit</span>
          </Link>

          {session ? (
            isMember ? (
              <button
                onClick={() => onLeave(community._id)}
                className="flex items-center gap-3 text-red-600 hover:text-red-700 transition-colors duration-200 group/leave"
                title="Leave Community"
              >
                <div className="w-12 h-12 bg-red-50 group-hover/leave:bg-red-100 rounded-xl flex items-center justify-center transition-colors duration-200">
                  <FaSignOutAlt className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold">Leave</span>
              </button>
            ) : (
              <button
                onClick={() => onJoin(community._id)}
                className="flex items-center gap-3 text-teal-600 hover:text-teal-700 transition-colors duration-200 group/join"
                title="Join Community"
              >
                <div className="w-12 h-12 bg-teal-50 group-hover/join:bg-teal-100 rounded-xl flex items-center justify-center transition-colors duration-200">
                  <FaUserPlus className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold">Join</span>
              </button>
            )
          ) : (
            <button
              onClick={() => onJoin(community._id)}
              className="flex items-center gap-3 text-gray-600 hover:text-teal-600 transition-colors duration-200 group/signin"
              title="Sign in to Join"
            >
              <div className="w-12 h-12 bg-gray-100 group-hover/signin:bg-teal-100 rounded-xl flex items-center justify-center transition-colors duration-200">
                <FaSignInAlt className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold">Sign In</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  try {
    const { default: clientPromise } = await import('../../lib/dbConnect');
    const client = await clientPromise;
    const db = client.db();

    let communities = [];

    try {
      communities = await db.collection('communities')
        .find({})
        .toArray();
    } catch (error) {
      console.error('Error fetching communities:', error);
    }

    return {
      props: {
        session,
        initialCommunities: JSON.parse(JSON.stringify(communities)),
      },
    };
  } catch (error) {
    console.error('Database connection failed:', error);
    return {
      props: {
        session,
        initialCommunities: [],
      },
    };
  }
}