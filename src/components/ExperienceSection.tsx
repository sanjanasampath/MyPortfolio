// components/ExperienceSection.tsx
import { Experience } from '../app/types/portfolio';
import Image from 'next/image';

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Work Experience</h2>
      <div className="border px-6 rounded-lg">
        {experiences.map((experience, index) => (
          <div key={index}>
            <div className="flex gap-4 py-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-lg">
							<Image alt="Tech Innovators Inc." loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className="rounded-md border shadow-md object-cover" src="/company.svg"></Image>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
                <p className="text-gray-500">{experience.company}</p>
                <div className="flex items-center gap-2 mt-1 text-gray-500">
                  <span>{experience.period}</span>
                </div>
                <p className="mt-2 text-gray-700">{experience.description}</p>
              </div>
            </div>
            {index < experiences.length - 1 && <hr className="border-gray-200" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;