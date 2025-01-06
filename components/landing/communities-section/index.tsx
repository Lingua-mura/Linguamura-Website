// components/HeroSection.tsx
import React from 'react';

interface CommunitySectionProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CommunitySection: React.FC<CommunitySectionProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="px-5 py-5 md:py-10 relative bg-cover bg-center rounded-xl overflow-hidden" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary-dark via-transparent to-transparent opacity-50"></div>
      
      <div className="relative p-6 text-secondary z-10 w-full md:w-2/4">
        <h2 className="text-3xl font-semibold mb-2">{title}</h2>
        <p className="text-lg text-secondary-light">{description}</p>
      </div>
    </div>
  );
};

export default CommunitySection;
