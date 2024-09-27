"use client";

import { ButtonComp } from "./ButtonComp";
import { DeedTitle } from "./DeedTitle";
import { SmallText } from "./SmallText";

export const Currency = ({ confirmHandler }) => {
  return (
    <div className="flex justify-center items-center flex-col pt-10 gap-20">
      <div className="w-[384px] flex gap-8 flex-col justify-center items-center ">
        <div className="flex justify-center ">
          <DeedTitle icon="/Money.png" title={"Select base currency"} />
        </div>
        <div>
          <select className="select select-bordered  max-w-xs w-[384px] h-[64px] bg-gray-100 text-xl">
            <option disabled selected>
              {" "}
            </option>
            <option> MNT - Mongolian Tugrik</option>
            <option>USD - Usa Dollar</option>
          </select>
        </div>
        <div>
          <SmallText
            title={
              "Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one "
            }
          />
        </div>
        <div>
          <ButtonComp handlerButtonClick={confirmHandler} title={"Confirm "} />
        </div>
      </div>
    </div>
  );
};
