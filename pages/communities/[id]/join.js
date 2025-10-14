import dbConnect from '../../../lib/dbConnect';
import Community from '../../../models/Community';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]';

export default async function handler(req, res) {
  await dbConnect();

  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { id } = req.query;
    
    const community = await Community.findById(id);
    
    if (!community) {
      return res.status(404).json({ error: 'Community not found' });
    }

    // Check if user is already a member
    if (community.members.includes(session.user.id)) {
      return res.status(400).json({ error: 'Already a member of this community' });
    }

    // Add user to members
    community.members.push(session.user.id);
    await community.save();

    res.status(200).json({ 
      success: true, 
      message: 'Successfully joined community',
      data: community 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}