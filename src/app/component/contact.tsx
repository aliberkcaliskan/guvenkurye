import React from "react";

interface FeedbackSectionProps {
  title: string;
  description: string;
}

const FeedbackSection: React.FC<FeedbackSectionProps> = ({
  title,
  description,
}) => {
  return (
    <div className="bg-yellow text-white text-center p-12">
      <div className="flex flex-col items-center gap-4">
        <div className="xt-2xl lg:text-5xl mb-6 font-bold uppercase italic">
          {title}
        </div>
        <div className="text-sm lg:text-l max-w-md">{description}</div>
        <a className="mt-5 border p-4 px-10 rounded-lg	hover:bg-white hover:text-yellow" target="_blank" href="https://wa.me/+905315625131">İletişime Geç</a>

      </div>
    </div>
  );
};

export default FeedbackSection;
