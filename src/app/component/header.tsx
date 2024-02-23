import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header>
      <div className="h-24 w-full absolute top-0 left-0 bg-yellow"></div>
      <div className="h-24 z-20 relative container mx-auto flex items-center justify-between px-6">
        <div className=" cursor-pointer flex :items-center justify-center md:justify-normal md:items-start w-full">
          <Image 
          className="w-[300px]"
            src="/logo.webp"
            alt="logo"
            width={300}
            height={300}
          />
        </div>
        <div className="text-white text-lg fixed bottom-0 left-0 lg:relative p-6 lg:p-0 w-full lg:w-auto max-w-lg">
          {/* Buraya menü veya başka içerik ekleyebilirsiniz */}
          {/* Örnek menü
          <div className="lg:flex flex-col lg:flex-row items-center justify-center bg-yellow lg:bg-transparent pt-6 pb-8 lg:p-0 -mb-6 lg:m-0 rounded-t-3xl shadow-2xl lg:shadow-none font-bold uppercase italic lg:normal-case lg:font-normal not-italic">
            <a href="/" className="my-2 lg:ml-6">Home</a>
            <a href="/about" className="my-2 lg:ml-6">About</a>
            <a href="/blog" className="my-2 lg:ml-6">Blog</a>
            <a href="/contact" className="my-2 lg:ml-6">Contact</a>
            <a href="#" className="ml-12 hidden lg:block">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </a>
            <a href="#" className="ml-4 hidden lg:block">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </a>
          </div>
          */}
        </div>
      </div>
    </header>
  );
};

export default Header;
