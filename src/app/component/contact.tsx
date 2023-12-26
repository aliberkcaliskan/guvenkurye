import React from 'react';

interface FeedbackSectionProps {
  title: string;
  description: string;
}

const FeedbackSection: React.FC<FeedbackSectionProps> = ({ title, description }) => {
  return (
    <div className="bg-yellow text-white text-center p-12">
      <div className="flex flex-col items-center gap-4">
        <div className="xt-2xl lg:text-5xl mb-6 font-bold uppercase italic">{title}</div>
        <div className="text-sm lg:text-l max-w-md">{description}</div>
      </div>
      <form
        className="max-w-sm mx-auto relative h-12 mt-6 border-b border-white"
        method="POST"
        name="subscribe"
      >
        <input type="hidden" name="form-name" value="subscribe" />
        {/* <input type="text" name="email" className="w-full h-full bg-transparent border-none pr-12" placeholder="Enter your email"> */}
        <button className="w-12 h-12 flex items-center justify-center absolute top-0 right-0">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default FeedbackSection;
