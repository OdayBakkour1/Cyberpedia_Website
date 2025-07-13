"use client";
import React, { useState } from "react";

const INTERNSHIP = {
  title: "SOC Analyst Intern",
  duration: "6 months",
  openings: 6,
  deadline: new Date("2025-07-28T23:59:59Z"),
  shortDescription:
    "Join our Security Operations Center (SOC) and contribute to real-world threat detection, monitoring, and incident response.",
  details: {
    overview:
      "Cyberpedia is offering 6 internship positions in the SOC Analyst track, available to graduates of its cybersecurity bootcamps. Interns will work with our security team on real-time monitoring, threat detection, and incident response.",
    requirements: [
      "Graduate of a Cyberpedia Bootcamp",
      "Advanced English proficiency",
      "TryHackMe certification or equivalent Blue Team / SOC experience",
    ],
    responsibilities: [
      "Monitor and respond to security alerts and events",
      "Work with SIEM and XDR platforms",
      "Support vulnerability and patch management processes",
    ],
    outcome:
      "Top-performing interns may receive a full-time, paid job offer upon completion.",
    applicationEmail: "jameel.tawelh@cyberpedia.site",
    applicationSubject: "SOC Internship – [Your Full Name]",
  },
};

function getDaysLeft(deadline: Date) {
  const now = new Date();
  const diff = deadline.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export default function InternshipsPage() {
  const [showModal, setShowModal] = useState(false);
  const daysLeft = getDaysLeft(INTERNSHIP.deadline);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-cyan-900/20 to-slate-950">
        <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-cyan-300 to-blue-300 bg-clip-text text-transparent mb-6 font-designer">
          Start Your Cybersecurity Career with Cyberpedia
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
          Join our internship programs and gain real-world SOC experience with industry tools, expert mentors, and real threats.
        </p>
        <button
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-3 text-lg rounded-lg font-bold shadow-lg transition-all duration-300"
          onClick={() => setShowModal(true)}
        >
          View Open Positions
        </button>
      </section>

      {/* Internship Opportunity Card */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="bg-slate-900/80 rounded-2xl shadow-xl p-8 max-w-lg w-full border border-cyan-500/20 relative">
          <span className="absolute top-4 right-4 bg-cyan-600 text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse">New</span>
          <h2 className="text-2xl font-bold text-cyan-400 mb-2 font-designer flex items-center gap-2">
            {INTERNSHIP.title}
          </h2>
          <div className="flex flex-wrap gap-4 mb-4 text-slate-300 text-sm">
            <span>Duration: <b className="text-white">{INTERNSHIP.duration}</b></span>
            <span>Openings: <b className="text-white">{INTERNSHIP.openings}</b></span>
            <span>Deadline: <b className="text-white">{INTERNSHIP.deadline.toLocaleDateString()}</b></span>
            <span className="bg-cyan-700/20 text-cyan-300 px-2 py-1 rounded text-xs font-semibold ml-auto">{daysLeft} days left to apply</span>
          </div>
          <p className="mb-6 text-slate-200">{INTERNSHIP.shortDescription}</p>
          <button
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-2 rounded-lg font-bold shadow-md transition-all duration-300"
            onClick={() => setShowModal(true)}
          >
            View Details
          </button>
        </div>
      </section>

      {/* Internship Modal / Details Section */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-slate-900 rounded-2xl shadow-2xl p-10 max-w-2xl w-full relative animate-fade-in">
            <button
              className="absolute top-4 right-4 text-slate-400 hover:text-cyan-400 text-2xl font-bold"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold text-cyan-400 mb-2 font-designer flex items-center gap-2">
              🛡️ Cyberpedia | {INTERNSHIP.title}
            </h3>
            <div className="mb-4 text-slate-300">
              <b>Position:</b> {INTERNSHIP.title}<br />
              <b>Duration:</b> {INTERNSHIP.duration}<br />
              <b>Openings:</b> {INTERNSHIP.openings}<br />
              <b>Deadline to Apply:</b> {INTERNSHIP.deadline.toLocaleDateString()}
            </div>
            <div className="mb-4">
              <b className="text-cyan-300">📋 Internship Overview:</b>
              <p className="text-slate-200 mt-1">{INTERNSHIP.details.overview}</p>
            </div>
            <div className="mb-4">
              <b className="text-cyan-300">✅ Requirements:</b>
              <ul className="list-disc list-inside text-slate-200 mt-1">
                {INTERNSHIP.details.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <b className="text-cyan-300">🔧 Responsibilities:</b>
              <ul className="list-disc list-inside text-slate-200 mt-1">
                {INTERNSHIP.details.responsibilities.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <b className="text-cyan-300">🎯 Outcome:</b>
              <p className="text-slate-200 mt-1">{INTERNSHIP.details.outcome}</p>
            </div>
            <div className="mb-6">
              <b className="text-cyan-300">📩 Application:</b>
              <p className="text-slate-200 mt-1">
                Send your CV to <a href={`mailto:${INTERNSHIP.details.applicationEmail}?subject=${encodeURIComponent(INTERNSHIP.details.applicationSubject)}`} className="text-cyan-400 underline">{INTERNSHIP.details.applicationEmail}</a><br />
                Subject line: <span className="bg-slate-800 px-2 py-1 rounded text-xs text-cyan-200">{INTERNSHIP.details.applicationSubject}</span>
              </p>
            </div>
            <a
              href={`mailto:${INTERNSHIP.details.applicationEmail}?subject=${encodeURIComponent(INTERNSHIP.details.applicationSubject)}`}
              className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-3 rounded-lg font-bold text-center shadow-md transition-all duration-300 mb-2"
            >
              Apply Now
            </a>
            <button
              className="block w-full text-cyan-400 underline text-sm mt-2"
              onClick={() => setShowModal(false)}
            >
              Back to Opportunities
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 