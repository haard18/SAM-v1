import React from 'react';

// Define props type
interface CustomCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // icon component type
  title: string;
  description: string;
  glowColor: string; // glow color prop
}

const CustomCard: React.FC<CustomCardProps> = ({ icon: Icon, title, description, glowColor }) => {
  return (
    <div className="relative bg-[#1A1A1A] w-80 h-96 rounded-3xl shadow-lg flex flex-col justify-start items-center p-6 text-center">
      {/* Top Light */}
      <div className="absolute top-[2px] left-1/2 transform -translate-x-1/2 w-[50%] h-2 bg-white rounded-full"></div>

      {/* Glow Effect beneath the light */}
      <div
        className="absolute top-[0px] left-1/2 transform -translate-x-1/2 w-[80%] h-[60px] blur-2xl"
        style={{
          background: `radial-gradient(circle at center, ${glowColor}, transparent 49%)`,
        }}
      ></div>

      {/* Icon */}
      <div className="flex justify-center mt-12 mb-4">
        <Icon className="text-white text-5xl" />
      </div>

      {/* Title */}
      <h2 className="text-white text-3xl font-bold tracking-wide mb-4">{title}</h2>

      {/* Sample Text */}
      <p className="text-white font-bold mb-2">Sample Text</p>

      {/* Description */}
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default CustomCard;
