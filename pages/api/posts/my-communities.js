import { getSession } from 'next-auth/react';
import clientPromise from '../../../lib/dbConnect';

export default async function handler(req, res) {
  const session = await getSession({ req });
  
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const client = await clientPromise;
    const db = client.db();
    const { ObjectId } = await import('mongodb');

    // Simple test - get all posts and all communities first
    const allPosts = await db.collection('posts').find({}).limit(10).toArray();
    const allCommunities = await db.collection('communities').find({}).limit(10).toArray();

    // Get user's communities (simplified approach)
    const userCommunities = await db.collection('communities')
      .find({})
      .toArray();

    // For testing, let's just get some posts
    const posts = await db.collection('posts')
      .find({})
      .sort({ createdAt: -1 })
      .limit(20)
      .toArray();

    // Add author and community info manually
    const postsWithDetails = await Promise.all(
      posts.map(async (post) => {
        const author = await db.collection('users').findOne({ _id: new ObjectId(post.author) });
        const community = await db.collection('communities').findOne({ _id: new ObjectId(post.community) });
        
        return {
          ...post,
          author: author ? { name: author.name, email: author.email, _id: author._id } : null,
          community: community ? { name: community.name, _id: community._id } : null
        };
      })
    );

    res.status(200).json({
      posts: postsWithDetails,
      communities: userCommunities,
      debug: {
        totalPosts: allPosts.length,
        totalCommunities: allCommunities.length,
        userCommunitiesCount: userCommunities.length,
        returnedPostsCount: postsWithDetails.length
      }
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ 
      error: 'Failed to fetch posts',
      details: error.message 
    });
  }
}