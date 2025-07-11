"use client";
import React from "react";
import { Users, CheckCircle, Eye, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ManagedSOCPage: React.FC = () => (
  <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-slate-950">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        <div className="flex-1 flex flex-col items-center md:items-start space-y-8">
          <Badge variant="outline" className="text-base px-6 py-2 border-cyan-500/30 text-cyan-300 bg-cyan-900/50">Service Detail</Badge>
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-cyan-300 to-blue-300 bg-clip-text text-transparent mb-6 font-designer">Managed SOC</h1>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <Users className="w-20 h-20 text-blue-400 drop-shadow-lg" />
          </div>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-4">
            24/7 threat hunting and rapid response from our experts. Our SOC team monitors, detects, and responds to threats in real time, keeping your business safe around the clock.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-3 text-lg mt-2">
            Apply for Managed SOC
          </Button>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-end w-full">
          <Card className="bg-slate-900/80 p-8 w-full max-w-md shadow-xl border-cyan-500/10">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2 font-designer"><Users className="w-7 h-7 text-blue-400" /> Key Benefits</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-200"><Eye className="w-5 h-5 text-cyan-400" /> 24/7 monitoring & alerting</li>
              <li className="flex items-center gap-3 text-slate-200"><CheckCircle className="w-5 h-5 text-blue-400" /> Threat intelligence integration</li>
              <li className="flex items-center gap-3 text-slate-200"><Shield className="w-5 h-5 text-cyan-400" /> Rapid incident response</li>
              <li className="flex items-center gap-3 text-slate-200"><Users className="w-5 h-5 text-blue-400" /> Forensics & root cause analysis</li>
              <li className="flex items-center gap-3 text-slate-200"><CheckCircle className="w-5 h-5 text-cyan-400" /> Monthly security reporting</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  </div>
);

export default ManagedSOCPage; 