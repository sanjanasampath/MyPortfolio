// data/portfolio.ts
import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  profile: {
    name: "Sanjana Sampath Kumar",
    role: "Full-stack Developer",
    socials: {
      github: "https://github.com/sanjanasampath",
      linkedin: "https://linkedin.com/in/sanjusampath2602/",
      mail: "mailto:sanjusampath2602@gmail.com",
    }
  },
  skills: [
    "ReactJS", "NextJS", "TypeScript", "JavaScript","HTML5", "TailwindCSS", "Figma", "NodeJS", "ExpressJS", "Python", "Java Hibernate", "PHP", "MongoDB", "PostgreSQL",
     "REST", "JWT", "PowerBI", "AWS Lambda", "Azure", "Gen AI", "OpenAI API", "LangChain", "Git", "GitHub Actions", "Docker", "Agile", "SAFe"
  ],
  about: "I am a Full-stack developer with a passion for building scalable and efficient web and chat applications. With extensive experience in both front-end and back-end development, I leverage technologies like ReactJS, NodeJS, and AWS to create seamless user experiences. My collaborative approach and commitment to innovation enable me to deliver high-quality solutions that meet diverse stakeholder needs.",
  projects: [
    {
      title: "Stock Simulator",
      description: "A web application that allows users to simulate stock trading.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
      github: "https://github.com/sanjanasampath/StockSimulator",
      preview: "https://drive.google.com/file/d/1hIux4YV73lTgg3GUnF8znYRbxs-ov3PR/view?usp=sharing"
    },
    {
      title: "My Portfolio",
      description: "A portfolio showcasing my projects and skills, for a modern web experience.",
      tech: ["NextJS", "TypeScript", "Tailwind"],
      link: "#",
      github: "https://github.com/sanjanasampath/MyPortfolio",
      preview: "https://task-app-demo.com"
    },
    // {
    //   title: "AI Recruiting Assistant",
    //   description: "An AI-powered application that assists by automating candidate screening.",
    //   tech: ["LangChain", "Python"],
    //   link: "#",
    //   github: "https://github.com/sanjanasampath/AiAssist",
    //   preview: "https://dashboard-demo.com"
    // }
  ],
  experiences: [
    {
      title: "Full-Stack Developer",
      company: "AudaSynth",
      location: "Turin, Italy",
      type: "Part-time",
      period: "2023 - Present",
      description: "Actively gathered inputs and requirements from business stakeholders and investors, ensuring platform alignment with strategic goals. Designed and implemented front-end and back-end components using modern technologies to deliver seamless user experience.",
      technologies: ["React", "Node.js", "AWS", "Docker"]
    },
    {
      title: "Full-Stack Chatbot Developer",
      company: "Eli Lilly Pharmaceuticals",
      location: "Bangalore, India",
      type: "Full-time",
      period: "2022 - 2023",
      description: "Led development of innovative chatbot framework reducing bot building time from six months to one month, achieving 83% reduction in development time. Developed Power BI dashboard improving chatbot performance insights across therapeutic areas, boosting user engagement by 40%.",
      technologies: ["Angular", "Python", "PostgreSQL", "Redis"]
    },
    {
      title: "Full-Stack Chatbot Developer",
      company: "Allstate Insurance",
      location: "Bangalore, India",
      type: "Full-time",
      period: "2019 - 2022",
      description: "Developed multiple bots for various use cases, including internal and external-facing conversational applications. Created libraries and reusable components while improving bot accuracy by 130% through transcript analysis and feature implementation.",
      technologies: ["Angular", "Python", "PostgreSQL", "Redis"]
    },
    {
      title: "Full-Stack Developer",
      company: "PowerUp Cloud Technologies",
      location: "Bangalore, India",
      type: "Full-time",
      period: "2017 - 2019",
      description: "Developed a reliable chatbot product that significantly contributed to company acquisition. Led a team of 3 junior developers while building cloud-based SaaS applications, ensuring high performance and scalability.",
      technologies: ["Angular", "Python", "PostgreSQL", "Redis"]
    }
  ]
};