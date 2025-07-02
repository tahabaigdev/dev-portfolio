"use client";
import React from "react";

const AvailableBadge: React.FC = () => {
  return (
    <div className="1.8rem inline-flex items-center gap-[1rem] rounded-[.8rem] border-[2px] border-[#E6E4DF] bg-white px-[1.2rem] py-[.5rem] text-[1rem] font-medium md:text-[1.2rem] md:leading-[2rem]">
      {/* Pulsing dot */}
      <span className="relative">
        <span className="absolute top-1/2 left-1/2 inline-flex size-[1.2rem] -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#31EE33] opacity-75"></span>
        <span className="relative inline-flex size-[.8rem] rounded-full bg-[#31EE33]"></span>
      </span>
      Available for work
    </div>
  );
};

export default AvailableBadge;
