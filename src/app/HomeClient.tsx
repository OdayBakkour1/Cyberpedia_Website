"use client";
import React from 'react';
import { Shield, Lock, Eye, Users, CheckCircle, Zap, Globe, UserCheck, Timer, Globe2, Star, Layers, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StatProps {
  number: string;
  label: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <Card className="group relative p-6 bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-cyan-500/20 transform-gpu perspective-1000">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
    <div className="relative z-10">
      <div className="mb-4 text-cyan-400 group-hover:text-cyan-300 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-100 transition-colors duration-300">{title}</h3>
      <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">{description}</p>
    </div>
    <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
  </Card>
);

const Stat: React.FC<StatProps> = ({ number, label }) => (
  <div className="text-center group cursor-default">
    <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300 transform">
      {number}
    </div>
    <div className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">{label}</div>
    <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-2 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
  </div>
);

const HomeClient: React.FC = () => {
  const services = [
    {
      icon: <Shield className="w-12 h-12" />, title: "Cloud Security", description: "Secure your cloud journey with end-to-end encryption, zero-trust access, and real-time threat detection."
    },
    {
      icon: <Lock className="w-12 h-12" />, title: "DevSecOps", description: "Shift security left—automate compliance checks in every build for faster, safer releases."
    },
    {
      icon: <Eye className="w-12 h-12" />, title: "Vulnerability Management", description: "Uncover and remediate weaknesses before they’re exploited—shrink your attack surface."
    },
    {
      icon: <Users className="w-12 h-12" />, title: "Managed SOC", description: "24/7 threat hunting and rapid response from our experts."
    },
    {
      icon: <Zap className="w-12 h-12" />, title: "Penetration Testing", description: "Simulated attacks to expose blind spots and fortify your defenses."
    },
    {
      icon: <Globe className="w-12 h-12" />, title: "Cyber Awareness Training", description: "Bite-sized lessons that make every employee a security asset."
    }
  ];

  const features = [
    {
      icon: <UserCheck className="w-8 h-8 text-cyan-400 mb-4" />,
      title: "Manual, Human-Centric Testing",
      description: "We go beyond automated scans. Every penetration test is conducted manually by experts to uncover deep, business-critical vulnerabilities."
    },
    {
      icon: <Timer className="w-8 h-8 text-cyan-400 mb-4" />,
      title: "Fast Response. Transparent",
      description: "We operate with agility and clarity. You’ll always know what we’re doing, why it matters, and how it protects your organization."
    },
    {
      icon: <Globe2 className="w-8 h-8 text-cyan-400 mb-4" />,
      title: "Regional Roots. Global Reach",
      description: "From Syria to the UK, Germany, and the Gulf — our impact is international, our dedication is local."
    },
    {
      icon: <Star className="w-8 h-8 text-cyan-400 mb-4" />,
      title: "Proven Expertise",
      description: "We are a team of 40+ cybersecurity professionals, including certified penetration testers, SOC analysts, and security engineers with real-world experience."
    },
    {
      icon: <Layers className="w-8 h-8 text-cyan-400 mb-4" />,
      title: "Tailored Solutions, Not Templates",
      description: "We don’t offer off-the-shelf security. Every recommendation, report, and defense strategy is tailored to your environment, goals, and risk appetite."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-cyan-400 mb-4" />,
      title: "Continuous Improvement",
      description: "We constantly evolve our methodologies and tools to stay ahead of emerging threats, ensuring your security posture is always up to date."
    }
  ];

  const stats = [
    { number: "10+", label: "Years of experience" },
    { number: "2,000+", label: "Trainer" },
    { number: "500+", label: "Tech Article" },
    { number: "40+", label: "Cyber Security Expert" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-slate-950">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="grid grid-cols-8 gap-4 opacity-10">
              {[...Array(64)].map((_, i) => (
                <div key={i} className={`w-2 h-2 bg-cyan-400 rounded-full animate-pulse`} style={{animationDelay: `${i * 100}ms`}} />
              ))}
            </div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-6 bg-cyan-900/50 text-cyan-300 border-cyan-500/30 hover:scale-105 transition-transform duration-300 cursor-default">Advanced Cybersecurity Solutions</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-blue-300 bg-clip-text text-transparent animate-pulse font-designer">Protect Your Digital Assets with Cyberpedia</h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed hover:text-slate-200 transition-colors duration-300">Comprehensive cybersecurity services designed to safeguard your business from evolving threats. Our expert team provides 24/7 protection with cutting-edge technology.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white">Start Free Assessment</Button>
              <Button size="lg" variant="default" className="border border-cyan-500 text-cyan-400 bg-transparent hover:bg-cyan-500/10">Learn More</Button>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-bounce" style={{animationDuration: '6s'}} />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-bounce" style={{animationDuration: '8s', animationDelay: '-2s'}} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <Stat number={stat.number} label={stat.label} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Who We Are Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/80 border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center font-designer">Who We Are</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left: Vision & Mission */}
            <div className="flex flex-col gap-8">
              <div className="bg-slate-900/80 border border-cyan-500/10 rounded-xl p-6 shadow flex flex-col items-start">
                <Eye className="w-8 h-8 text-cyan-400 mb-2" />
                <h3 className="text-xl font-semibold text-white mb-2">OUR VISION</h3>
                <p className="text-slate-300">To build a world where every organization no matter how large or small—can innovate and grow with total confidence in their digital security.</p>
              </div>
              <div className="bg-slate-900/80 border border-cyan-500/10 rounded-xl p-6 shadow flex flex-col items-start">
                <Target className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="text-xl font-semibold text-white mb-2">OUR MISSION</h3>
                <p className="text-slate-300">To deliver best-in-class, people-powered cybersecurity solutions that are accessible, proactive, and tailored to the unique needs of each client.</p>
              </div>
            </div>
            {/* Center: Image */}
            <div className="flex justify-center items-center">
              <Image src="/CYBERPEDIA-Logo.webp" alt="Who We Are" width={400} height={200} className="rounded-xl object-contain w-full max-w-xs md:max-w-sm lg:max-w-md shadow-lg border border-cyan-500/10 bg-slate-900/60" priority />
            </div>
            {/* Right: Summary & Button */}
            <div className="flex flex-col h-full justify-between">
              <div>
                <p className="text-slate-300 text-lg mb-6">Cyberpedia is a leading cybersecurity partner on a mission to help you run your business securely and successfully.<br/><br/>With a team of seasoned security analysts, engineers, and trainers, we bring decades of combined expertise to every engagement.<br/><br/>We blend pioneering technology with a human touch so you’re not just buying tools, but gaining a trusted partner who truly understands your challenges.<br/><br/>From continuous monitoring and vulnerability management to incident response and hands-on training, we make high-impact security both straightforward and sustainable.</p>
              </div>
              <Button size="lg" variant="default" className="border border-cyan-500 text-cyan-400 bg-transparent hover:bg-cyan-500/10">Learn More</Button>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-designer">Our Security Services</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Comprehensive cybersecurity solutions tailored to protect your business from all angles</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-designer">Why Choose Us</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Discover what sets us apart in the cybersecurity landscape.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-950/80 border border-cyan-500/10 rounded-xl p-8 shadow-lg flex flex-col items-center text-center hover:border-cyan-400/40 transition-all duration-300">
                {feature.icon}
                <h4 className="text-lg font-semibold text-cyan-300 mb-2">{feature.title}</h4>
                <p className="text-slate-300 text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-slate-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-designer">Ready to Secure Your Business?</h2>
          <p className="text-xl text-slate-300 mb-8">Get started with a free security assessment and discover how we can protect your digital assets.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">Get Free Assessment</Button>
            <Button size="lg" variant="default" className="border border-cyan-500 text-cyan-400 bg-transparent hover:bg-cyan-500/10">Contact Sales</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeClient; 