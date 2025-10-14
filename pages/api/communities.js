import dbConnect from '../../lib/dbConnect';
import Community from '../../models/Community';
import User from '../../models/User';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';
import cloudinary from '../../lib/cloudinary';

export default async function handler(req, res) {
  await dbConnect();

  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  switch (req.method) {
    case 'GET':
      try {
        const communities = await Community.find()
          .populate('creator', 'name email')
          .populate('members', 'name email');
        res.status(200).json({ success: true, data: communities });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'POST':
      try {
        const { name, description, rules, backgroundImage } = req.body;
        
        // Validate input
        if (!name || !description) {
          return res.status(400).json({ 
            success: false, 
            error: 'Name and description are required' 
          });
        }

        // Check if community name already exists
        const existingCommunity = await Community.findOne({ 
          name: { $regex: new RegExp(`^${name}$`, 'i') } 
        });
        
        if (existingCommunity) {
          return res.status(400).json({ 
            success: false, 
            error: 'Community name already exists' 
          });
        }

        // Find or create user in database
        let user = await User.findOne({ email: session.user.email });
        
        if (!user) {
          user = await User.create({
            name: session.user.name,
            email: session.user.email,
          });
        }

        // Create community with background image
        const community = await Community.create({
          name: name.trim(),
          description: description.trim(),
          rules: rules ? rules.filter(rule => rule.trim() !== '') : [],
          creator: user._id,
          members: [user._id],
          backgroundImage: backgroundImage || {}
        });

        // Populate the created community
        const populatedCommunity = await Community.findById(community._id)
          .populate('creator', 'name email')
          .populate('members', 'name email');

        res.status(201).json({ 
          success: true, 
          data: populatedCommunity 
        });
      } catch (error) {
        console.error('Error creating community:', error);
        
        if (error.name === 'ValidationError') {
          const errors = Object.values(error.errors).map(err => err.message);
          return res.status(400).json({ 
            success: false, 
            error: errors.join(', ') 
          });
        }
        
        if (error.code === 11000) {
          return res.status(400).json({ 
            success: false, 
            error: 'Community name already exists' 
          });
        }
        
        res.status(500).json({ 
          success: false, 
          error: 'Internal server error' 
        });
      }
      break;

    default:
      res.status(405).json({ success: false, error: 'Method not allowed' });
      break;
  }
}