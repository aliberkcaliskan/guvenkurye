import React from "react";
import Image from "next/image";
import {FaPhone, FaWhatsapp} from "react-icons/fa";

const PhoneCall: React.FC<any> = () => {
  return (
    <>
      <a
        href="tel:05315625131"
        className="fixed bottom-4 left-4 animate-bounce" aria-label=""
      >
        <div className="bg-yellow rounded-full hover:bg-green-500  text-white font-bold p-4">
          <FaPhone className="text-xl" />
        </div>
      </a>
      <a
        target="_blank"
        aria-label=""
        href="https://wa.me/+905315625131"
        className="fixed bottom-4 right-4 animate-bounce"
      >
        <div  className="bg-yellow rounded-full hover:bg-green-500  text-white font-bold p-4 ">
          <FaWhatsapp className="text-xl" />
        </div>
      </a>
    </>
  );
};

export default PhoneCall;
