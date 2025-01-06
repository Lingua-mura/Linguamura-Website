import React from 'react';
import { Play } from 'lucide-react';  // Importing play icon from react-icons
import Image from 'next/image';

interface VideoCardProps {
  title: string;
  thumbnail: string;
  onClick: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnail, onClick }) => {
  return (
    <div className="max-w-lg w-full bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        {/* Thumbnail */}
        <Image
          src={thumbnail} 
          alt={title} 
          width={400}
          height={225}
          className="w-full !h-full object-cover rounded-lg" 
        />

        {/* Overlay with Play Icon */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center opacity-100">
          <Play className="text-secondary-light" size={60} />
        </div>

        {/* Video Title */}
        <div className="p-4 absolute bottom-0 left-0 text-white">
            <h3 className="text-sm font-semibold">Henry</h3>
            <h3 className="text-xs mt-1">Some description here</h3>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
