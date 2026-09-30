# Implementation Plan: Green Energy Solutions Corporate Website

This document outlines the step-by-step implementation plan for the Green Energy Solutions Corporate Website, based on the requirements specified in the Product Requirements Document (PRD).

## Phase 1: Project Setup & Foundation

**Goal:** Establish the technical foundation, folder structure, and core styling based on the defined design system.

1.  **Initialize Next.js Project:**
    *   Create a new Next.js project with TypeScript, Tailwind CSS, and App Router.
    *   Configure `tsconfig.json` and ESLint for strict type checking and code quality.
2.  **Configure Design System (Tailwind):**
    *   Update `tailwind.config.ts` with brand colors (Primary Green, Dark Green, Solar Orange, etc.).
    *   Configure typography (Manrope / Inter) using `next/font`.
    *   Set up responsive breakpoints and custom utilities.
3.  **Setup Core Architecture:**
    *   Create foundational folder structure (`/components`, `/lib`, `/app`, `/models`, etc.).
    *   Set up MongoDB connection utilities using Mongoose.
    *   Configure Cloudinary for image optimization and management.
4.  **Build Shared Components:**
    *   Create reusable UI components (Buttons, Cards, Inputs, Modals, Section Headers).
    *   Build responsive Navigation Bar (Desktop & Mobile Hamburger) and Footer.
    *   Implement the floating WhatsApp integration component.

## Phase 2: Public Website Development (MVP Core)

**Goal:** Build the static and dynamic public-facing pages that form the digital brochure and capture leads.

1.  **Home Page (`/`):**
    *   Develop the Hero section with primary CTAs.
    *   Implement "Company Introduction", "Our Solar Solutions", and "Industries" summary sections.
2.  **About Page (`/about`):**
    *   Build sections for Mission, Core Values, and Capabilities.
    *   Implement the "Why Green Energy Solutions" section.
3.  **Solutions & Services Pages (`/solutions/*`, `/services/*`):**
    *   Create dynamic or static routing for specific solutions (Rooftop, Ground Mount, Floating).
    *   Detail the end-to-end services (Consulting, EPC, Maintenance, etc.).
4.  **Industries Page (`/industries`):**
    *   Develop industry-specific cards detailing relevant solar solutions for each sector.
5.  **Projects Portfolio (`/projects`, `/projects/[slug]`):**
    *   Build the main project listing page with filtering/sorting capabilities.
    *   Develop the detailed project view (Overview, Metrics, Gallery, Results).
    *   *Note: Connect these to dummy data first, to be replaced by the MongoDB database later.*
6.  **Contact & Consultation System (`/contact`, `/consultation`):**
    *   Build the Contact page with Maps, Addresses, and Contact Form.
    *   Develop the dedicated "Get a Free Solar Consultation" multi-step form.
    *   Implement form validation (Zod/React Hook Form).

## Phase 3: Backend, Database & CRM Integration

**Goal:** Make the website dynamic by wiring up the database, email notifications, and lead management.

1.  **Database Models (Mongoose):**
    *   Define schemas for `User`, `Enquiry`, `Project`, `Resource`, and `FAQ`.
2.  **Lead Workflow Implementation:**
    *   Create API routes (`/api/enquiries`) to handle form submissions securely.
    *   Integrate Resend to send acknowledgement emails to users and notification emails to the company.
    *   Save leads directly to MongoDB with an initial status of "New".
3.  **Dynamic Content Integration:**
    *   Wire up the Projects page to fetch data from MongoDB instead of static files.
    *   Ensure proper loading states and error handling.

## Phase 4: Admin Dashboard & CMS

**Goal:** Provide a secure portal for the company to manage their leads, projects, and website content without developer intervention.

1.  **Authentication & Security:**
    *   Implement NextAuth.js for secure admin login.
    *   Setup role-based access control (Admin vs. Editor).
    *   Secure all `/admin/*` routes and respective API endpoints.
2.  **Admin Dashboard (`/admin`):**
    *   Build the overview dashboard showing total leads, new leads, and quick stats.
3.  **Lead CRM System:**
    *   Develop the Lead Management table (view, edit, change status, archive, add notes).
4.  **Project CMS:**
    *   Create an interface to Create, Read, Update, and Delete (CRUD) projects.
    *   Integrate Cloudinary upload widget for project images.
5.  **Content Management (Optional/Phase 2.5):**
    *   Build CRUD interfaces for FAQs and Resources (Blog).

## Phase 5: SEO, Performance & Launch Preparation

**Goal:** Ensure the website meets the performance KPIs, is optimized for search engines, and is ready for production.

1.  **SEO & Metadata:**
    *   Implement Next.js Metadata API for Title, Description, and Open Graph tags across all pages.
    *   Add Structured Data (JSON-LD) for LocalBusiness, Service, and FAQPage.
    *   Generate dynamic `sitemap.xml` and `robots.txt`.
2.  **Performance Optimization:**
    *   Audit with Google Lighthouse (Target: LCP < 2.5s, CLS < 0.1).
    *   Ensure all images use `next/image` with proper sizing and Cloudinary loader.
    *   Verify minimal JavaScript payload and efficient chunking.
3.  **Testing & QA:**
    *   Test responsive design across Mobile, Tablet, and Desktop breakpoints.
    *   Test all forms and email delivery in a staging environment.
    *   Verify database security rules and admin authentication.
4.  **Deployment:**
    *   Deploy to Vercel (connect GitHub repository).
    *   Configure environment variables (MongoDB URI, Resend API Key, Cloudinary Secrets, NextAuth Secret).
    *   Set up custom domain and SSL.
    *   Configure basic web analytics (e.g., Vercel Analytics or Google Analytics).
