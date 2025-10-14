import { getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';
import cloudinary from '../../lib/cloudinary';
import multer from 'multer';
import path from 'path';

// Configure multer for file upload
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  },
});

// Disable body parser for file upload
export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper to run middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Run multer middleware
    await runMiddleware(req, res, upload.single('image'));

    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Convert buffer to base64
    const b64 = Buffer.from(req.file.buffer).toString('base64');
    const dataURI = `data:${req.file.mimetype};base64,${b64}`;

    // Upload to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(dataURI, {
      folder: 'community-backgrounds',
      transformation: [
        { width: 1920, height: 1080, crop: 'limit', quality: 'auto' }
      ]
    });

    res.status(200).json({
      success: true,
      imageUrl: uploadResponse.secure_url,
      publicId: uploadResponse.public_id,
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: error.message || 'Upload failed' });
  }
}