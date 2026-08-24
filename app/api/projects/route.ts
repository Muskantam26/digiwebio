import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Project from "@/models/Project";
import { PROJECTS_DATA } from "@/data/initialData";

export async function GET() {
  try {
    const mongooseConn = await connectToDatabase();
    if (mongooseConn) {
      const dbProjects = await Project.find({}).sort({ order: 1, createdAt: -1 });
      if (dbProjects && dbProjects.length > 0) {
        return NextResponse.json({ success: true, projects: dbProjects });
      }
    }
    return NextResponse.json({ success: true, projects: PROJECTS_DATA });
  } catch (error) {
    console.error("Fetch projects error:", error);
    return NextResponse.json({ success: true, projects: PROJECTS_DATA });
  }
}
