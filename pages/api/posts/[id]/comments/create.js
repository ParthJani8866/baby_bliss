import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../auth/[...nextauth]";
import clientPromise from "../../../../../lib/dbConnect";
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
    const { content, parentId } = req.body;

    if (!content || !content.trim()) {
      return res.status(400).json({ error: 'Comment content is required' });
    }

    const newComment = {
      _id: new ObjectId(),
      content: content.trim(),
      author: {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email
      },
      likes: [],
      parentId: parentId ? new ObjectId(parentId) : null,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Add comment to post
    const result = await db.collection('posts').updateOne(
      { _id: new ObjectId(id) },
      { 
        $push: { 
          comments: {
            $each: [newComment],
            $position: 0
          }
        } 
      }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Get updated post
    const updatedPost = await db.collection('posts').findOne({ _id: new ObjectId(id) });
    
    res.status(201).json({ 
      success: true, 
      data: updatedPost 
    });
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}