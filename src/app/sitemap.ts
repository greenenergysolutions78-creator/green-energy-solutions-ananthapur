import { MetadataRoute } from 'next';
import connectToDatabase from '@/lib/mongodb';
import Blog from '@/models/Blog';
import Project from '@/models/Project';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://greenenergysolutions.energy';

  // Get dynamic routes
  await connectToDatabase();
  const blogs = await Blog.find({ published: true }).select('slug updatedAt').lean();
  const projects = await Project.find().select('slug updatedAt').lean();

  const blogEntries: MetadataRoute.Sitemap = blogs.map((blog: any) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: blog.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.map((project: any) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.updatedAt,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Static routes
  const routes = [
    '',
    '/about',
    '/solutions',
    '/services',
    '/industries',
    '/projects',
    '/blogs',
    '/contact',
    '/consultation',
    '/faqs',
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.9,
  }));

  return [...staticEntries, ...projectEntries, ...blogEntries];
}
