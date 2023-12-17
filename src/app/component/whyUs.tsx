import React from 'react';
import Image from 'next/image';

interface WhyUsProps {
  data: {
    title: string;
    description: string[];
    images: string[];
  };
}

const WhyUs: React.FC<WhyUsProps> = ({ data }) => {
  return (
    <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 py-24">
      <div className="lg:px-32 lg:py-32 flex items-center justify-center">
        <div>
          <h2 className="text-5xl mb-6 font-bold uppercase italic">
            {data.title}
          </h2>
          <p className="text-lg">
            {data.description.map((paragraph, index) => (
              <React.Fragment key={index}>
                {paragraph}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
      <div className="hidden lg:grid relative grid-cols-2">
        <div className="pt-24">
          <div className="relative w-full h-full">
            <Image
              className="absolute inset-0 w-full h-full object-cover -mt-6 z-10"
              src={data.images[0]}
              alt="Description of the image"
              width={500}
              height={300}
            />
          </div>
        </div>
        <div className="relative">
          <Image
            className="absolute inset-0 w-full h-full object-cover -ml-12"
            src={data.images[1]}
            alt="Description of the image"
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};
export default WhyUs;
