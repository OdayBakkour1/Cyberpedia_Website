"use client";
import React, { useState, useEffect } from "react";

interface Internship {
  id: string;
  title: string;
  duration: string;
  openings: string;
  deadline: string;
  shortDescription: string;
  overview: string;
  requirements: string;
  responsibilities: string;
  outcome: string;
  applicationEmail: string;
  applicationSubject: string;
}

function getDaysLeft(deadline: string) {
  const now = new Date();
  const diff = new Date(deadline).getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export default function InternshipsClient() {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    async function fetchInternships() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/internships");
        if (!res.ok) throw new Error("Failed to fetch internships");
        const data = await res.json();
        setInternships(data.internships || []);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchInternships();
  }, []);

  // ... (rest of the Internships page JSX, copy from original page)
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      {/* Hero Section */}
      {/* ...rest of the JSX from InternshipsPage... */}
    </div>
  );
} 