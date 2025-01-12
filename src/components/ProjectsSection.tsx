// components/ProjectsSection.tsx
import { Project } from '../app/types/portfolio';
import { Github } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section className="mt-1">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border hover:shadow-lg transition-shadow">
            <h3 className="text-l text-gray-900 font-semibold">{project.title}</h3>
            <p className="text-gray-400 mt-2 text-sm">{project.description}</p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
            {project.tech.map((tech, i) => (
                <span key={i} className="px-1.5 py-0.5 bg-gray-100 rounded-full text-gray-800 text-xs">
                {tech}
                </span>
            ))}
            {project.github && (
                <a 
                href={project.github}
                className="ml-auto flex items-center text-gray-700 hover:text-black text-sm"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Github size={15} className="mr-1" />
                Code
                </a>
            )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;