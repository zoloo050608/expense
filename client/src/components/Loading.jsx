"use client";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="w-[175px] flex flex-col gap-12">
        <div className="flex justify-center">
          <img src="/Vector.png" className="h-[66.65px] w-[129.59px]" alt="" />
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <span className="loading loading-spinner loading-2xl text-blue-600 -"></span>
          <div className="font-semibold">Түр хүлээн үү...</div>
        </div>
      </div>
    </div>
  );
};
