import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/mongodb";

export async function GET() {
  try {
    const mongoose = await connectToDb();

    return NextResponse.json({
      success: true,
      message: "Connected to MongoDB!",
      database: mongoose.connection.name,
      status:
        mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to connect to MongoDB" },
      { status: 500 }
    );
  }
}
