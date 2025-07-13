"use client";
import React, { useEffect, useRef } from "react";
import { Shield, Lock, Eye, Users, Award, CheckCircle, Target, Zap, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  expertise: string[];
}

interface Stat {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface Value {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AboutPage: React.FC = () => {
  const floatingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

  const teamMembers: TeamMember[] = [
    {
      name: "Jameel Tawelh",
      role: "Founder Of Cyberpedia",
      image: "/Jamel.webp",
      expertise: [],
    },
    {
      name: "Obayda Abu kwader",
      role: "CO-Founder Of Cyberpedia",
      image: "/Ouba.webp",
      expertise: [],
    },
    {
      name: "Oday Bakkour",
      role: "Operations Manager",
      image: "/Oday.webp",
      expertise: [],
    },
  ];

  const values: Value[] = [
    {
      title: "Excellence",
      description:
        "We strive for perfection in every security solution, ensuring the highest standards of protection.",
      icon: <Target className="w-8 h-8 text-cyan-500" />,
    },
    {
      title: "Innovation",
      description:
        "Cutting-edge technology and forward-thinking approaches to stay ahead of emerging threats.",
      icon: <Zap className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Trust",
      description:
        "Building lasting relationships through transparency, reliability, and unwavering commitment.",
      icon: <Heart className="w-8 h-8 text-pink-500" />,
    },
    {
      title: "Collaboration",
      description:
        "Working as an extension of your team to create comprehensive security strategies.",
      icon: <Users className="w-8 h-8 text-green-500" />,
    },
  ];

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
                <Shield className="w-24 h-24 text-cyan-400 relative z-10 mx-auto drop-shadow-lg" />
              </div>
            </div>
            <div className="space-y-6">
              <Badge variant="outline" className="text-base px-6 py-2 animate-on-scroll opacity-0 translate-y-4 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 transition-all duration-700 border-cyan-500/30 text-cyan-300 bg-cyan-900/50">
                About Us
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-cyan-300 to-blue-300 bg-clip-text text-transparent mb-6 animate-on-scroll opacity-0 translate-y-8 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 transition-all duration-700 delay-200 font-designer">
                We Are
                <span className="block">Cyberpedia</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-on-scroll opacity-0 translate-y-8 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 transition-all duration-700 delay-400">
                A team of cybersecurity experts dedicated to protecting what matters most to you.
                We combine cutting-edge technology with human expertise to create an impenetrable
                digital fortress around your business.
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
      {/* Mission Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll opacity-0 translate-x-8 [&.animate-in]:opacity-100 [&.animate-in]:translate-x-0 transition-all duration-1000">
              <div className="space-y-8">
                <div>
                  <Badge variant="outline" className="mb-4 text-cyan-400 border-cyan-400/30">
                    Our Purpose
                  </Badge>
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight font-designer">
                    Our
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Mission</span>
                  </h2>
                </div>
                <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                  <p>
                    We exist to democratize cybersecurity. Too many businesses struggle with complex,
                    expensive solutions that don&apos;t fit their needs. We&apos;re changing that narrative.
                  </p>
                  <p>
                    Our mission is simple: make enterprise-level security accessible, understandable,
                    and effective for organizations of every size. We believe protection shouldn&apos;t be a privilege—it&apos;s a right.
                  </p>
                  <p>
                    Through innovation, expertise, and genuine partnership, we&apos;re building a digital
                    world where security empowers rather than constrains business growth.
                  </p>
                </div>
                <div className="pt-4">
                  <Button className="group bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-400/90 hover:to-blue-400/90 text-white border-0 px-8 py-3 text-lg">
                    Discover Our Approach
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative animate-on-scroll opacity-0 translate-x-8 [&.animate-in]:opacity-100 [&.animate-in]:translate-x-0 transition-all duration-1000 delay-300">
              <div className="relative aspect-square">
                {/* Floating geometric shapes */}
                <div className="absolute inset-0 perspective-1000">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-cyan-400/30 rounded-3xl transform rotate-12 animate-bounce delay-0"></div>
                  <div className="absolute bottom-20 left-0 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-blue-400/30 rounded-2xl transform -rotate-12 animate-bounce delay-500"></div>
                  <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-cyan-400/25 to-blue-400/25 rounded-xl transform rotate-45 animate-bounce delay-1000"></div>
                </div>
                {/* Main 3D container */}
                <div className="relative w-full h-full bg-gradient-to-br from-slate-900/5 via-cyan-400/5 to-blue-400/5 rounded-3xl backdrop-blur-sm border border-cyan-400/10 overflow-hidden group hover:scale-105 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-400/10 to-cyan-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  {/* Floating lock icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700" style={{ transformStyle: "preserve-3d" }}>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-2xl opacity-30 scale-150 animate-pulse"></div>
                      <Lock className="w-32 h-32 text-cyan-400 relative z-10 drop-shadow-lg" />
                    </div>
                  </div>
                  {/* Orbiting elements */}
                  <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
                    <div className="absolute top-8 left-1/2 w-3 h-3 bg-cyan-400 rounded-full transform -translate-x-1/2"></div>
                    <div className="absolute bottom-8 left-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2"></div>
                    <div className="absolute top-1/2 left-8 w-2 h-2 bg-cyan-400 rounded-full transform -translate-y-1/2"></div>
                    <div className="absolute top-1/2 right-8 w-3 h-3 bg-blue-400 rounded-full transform -translate-y-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative bg-slate-950">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-on-scroll opacity-0 translate-y-8 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 transition-all duration-700">
            <Badge variant="outline" className="mb-6 text-cyan-400 border-cyan-400/30">
              Our Foundation
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 font-designer">
              What We
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Believe</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              These core values shape our culture, guide our decisions, and define how we serve our clients.
            </p>
          </div>
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <Card
                key={index}
                className="relative group p-8 text-center border-0 bg-slate-900/80 backdrop-blur-sm hover:bg-slate-900/90 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-on-scroll opacity-0 translate-y-8 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
                style={{
                  animationDelay: `${index * 200 + 500}ms`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-blue-400/5 to-cyan-400/8 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-slate-800/10 rounded-lg"></div>
                <div className="relative z-10 space-y-6">
                  <div className="flex justify-center">
                    <div className="relative p-4 bg-gradient-to-br from-slate-900 to-slate-950 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 border border-slate-200/10 dark:border-slate-700/10">
                      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"></div>
                      {value.icon}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </div>
                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500 delay-200"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative bg-slate-950">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-on-scroll opacity-0 translate-y-8 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 transition-all duration-700">
            <Badge variant="outline" className="mb-6 text-cyan-400 border-cyan-400/30">
              Our Experts
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 font-designer">
              Meet The
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Guardians</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              World-class cybersecurity professionals who live and breathe digital protection.
              Each brings unique expertise and years of battle-tested experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group animate-on-scroll opacity-0 translate-y-12 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 transition-all duration-700"
                style={{ animationDelay: `${index * 300 + 500}ms` }}
              >
                <Card className="relative overflow-hidden border-0 bg-slate-900/80 backdrop-blur-sm hover:bg-slate-900/90 transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-4">
                  {/* Floating background elements */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-sm"></div>
                    <div className="absolute bottom-8 left-6 w-6 h-6 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-sm"></div>
                  </div>
                  {/* Image container with 3D effect */}
                  <div className="relative aspect-square overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-400/20 to-cyan-400/25 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    {/* Overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="relative p-8 space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-cyan-400 font-semibold text-lg">
                        {member.role}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-slate-300 uppercase tracking-wider">
                        Expertise
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="text-xs bg-gradient-to-r from-cyan-400/10 to-blue-400/10 border border-cyan-400/20 hover:from-cyan-400/20 hover:to-blue-400/20 transition-all duration-300"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    {/* Animated indicator */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 