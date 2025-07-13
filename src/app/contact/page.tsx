"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-slate-950">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10 text-center space-y-8">
          <Badge variant="outline" className="text-base px-6 py-2 border-cyan-500/30 text-cyan-300 bg-cyan-900/50">Contact Us</Badge>
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-cyan-300 to-blue-300 bg-clip-text text-transparent mb-6 font-designer">Get In Touch With Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            At Cyberpedia, we are committed to providing you with the best cybersecurity support and services.<br/>
            We’re here to help.<br/>
            Reach out to us anytime.
          </p>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-slate-900/80 p-8 shadow-xl border-cyan-500/10">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2 font-designer"><Mail className="w-6 h-6 text-blue-400" /> Send Us a Message</h2>
            {submitted ? (
              <div className="text-green-400 text-lg font-semibold py-8 text-center">Thank you! Your message has been sent.</div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-slate-200 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-slate-800/80 border border-cyan-500/20 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-200 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-slate-800/80 border border-cyan-500/20 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-slate-200 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-lg bg-slate-800/80 border border-cyan-500/20 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                  />
                </div>
                {error && <div className="text-red-400 text-sm text-center">{error}</div>}
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-3 text-lg mt-2 flex items-center justify-center gap-2">
                  Send Message <Send className="w-5 h-5" />
                </Button>
              </form>
            )}
          </Card>
          {/* Contact Info */}
          <Card className="bg-slate-900/80 p-8 shadow-xl border-cyan-500/10 flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-2 flex items-center gap-2 font-designer"><Phone className="w-6 h-6 text-blue-400" /> Contact Information</h2>
            <div className="flex items-center gap-4 text-slate-200">
              <Phone className="w-5 h-5 text-cyan-400" />
              <a href="tel:+963991380524" className="hover:underline text-cyan-300">+963 991380524</a>
            </div>
            <div className="flex items-center gap-4 text-slate-200">
              <Mail className="w-5 h-5 text-cyan-400" />
              <a href="mailto:info@cyberpedia.site" className="hover:underline text-cyan-300">info@cyberpedia.site</a>
            </div>
            <div className="flex items-center gap-4 text-slate-200">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>Aleppo | Syria</span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">Business Hours</h3>
              <p className="text-slate-300">Sunday - Thursday: 9:00 AM - 6:00 PM</p>
              <p className="text-slate-300">Friday: Closed</p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 