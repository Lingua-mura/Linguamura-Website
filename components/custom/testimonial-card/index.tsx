import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';

interface TestimonialCardProps {
  testimonial: string;
  avatar: string;
  name: string;
  location: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  testimonial, 
  avatar, 
  name, 
  location, 
  rating 
}) => {
  return (
    <div className="max-w-lg border border-white rounded-lg shadow-lg overflow-hidden">
      {/* Testimonial */}
      <div className="p-6">
        <p className="text-white text-xs md:text-sm italic">{testimonial}</p>
      </div>

      {/* User Info and Rating */}
      <div className="p-6 flex justify-between items-center">
        {/* Left Column: Avatar, Name, and Location */}
        <div className="flex items-center space-x-4">
          <Image
            src={avatar} 
            alt={name} 
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="text-left">
            <p className="font-semibold text-gray-800">{name}</p>
            <p className="text-sm text-white">{location}</p>
          </div>
        </div>

        {/* Right Column: Rating */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, index) => (
            <Star 
              key={index} 
              className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
