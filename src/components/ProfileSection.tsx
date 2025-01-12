// components/ProfileSection.tsx
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

interface ProfileSectionProps {
  name: string;
  role: string;
  socials: {
    github: string;
    linkedin: string;
    mail: string;
  };
}

const ProfileSection = ({ name, role, socials }: ProfileSectionProps) => {
      return (
    <div className="text-center border p-6 rounded-lg border-gray-200">
      <div className="w-48 h-48 mx-auto bg-gray-200 rounded-full overflow-hidden">
      <Image 
            src="/ProfilePhoto.png" 
            alt="Profile" 
            width={192} 
            height={192} 
            className="w-full h-full object-cover" 
        />
        </div>
      <h1 className="text-2xl text-gray-800 font-semibold mt-4">{name}</h1>
      <p className="text-gray-400">{role}</p>
      <button className="mt-4 w-full bg-black text-white font-bold py-2 px-4 rounded-md">
        CONTACT ME
      </button>

      <div className="mt-6 flex flex-col space-y-2">
        <a href={socials.github} className="flex items-center space-x-2">
          <Github size={20} color="black"/> <span className="text-gray-400">/sanjanasampath</span>
        </a>
        <a href={socials.linkedin} className="flex items-center space-x-2">
          <Linkedin size={20} color="black"/> <span className="text-gray-400">/sanjanasampath2602</span>
        </a>
        <a href={socials.mail} className="flex items-center space-x-2">
          <Mail size={20} color="black"/> <span className="text-gray-400">sanjusampath2602@gmail</span>
        </a>
      </div>
    </div>
  );
};

export default ProfileSection;