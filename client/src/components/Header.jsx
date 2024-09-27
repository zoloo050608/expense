import React from "react";

export const Header = () => {
  return (
    <div className="flex justify-between w-[1200px] ">
      <div className="flex gap-6 items-center">
        <div className="w-10 h-10">
          <img src="/Frame 3.png" alt="" />
        </div>
        <div className="font-semibold">Dashboard</div>
        <div>Records</div>
      </div>
      <div className="flex gap-6 items-center">
        <div className="flex gap-1 rounded-2xl w-[99px] h-[32px] text-white bg-blue-600 justify-center items-center">
          <div className="text-2xl">+</div>
          <div>Record</div>
        </div>
        <div className="w-10 h-10">
          <img src="/Placeholder.png" alt="" />
        </div>
      </div>
    </div>
  );
};
