import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Users, FolderKanban, Settings, FileText, HelpCircle, Star } from "lucide-react";
import LogoutButton from "../LogoutButton";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-100 flex items-center justify-center">
          <h2 className="text-xl font-bold text-primary">Admin Portal</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <Link href="/admin/overview" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition font-medium">
            <LayoutDashboard className="h-5 w-5" /> Overview
          </Link>
          <Link href="/admin/consultations" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition font-medium">
            <Users className="h-5 w-5" /> Consultations
          </Link>
          <Link href="/admin/contacts" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition font-medium">
            <Users className="h-5 w-5" /> Contacts
          </Link>
          <Link href="/admin/projects" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition font-medium">
            <FolderKanban className="h-5 w-5" /> Projects
          </Link>
          <Link href="/admin/blogs" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition font-medium">
            <FileText className="h-5 w-5" /> Blogs
          </Link>
          <Link href="/admin/faqs" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition font-medium">
            <HelpCircle className="h-5 w-5" /> FAQs
          </Link>
          <Link href="/admin/testimonials" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition font-medium">
            <Star className="h-5 w-5" /> Testimonials
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition font-medium">
            <Settings className="h-5 w-5" /> Site Settings
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-100">
          <LogoutButton />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <header className="bg-white p-6 shadow-sm flex justify-between items-center">
          <h1 className="text-xl font-bold text-brand-text">Green Energy Solutions</h1>
          <div className="text-sm text-muted">Welcome, {session.user?.name}</div>
        </header>
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
