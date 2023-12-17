import React, { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode; // ReactNode, herhangi bir JSX öğesi veya bileşeni içerebilecek genel bir türdür.
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white mx-4 my-8">
      <div className="p-6">
        <div className="flex items-center justify-center mb-4  text-yellow  fill-yellow">
          {icon}
        </div>
        <div className="font-bold text-xl mb-2 text-center">{title}</div>
        <p className="text-gray-700 text-base  text-center">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
