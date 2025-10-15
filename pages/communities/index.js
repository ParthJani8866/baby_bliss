import { useState, useEffect } from 'react';
import { useSession, getSession } from 'next-auth/react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from "../components/Header";

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
        setError('Unable to load communities');
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
      router.push('/auth/signin');
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

  return (
    <>
      <Head>
        <title>Communities | CommunityApp</title>
        <meta name="description" content="Browse all communities" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          {/* Search and Filter Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search communities by name or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white/50 backdrop-blur-sm transition-all duration-200"
                  />
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 items-center">
                <div className="flex items-center gap-2 bg-white/50 rounded-lg px-3 py-2 border border-gray-200">
                  <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                  </svg>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent border-none focus:ring-0 text-sm text-gray-700"
                  >
                    <option value="name">Name</option>
                    <option value="members">Most Members</option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                  </select>
                </div>
                
                {session ? (
                  <Link
                    href="/communities/create"
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-xl font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Create Community
                  </Link>
                ) : (
                  <button
                    onClick={() => router.push('/auth/signin')}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-xl font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
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
                <svg className="h-5 w-5 text-red-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-red-800">{error}</span>
              </div>
            </div>
          )}

          {/* Communities Grid */}
          {filteredAndSortedCommunities.length === 0 ? (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No communities found</h3>
              <p className="text-gray-600 mb-6 max-w-sm mx-auto">
                {searchTerm ? 'Try adjusting your search terms to find what you\'re looking for.' : 'Be the first to create a community and start building together!'}
              </p>
              {!searchTerm && session && (
                <Link
                  href="/communities/create"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
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
              <div className="inline-flex items-center gap-6 bg-white/80 backdrop-blur-sm rounded-xl px-6 py-4 shadow-sm border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{communities.length}</div>
                  <div className="text-sm text-gray-600">Total Communities</div>
                </div>
                <div className="h-8 w-px bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{filteredAndSortedCommunities.length}</div>
                  <div className="text-sm text-gray-600">Showing</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// Enhanced Community Card with Icon-based Interactions
function CommunityCard({ community, session, onJoin, onLeave, isMember }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-200/50 transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header with Gradient Background */}
      <div className="relative h-28 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300">
        {community.backgroundImage?.url ? (
          <img
            src={community.backgroundImage.url}
            alt={`${community.name} background`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-xl">b/</span>
            </div>
          </div>
        )}
        
        {/* Member Status Badge */}
        <div className="absolute top-3 right-3">
          {isMember ? (
            <div className="flex items-center gap-1 bg-green-500/20 backdrop-blur-sm text-green-700 px-2 py-1 rounded-full text-xs font-medium border border-green-500/30">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Member
            </div>
          ) : (
            <div className="bg-gray-500/20 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-medium border border-gray-500/30">
              Public
            </div>
          )}
        </div>
      </div>

      <div className="p-5">
        {/* Community Info */}
        <div className="mb-4">
          <Link 
            href={`/communities/${community._id}`}
            className="hover:no-underline block"
          >
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2 flex items-center gap-2">
              <span className="text-blue-500">b/</span>
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
            <div className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>{community.members?.length || 0}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{new Date(community.createdAt).toLocaleDateString('en-US', { month: 'short', 'year': 'numeric' })}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons - Icon Based */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <Link
            href={`/communities/${community._id}`}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 group/visit"
          >
            <div className="w-10 h-10 bg-gray-100 group-hover/visit:bg-blue-100 rounded-xl flex items-center justify-center transition-colors duration-200">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <span className="text-sm font-medium">Visit</span>
          </Link>
          
          {session ? (
            isMember ? (
              <button
                onClick={() => onLeave(community._id)}
                className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors duration-200 group/leave"
                title="Leave Community"
              >
                <div className="w-10 h-10 bg-red-50 group-hover/leave:bg-red-100 rounded-xl flex items-center justify-center transition-colors duration-200">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Leave</span>
              </button>
            ) : (
              <button
                onClick={() => onJoin(community._id)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200 group/join"
                title="Join Community"
              >
                <div className="w-10 h-10 bg-blue-50 group-hover/join:bg-blue-100 rounded-xl flex items-center justify-center transition-colors duration-200">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Join</span>
              </button>
            )
          ) : (
            <button
              onClick={() => onJoin(community._id)}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 group/signin"
              title="Sign in to Join"
            >
              <div className="w-10 h-10 bg-gray-100 group-hover/signin:bg-blue-100 rounded-xl flex items-center justify-center transition-colors duration-200">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="text-sm font-medium">Sign In</span>
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