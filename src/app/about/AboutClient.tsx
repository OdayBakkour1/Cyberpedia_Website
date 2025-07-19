"use client";
import React, { useEffect, useRef } from "react";
import { Shield, Lock, Eye, Users, Award, CheckCircle, Target, Zap, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProfileCard from '@/components/ProfileCard';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  expertise: string[];
  email?: string;
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

const AboutClient: React.FC = () => {
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
      image: "/jamel.webp",
      expertise: [],
      email: "jameel.tawelh@cyberpedia.site",
    },
    {
      name: "Obayda Abu kwader",
      role: "CO-Founder Of Cyberpedia",
      image: "/oub.webp",
      expertise: [],
      email: "obayda.ak@cyberpedia.site",
    },
    {
      name: "Oday Bakkour",
      role: "Operations Manager",
      image: "/Oday.webp",
      expertise: [],
      email: "oday.bakkour@cyberpedia.site",
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

  // ... (rest of the About page JSX, copy from original page)
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Hero Section */}
      {/* ...rest of the JSX from AboutPage... */}
    </div>
  );
};

export default AboutClient; 