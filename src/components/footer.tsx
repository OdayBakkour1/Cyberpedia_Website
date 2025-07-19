"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from '@/components/ui/button';

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSuccess(true);
        setEmail("");
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-cyan-500/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/CYBERPEDIA-Logo.webp" alt="Cyberpedia Logo" width={48} height={48} className="w-12 h-12" />
              <span className="text-xl font-bold text-white font-designer">Cyberpedia</span>
            </div>
            <p className="text-slate-300 mb-4">
              Leading cybersecurity solutions provider protecting businesses worldwide.
            </p>
            <div className="space-y-3">
              <h4 className="text-white font-semibold font-designer">Subscribe to our Newsletter</h4>
              <p className="text-sm text-slate-400">Stay updated with the latest security insights and threats.</p>
              <form className="flex space-x-2" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                  disabled={submitting}
                />
                <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700 text-white px-4" type="submit" disabled={submitting || !email}>
                  {submitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
              {success && <div className="text-green-400 text-xs mt-2">Thank you for subscribing!</div>}
              {error && <div className="text-red-400 text-xs mt-2">{error}</div>}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold font-designer mb-4">Services</h4>
            <div className="space-y-2">
              <a href="#" className="block text-slate-300 hover:text-cyan-400">Cloud Security</a>
              <a href="#" className="block text-slate-300 hover:text-cyan-400">DevSecOps</a>
              <a href="#" className="block text-slate-300 hover:text-cyan-400">Vulnerability Management</a>
              <a href="#" className="block text-slate-300 hover:text-cyan-400">Managed SOC</a>
              <a href="#" className="block text-slate-300 hover:text-cyan-400">Penetration Testing</a>
              <a href="#" className="block text-slate-300 hover:text-cyan-400">Cyber Awareness Training</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold font-designer mb-4">Company</h4>
            <div className="space-y-2">
              <a href="#" className="block text-slate-300 hover:text-cyan-400">About Us</a>
              <a href="/internships" className="block text-slate-300 hover:text-cyan-400">Internships</a>
              <a href="https://blog.cyberpedia.site/" target="_blank" rel="noopener noreferrer" className="block text-slate-300 hover:text-cyan-400">Blog</a>
              <a href="#" className="block text-slate-300 hover:text-cyan-400">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold font-designer mb-4">Cyberpediaverse</h4>
            <div className="space-y-2">
              <a href="https://www.hunterpedia.site/" target="_blank" rel="noopener noreferrer" className="block text-slate-300 hover:text-cyan-400">Hunterpedia</a>
              <a href="https://books.cyberpedia.site/" target="_blank" rel="noopener noreferrer" className="block text-slate-300 hover:text-cyan-400">Books</a>
              <a href="https://platform.cyberpedia.site/" target="_blank" rel="noopener noreferrer" className="block text-slate-300 hover:text-cyan-400">Platform</a>
            </div>
          </div>
        </div>
        <div className="border-t border-cyan-500/20 mt-8 pt-8 text-center">
          <p className="text-slate-300 font-designer">
            © {new Date().getFullYear()} Cyberpedia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 