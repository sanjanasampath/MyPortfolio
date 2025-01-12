// components/SkillsSection.tsx
interface SkillsSectionProps {
    skills: string[];
  }
  
  const SkillsSection = ({ skills }: SkillsSectionProps) => {
    return (
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-2xl text-gray-900 font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="px-2.5 py-0.5 bg-gray-100 rounded-full text-gray-900 text-xs font-bold">
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  };
  
  export default SkillsSection;