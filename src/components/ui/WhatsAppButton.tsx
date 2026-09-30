"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function WhatsAppButton() {
  // Replace with actual WhatsApp number and pre-filled message
  const whatsappNumber = "919281487878";
  const message = "Hello Green Energy Solutions, I would like to know more about your solar solutions.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </Link>
  );
}
