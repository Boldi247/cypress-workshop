import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface NavigationButtonProps {
  url: string;
  children: React.ReactNode;
}

const NavigationButton = ({ url, children }: NavigationButtonProps) => {
  return (
    <div className="bg-secondary hover:bg-green-700 hover:text-white transition-all w-full text-black px-4 py-1 rounded-lg">
      <a href={url} className="text-lg">
        <span className="flex items-center justify-between">
          {children} <MdKeyboardArrowRight className="text-3xl" />
        </span>
      </a>
    </div>
  );
};

export default NavigationButton;
