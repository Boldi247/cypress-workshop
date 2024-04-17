import React from "react";

interface SectionContainerProps {
  children: React.ReactNode;
}

const SectionContainer = ({ children }: SectionContainerProps) => {
  return (
    <div className="max-w-[800px] pt-8 space-y-4 mx-auto">
      <div className="w-full mx-auto bg-black px-6 py-4 rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default SectionContainer;
