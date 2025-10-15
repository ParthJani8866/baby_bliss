import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../auth/[...nextauth]";
import clientPromise from "../../../../../../lib/dbConnect";
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
    const { id, commentId } = req.query;

    // Get the post first
    const post = await db.collection('posts').findOne({ _id: new ObjectId(id) });
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Find the comment index
    const commentIndex = post.comments?.findIndex(c => c._id.toString() === commentId);
    if (commentIndex === -1 || commentIndex === undefined) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    // Check if user already liked the comment
    const comment = post.comments[commentIndex];
    const hasLiked = comment.likes && comment.likes.includes(session.user.id);

    // Update the comment likes
    const updateOperation = hasLiked 
      ? { $pull: { [`comments.${commentIndex}.likes`]: session.user.id } }
      : { $addToSet: { [`comments.${commentIndex}.likes`]: session.user.id } };

    await db.collection('posts').updateOne(
      { _id: new ObjectId(id) },
      updateOperation
    );

    // Get updated post
    const updatedPost = await db.collection('posts').findOne({ _id: new ObjectId(id) });
    
    res.status(200).json({ 
      success: true, 
      data: updatedPost 
    });
  } catch (error) {
    console.error('Error liking comment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}