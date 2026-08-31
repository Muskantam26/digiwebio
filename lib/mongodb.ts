import mongoose from "mongoose";

const ATLAS_URI = "mongodb+srv://developermuskan26_db_user:developermuskantam12@cluster0.iy0gzpm.mongodb.net/digiwebio";
const LOCAL_URI = "mongodb://localhost:27017/digiwebio";

// Determine MongoDB connection URI intelligently
const getMongoUri = () => {
  if (process.env.MONGODB_URI) return process.env.MONGODB_URI;
  if (process.env["MONGODB-URL"]) return process.env["MONGODB-URL"];
  if (process.env.MONGODB_URL) return process.env.MONGODB_URL;
  
  // If running on cloud production (e.g. Vercel deployment), localhost won't exist -> use Atlas
  if (process.env.VERCEL || process.env.NODE_ENV === "production") {
    return ATLAS_URI;
  }

  return LOCAL_URI;
};

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose | null> | null;
}

declare global {
  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache || { conn: null, promise: null };

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

export async function connectToDatabase(): Promise<typeof mongoose | null> {
  if (cached.conn) {
    return cached.conn;
  }

  const uri = getMongoUri();

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    };

    cached.promise = mongoose
      .connect(uri, opts)
      .then((mongooseInstance) => {
        console.log(`[MongoDB Connected]: Successfully connected to database.`);
        return mongooseInstance;
      })
      .catch((err) => {
        console.warn(`[MongoDB Warning]: Connection to ${uri} failed: ${err.message}`);
        // If connecting to localhost failed on server, try falling back to Atlas
        if (uri === LOCAL_URI) {
          console.log("[MongoDB Fallback]: Attempting Atlas connection...");
          return mongoose.connect(ATLAS_URI, opts).then((instance) => {
            console.log("[MongoDB Connected]: Connected to Atlas fallback.");
            return instance;
          }).catch((atlasErr) => {
            console.error("[MongoDB Atlas Fallback Failed]:", atlasErr.message);
            cached.promise = null;
            return null;
          });
        }
        cached.promise = null;
        return null;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch {
    cached.promise = null;
    cached.conn = null;
  }

  return cached.conn;
}

export default connectToDatabase;
