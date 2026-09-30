"use server";

import connectToDatabase from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";
import Project from "@/models/Project";
import Blog from "@/models/Blog";
import Settings from "@/models/Settings";
import Faq from "@/models/Faq";
import Testimonial from "@/models/Testimonial";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import mongoose from "mongoose";

// --- ENQUIRIES ---
export async function updateEnquiryStatus(id: string, status: string) {
  await connectToDatabase();
  await Enquiry.findByIdAndUpdate(id, { status });
  revalidatePath("/admin/enquiries");
  revalidatePath("/admin/overview");
}

export async function deleteEnquiry(id: string) {
  await connectToDatabase();
  await Enquiry.findByIdAndDelete(id);
  revalidatePath("/admin/enquiries");
  revalidatePath("/admin/overview");
}

// --- PROJECTS ---
export async function createProject(prevState: any, formData: FormData) {
  try {
    await connectToDatabase();
    const data = Object.fromEntries(formData.entries());
    
    if (!data.title || !data.slug) {
      return { error: "Project Title and Slug are required." };
    }

    await Project.create(data);
  } catch (err: any) {
    if (err.code === 11000) {
      return { error: "A project with this slug already exists." };
    }
    return { error: err.message || "Failed to create project." };
  }

  revalidatePath("/admin/projects");
  revalidatePath("/admin/overview");
  revalidatePath("/projects");
  redirect("/admin/projects");
}

export async function updateProject(id: string, formData: FormData) {
  await connectToDatabase();
  const data = Object.fromEntries(formData.entries());
  await Project.findByIdAndUpdate(id, data);
  revalidatePath("/admin/projects");
  revalidatePath("/admin/overview");
  revalidatePath("/projects");
  redirect("/admin/projects");
}

export async function deleteProject(id: string) {
  await connectToDatabase();
  await Project.findByIdAndDelete(id);
  revalidatePath("/admin/projects");
  revalidatePath("/admin/overview");
  revalidatePath("/projects");
}

// --- BLOGS ---
export async function createBlog(prevState: any, formData: FormData) {
  try {
    await connectToDatabase();
    const data: Record<string, any> = Object.fromEntries(formData.entries());
    
    if (!data.title || !data.slug) {
      return { error: "Blog Title and Slug are required." };
    }

    data.published = data.published === "on" ? true : false;
    await Blog.create(data);
  } catch (err: any) {
    if (err.code === 11000) {
      return { error: "A blog with this slug already exists." };
    }
    return { error: err.message || "Failed to create blog post." };
  }

  revalidatePath("/admin/blogs");
  redirect("/admin/blogs");
}

export async function updateBlog(id: string, formData: FormData) {
  await connectToDatabase();
  const data: Record<string, any> = Object.fromEntries(formData.entries());
  data.published = data.published === "on" ? true : false;
  
  await Blog.findByIdAndUpdate(id, data);
  revalidatePath("/admin/blogs");
  redirect("/admin/blogs");
}

export async function deleteBlog(id: string) {
  await connectToDatabase();
  await Blog.findByIdAndDelete(id);
  revalidatePath("/admin/blogs");
}

// --- SETTINGS ---
export async function updateSettings(formData: FormData) {
  await connectToDatabase();
  const data = Object.fromEntries(formData.entries());
  
  let settings = await Settings.findOne();
  if (!settings) {
    await Settings.create(data);
  } else {
    await Settings.findByIdAndUpdate(settings._id, data);
  }
  
  revalidatePath("/admin/settings");
  revalidatePath("/"); // Revalidate everywhere settings are used
}

// --- FAQS ---
export async function createFaq(formData: FormData) {
  await connectToDatabase();
  const data: Record<string, any> = Object.fromEntries(formData.entries());
  data.published = data.published === "on" ? true : false;
  
  await Faq.create(data);
  revalidatePath("/admin/faqs");
  revalidatePath("/faqs");
}

export async function deleteFaq(id: string) {
  await connectToDatabase();
  await Faq.findByIdAndDelete(id);
  revalidatePath("/admin/faqs");
  revalidatePath("/faqs");
}

// --- TESTIMONIALS ---
export async function createTestimonial(prevState: any, formData: FormData) {
  try {
    await connectToDatabase();
    const data: Record<string, any> = Object.fromEntries(formData.entries());
    
    if (!data.clientName || !data.quote) {
      return { error: "Client Name and Quote are required." };
    }

    data.published = data.published === "on" ? true : false;
    data.rating = parseInt(data.rating || "5", 10);
    
    await mongoose.models.Testimonial.create(data);
  } catch (err: any) {
    return { error: err.message || "Failed to create testimonial." };
  }

  revalidatePath("/admin/testimonials");
  revalidatePath("/");
  redirect("/admin/testimonials");
}

export async function updateTestimonial(id: string, formData: FormData) {
  await connectToDatabase();
  const data: Record<string, any> = Object.fromEntries(formData.entries());
  data.published = data.published === "on" ? true : false;
  data.rating = parseInt(data.rating || "5", 10);
  
  await mongoose.models.Testimonial.findByIdAndUpdate(id, data);
  revalidatePath("/admin/testimonials");
  revalidatePath("/");
  redirect("/admin/testimonials");
}

export async function deleteTestimonial(id: string) {
  await connectToDatabase();
  await mongoose.models.Testimonial.findByIdAndDelete(id);
  revalidatePath("/admin/testimonials");
  revalidatePath("/");
}
