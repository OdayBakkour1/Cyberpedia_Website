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

export default function InternshipsPage() {
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
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchInternships();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-cyan-900/20 to-slate-950">
        <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-cyan-300 to-blue-300 bg-clip-text text-transparent mb-6 font-designer">
          Start Your Cybersecurity Career with Cyberpedia
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
          Join our internship programs and gain real-world SOC experience with industry tools, expert mentors, and real threats.
        </p>
      </section>

      {/* Loading/Error State */}
      {loading && (
        <div className="flex justify-center items-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400" />
        </div>
      )}
      {error && (
        <div className="text-center text-red-400 py-8">{error}</div>
      )}

      {/* Internship Opportunities Grid */}
      {!loading && !error && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {internships.map((internship, idx) => {
              const daysLeft = getDaysLeft(internship.deadline);
              return (
                <div key={internship.id} className="bg-slate-900/80 rounded-2xl shadow-xl p-8 border border-cyan-500/20 relative flex flex-col">
                  <span className="absolute top-4 right-4 bg-cyan-600 text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse">New</span>
                  <div className="flex flex-col flex-1 justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-cyan-400 mb-2 font-designer flex items-center gap-2">
                        {internship.title}
                      </h2>
                      <div className="flex flex-wrap gap-4 mb-4 text-slate-300 text-sm">
                        <span>Duration: <b className="text-white">{internship.duration}</b></span>
                        <span>Openings: <b className="text-white">{internship.openings}</b></span>
                        <span>Deadline: <b className="text-white">{new Date(internship.deadline).toLocaleDateString()}</b></span>
                        <span className="bg-cyan-700/20 text-cyan-300 px-2 py-1 rounded text-xs font-semibold ml-auto">{daysLeft} days left to apply</span>
                      </div>
                      <p className="mb-6 text-slate-200 min-h-[72px]">{internship.shortDescription}</p>
                    </div>
                    <button
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-2 rounded-lg font-bold shadow-md transition-all duration-300 mt-auto"
                      onClick={() => setOpenIndex(idx)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Drawer/Side Panel for Internship Details */}
      {openIndex !== null && internships[openIndex] && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-300"
            onClick={() => setOpenIndex(null)}
            aria-label="Close details drawer background"
          />
          <aside className="fixed top-0 right-0 h-full w-full sm:w-[480px] bg-slate-900 z-50 shadow-2xl border-l border-cyan-500/20 animate-slide-in flex flex-col">
            <button
              className="self-end m-4 text-slate-400 hover:text-cyan-400 text-3xl font-bold"
              onClick={() => setOpenIndex(null)}
              aria-label="Close details drawer"
            >
              ×
            </button>
            <div className="p-8 overflow-y-auto flex-1">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2 font-designer flex items-center gap-2">
                🛡️ Cyberpedia | {internships[openIndex].title}
              </h3>
              <div className="mb-4 text-slate-300">
                <b>Position:</b> {internships[openIndex].title}<br />
                <b>Duration:</b> {internships[openIndex].duration}<br />
                <b>Openings:</b> {internships[openIndex].openings}<br />
                <b>Deadline to Apply:</b> {new Date(internships[openIndex].deadline).toLocaleDateString()}
              </div>
              <div className="mb-4">
                <b className="text-cyan-300">📋 Internship Overview:</b>
                <p className="text-slate-200 mt-1">{internships[openIndex].overview}</p>
              </div>
              <div className="mb-4">
                <b className="text-cyan-300">✅ Requirements:</b>
                <ul className="list-disc list-inside text-slate-200 mt-1">
                  {internships[openIndex].requirements.split('\n').map((req: string, i: number) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <b className="text-cyan-300">🔧 Responsibilities:</b>
                <ul className="list-disc list-inside text-slate-200 mt-1">
                  {internships[openIndex].responsibilities.split('\n').map((res: string, i: number) => (
                    <li key={i}>{res}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <b className="text-cyan-300">🎯 Outcome:</b>
                <p className="text-slate-200 mt-1">{internships[openIndex].outcome}</p>
              </div>
              <div className="mb-6">
                <b className="text-cyan-300">📩 Application:</b>
                <p className="text-slate-200 mt-1">
                  Send your CV to <a href={`mailto:${internships[openIndex].applicationEmail}?subject=${encodeURIComponent(internships[openIndex].applicationSubject)}`} className="text-cyan-400 underline">{internships[openIndex].applicationEmail}</a><br />
                  Subject line: <span className="bg-slate-800 px-2 py-1 rounded text-xs text-cyan-200">{internships[openIndex].applicationSubject}</span>
                </p>
              </div>
              <a
                href={`mailto:${internships[openIndex].applicationEmail}?subject=${encodeURIComponent(internships[openIndex].applicationSubject)}`}
                className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-3 rounded-lg font-bold text-center shadow-md transition-all duration-300 mb-2"
              >
                Apply Now
              </a>
            </div>
          </aside>
        </>
      )}
    </div>
  );
} 