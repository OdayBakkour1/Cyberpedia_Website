"use client";
import React from "react";
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <nav className="bg-slate-900 border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Image src="/CYBERPEDIA Logo NAV.png" alt="CYBERPEDIA Logo" width={160} height={160} className="w-40 h-40 my-[-32px]" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`text-slate-300 hover:text-cyan-400 transition-colors${pathname === '/' ? ' text-cyan-400' : ''} font-designer`}>Home</Link>
            <Link href="/about" className={`text-slate-300 hover:text-cyan-400 transition-colors${pathname === '/about' ? ' text-cyan-400' : ''} font-designer`}>About us</Link>
            <Link href="/services" className={`text-slate-300 hover:text-cyan-400 transition-colors${pathname === '/services' ? ' text-cyan-400' : ''} font-designer`}>Services</Link>
            <a
              href="https://blog.cyberpedia.site/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-slate-300 hover:text-cyan-400 transition-colors font-designer`}
            >
              Blog
            </a>
            <Link href="/internships" className={`text-slate-300 hover:text-cyan-400 transition-colors${pathname === '/internships' ? ' text-cyan-400' : ''} font-designer`}>Internships</Link>
            {/* Desktop nav */}
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
              <Link href="/contact" className="w-full h-full block">Contact Us</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-cyan-500/20">
          <div className="px-4 py-4 space-y-4">
            <Link href="/" className={`block text-slate-300 hover:text-cyan-400${pathname === '/' ? ' text-cyan-400' : ''} font-designer`}>Home</Link>
            <Link href="/about" className={`block text-slate-300 hover:text-cyan-400${pathname === '/about' ? ' text-cyan-400' : ''} font-designer`}>About us</Link>
            <Link href="/services" className={`block text-slate-300 hover:text-cyan-400${pathname === '/services' ? ' text-cyan-400' : ''} font-designer`}>Services</Link>
            <a
              href="https://blog.cyberpedia.site/"
              target="_blank"
              rel="noopener noreferrer"
              className={`block text-slate-300 hover:text-cyan-400 font-designer`}
            >
              Blog
            </a>
            <Link href="/internships" className={`block text-slate-300 hover:text-cyan-400${pathname === '/internships' ? ' text-cyan-400' : ''} font-designer`}>Internships</Link>
            {/* Mobile nav */}
            <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
              <Link href="/contact" className="w-full h-full block">Contact Us</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
} 