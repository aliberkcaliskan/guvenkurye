import React from 'react';

interface BannerProps {
  title: string;
  description: string;
}

const Banner: React.FC<BannerProps> = ({ title, description }) => {
  return (
    <div className="-mt-32 relative w-full bg-yellow pt-64 p-24">
      <div className="relative z-10 text-white text-center">
        <h1 className="text-3xl lg:text-7xl mb-4 font-bold uppercase italic">
          {title}
        </h1>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Banner;
