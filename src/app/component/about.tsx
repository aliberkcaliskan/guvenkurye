import React from "react";
import Image from "next/image";

interface AboutSectionProps {
  title: string;
  description: string;
  image: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div id="about" className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 lg:py-24 py-12 ">
      <div className="hidden lg:grid relative grid-cols-2">
        <div className="pt-24">
          <div className="relative w-full h-full">
            <Image
              className="absolute inset-0 w-full h-full object-cover -mt-6 z-10"
              src={image}
              alt="Description of the image"
              width={500}
              height={300}
            />
          </div>
        </div>
        <div className="relative">
          <Image
            className="absolute inset-0 w-full h-full object-cover -ml-12"
            src="/kargo.jpg" // İkinci resim için varsayılan bir resim yolu, kendi resim yollarınıza göre güncelleyin
            alt="Description of the image"
            width={500}
            height={200}
          />
        </div>
      </div>
      <div className="lg:px-4 lg:py-4 flex items-center justify-center">
        <div>
          <h2 className="text-2xl lg:text-5xl mb-3 lg:mb-6 font-bold uppercase italic">
            {title}
          </h2>
          <p className="text-sm lg:text-lg">{description}</p>
          <a
            href="tel:531 562 51 31"
            className="mt-8 inline-block rounded-full border-2 border-gray-900 text-lg px-8 py-3 hover:bg-yellow hover:text-white"
          >
            Detaylı Bilgi
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
