import { getLonelyEmployees } from "@/data/employee";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const employees = await getLonelyEmployees();
    return NextResponse.json(employees);
  } catch (error) {
    console.error("Error fetching employees:", error);
    return NextResponse.json(
      { error: "Failed to fetch employees" },
      { status: 500 },
    );
  }
}
