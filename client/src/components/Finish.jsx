"use client";

import { ButtonComp } from "./ButtonComp";
import { DeedTitle } from "./DeedTitle";

import { InputComp } from "./InputComp";

export const Finish = ({ confirmHandler }) => {
  return (
    <div className="flex justify-center items-center flex-col pt-10 gap-20">
      <div className="w-[384px] flex gap-8 flex-col ">
        <div className="flex justify-center ">
          <DeedTitle icon="/Check.png" title={"Good Job!"} />
        </div>

        <div className="text-sm flex ">
          Your very first account has been created. Now continue to dashboard
          and start tracking
        </div>

        <div>
          <ButtonComp
            handlerButtonClick={confirmHandler}
            title={"Go to Dashboard "}
          />
        </div>
      </div>
    </div>
  );
};
