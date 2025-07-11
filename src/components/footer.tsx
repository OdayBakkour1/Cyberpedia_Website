import React from "react";
import Image from "next/image";
import { Button } from '@/components/ui/button';

export default function Footer() {
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
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                />
                <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700 text-white px-4">
                  Subscribe
                </Button>
              </div>
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
              <a href="#" className="block text-slate-300 hover:text-cyan-400">Careers</a>
              <a href="#" className="block text-slate-300 hover:text-cyan-400">Blog</a>
              <a href="#" className="block text-slate-300 hover:text-cyan-400">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold font-designer mb-4">Cyberpediaverse</h4>
            <div className="space-y-2">
              <a href="#" className="block text-slate-300 hover:text-cyan-400">Hunterpedia</a>
              <a href="#" className="block text-slate-300 hover:text-cyan-400">Books</a>
              <a href="#" className="block text-slate-300 hover:text-cyan-400">Platform</a>
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