import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { default: clientPromise } = await import('../../../../lib/dbConnect');
        const { ObjectId } = await import('mongodb');

        const client = await clientPromise;
        const db = client.db();
        console.log('API Route: Started membership check');

        const session = await getServerSession(req, res, authOptions);

        if (!session) {
            console.log('API Route: No session found');
            return res.status(200).json({ isMember: false });
        }

        const { id } = req.query;
        const userEmail = session.user.email;

        if (!userEmail) {
            console.log('API Route: No user email in session');
            return res.status(200).json({ isMember: false });
        }

        // Get community
        const community = await db.collection('communities')
            .findOne({ _id: new ObjectId(id) });

        if (!community || !community.members) {
            console.log('API Route: Community not found or no members');
            return res.status(200).json({ isMember: false });
        }

        // Get current user
        const currentUser = await db.collection('users')
            .findOne({ email: userEmail });

        if (!currentUser) {
            console.log('API Route: Current user not found in database');
            return res.status(200).json({ isMember: false });
        }

        console.log('API Route: Checking membership for:', currentUser.email);
        console.log('API Route: Community members count:', community.members.length);

        // FIXED: Use for...of loop instead of .some() for async operations
        let isMember = false;
        
        for (const member of community.members) {
            try {
                console.log('API Route: Checking member:', member);
                
                // If member is stored as user object with email
                if (typeof member === 'object' && member.email) {
                    console.log('API Route: Member has email:', member.email);
                    if (member.email === currentUser.email) {
                        console.log('API Route: Email match found!');
                        isMember = true;
                        break;
                    }
                } else {
                    // If member is stored as user ID
                    const memberIdStr = member?.toString();
                    console.log('API Route: Member ID string:', memberIdStr);
                    
                    const memberObjectId = new ObjectId(memberIdStr);
                    const memberUser = await db.collection('users')
                        .findOne({ _id: memberObjectId });
                    
                    if (memberUser) {
                        console.log('API Route: Found member user email:', memberUser.email);
                        if (memberUser.email === currentUser.email) {
                            console.log('API Route: Email match found via ID lookup!');
                            isMember = true;
                            break;
                        }
                    } else {
                        console.log('API Route: Member user not found for ID:', memberIdStr);
                    }
                }
            } catch (error) {
                console.error('API Route: Error checking member:', error);
                // Continue to next member
            }
        }

        console.log('API Route: Final membership result:', isMember);
        res.status(200).json({ isMember });
    } catch (error) {
        console.error('API Route: Error checking membership:', error);
        res.status(200).json({ isMember: false });
    }
}