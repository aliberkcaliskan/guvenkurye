import React from "react";

interface BannerProps {
  title: string;
  description: string;
}

const Banner: React.FC<BannerProps> = ({title, description}) => {
  return (
    <div className="-mt-32 relative w-full bg-yellow lg:pt-64 lg:p-24 sm:p-16 md:pt-48 p-4 pt-32">
      <div className="relative z-10 text-white text-center flex items-center justify-center flex-col gap-4">
        <h1 className="text-3xl w-full lg:w-4/6  text-center lg:text-7xl mb-4 font-bold uppercase italic">
          {title}
        </h1>
        <p className="text-sm lg:text-lg lg:w-4/6 w-full">{description}</p>
        <a className="mt-5 border p-4 px-10 rounded-lg	hover:bg-white hover:text-yellow" href="tel:531 562 51 31">Kurye Çağır</a>
      </div>
    </div>
  );
};

export default Banner;
