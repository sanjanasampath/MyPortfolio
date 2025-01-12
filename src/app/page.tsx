// pages/index.tsx
import ProfileSection from '../components/ProfileSection';
import SkillsSection from '../components/SkillsSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import { portfolioData } from './data/portfolioData';

const Home = () => {
  // You can move this data to a separate data file
  // const portfolioData = {
  //   profile: {
  //     name: "Your Name",
  //     role: "Solopreneur Developer",
  //     socials: {
  //       github: "https://github.com/username",
  //       linkedin: "https://linkedin.com/in/username",
  //       twitter: "https://twitter.com/username"
  //     }
  //   },
  //   skills: [
  //     "TypeScript", "JavaScript", "Python", "Java", "C#", "C++", "C", "SQL",
  //     "HTML", "CSS", "TailwindCSS", "NextJS", "ReactJS", "NodeJS",
  //     "ExpressJS", "MongoDB", "PostgreSQL", "Git", "Docker"
  //   ],
  //   about: "I am a software engineer with a passion for building scalable and efficient web applications.",
  //   projects: [
  //     {
  //       title: "E-commerce Platform",
  //       description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
  //       tech: "React",
  //       link: "#"
  //     },
  //     // ... other projects
  //   ],
  //   experiences: [
  //     {
  //       title: "Senior Full-Stack Developer",
  //       company: "Tech Innovators Inc.",
  //       period: "2020 - Present",
  //       description: "Lead developer for multiple high-impact projects, mentoring junior developers, and implementing best practices."
  //     },
  //     // ... other experiences
  //   ]
  // };

  return (
    <div className="bg-white min-h-screen">
    <div className="bg-white max-w-5xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <ProfileSection {...portfolioData.profile} />
          <SkillsSection skills={portfolioData.skills} />
        </div>

        {/* Right Column */}
        <div className="md:col-span-2 space-y-8">
          <AboutSection description={portfolioData.about} />
          <ProjectsSection projects={portfolioData.projects} />
          <ExperienceSection experiences={portfolioData.experiences} />
        </div>
      </div>
    </div></div>
  );
};

export default Home;