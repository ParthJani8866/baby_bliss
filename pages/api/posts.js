import dbConnect from '../../lib/dbConnect';
import Post from '../../models/Post';
import Community from '../../models/Community';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';

export default async function handler(req, res) {
  await dbConnect();

  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  switch (req.method) {
    case 'GET':
      try {
        const { communityId } = req.query;
        let query = {};

        if (communityId) {
          query.community = communityId;
        }

        const posts = await Post.find(query)
          .populate('author', 'name email')
          .populate('community', 'name')
          .sort({ createdAt: -1 });

        res.status(200).json({ success: true, data: posts });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'POST':
      try {
        const { title, content, communityId } = req.body;

        // Check if user is member of the community
        const community = await Community.findById(communityId);
        if (!community.members.includes(session.user.id)) {
          return res.status(403).json({ success: false, error: 'You must join the community first' });
        }

        const post = await Post.create({
          title,
          content,
          author: session.user.id,
          community: communityId
        });

        const populatedPost = await Post.findById(post._id)
          .populate('author', 'name email')
          .populate('community', 'name');

        res.status(201).json({ success: true, data: populatedPost });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, error: 'Method not allowed' });
      break;
  }
}