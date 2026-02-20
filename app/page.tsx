'use client'
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Terminal,
  Cpu,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Github,
  Linkedin,
  MonitorSmartphone,
  ServerCog,
  Bot,
  Twitter,
  Instagram,
  Ghost
} from 'lucide-react';

// --- DATA ---
const EXPERIENCES = [
  {
    company: "Homiee",
    role: "Full Stack Developer",
    location: "Australia (Remote)",
    period: "2025 — Present",
    description: [
      "Architected and developed core systems for a real estate web platform serving the Australian market.",
      "Designed and built production-grade user interfaces in Next.js and React, including dashboards, video interaction panels, and AI chat interfaces.",
      "Engineered a real-time AI-powered chat system enabling Q/A between users and intelligent agents using NLP-driven workflows."
    ],
    tech: ["Next.js", "React", "Node.js", "Python", "AWS", "OpenAI"]
  },
  {
    company: "Elobbs Technologies",
    role: "Full-Stack Engineer",
    location: "Remote - Bangladesh",
    period: "2023 — 2025",
    description: [
      "Developed and maintained NestJS backend services for a job posting and contract management platform.",
      "Implemented RESTful APIs for job listings, contracts, and user workflows.",
      "Built a Google Business Reviews aggregation system using Go (Golang) microservices."
    ],
    tech: ["NestJS", "Node.js", "PostgreSQL", "MongoDB", "Golang", "React"]
  }
];

const PROJECTS = [
  {
    title: "AudienceAce",
    category: "AI Platform",
    description: "AI-powered B2B lead generation platform utilizing an NLP engine.",
    link: "https://audienceace.com",
    color: "bg-amber-100",
    textColor: "text-amber-700"
  },
  {
    title: "MetiBuy",
    category: "E-Commerce",
    description: "Premium multi-vendor marketplace with scalable serverless architecture.",
    link: "https://metibuy.shop",
    color: "bg-teal-100",
    textColor: "text-teal-700"
  },
  {
    title: "MeetingFlow",
    category: "Productivity",
    description: "AI productivity platform interface for meeting optimization.",
    link: "https://meetingflow.vercel.app/",
    color: "bg-rose-100",
    textColor: "text-rose-700"
  },
  {
    title: "Exams Made Easy",
    category: "EdTech",
    description: "Academic resource platform with localized payment gateways.",
    link: "https://exam-made-easy.com",
    color: "bg-indigo-100",
    textColor: "text-indigo-700"
  },
  {
    title: "Homiee Real Estate",
    category: "Real Estate",
    description: "Platform handling 100+ active listings with streamlined UX.",
    color: "bg-emerald-100",
    textColor: "text-emerald-700"
  },
  {
    title: "Google Business Revs",
    category: "Microservices",
    description: "Dashboard aggregating GMB data for real-time insights.",
    link: "https://gmbrevs.com/",
    color: "bg-blue-100",
    textColor: "text-blue-700"
  }
];

// --- COMPONENTS ---

// Circular Text Badge Component
const CircularBadge = () => {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
      <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <path
            id="circlePath"
            d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            fill="transparent"
          />
          <text className="text-[11px] font-bold tracking-widest text-slate-800 uppercase">
            <textPath href="#circlePath" startOffset="0%">
              • FULL STACK SOFTWARE ENGINEER
            </textPath>
          </text>
        </svg>
      </div>
      <Code2 className="text-teal-700 w-8 h-8" />
    </div>
  );
};

export default function App() {
  return (
    <div className="bg-[#FBFBF9] min-h-screen text-slate-800 font-sans selection:bg-teal-200 selection:text-teal-900">

      {/* HEADER */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="text-2xl font-black tracking-tighter text-slate-900" style={{ fontFamily: 'cursive' }}>
          Martin
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500 uppercase tracking-wide">
          <a href="#services" className="hover:text-teal-700 transition-colors">Services</a>
          <a href="#works" className="hover:text-teal-700 transition-colors">Works</a>
          <a href="#experience" className="hover:text-teal-700 transition-colors">Experience</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+260779699188" className="hidden lg:block text-sm font-semibold hover:text-teal-700 transition-colors">+260 779 699 188</a>
          <a href="mailto:martin.codegene@gmail.com" className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-teal-700 hover:bg-teal-50 transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 grid lg:grid-cols-3 gap-12 items-center">

        {/* Left Col */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center gap-8 relative z-10 lg:pl-12 order-2 lg:order-1"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl lg:text-7xl font-bold text-slate-900 drop-shadow-sm"
          >
            Hey There,<br />I'm Martin
          </motion.h1>

          <a href="mailto:martin.codegene@gmail.com" className="text-teal-700 font-semibold text-lg hover:underline hover:text-teal-900 transition-colors">
            martin.codegene@gmail.com
          </a>
          <div className="hidden lg:block mt-4">
            <h3 className="text-4xl font-bold text-slate-900">3+</h3>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-tight mt-1">Years<br />Experience</p>
          </div>
        </motion.div>

        {/* Center Col - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center order-1 lg:order-2"
        >
          {/* Subtle abstract background shape */}
          <div className="absolute inset-0 z-0 flex items-center justify-center transform scale-125 -translate-y-4">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-teal-700/5 fill-current">
              <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.4,-46.3C91,-33.4,97.2,-17.7,96.8,-2.2C96.4,13.3,89.5,28.6,79.5,41.2C69.5,53.8,56.5,63.7,42.4,71.6C28.3,79.5,14.1,85.5,-0.6,86.5C-15.4,87.6,-30.8,83.7,-43.8,75C-56.8,66.3,-67.4,52.8,-76.1,38.1C-84.8,23.3,-91.6,7.2,-89.9,-8C-88.3,-23.2,-78.2,-37.5,-66.1,-48.5C-54,-59.5,-40,-67.2,-26.3,-74.6C-12.6,-82.1,0.8,-89.3,14.7,-88.2C28.6,-87,42.5,-77.5,50.7,-70.6L44.7,-76.4Z" transform="translate(100 100) scale(1.1)" />
            </svg>
          </div>

          <div className="relative z-10 w-64 h-80 lg:w-80 lg:h-[400px]">
            {/* The actual image cropped organically */}
            <img
              src="https://metibuyshop-storage-2026.s3.amazonaws.com/gallery/e539465c-f04e-4169-9492-64f81f3c572f.jpeg"
              alt="Martin Genomics"
              className="w-full h-full object-cover shadow-2xl relative z-10 bg-white"
              style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
            />
          </div>
        </motion.div>

        {/* Right Col */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-between h-full py-8 items-end text-right relative z-10 order-3 lg:pr-12"
        >
          <p className="text-slate-600 font-medium max-w-xs leading-relaxed text-left lg:text-right">
            I architect and build exceptional, scalable, and AI-driven digital experiences for the web. And I love what I do.
          </p>
          <div className="mt-12 hidden lg:block">
            <CircularBadge />
          </div>
        </motion.div>

      </section>

      {/* WHAT DO I HELP? (SERVICES) */}
      <section id="services" className="bg-white py-24 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.02)] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Services Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {}
            }}
            className="relative space-y-4 lg:pl-12"
          >

            {/* Card 1 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center gap-6 transform transition-transform hover:-translate-y-1 border border-slate-50 relative z-20"
            >
              <div className="w-14 h-14 rounded-full bg-[#1F6E65] flex items-center justify-center text-white shrink-0">
                <MonitorSmartphone size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">Frontend Development</h4>
                <p className="text-slate-500 text-sm mt-1">React, Next.js, UI/UX Implementation</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center gap-6 transform lg:-translate-x-8 transition-transform hover:-translate-y-1 hover:-translate-x-8 border border-slate-50 relative z-10"
            >
              <div className="w-14 h-14 rounded-full bg-[#F4C150] flex items-center justify-center text-white shrink-0">
                <Bot size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">AI Integration</h4>
                <p className="text-slate-500 text-sm mt-1">LLMs, OpenAI Agents, NLP Workflows</p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center gap-6 transform transition-transform hover:-translate-y-1 border border-slate-50 relative z-0"
            >
              <div className="w-14 h-14 rounded-full bg-[#E85D4E] flex items-center justify-center text-white shrink-0">
                <ServerCog size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">Backend Systems</h4>
                <p className="text-slate-500 text-sm mt-1">NestJS, Node.js, Microservices, AWS</p>
              </div>
            </motion.div>

          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:pr-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">What do I help?</h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                I help you find a solution and solve your problems. I bridge complex backend microservices with sleek, highly interactive frontend experiences to create premium digital products.
              </p>
              <p>
                Whether it's an AI-powered lead generation platform, a real estate portal, or a scalable e-commerce backend, I deliver production-ready code.
              </p>
            </div>

            <div className="flex items-center gap-12 mt-12 pt-8 border-t border-slate-100">
              <div>
                <h3 className="text-4xl font-bold text-slate-900">8+</h3>
                <p className="text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wider">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-slate-900">100%</h3>
                <p className="text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wider">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* MY WORK EXPERIENCE */}
      <section id="experience" className="py-24 bg-[#FBFBF9]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 text-center mb-16"
          >
            My Work Experience
          </motion.h2>

          <div className="relative">
            {/* Center Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>

            <div className="space-y-12">
              {EXPERIENCES.map((exp, index) => {
                const isEven = index % 2 === 0;
                // Colors match the dots in the design
                const dotColor = index === 0 ? 'bg-[#1F6E65]' : index === 1 ? 'bg-[#E85D4E]' : 'bg-[#F4C150]';

                return (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    key={index}
                    className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >

                    {/* Date / Location (Left/Right alternating) */}
                    <div className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:items-start md:pl-12' : 'md:items-end md:pr-12'} mb-4 md:mb-0 text-left md:text-right`}>
                      <h4 className={`text-xl font-bold text-slate-900 ${isEven ? 'text-left' : ''}`}>{exp.company}</h4>
                      <p className="text-slate-500 text-sm mt-1">{exp.period}</p>
                      <p className="text-slate-400 text-sm flex items-center gap-1 mt-1 justify-start md:justify-end">
                        <MapPin size={14} className={isEven ? '' : 'md:order-last'} />
                        <span>{exp.location}</span>
                      </p>
                    </div>

                    {/* Center Dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border border-slate-200 items-center justify-center z-10 shadow-sm">
                      <div className={`w-3 h-3 rounded-full ${dotColor}`}></div>
                    </div>

                    {/* Content (Right/Left alternating) */}
                    <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <h4 className="text-lg font-bold text-slate-900 mb-2">{exp.role}</h4>
                        <ul className={`text-slate-600 text-sm space-y-2 mb-4 ${isEven ? 'md:text-right' : 'text-left'}`}>
                          {exp.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                          ))}
                        </ul>
                        <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                          {exp.tech.map(t => (
                            <span key={t} className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-1 rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* LATEST WORKS */}
      <section id="works" className="py-24 bg-white rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.02)] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">My Latest Works</h2>
              <p className="text-slate-500">Perfect solution for digital experience</p>
            </div>
            <a href="https://github.com/metina-platforms" target="_blank" rel="noreferrer" className="text-teal-700 font-semibold hover:underline flex items-center gap-1 mt-4 md:mt-0">
              Explore More Works <ArrowUpRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {}
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {PROJECTS.map((project, index) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 30 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
                }}
                key={index}
                className="group flex flex-col h-full bg-[#FBFBF9] rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow cursor-pointer"
              >

                {/* Image / Graphic Placeholder */}
                <div className={`h-48 w-full p-6 flex flex-col justify-between ${project.color} relative overflow-hidden`}>
                  {/* Abstract decorations to make it look like a thumbnail */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-bl-full -mr-8 -mt-8"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/5 rounded-tr-full -ml-4 -mb-4"></div>

                  <span className={`text-xs font-bold uppercase tracking-widest ${project.textColor} bg-white/50 w-max px-3 py-1 rounded-full backdrop-blur-sm`}>
                    {project.category}
                  </span>
                  <h3 className={`text-2xl font-bold ${project.textColor} mt-auto z-10`}>
                    {project.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors mt-auto">
                      View Project <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 mt-auto">
                      Internal Project
                    </span>
                  )}
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer className="bg-[#FBFBF9] pt-24 pb-12">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 border-b border-slate-200 pb-16">

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
              Let's make something<br />amazing together.
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              Start by <a href="mailto:martin.codegene@gmail.com" className="text-teal-700 hover:underline inline-flex items-center gap-2 border-b-2 border-teal-700/30 pb-1">saying hi <ArrowUpRight size={20} /></a>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm md:pl-12">
            <div>
              <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider">Information</h4>
              <p className="text-slate-500 leading-relaxed">
                Remote (Australia / Bangladesh)<br />
                Available for new opportunities
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider">Menu</h4>
              <ul className="space-y-3 text-slate-500">
                <li><a href="#services" className="hover:text-teal-700">Services</a></li>
                <li><a href="#works" className="hover:text-teal-700">Works</a></li>
                <li><a href="#experience" className="hover:text-teal-700">Experience</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center mt-8 text-slate-500 text-sm">
          <div className="text-xl font-black tracking-tighter text-slate-900 mb-4 md:mb-0" style={{ fontFamily: 'cursive' }}>
            Martin
          </div>
          <p>© 2026 Martin Genomics. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://github.com/metina-platforms" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-slate-900"><Github size={18} /></a>
            <a href="https://twitter.com/martintembo_1" target="_blank" rel="noreferrer" aria-label="X (Twitter)" className="hover:text-slate-900"><Twitter size={18} /></a>
            <a href="https://instagram.com/martintembo.zm" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-slate-900"><Instagram size={18} /></a>
            <a href="https://snapchat.com/add/martintembo1" target="_blank" rel="noreferrer" aria-label="Snapchat" title="Snapchat: martintembo1" className="hover:text-slate-900"><Ghost size={18} /></a>
            <a href="https://www.linkedin.com/in/martin-tembo-3844b3186/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-slate-900"><Linkedin size={18} /></a>
          </div>
        </div>
      </footer>

    </div>
  );
}