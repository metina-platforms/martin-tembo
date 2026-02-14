
export interface Project {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
    isPrivate?: boolean;
    featured?: boolean;
}

export interface Experience {
    company: string;
    role: string;
    location: string;
    period: string;
    description: string[];
    tech: string[];
}