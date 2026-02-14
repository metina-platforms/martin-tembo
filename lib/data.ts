
interface Project {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
    isPrivate?: boolean;
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

export const EXPERIENCES: Experience[] = [
    {
        company: "Homiee",
        role: "Full Stack Developer",
        location: "Australia (Remote)",
        period: "2025 — Present",
        description: [
            "Architecting a scalable real estate platform serving the Australian market.",
            "Building high-performance property search engines with sub-100ms latency.",
            "Developing agent-facing dashboards for property management."
        ],
        tech: ["Next.js", "MongoDB", "AWS", "Python"]
    },
    {
        company: "Elobbs Technologies",
        role: "Backend & Systems Lead",
        location: "Remote",
        period: "2023 — 2025",
        description: [
            "Engineered backend systems supporting 100,000+ active job listings.",
            "Reduced database query times by 40% through advanced PostgreSQL indexing.",
            "Designed secure authentication flows and role-based access control systems."
        ],
        tech: ["NestJS", "TypeScript", "PostgreSQL", "Docker"]
    },
    {
        company: "Elobbs Technologies",
        role: "Frontend Engineer",
        location: "Remote",
        period: "2023 — 2025",
        description: [
            "Built a Google Business Reviews aggregation system using Go (Golang) microservices.",
            "Implemented real-time data sync between external APIs and internal dashboards."
        ],
        tech: ["Golang", "Gin", "React", "GCP"]
    }
];

export const PROJECTS: Project[] = [
    {
        title: "MeetingFlow",
        description: "AI-powered productivity platform turning meetings into progress engines via automated agendas and action tracking.",
        tags: ["AI Engineering", "AWS", "Productivity"],
        link: "https://meetingflow.vercel.app/",
        featured: true
    },
    {
        title: "Shop Web App",
        description: "Premium full-stack e-commerce architecture prioritizing clean UX, scalability, and production-ready code.",
        tags: ["HonoJS", "PostgreSQL", "NextJS"],
        link: "https://myshop-enichip.vercel.app/",
        featured: true
    },
    {
        title: "AudienceAce",
        description: "NLP-driven lead generation agent scanning social platforms for high-intent buyer signals.",
        tags: ["AI Agents", "Python", "LLMs"],
        link: "https://www.audienceace.com/",
        featured: true
    },
    {
        title: "MetiBuy",
        description: "Next-gen e-commerce architecture leveraging Python FastAPI for AI recommendations.",
        tags: ["FastAPI", "TensorFlow", "PostgreSQL"],
        github: "https://github.com/metina-platforms/metibuy-client",
        featured: false
    },
    {
        title: "Google Business Reviews",
        description: "Microservices dashboard aggregating GMB data for real-time reputation insights.",
        tags: ["Golang", "Gin", "Docker"],
        link: "https://gmbrevs.com/",
        featured: false
    },
    {
        title: "Truck Logistics",
        description: "Enterprise route planning suite with HoS compliance and fleet telemetry.",
        tags: ["React", "Leaflet", "Vite"],
        github: "https://github.com/martin-genomics/truck-logistics-app",
        featured: false
    }
];

export const SKILLS = [
    { category: "Languages", items: ["TypeScript", "Golang", "Python", "SQL"] },
    { category: "Frameworks", items: ["Next.js", "NestJS", "FastAPI", "Hono"] },
    { category: "Infrastructure", items: ["AWS", "Docker", "Linux", "CI/CD"] },
    { category: "AI Engineering", items: ["RAG Pipelines", "LLM Integration", "Agents"] },
];