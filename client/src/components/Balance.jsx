"use client";

import { ButtonComp } from "./ButtonComp";
import { DeedTitle } from "./DeedTitle";
import { InputComp } from "./InputComp";
import { SmallText } from "./SmallText";

export const Balance = ({ confirmHandler }) => {
  return (
    <div className="flex justify-center items-center flex-col pt-10 gap-20">
      <div className="w-[384px] flex gap-8 flex-col ">
        <div className="flex justify-center ">
          <DeedTitle icon="/Coins.png" title={"Set up your cash Balance"} />
        </div>
        <div className="flex flex-col gap-3">
          <InputComp placeholder={"Email"} />
          <SmallText title={"How much cash do you have in your wallet? "} />
        </div>
        <div>
          <ButtonComp handlerButtonClick={confirmHandler} title={"Confirm "} />
        </div>
      </div>
    </div>
  );
};
