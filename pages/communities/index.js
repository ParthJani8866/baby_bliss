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

  // Client-side data fetching for real-time updates
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
        // If unauthorized, try to fetch without auth (public access)
        await fetchPublicCommunities();
      } else {
        setError('Failed to fetch communities');
      }
    } catch (error) {
      console.error('Error fetching communities:', error);
      // Try public access if authenticated fetch fails
      await fetchPublicCommunities();
    } finally {
      setLoading(false);
    }
  };

  // Fallback function to fetch communities without authentication
  const fetchPublicCommunities = async () => {
    try {
      // Create a public API route or modify existing one to handle public access
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

  // Filter and sort communities
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
        // Refresh the communities list
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

  // Show loading state
  if (loading && communities.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading communities...</div>
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

      <div className="min-h-screen bg-gray-50">
        <Header></Header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          {/* Search and Filter Bar */}
          <div className="bg-white rounded-lg shadow p-6 mb-8" >
            <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search communities..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="name">Sort by Name</option>
                  <option value="members">Sort by Members</option>
                  <option value="newest">Sort by Newest</option>
                  <option value="oldest">Sort by Oldest</option>
                </select>
                
                {session ? (
                  <Link
                    href="/communities/create"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Create Community
                  </Link>
                ) : (
                  <button
                    onClick={() => router.push('/auth/signin')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Sign in to Create
                  </button>
                )}
              </div>
            </div>
          </div>

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

          {/* Communities Grid */}
          {filteredAndSortedCommunities.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">No communities found</h3>
              <p className="mt-2 text-gray-500">
                {searchTerm ? 'Try adjusting your search terms.' : 'Be the first to create a community!'}
              </p>
              {!searchTerm && session && (
                <Link
                  href="/communities/create"
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Create Community
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

          {/* Stats */}
          {communities.length > 0 && (
            <div className="mt-8 text-center text-gray-500 text-sm">
              Showing {filteredAndSortedCommunities.length} of {communities.length} communities
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// Separate component for community card
function CommunityCard({ community, session, onJoin, onLeave, isMember }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-100">
      {/* Image Header */}
      <div className="relative h-24 bg-gradient-to-br from-blue-400 to-purple-500">
        {community.backgroundImage?.url ? (
          <img
            src={community.backgroundImage.url}
            alt={`${community.name} background`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500">
            <span className="text-white text-xl font-bold">r/</span>
          </div>
        )}
        {/* Community Avatar Overlay */}
        <div className="absolute -bottom-4 left-4 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md border">
          <span className="text-blue-600 font-bold text-sm">r/</span>
        </div>
      </div>

      <div className="pt-6 pb-4 px-4">
        {/* Community Info */}
        <div className="mb-3">
          <Link 
            href={`/communities/${community._id}`}
            className="hover:no-underline"
          >
            <h3 className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors line-clamp-1">
              r/{community.name}
            </h3>
          </Link>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">
            {community.description}
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <span>👥 {community.members?.length || 0} members</span>
          <span>📅 {new Date(community.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Link
            href={`/communities/${community._id}`}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-2 rounded text-sm font-medium text-center transition-colors"
          >
            Visit
          </Link>
          
          {session && (
            isMember ? (
              <button
                onClick={() => onLeave(community._id)}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors"
              >
                Leave
              </button>
            ) : (
              <button
                onClick={() => onJoin(community._id)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors"
              >
                Join
              </button>
            )
          )}
        </div>

        {!session && (
          <button
            onClick={() => onJoin(community._id)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors mt-2"
          >
            Sign in to Join
          </button>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  
  try {
    // Import MongoDB only on server-side
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