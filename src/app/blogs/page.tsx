import connectToDatabase from "@/lib/mongodb";
import Blog from "@/models/Blog";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export const metadata = {
  title: "Blog | Green Energy Solutions",
  description: "Read the latest news, insights, and updates about solar energy and sustainable solutions from Green Energy Solutions.",
};

export default async function BlogsPage() {
  await connectToDatabase();
  // Fetch only published blogs, sorted by newest first
  const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 });

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-4">
              Our <span className="text-primary">Blog</span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest insights, project highlights, and news from the solar and green energy industry.
            </p>
          </FadeIn>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            <p className="text-xl">No articles published yet.</p>
            <p className="mt-2">Check back soon for updates!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <FadeIn key={blog._id.toString()} direction="up" delay={(index % 3) * 0.1}>
                <article className="h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition group border border-gray-100 flex flex-col">
                  <Link href={`/blogs/${blog.slug}`} className="block relative h-64 overflow-hidden">
                    {blog.image ? (
                      <Image 
                        src={blog.image} 
                        alt={blog.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition duration-500" 
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                        No Image
                      </div>
                    )}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary">
                      Article
                    </div>
                  </Link>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(blog.createdAt).toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5" />
                        {blog.author}
                      </div>
                    </div>
                    
                    <Link href={`/blogs/${blog.slug}`} className="block mb-3">
                      <h2 className="text-xl font-bold text-brand-text group-hover:text-primary transition line-clamp-2">
                        {blog.title}
                      </h2>
                    </Link>
                    
                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                      {blog.excerpt}
                    </p>
                    
                    <Link 
                      href={`/blogs/${blog.slug}`} 
                      className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-2 transition-all mt-auto"
                    >
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
