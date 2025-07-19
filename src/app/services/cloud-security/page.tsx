"use client";
import React from "react";
import { Shield, Globe, Lock, Eye, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CloudSecurityPage: React.FC = () => (
  <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-slate-950">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        <div className="flex-1 flex flex-col items-center md:items-start space-y-8">
          <Badge variant="outline" className="text-base px-6 py-2 border-cyan-500/30 text-cyan-300 bg-cyan-900/50">Service Detail</Badge>
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-cyan-300 to-blue-300 bg-clip-text text-transparent mb-6 font-designer">Cloud Security</h1>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <Shield className="w-20 h-20 text-cyan-400 drop-shadow-lg" />
          </div>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-4">
            Secure your cloud journey with end-to-end encryption, zero-trust access, and real-time threat detection. Our experts design, implement, and monitor robust cloud security architectures tailored to your business needs.
          </p>
          <a
            href="mailto:info@cyberpedia.site?subject=Cloud%20Security%20-%20Need%20to%20discuss%20more%20about%20it&body=Hello%2C%0A%0AI%20am%20interested%20in%20discussing%20more%20about%20your%20Cloud%20Security%20service.%0A%0AThank%20you!"
            style={{ textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-3 text-lg mt-2">
              Apply for Cloud Security
            </Button>
          </a>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-end w-full">
          <Card className="bg-slate-900/80 p-8 w-full max-w-md shadow-xl border-cyan-500/10">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2 font-designer"><Globe className="w-7 h-7 text-blue-400" /> Key Benefits</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-200"><Shield className="w-5 h-5 text-cyan-400" /> End-to-end data encryption</li>
              <li className="flex items-center gap-3 text-slate-200"><Lock className="w-5 h-5 text-blue-400" /> Zero-trust access controls</li>
              <li className="flex items-center gap-3 text-slate-200"><Eye className="w-5 h-5 text-cyan-400" /> Real-time threat monitoring</li>
              <li className="flex items-center gap-3 text-slate-200"><CheckCircle className="w-5 h-5 text-blue-400" /> Compliance and risk management</li>
              <li className="flex items-center gap-3 text-slate-200"><Globe className="w-5 h-5 text-cyan-400" /> Secure cloud migration & ongoing support</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  </div>
);

export default CloudSecurityPage; 