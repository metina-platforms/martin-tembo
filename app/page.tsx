'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Terminal, 
  Code2,
  ArrowRight,
  Truck,
  Smartphone,
  Search,
  Database,
  Globe,
  Briefcase,
  Layout,
  Lock,
  Download,
  Menu,
  X,
  MessageCircle,
  Cpu,
  Layers,
  Bot,
  Cloud,
  Network
} from 'lucide-react';

// --- Types ---

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  isPrivate?: boolean;
  icon: React.ElementType;
  featured?: boolean;
}

interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  tech: string[];
}

interface TechStack {
  category: string;
  icon: React.ElementType;
  skills: string[];
  highlight?: boolean;
}

// --- Data ---

const techStacks: TechStack[] = [
  {
    category: "Languages & Runtime",
    icon: Code2,
    skills: ["TypeScript", "JavaScript", "Python", "Golang", "Node.js"]
  },
  {
    category: "Frameworks",
    icon: Layers,
    skills: ["Next.js", "NestJS", "Express.js", "Hono JS", "FastAPI", "Gin", "Vite"]
  },
  {
    category: "AI Engineering",
    icon: Bot,
    highlight: true,
    skills: [
      "AI Agent Workflows", 
      "CLI Coding Agents", 
      "LLM Integration (OpenAI/Deepseek)", 
      "RAG Pipelines",
      "Python Automation"
    ]
  },
  {
    category: "Databases & ORM",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma", "TypeORM", "SQLAlchemy", "GORM"]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Docker", "AWS", "GitHub Actions", "CI/CD Pipelines", "Linux"]
  },
  {
    category: "System Design",
    icon: Network,
    skills: ["Domain Driven Design", "MVC Patterns", "Microservices", "Modular Architecture"]
  }
];

const projects: Project[] = [
  {
    title: "AudienceAce",
    description: "AI-powered lead generation utilizing NLP to scan social platforms (Reddit, LinkedIn) for high-intent buyer signals and automate outreach.",
    tags: ["AI Agents", "NestJS", "HonoJS", "Python", "LLMs"],
    link: "https://www.audienceace.com/",
    isPrivate: true,
    icon: Search,
    featured: true
  },
  {
    title: "Truck Logistics Planner",
    description: "Enterprise route planning suite featuring HoS compliance tracking, real-time fleet telemetry, and automated logbook generation.",
    tags: ["React", "TypeScript", "Leaflet Maps", "Vite"],
    github: "https://github.com/martin-genomics/truck-logistics-app",
    icon: Truck,
    featured: true
  },
  {
    title: "MetiBuy",
    description: "Next-gen e-commerce architecture leveraging Python FastAPI for AI recommendations and Next.js for a high-performance frontend.",
    tags: ["Next.js", "FastAPI", "TensorFlow", "PostgreSQL"],
    github: "https://github.com/metina-platforms/metibuy-client",
    icon: Smartphone,
    featured: true
  },
  {
    title: "Google Business Reviews",
    description: "Microservices-based analytics dashboard aggregating GMB data to provide actionable business reputation insights in real-time.",
    tags: ["Golang", "Gin", "Next.js", "Docker"],
    link: "https://gmbrevs.com/",
    isPrivate: true,
    icon: Database
  },
  {
    title: "Homiee",
    description: "Australian real estate marketplace featuring complex search filters, agent dashboards, and property listing management workflows.",
    tags: ["Next.js", "Express", "MongoDB", "AWS S3"],
    isPrivate: true,
    icon: Globe
  },
  {
    title: "Elobbs Jobs",
    description: "High-throughput job board handling 100k+ listings with optimized PostgreSQL indexing and a secure application tracking system.",
    tags: ["NestJS", "TypeScript", "Redis", "Docker"],
    isPrivate: true,
    icon: Briefcase
  },
  {
    title: "Notesai",
    description: "Serverless note-taking app demonstrating modern architecture patterns with prisma-based data access and edge computing.",
    tags: ["Next.js", "Serverless", "Prisma", "Kinde Auth"],
    github: "https://github.com/martin-genomics/notesai",
    icon: Layout
  }
];

const experiences: Experience[] = [
  {
    company: "Homiee",
    role: "Full Stack Developer",
    location: "Australia (Remote)",
    period: "Feb 2025 – Present",
    description: [
      "Architecting a scalable real estate platform serving the Australian market.",
      "Building high-performance property search engines with sub-100ms latency.",
      "Developing agent-facing dashboards for property management and analytics."
    ],
    tech: ["Next.js", "Node.js", "MongoDB", "AWS"]
  },
  {
    company: "Elobbs Technologies",
    role: "Backend & Systems Lead",
    location: "Remote",
    period: "Jun 2023 – Jan 2025",
    description: [
      "Engineered backend systems supporting 100,000+ active job listings.",
      "Reduced database query times by 40% through advanced PostgreSQL indexing.",
      "Designed secure authentication flows and role-based access control systems."
    ],
    tech: ["NestJS", "TypeScript", "PostgreSQL", "Docker"]
  },
  {
    company: "Elobbs Technologies",
    role: "Full Stack Developer",
    location: "Remote",
    period: "Jun 2023 – Jan 2025",
    description: [
      "Built a Google Business Reviews aggregation system using Go (Golang) microservices.",
      "Implemented real-time data sync between external APIs and internal dashboards.",
      "Created responsive frontend interfaces for complex data visualization."
    ],
    tech: ["Golang", "Gin", "React", "GCP"]
  }
];

// --- Animations ---

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const menuVariants = {
  closed: { 
    opacity: 0, 
    scale: 0.95, 
    y: -20,
    transition: { duration: 0.2 }
  },
  open: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.2 }
  }
};

// --- Components ---

const NavLink = ({ href, children, active, onClick }: { href: string; children: React.ReactNode; active?: boolean; onClick?: () => void }) => (
  <a 
    href={href} 
    onClick={onClick}
    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
      active ? 'text-cyan-400' : 'text-slate-400 hover:text-slate-100'
    }`}
  >
    {children}
    {active && (
      <motion.div 
        layoutId="activeTab"
        className="absolute inset-0 bg-white/5 rounded-full -z-10"
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      />
    )}
  </a>
);

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-4 h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
      />
    )}
  </div>
);

const TechBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 text-[11px] uppercase tracking-wider font-semibold text-cyan-300/80 bg-cyan-950/30 border border-cyan-900/30 rounded-md hover:bg-cyan-900/30 transition-colors cursor-default">
    {children}
  </span>
);

const TechStackCard = ({ stack }: { stack: TechStack }) => {
  const Icon = stack.icon;
  return (
    <motion.div
      variants={fadeInUp}
      className={`p-6 rounded-2xl border backdrop-blur-sm bg-slate-900/40 flex flex-col h-full hover:bg-slate-800/40 transition-colors duration-300 ${
        stack.highlight 
          ? 'border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.1)]' 
          : 'border-white/5 hover:border-white/10'
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-lg ${stack.highlight ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-400'}`}>
          <Icon size={20} />
        </div>
        <h3 className={`font-bold ${stack.highlight ? 'text-white' : 'text-slate-200'}`}>
          {stack.category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {stack.skills.map((skill) => (
          <span 
            key={skill} 
            className={`text-xs px-2 py-1 rounded border ${
              stack.highlight 
                ? 'bg-cyan-950/50 border-cyan-900/50 text-cyan-200' 
                : 'bg-slate-950/50 border-slate-800 text-slate-400'
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const Icon = project.icon;
  return (
    <motion.div 
      variants={fadeInUp}
      className="group relative flex flex-col h-full bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1"
    >
      {/* Featured Banner */}
      {project.featured && (
        <div className="absolute top-0 right-0">
          <div className="bg-gradient-to-bl from-cyan-500 to-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl shadow-lg">
            FEATURED
          </div>
        </div>
      )}

      <div className="p-8 flex flex-col h-full z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-slate-800/80 rounded-xl border border-white/5 text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300">
            <Icon size={24} />
          </div>
          
          <div className="flex gap-2">
            {project.isPrivate ? (
              <span className="p-2 text-slate-600" title="Private Repository">
                <Lock size={18} />
              </span>
            ) : project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-white transition-colors">
                <Github size={18} />
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-white transition-colors">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <TechBadge key={tag}>{tag}</TechBadge>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

const ExperienceCard = ({ exp, index }: { exp: Experience, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative pl-8 md:pl-12 border-l border-slate-800 pb-12 last:pb-0"
  >
    <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] ring-4 ring-slate-950" />
    
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
      <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
      <span className="text-sm font-medium text-cyan-400">{exp.company}</span>
    </div>
    
    <div className="flex items-center gap-4 text-xs font-mono text-slate-500 mb-6 uppercase tracking-wider">
      <span>{exp.period}</span>
      <span className="w-1 h-1 rounded-full bg-slate-700" />
      <span>{exp.location}</span>
    </div>

    <ul className="space-y-3 mb-6">
      {exp.description.map((item, i) => (
        <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start gap-3">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-700 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-2">
      {exp.tech.map((t) => (
        <span key={t} className="text-xs text-slate-500 border border-slate-800 px-2 py-1 rounded bg-slate-900/50">
          {t}
        </span>
      ))}
    </div>
  </motion.div>
);

// --- Main Layout ---

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 font-sans overflow-x-hidden">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* Navigation */}
      <div className="fixed top-0 md:top-6 left-0 right-0 z-50 flex justify-center md:px-4">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative w-full md:w-auto bg-slate-900/90 md:bg-slate-900/80 backdrop-blur-md md:border md:border-white/10 md:rounded-full px-6 py-4 md:py-3 shadow-2xl shadow-black/50 flex flex-col md:flex-row items-center md:gap-6"
        >
          <div className="flex justify-between items-center w-full md:w-auto">
            <a href="#" className="mr-4 p-1 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg text-white">
              <Terminal size={18} />
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-1">
            {['About', 'Projects', 'Experience'].map((item) => (
              <NavLink key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </NavLink>
            ))}
          </div>
          
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block ml-2 px-5 py-2 bg-slate-100 text-slate-900 text-sm font-bold rounded-full hover:bg-white transition-colors"
          >
            Let's Talk
          </motion.a>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="absolute top-full left-0 right-0 mt-2 p-4 bg-slate-900/95 border-b border-white/10 backdrop-blur-xl md:hidden flex flex-col gap-4 shadow-2xl"
              >
                {['About', 'Projects', 'Experience'].map((item) => (
                  <NavLink 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </NavLink>
                ))}
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-5 py-3 bg-cyan-600 text-white text-center text-sm font-bold rounded-lg hover:bg-cyan-500 transition-colors"
                >
                  Let's Talk
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 md:pt-48 pb-20">
        
        {/* Hero Section */}
        <section id="about" className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
          
          {/* Text Content */}
          <motion.div 
            initial="initial"
            animate="animate"
            variants={stagger}
            className="md:w-3/5"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 text-sm font-medium tracking-wide uppercase">Open to Work</span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
            >
              Building digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                intelligence.
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
              I'm <strong className="text-slate-100">Martin Tembo</strong>. I engineer scalable backend systems and high-performance web applications using Next.js, TypeScript, and Go.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6">
              <a 
                href="#projects" 
                className="group flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-medium transition-all"
              >
                View Selected Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-4 border-l border-slate-800 pl-6 ml-2">
                <SocialLink href="https://github.com/martin-genomics" icon={Github} />
                <SocialLink href="https://www.linkedin.com/in/martin-tembo-3844b3186" icon={Linkedin} />
                <SocialLink href="mailto:martin.codegene@gmail.com" icon={Mail} />
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-2/5 flex justify-center md:justify-end relative"
          >
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-[80px]" />
            
            {/* Image Container */}
            <div className="group relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-[2rem] rotate-6 group-hover:rotate-2 opacity-50 transition-all duration-500 blur-sm"></div>
              <div className="absolute inset-0 bg-slate-900 rounded-[2rem] rotate-3 group-hover:rotate-1 transition-all duration-500 border border-white/10"></div>
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden border-2 border-slate-700/50 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="/me.jpeg" 
                  alt="Martin Tembo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </section>

        {/* Tech Stack Cards */}
        <section className="py-10 mb-20">
          <SectionHeading subtitle="Expertise">Technical Arsenal</SectionHeading>
          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {techStacks.map((stack) => (
              <TechStackCard key={stack.category} stack={stack} />
            ))}
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 scroll-mt-20 border-t border-slate-900/50">
          <SectionHeading subtitle="Featured Work">Selected Projects</SectionHeading>
          
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 scroll-mt-20">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12">
            <div>
              <SectionHeading subtitle="Career">Work History</SectionHeading>
              <p className="text-slate-400 leading-relaxed mb-8">
                My journey involves building SaaS platforms, optimizing database architectures, and leading development teams in remote environments.
              </p>
              <a href="/resume.pdf" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                <Download size={18} /> Download Resume
              </a>
            </div>
            
            <div className="space-y-2">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-slate-900 to-slate-950 p-10 md:p-16 rounded-3xl border border-white/5 overflow-hidden text-center"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to collaborate?</h2>
              <p className="text-slate-400 text-lg mb-10">
                I'm currently available for freelance projects and full-time roles. 
                If you have a project that needs some serious engineering, let's chat.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="mailto:martin.codegene@gmail.com" 
                  className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-cyan-50 transition-colors"
                >
                  martin.codegene@gmail.com
                </a>
                <a 
                  href="https://wa.me/260779699188"
                  className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white font-bold rounded-full border border-slate-700 hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </section>

      </main>

      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-900/50">
        <p>© {new Date().getFullYear()} Martin Tembo. Engineered with precision.</p>
      </footer>
    </div>
  );
}

// --- Helpers ---

const SocialLink = ({ href, icon: Icon }: { href: string; icon: React.ElementType }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
  >
    <Icon size={22} />
  </a>
);