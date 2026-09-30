import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json({ error: "Username and password required" }, { status: 400 });
    }

    await connectToDatabase();

    const existingUsers = await User.countDocuments();
    if (existingUsers > 0) {
      return NextResponse.json({ error: "Admin already exists. Setup is locked." }, { status: 400 });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      passwordHash,
      role: "admin",
    });

    return NextResponse.json({ message: "Admin user created successfully" }, { status: 201 });
  } catch (error: any) {
    console.error("Setup error:", error);
    return NextResponse.json({ error: "Failed to create admin" }, { status: 500 });
  }
}
