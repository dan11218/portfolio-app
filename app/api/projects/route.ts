import { NextResponse } from "next/server";
import projects from "../../project_data.json";

export async function GET() {
  return NextResponse.json({ projects });
}
