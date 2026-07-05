import clientPromise from '../../lib/dbConnect';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db(); // Your database name

    const session = await getServerSession(req, res, authOptions);

    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    switch (req.method) {
      case 'GET':
        try {
          const communities = await db.collection('communities')
            .find({})
            .toArray();

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
          const existingCommunity = await db.collection('communities')
            .findOne({ name: { $regex: new RegExp(`^${name}$`, 'i') } });
          
          if (existingCommunity) {
            return res.status(400).json({ 
              success: false, 
              error: 'Community name already exists' 
            });
          }

          // Find or create user in database
          let user = await db.collection('users')
            .findOne({ email: session.user.email });
          
          if (!user) {
            const insertResult = await db.collection('users')
              .insertOne({
                name: session.user.name,
                email: session.user.email,
                createdAt: new Date(),
              });
            user = { _id: insertResult.insertedId, ...session.user };
          }

          // Create community
          const community = {
            name: name.trim(),
            description: description.trim(),
            rules: rules ? rules.filter(rule => rule.trim() !== '') : [],
            creator: user._id,
            members: [user._id],
            backgroundImage: backgroundImage || {},
            createdAt: new Date(),
          };

          const result = await db.collection('communities')
            .insertOne(community);

          const newCommunity = {
            _id: result.insertedId,
            ...community
          };

          res.status(201).json({ 
            success: true, 
            data: newCommunity 
          });
        } catch (error) {
          console.error('Error creating community:', error);
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
  } catch (error) {
    console.error('Database connection failed:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Database connection failed' 
    });
  }
}