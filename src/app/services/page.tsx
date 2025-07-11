"use client";
import React, { useEffect, useRef } from "react";
import { Zap, Globe, Shield, Lock, Eye, Users, Award, Layers, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Stat {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Cloud Security",
    description: "Secure your cloud journey with end-to-end encryption, zero-trust access, and real-time threat detection.",
    icon: <Shield className="w-10 h-10 text-cyan-400" />,
  },
  {
    title: "DevSecOps",
    description: "Shift security left—automate compliance checks in every build for faster, safer releases.",
    icon: <Lock className="w-10 h-10 text-blue-400" />,
  },
  {
    title: "Vulnerability Management",
    description: "Uncover and remediate weaknesses before they’re exploited—shrink your attack surface.",
    icon: <Eye className="w-10 h-10 text-cyan-400" />,
  },
  {
    title: "Managed SOC",
    description: "24/7 threat hunting and rapid response from our experts.",
    icon: <Users className="w-10 h-10 text-blue-400" />,
  },
  {
    title: "Penetration Testing",
    description: "Simulated attacks to expose blind spots and fortify your defenses.",
    icon: <Zap className="w-10 h-10 text-cyan-400" />,
  },
  {
    title: "Cyber Awareness Training",
    description: "Bite-sized lessons that make every employee a security asset.",
    icon: <Globe className="w-10 h-10 text-blue-400" />,
  },
];

const stats: Stat[] = [
  {
    value: "10+",
    label: "Years Experience",
    icon: <Award className="w-6 h-6" />,
  },
  {
    value: "500+",
    label: "Clients Protected",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    value: "99.9%",
    label: "Uptime Guarantee",
    icon: <CheckCircle className="w-6 h-6" />,
  },
  {
    value: "24/7",
    label: "Security Monitoring",
    icon: <Eye className="w-6 h-6" />,
  },
];

const ServicesPage: React.FC = () => {
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (floatingRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 20;
        const y = (clientY / innerHeight - 0.5) * 20;
        floatingRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${y * 0.5}deg) rotateY(${x * 0.5}deg)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-slate-950">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <div
              ref={floatingRef}
              className="inline-block perspective-1000 transition-transform duration-100"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <Layers className="w-24 h-24 text-cyan-400 relative z-10 mx-auto drop-shadow-lg" />
              </div>
            </div>
            <div className="space-y-6">
              <Badge variant="outline" className="text-base px-6 py-2 animate-on-scroll opacity-0 translate-y-4 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 transition-all duration-700 border-cyan-500/30 text-cyan-300 bg-cyan-900/50">
                Our Services
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-cyan-300 to-blue-300 bg-clip-text text-transparent mb-6 animate-on-scroll opacity-0 translate-y-8 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 transition-all duration-700 delay-200 font-designer">
                What We Offer
              </h1>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-on-scroll opacity-0 translate-y-8 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 transition-all duration-700 delay-400">
                Explore our comprehensive suite of cybersecurity services designed to protect your business from evolving threats and empower your growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-bounce" style={{animationDuration: '6s'}} />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-bounce" style={{animationDuration: '8s', animationDelay: '-2s'}} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-on-scroll opacity-0 translate-y-8 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 transition-all duration-700"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="relative p-4 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-2xl backdrop-blur-sm border border-cyan-400/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-cyan-400/25">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-2xl group-hover:from-cyan-400/20 group-hover:to-blue-400/20 transition-all duration-500"></div>
                    <div className="relative text-cyan-400 group-hover:text-cyan-400/80 transition-colors duration-300">
                      {stat.icon}
                    </div>
                  </div>
                </div>
                <div className="text-4xl font-black text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-slate-300 text-sm tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Grid Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative bg-slate-950">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-on-scroll opacity-0 translate-y-8 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 transition-all duration-700">
            <Badge variant="outline" className="mb-6 text-cyan-400 border-cyan-400/30">
              Our Expertise
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 font-designer">
              Cybersecurity Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We deliver tailored solutions to meet your unique security needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <Card key={idx} className="relative group p-8 text-center border-0 bg-slate-900/80 backdrop-blur-sm hover:bg-slate-900/90 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-on-scroll opacity-0 translate-y-8 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-blue-400/5 to-cyan-400/8 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 space-y-6">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                  <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-block mt-4">
                    <Button size="sm" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-colors duration-300">
                      Details
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 