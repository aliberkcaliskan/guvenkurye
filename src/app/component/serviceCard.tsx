import React, { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode; // ReactNode, herhangi bir JSX öğesi veya bileşeni içerebilecek genel bir türdür.
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white mx-4 tablet:my-8 my-4">
      <div className="p-6">
        <div className="flex items-center justify-center mb-4  text-yellow  fill-yellow">
          {icon}
        </div>
        <div className="font-bold lg:text-xl text-sm mb-2 text-center">{title}</div>
        <div className='flex justify-center items-center min-h-[202px]'>
        <p className="text-gray-700  text-sm lg:text-sm  text-center ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
