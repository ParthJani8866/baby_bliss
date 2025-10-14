import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      // Disable SSL for local development
      ssl: false,
      sslValidate: false,
      // Add connection options to prevent SSL issues
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts)
      .then((mongoose) => {
        console.log('MongoDB connected successfully');
        return mongoose;
      })
      .catch((error) => {
        console.error('MongoDB connection error:', error);
        throw error;
      });
  }

  try {
    cached.conn = await cached.promise;
    
    // Import models to ensure they're registered
    await import('../models/User');
    await import('../models/Community');
    await import('../models/Post');
    await import('../models/Comment');
    
  } catch (e) {
    cached.promise = null;
    console.error('Database connection failed:', e);
    throw e;
  }

  return cached.conn;
}

export default dbConnect;