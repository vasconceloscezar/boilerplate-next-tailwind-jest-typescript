import React from "react";

export const Preloader = () => {
  return (
    <div className="fixed z-[999] w-full h-full flex items-center justify-center bg-quaternary ">
      <div className="flex">
        <Dot delay="delay-0" />
        <Dot delay="delay-200" />
        <Dot delay="delay-400" />
      </div>
    </div>
  );
};

const Dot = ({ delay }) => <div className={`w-6 h-6 mx-1 border-2 border-primary rounded-full animate-bounce ${delay}`}></div>;
