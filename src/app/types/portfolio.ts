// types/portfolio.ts
export interface Social {
    github: string;
    linkedin: string;
    mail: string;
  }
  
  export interface Profile {
    name: string;
    role: string;
    socials: Social;
  }
  
  export interface Project {
    title: string;
    description: string;
    tech: string[];
    link: string;
    github?: string;
    preview?: string;
  }
  
  export interface Experience {
    title: string;
    company: string;
    location: string;
    type: string;
    period: string;
    description: string;
    technologies: string[];
  }
  
  export interface PortfolioData {
    profile: Profile;
    skills: string[];
    about: string;
    projects: Project[];
    experiences: Experience[];
  }