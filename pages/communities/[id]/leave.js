import dbConnect from '../../../lib/dbConnect';
import Community from '../../../pages/models/Community';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  await dbConnect();

  const session = await getSession({ req });

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

    // Check if user is a member
    if (!community.members.includes(session.user.id)) {
      return res.status(400).json({ error: 'Not a member of this community' });
    }

    // Remove user from members (cannot remove creator)
    if (community.creator.toString() === session.user.id) {
      return res.status(400).json({ error: 'Creator cannot leave the community' });
    }

    community.members = community.members.filter(
      memberId => memberId.toString() !== session.user.id
    );
    await community.save();

    res.status(200).json({ 
      success: true, 
      message: 'Successfully left community',
      data: community 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}