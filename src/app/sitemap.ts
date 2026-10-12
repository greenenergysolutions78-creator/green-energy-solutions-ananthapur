import { MetadataRoute } from 'next';
import connectToDatabase from '@/lib/mongodb';
import Blog from '@/models/Blog';
import Project from '@/models/Project';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.greenenergysolutions.energy';

  let blogEntries: MetadataRoute.Sitemap = [];
  let projectEntries: MetadataRoute.Sitemap = [];

  try {
    await connectToDatabase();
    const blogs = await Blog.find({ published: true }).select('slug updatedAt').lean();
    const projects = await Project.find().select('slug updatedAt').lean();

    blogEntries = blogs.map((blog: any) => ({
      url: `${baseUrl}/blogs/${blog.slug}`,
      lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));

    projectEntries = projects.map((project: any) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: project.updatedAt ? new Date(project.updatedAt) : new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }));
  } catch (err) {
    console.error("Failed to fetch dynamic routes for sitemap:", err);
  }

  // Static routes
  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/solutions', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/projects', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/industries', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/consultation', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/blogs', priority: 0.75, changeFrequency: 'weekly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/cookie-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/disclaimer', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  return [...staticEntries, ...projectEntries, ...blogEntries];
}

