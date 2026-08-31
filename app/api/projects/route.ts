import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Project from "@/models/Project";
import { PROJECTS_DATA } from "@/data/initialData";

export async function GET() {
  try {
    const mongooseConn = await connectToDatabase();
    if (mongooseConn) {
      // Auto-seed initial projects into MongoDB if database is empty
      const count = await Project.countDocuments({});
      if (count === 0 && PROJECTS_DATA.length > 0) {
        console.log("[MongoDB Seed]: Seeding initial projects into database...");
        await Project.insertMany(
          PROJECTS_DATA.map((p, index) => ({
            ...p,
            order: index + 1,
          }))
        );
      }

      const dbProjects = await Project.find({}).sort({ order: 1, createdAt: -1 });
      return NextResponse.json({ success: true, projects: dbProjects });
    }

    return NextResponse.json({ success: true, projects: PROJECTS_DATA });
  } catch (error) {
    console.error("Fetch projects error:", error);
    return NextResponse.json({ success: true, projects: PROJECTS_DATA });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const mongooseConn = await connectToDatabase();

    if (!body.title || !body.category || !body.summary || !body.description) {
      return NextResponse.json(
        { success: false, error: "Title, category, summary, and description are required" },
        { status: 400 }
      );
    }

    const slug = body.slug || body.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

    if (mongooseConn) {
      const newProject = await Project.create({
        slug,
        title: body.title,
        client: body.client || "DigiWebIO Client",
        category: body.category,
        summary: body.summary,
        description: body.description,
        coverImage: body.coverImage || "/images/project-royalcrest.jpg",
        images: body.images || [body.coverImage || "/images/project-royalcrest.jpg"],
        technologies: body.technologies || ["Next.js", "TypeScript", "TailwindCSS"],
        challenge: body.challenge || "Building scalable, high-performance web application.",
        solution: body.solution || "Architected modern frontend and robust API infrastructure.",
        results: body.results || ["100% Core Web Vitals", "Fast page loads"],
        liveUrl: body.liveUrl || "",
        featured: body.featured ?? true,
        order: body.order || 0,
      });

      return NextResponse.json({ success: true, project: newProject }, { status: 201 });
    }

    return NextResponse.json(
      { success: false, error: "Database connection failed" },
      { status: 500 }
    );
  } catch (error) {
    console.error("Create project error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save project to database" },
      { status: 500 }
    );
  }
}
