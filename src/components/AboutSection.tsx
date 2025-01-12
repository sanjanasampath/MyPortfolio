// components/AboutSection.tsx
interface AboutSectionProps {
    description: string;
  }
  
  const AboutSection = ({ description }: AboutSectionProps) => {
    return (
      <section className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-2xl text-gray-900 mb-4 font-semibold">About Me</h2>
        <p className="text-gray-400">{description}</p>
      </section>
    );
  };
  
  export default AboutSection;