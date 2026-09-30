import connectToDatabase from "@/lib/mongodb";
import Blog from "@/models/Blog";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  await connectToDatabase();
  const blog = await Blog.findOne({ slug: params.slug, published: true });
  
  if (!blog) return { title: "Blog Not Found" };
  
  return {
    title: `${blog.title} | Green Energy Solutions Blog`,
    description: blog.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  await connectToDatabase();
  const blog = await Blog.findOne({ slug: params.slug, published: true });

  if (!blog) return notFound();

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition font-medium text-sm">
            <ArrowLeft className="h-4 w-4" /> Back to all articles
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-brand-text mb-6 leading-tight">
            {blog.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              {new Date(blog.createdAt).toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                {blog.author.charAt(0)}
              </div>
              <span>By {blog.author}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full aspect-[21/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-md mb-12">
          {blog.image ? (
            <Image 
              src={blog.image} 
              alt={blog.title} 
              fill 
              className="object-cover" 
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
              No Featured Image
            </div>
          )}
        </div>

        {/* Article Body */}
        <article className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 mb-12">
          {/* Note: In a real production app with Markdown, you would use a package like react-markdown here */}
          <div className="prose prose-lg prose-green max-w-none text-gray-700" 
               dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br />') }} />
        </article>
        
      </div>
    </div>
  );
}
