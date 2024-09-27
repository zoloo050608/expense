"use client";

export const AuthTitle = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <div className="flex">
        <img src="/Vector.png" className="h-[44px] w-[119px]" alt="" />
      </div>
      <div className="w-[320px] flex flex-col justify-center items-center gap-2">
        <div className="text-2xl font-semibold">{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};
