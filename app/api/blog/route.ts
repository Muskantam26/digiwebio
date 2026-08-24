import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import { BLOG_POSTS_DATA } from "@/data/initialData";

export async function GET() {
  try {
    const mongooseConn = await connectToDatabase();
    if (mongooseConn) {
      const dbPosts = await BlogPost.find({}).sort({ publishedAt: -1 });
      if (dbPosts && dbPosts.length > 0) {
        return NextResponse.json({ success: true, posts: dbPosts });
      }
    }
    return NextResponse.json({ success: true, posts: BLOG_POSTS_DATA });
  } catch (error) {
    console.error("Fetch blog posts error:", error);
    return NextResponse.json({ success: true, posts: BLOG_POSTS_DATA });
  }
}
