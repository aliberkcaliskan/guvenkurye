import React from "react";
import Image from "next/image";

interface ContactBannerProps {
  title: string;
  description: string;
  image: string;
}

const ContactBanner: React.FC<ContactBannerProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="relative w-full bg-yellow py-32 my-12 lg:my-24">
      <div className="relative z-10 text-white text-center mx-auto max-w-xl">
        <h1 className="text-3xl lg:text-7xl mb-4 font-bold uppercase italic">
          {title}
        </h1>
        <p className="lg:text-lg text-sm mb-5">{description}</p>
        <a
          href="tel:0531 562 51 31"
          className="inline-block rounded-full border-2 border-white text-lg px-8 py-3 hover:bg-white hover:text-gray-900"
        >
          Bize Ulaşın
        </a>
      </div>
      <Image
        className="w-full h-full absolute inset-0 object-cover opacity-75"
        src={image}
        alt="Description of the image"
        width={10000}
        height={500}
      />
    </div>
  );
};

export default ContactBanner;
