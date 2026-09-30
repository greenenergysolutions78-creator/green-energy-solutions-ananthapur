"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SetupClient() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/setup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSuccess("Admin created successfully! Redirecting to login...");
      setTimeout(() => {
        router.push("/admin/login");
      }, 2000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
        <div>
          <div className="flex justify-center">
            <div className="h-16 w-16 bg-primary-dark rounded-xl flex items-center justify-center p-2 shadow-sm">
              <Image src="/favicon.svg" alt="Logo" width={48} height={48} />
            </div>
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-brand-text">
            System Setup
          </h2>
          <p className="mt-2 text-center text-sm text-muted">
            Create the master admin account. This can only be done once.
          </p>
        </div>
        
        {error && (
          <div className="p-4 rounded-md bg-red-50 border border-red-200">
            <p className="text-sm text-red-600 text-center">{error}</p>
          </div>
        )}

        {success && (
          <div className="p-4 rounded-md bg-green-50 border border-green-200">
            <p className="text-sm text-green-600 text-center">{success}</p>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-brand-text">Admin Username</label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="relative block w-full rounded-md border-0 py-3 px-4 text-brand-text ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 mt-1"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-brand-text">Admin Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="relative block w-full rounded-md border-0 py-3 px-4 text-brand-text ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 mt-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading || !!success}
              className="flex w-full justify-center rounded-md bg-primary px-3 py-3 text-sm font-semibold text-white hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition disabled:opacity-70"
            >
              {loading ? "Creating..." : "Initialize Admin"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
