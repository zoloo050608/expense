"use client";

export const InpormationGeld = ({ step }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <img src="/Vector.png" className="h-[44px] w-[119px]" alt="" />
      <ul className="steps w-[350px]">
        <li className="step step-primary">Currency</li>
        <li className={`step ${step >= 1 && " step-primary"}`}>Balance</li>
        <li className={`step ${step >= 2 && " step-primary"}`}>Finish </li>
      </ul>
    </div>
  );
};
