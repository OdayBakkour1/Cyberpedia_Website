"use client";
import React, { useState } from "react";

const INTERNSHIPS = [
  {
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
  },
  {
    title: "Cloud Security Intern",
    duration: "3 months",
    openings: 3,
    deadline: new Date("2025-08-15T23:59:59Z"),
    shortDescription:
      "Work with our cloud security team to help secure cloud infrastructure and applications.",
    details: {
      overview:
        "Assist in securing cloud environments, learning about cloud security best practices, and supporting cloud incident response.",
      requirements: [
        "Basic knowledge of AWS, Azure, or GCP",
        "Interest in cloud security",
        "Good communication skills",
      ],
      responsibilities: [
        "Assist with cloud security monitoring",
        "Support cloud configuration reviews",
        "Help automate security controls",
      ],
      outcome:
        "Gain hands-on experience in cloud security and a chance for a full-time offer.",
      applicationEmail: "cloud@cyberpedia.site",
      applicationSubject: "Cloud Security Internship – [Your Full Name]",
    },
  },
  {
    title: "Penetration Testing Intern",
    duration: "4 months",
    openings: 2,
    deadline: new Date("2025-09-01T23:59:59Z"),
    shortDescription:
      "Join our red team and learn the art of ethical hacking and penetration testing.",
    details: {
      overview:
        "Work with experienced penetration testers, participate in real-world engagements, and learn offensive security techniques.",
      requirements: [
        "Familiarity with Kali Linux or Parrot OS",
        "Basic understanding of networks and web apps",
        "Eagerness to learn offensive security",
      ],
      responsibilities: [
        "Assist in penetration tests",
        "Document findings and write reports",
        "Research new vulnerabilities",
      ],
      outcome:
        "Build a strong foundation in ethical hacking and get a certificate of completion.",
      applicationEmail: "pentest@cyberpedia.site",
      applicationSubject: "Penetration Testing Internship – [Your Full Name]",
    },
  },
];

function getDaysLeft(deadline: Date) {
  const now = new Date();
  const diff = deadline.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export default function InternshipsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

      {/* Internship Opportunities Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {INTERNSHIPS.map((internship, idx) => {
            const daysLeft = getDaysLeft(internship.deadline);
            return (
              <div key={idx} className="bg-slate-900/80 rounded-2xl shadow-xl p-8 border border-cyan-500/20 relative flex flex-col">
                <span className="absolute top-4 right-4 bg-cyan-600 text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse">New</span>
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-cyan-400 mb-2 font-designer flex items-center gap-2">
                      {internship.title}
                    </h2>
                    <div className="flex flex-wrap gap-4 mb-4 text-slate-300 text-sm">
                      <span>Duration: <b className="text-white">{internship.duration}</b></span>
                      <span>Openings: <b className="text-white">{internship.openings}</b></span>
                      <span>Deadline: <b className="text-white">{internship.deadline.toLocaleDateString()}</b></span>
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

      {/* Drawer/Side Panel for Internship Details */}
      {openIndex !== null && (
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
                🛡️ Cyberpedia | {INTERNSHIPS[openIndex].title}
              </h3>
              <div className="mb-4 text-slate-300">
                <b>Position:</b> {INTERNSHIPS[openIndex].title}<br />
                <b>Duration:</b> {INTERNSHIPS[openIndex].duration}<br />
                <b>Openings:</b> {INTERNSHIPS[openIndex].openings}<br />
                <b>Deadline to Apply:</b> {INTERNSHIPS[openIndex].deadline.toLocaleDateString()}
              </div>
              <div className="mb-4">
                <b className="text-cyan-300">📋 Internship Overview:</b>
                <p className="text-slate-200 mt-1">{INTERNSHIPS[openIndex].details.overview}</p>
              </div>
              <div className="mb-4">
                <b className="text-cyan-300">✅ Requirements:</b>
                <ul className="list-disc list-inside text-slate-200 mt-1">
                  {INTERNSHIPS[openIndex].details.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <b className="text-cyan-300">🔧 Responsibilities:</b>
                <ul className="list-disc list-inside text-slate-200 mt-1">
                  {INTERNSHIPS[openIndex].details.responsibilities.map((res, i) => (
                    <li key={i}>{res}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <b className="text-cyan-300">🎯 Outcome:</b>
                <p className="text-slate-200 mt-1">{INTERNSHIPS[openIndex].details.outcome}</p>
              </div>
              <div className="mb-6">
                <b className="text-cyan-300">📩 Application:</b>
                <p className="text-slate-200 mt-1">
                  Send your CV to <a href={`mailto:${INTERNSHIPS[openIndex].details.applicationEmail}?subject=${encodeURIComponent(INTERNSHIPS[openIndex].details.applicationSubject)}`} className="text-cyan-400 underline">{INTERNSHIPS[openIndex].details.applicationEmail}</a><br />
                  Subject line: <span className="bg-slate-800 px-2 py-1 rounded text-xs text-cyan-200">{INTERNSHIPS[openIndex].details.applicationSubject}</span>
                </p>
              </div>
              <a
                href={`mailto:${INTERNSHIPS[openIndex].details.applicationEmail}?subject=${encodeURIComponent(INTERNSHIPS[openIndex].details.applicationSubject)}`}
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