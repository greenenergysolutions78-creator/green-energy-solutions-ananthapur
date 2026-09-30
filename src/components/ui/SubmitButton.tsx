"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ title, loadingTitle }: { title: string, loadingTitle: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-primary text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-primary-dark transition disabled:opacity-70"
    >
      {pending ? loadingTitle : title}
    </button>
  );
}
