"use client";
import React, { useEffect, useRef } from "react";
import { Shield } from "lucide-react";

const AboutClient: React.FC = () => {
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
                <Shield className="w-24 h-24 text-cyan-400 relative z-10 mx-auto drop-shadow-lg" />
              </div>
            </div>
            <div className="space-y-6">
              <span className="text-base px-6 py-2 animate-on-scroll opacity-0 translate-y-4 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 transition-all duration-700 border-cyan-500/30 text-cyan-300 bg-cyan-900/50 border rounded-full font-semibold">About Us</span>
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
      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/80 border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center font-designer">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-slate-900/80 border border-cyan-500/10 rounded-xl p-8 shadow flex flex-col items-center text-center">
                {value.icon}
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">{value.title}</h3>
                <p className="text-slate-300 text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutClient; 