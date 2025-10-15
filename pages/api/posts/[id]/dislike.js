import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]";
import clientPromise from "../../../../lib/dbConnect";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const client = await clientPromise;
    const db = client.db();
    const { id } = req.query;

    // Get the post first
    const post = await db.collection('posts').findOne({ _id: new ObjectId(id) });
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Check if user already downvoted
    const hasDownvoted = post.downvotes && post.downvotes.includes(session.user.id);
    const hasUpvoted = post.upvotes && post.upvotes.includes(session.user.id);

    let updateQuery = {};

    if (hasDownvoted) {
      // Remove downvote
      updateQuery = { 
        $pull: { downvotes: session.user.id } 
      };
    } else {
      // Add downvote and remove upvote if exists
      updateQuery = { 
        $addToSet: { downvotes: session.user.id } 
      };
      if (hasUpvoted) {
        updateQuery.$pull = { ...updateQuery.$pull, upvotes: session.user.id };
      }
    }

    // Update the post
    await db.collection('posts').updateOne(
      { _id: new ObjectId(id) },
      updateQuery
    );

    // Get updated post
    const updatedPost = await db.collection('posts').findOne({ _id: new ObjectId(id) });
    
    res.status(200).json({ 
      success: true, 
      data: updatedPost 
    });
  } catch (error) {
    console.error('Error disliking post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}