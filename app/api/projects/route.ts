import { NextResponse } from "next/server";
import data from "@/app/project_data.json";

export async function GET() {
  return NextResponse.json({
    message: "Projects",
  });
}
