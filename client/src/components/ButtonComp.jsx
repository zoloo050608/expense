import React from "react";

export const ButtonComp = ({ title, handlerButtonClick }) => {
  return (
    <button
      onClick={handlerButtonClick}
      className="bg-blue-600 w-[384px] text-xl text-white rounded-2xl h-[48px]"
    >
      {title}
    </button>
  );
};
