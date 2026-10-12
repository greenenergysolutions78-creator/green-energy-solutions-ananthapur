import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Solar Consultation | Green Energy Solutions",
  description: "Request a custom solar feasibility analysis, system sizing assessment, and ROI estimate from Green Energy Solutions in Ananthapur, Andhra Pradesh.",
  alternates: {
    canonical: "/consultation",
  },
};

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
