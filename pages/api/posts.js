import clientPromise from '../../lib/dbConnect';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db();

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
            query.community = new ObjectId(communityId);
          }

          const posts = await db.collection('posts')
            .aggregate([
              { $match: query },
              { $sort: { createdAt: -1 } },
              // Lookup author details
              {
                $lookup: {
                  from: 'users',
                  localField: 'author',
                  foreignField: '_id',
                  as: 'authorDetails'
                }
              },
              {
                $unwind: {
                  path: '$authorDetails',
                  preserveNullAndEmptyArrays: true
                }
              },
              // Lookup community details
              {
                $lookup: {
                  from: 'communities',
                  localField: 'community',
                  foreignField: '_id',
                  as: 'communityDetails'
                }
              },
              {
                $unwind: {
                  path: '$communityDetails',
                  preserveNullAndEmptyArrays: true
                }
              },
              // Project the fields we need
              {
                $project: {
                  title: 1,
                  content: 1,
                  upvotes: 1,
                  downvotes: 1,
                  comments: 1,
                  createdAt: 1,
                  updatedAt: 1,
                  'author.name': '$authorDetails.name',
                  'author.email': '$authorDetails.email',
                  'author._id': '$authorDetails._id',
                  'community.name': '$communityDetails.name',
                  'community._id': '$communityDetails._id'
                }
              }
            ])
            .toArray();
          
          res.status(200).json({ success: true, data: posts });
        } catch (error) {
          res.status(400).json({ success: false, error: error.message });
        }
        break;

      case 'POST':
        try {
          const { title, content, communityId } = req.body;

          if (!title || !content || !communityId) {
            return res.status(400).json({ 
              success: false, 
              error: 'Title, content, and community are required' 
            });
          }

          // Find user
          const user = await db.collection('users')
            .findOne({ email: session.user.email });
          
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }

          // Check if user is member of the community
          const community = await db.collection('communities')
            .findOne({ _id: new ObjectId(communityId) });
          
          if (!community) {
            return res.status(404).json({ error: 'Community not found' });
          }

          const isMember = community.members.some(
            memberId => memberId.toString() === user._id.toString()
          );

          if (!isMember) {
            return res.status(403).json({ 
              success: false, 
              error: 'You must join the community first' 
            });
          }

          const post = {
            title,
            content,
            author: user._id,
            community: new ObjectId(communityId),
            upvotes: [],
            downvotes: [],
            comments: [], // Add empty comments array
            createdAt: new Date(),
            updatedAt: new Date(),
          };

          const result = await db.collection('posts')
            .insertOne(post);

          // Get the created post with populated author and community
          const newPost = await db.collection('posts')
            .aggregate([
              { $match: { _id: result.insertedId } },
              // Lookup author details
              {
                $lookup: {
                  from: 'users',
                  localField: 'author',
                  foreignField: '_id',
                  as: 'authorDetails'
                }
              },
              {
                $unwind: {
                  path: '$authorDetails',
                  preserveNullAndEmptyArrays: true
                }
              },
              // Lookup community details
              {
                $lookup: {
                  from: 'communities',
                  localField: 'community',
                  foreignField: '_id',
                  as: 'communityDetails'
                }
              },
              {
                $unwind: {
                  path: '$communityDetails',
                  preserveNullAndEmptyArrays: true
                }
              },
              // Project the fields we need
              {
                $project: {
                  title: 1,
                  content: 1,
                  upvotes: 1,
                  downvotes: 1,
                  comments: 1,
                  createdAt: 1,
                  updatedAt: 1,
                  'author.name': '$authorDetails.name',
                  'author.email': '$authorDetails.email',
                  'author._id': '$authorDetails._id',
                  'community.name': '$communityDetails.name',
                  'community._id': '$communityDetails._id'
                }
              }
            ])
            .next();

          res.status(201).json({ success: true, data: newPost });
        } catch (error) {
          console.error('Error creating post:', error);
          res.status(400).json({ success: false, error: error.message });
        }
        break;

      default:
        res.status(405).json({ success: false, error: 'Method not allowed' });
        break;
    }
  } catch (error) {
    console.error('Database connection failed:', error);
    res.status(500).json({ success: false, error: 'Database connection failed' });
  }
}