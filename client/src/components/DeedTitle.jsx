"use client";

export const DeedTitle = ({ icon, title }) => {
  return (
    <div className="flex justify-center flex-col items-center gap-4">
      <div className="w-12 h-12 bg-blue-600 rounded-full flex justify-center items-center">
        <img className="w-8 h-8" src={icon} alt="" />
      </div>
      <div className="text-2xl font-semibold">{title}</div>
    </div>
  );
};
