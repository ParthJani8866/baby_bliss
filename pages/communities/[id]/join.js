import clientPromise from '../../../lib/dbConnect';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db();

    const session = await getServerSession(req, res, authOptions);

    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const { id } = req.query;

    try {
      // Find user
      const user = await db.collection('users')
        .findOne({ email: session.user.email });
      
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Find community
      const community = await db.collection('communities')
        .findOne({ _id: new ObjectId(id) });
      
      if (!community) {
        return res.status(404).json({ error: 'Community not found' });
      }

      // Check if user is already a member
      const isMember = community.members.some(
        memberId => memberId.toString() === user._id.toString()
      );
      
      if (isMember) {
        return res.status(400).json({ error: 'Already a member of this community' });
      }

      // Add user to members
      await db.collection('communities')
        .updateOne(
          { _id: new ObjectId(id) },
          { $push: { members: user._id } }
        );

      // Get updated community
      const updatedCommunity = await db.collection('communities')
        .findOne({ _id: new ObjectId(id) });

      res.status(200).json({ 
        success: true, 
        message: 'Successfully joined community',
        data: updatedCommunity 
      });
    } catch (error) {
      console.error('Error joining community:', error);
      res.status(500).json({ error: error.message });
    }
  } catch (error) {
    console.error('Database connection failed:', error);
    res.status(500).json({ error: 'Database connection failed' });
  }
}