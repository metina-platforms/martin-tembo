'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Terminal,
  Code2,
  Cpu,
  Globe,
  Layout,
  Database,
  Search,
  Truck,
  ShoppingBag,
  CalendarCheck,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';




// ==========================================
// SECTION 2: UI PRIMITIVES
// ==========================================


const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-2 py-1 text-[10px] uppercase tracking-wider font-medium text-neutral-400 border border-neutral-800 rounded bg-neutral-900/50">
    {children}
  </span>
);



// ==========================================
// SECTION 3: SUB-COMPONENTS
// ==========================================




// ==========================================
// SECTION 4: MAIN LAYOUT & APP
// ==========================================

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="bg-black min-h-screen text-neutral-400 font-sans selection:bg-white/20 selection:text-white overflow-x-hidden">

      {/* Dynamic Background Glow - Following Mouse */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 80%)`
        }}
      />

      {/* Subtle Grid Texture */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 relative z-10">
        <div className="lg:flex lg:justify-between lg:gap-4">

          {/* Left Panel (Fixed) */}
          <Sidebar />

          {/* Right Panel (Scrollable) */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />

            <footer className="max-w-md pb-16 text-sm text-neutral-500 sm:pb-0">
              <p>
                Coded in <span className="text-white">Visual Studio Code</span>. Built with <span className="text-white">Next.js</span> and <span className="text-white">Tailwind CSS</span>, deployed with <span className="text-white">Vercel</span>.
              </p>
              <p className="mt-4">
                © {new Date().getFullYear()} Martin Tembo.
              </p>
            </footer>
          </main>

        </div>
      </div>
    </div>
  );
}