"use client";
import React from "react";

export const InputComp = ({ type, placeholder, changeHandler }) => {
  return (
    <div>
      <input
        type={type}
        className="bg-gray-100 w-[384px] px-5 outline-none h-[48px] rounded-lg border-solid border-2 border-gray-300"
        placeholder={placeholder}
        onChange={changeHandler}
      />
    </div>
  );
};
