import { notFound } from "next/navigation";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import SetupClient from "./SetupClient";

export const metadata = {
  title: "Setup | Green Energy Solutions",
};

export default async function SetupPage() {
  await connectToDatabase();
  
  const existingUsers = await User.countDocuments();
  
  if (existingUsers > 0) {
    // If an admin already exists, this route effectively doesn't exist
    notFound();
  }

  return <SetupClient />;
}
