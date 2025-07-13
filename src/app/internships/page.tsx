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

const TESTIMONIALS = [
  {
    name: "Sarah K.",
    role: "Junior SOC Analyst @ Cyberpedia",
    quote:
      "This internship turned my bootcamp training into real-world confidence. I now work full-time at Cyberpedia thanks to this opportunity.",
  },
];

const FAQS = [
  {
    q: "Is this internship paid?",
    a: "No, but top performers are offered paid full-time roles after completion.",
  },
  {
    q: "Can I apply if I didn’t attend a Cyberpedia bootcamp?",
    a: "This internship is only available to Cyberpedia graduates at this time.",
  },
  {
    q: "Is the internship remote or in-person?",
    a: "The internship is fully remote.",
  },
  {
    q: "How will I be evaluated?",
    a: "Based on your engagement, technical performance, and communication throughout the internship.",
  },
];

function getDaysLeft(deadline: Date) {
  const now = new Date();
  const diff = deadline.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export default function InternshipsPage() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
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
          <div className="bg-slate-900 rounded-2xl shadow-2xl p-8 max-w-xl w-full relative animate-fade-in">
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

      {/* What You'll Gain Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/80">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-cyan-400 mb-4 font-designer">🎓 What You’ll Gain from the Internship:</h3>
          <ul className="text-lg text-slate-200 space-y-2 mb-6">
            <li>Hands-on experience with real-world SOC tools (SIEM, XDR, Threat Intel)</li>
            <li>Exposure to live incident response workflows</li>
            <li>Certificate of Completion from Cyberpedia</li>
            <li>Potential full-time offer based on performance</li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-cyan-400 mb-8 font-designer">🗣️ What Our Interns Say:</h3>
          <div className="flex flex-col items-center gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-slate-900/80 rounded-xl p-6 shadow-md border border-cyan-500/10 max-w-md w-full">
                <div className="text-lg text-slate-200 mb-2">“{t.quote}”</div>
                <div className="text-cyan-400 font-bold">{t.name}</div>
                <div className="text-slate-400 text-sm">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/80">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-cyan-400 mb-8 font-designer">❓ Frequently Asked Questions</h3>
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-slate-950/80 rounded-lg p-6 border border-cyan-500/10">
                <div className="font-bold text-cyan-300 mb-2">Q: {faq.q}</div>
                <div className="text-slate-200">A: {faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action / Footer Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold text-cyan-400 mb-4 font-designer">🚀 Ready to kickstart your cybersecurity career?</h3>
        <a
          href={`mailto:${INTERNSHIP.details.applicationEmail}?subject=${encodeURIComponent(INTERNSHIP.details.applicationSubject)}`}
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-3 rounded-lg font-bold shadow-lg transition-all duration-300 mb-4"
        >
          Apply for SOC Analyst Internship
        </a>
        <div className="text-slate-300 mb-6">or</div>
        <button
          className="inline-block bg-slate-800 text-cyan-300 px-8 py-3 rounded-lg font-bold shadow-md border border-cyan-500/20 hover:bg-slate-900 transition-all duration-300 mb-4"
          onClick={() => alert("You have joined the waitlist!")}
        >
          Join the Waitlist for Future Programs
        </button>
        <div className="max-w-md mx-auto mt-8">
          <form
            className="flex gap-2"
            onSubmit={e => {
              e.preventDefault();
              setSubscribed(true);
            }}
          >
            <input
              type="email"
              placeholder="Get notified about future internships"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-2 rounded-l-lg bg-slate-800 border border-cyan-500/20 text-white placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              disabled={subscribed}
            />
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-2 rounded-r-lg font-bold transition-all duration-300"
              disabled={subscribed}
            >
              {subscribed ? "Subscribed!" : "Notify Me"}
            </button>
          </form>
          {subscribed && <div className="text-green-400 mt-2 text-sm">You’ll be notified about future internships!</div>}
        </div>
      </section>
    </div>
  );
} 