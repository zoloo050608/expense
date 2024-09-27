"use client";
import { GoArrowUp } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";

import { GoHomeFill } from "react-icons/go";

export const DashBoardComp = () => {
  return (
    <div className="bg-gray-100 w-screen  h-[100vh]">
      <div className="flex flex-col justify-center items-center   gap-5 ">
        <div className="flex justify-between w-[1200px] mt-8">
          <div className="w-[384px] ">
            <img
              className="absolute w-[384px] rounded-2xl"
              src="/Image.png"
              alt=""
            />
            <div className=" relative flex flex-col py-8 gap-16 pl-8 ">
              <img className="w-[80.35px]" src="/Frame 24.png" alt="" />
              <div className="text-white">
                <div className="opacity-50"> Cash</div>
                <div className="text-2xl">10,000,00</div>
              </div>
            </div>
          </div>
          <div className="bg-white w-[384px] rounded-2xl">
            <div className="flex items-center gap-2 py-4 px-6 border-solid border-b-[1px] border-gray-300">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <div className="font-semibold">Your Income</div>
            </div>
            <div className="flex flex-col gap-4   px-6 pt-5 pb-6">
              <div className="flex flex-col gap-1">
                <div className="text-4xl font-semibold">1,200,000</div>
                <div className="opacity-50">Your Income Amount</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-400 flex justify-center items-center">
                  <GoArrowUp className="text-white font-semibold" />
                </div>
                <div>32% from last month</div>
              </div>
            </div>
          </div>
          <div className="bg-white w-[384px] rounded-2xl">
            <div className="flex items-center gap-2 py-4 px-6 border-solid border-b-[1px] border-gray-300">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <div className="font-semibold">Total Expenses</div>
            </div>
            <div className="flex flex-col gap-4 px-6 pt-5 pb-6">
              <div className="flex flex-col gap-1">
                <div className="text-4xl font-semibold">1,200,000</div>
                <div className="opacity-50">Your Income Amount</div>
              </div>
              <div className="flex items-center gap-2 ">
                <div className="w-6 h-6 rounded-full bg-green-400 flex justify-center items-center">
                  <GoArrowDown className="text-white  font-semibold" />
                </div>
                <div>32% from last month</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-[1200px] ">
          <div className="w-[588px] py-4 px-6 font-semibold bg-white rounded-xl">
            <div>Income - Expense</div>
            <div></div>
          </div>
          <div className="w-[588px]  py-4 px-6 font-semibold bg-white rounded-xl">
            <div className="flex justify-between">
              <div>Income - Expense</div>
              <div className="opacity-40">Jun 1 - Nov 30</div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="w-[1200px] flex justify-between flex-col bg-white rounded-xl">
          <div className="py-4 px-6 font-semibold">Last Records</div>
          <div className="flex justify-between h-20 px-6 items-center border-solid border-t-[1px]">
            <div className="flex gap-4 ">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex justify-center items-center">
                <GoHomeFill
                  className="text-white text-2xl
                "
                />
              </div>
              <div>
                <div>Lending & Renting</div>
                <div className="text-sm opacity-50">3 hours ago</div>
              </div>
            </div>
            <div className="text-green-500">- 1,000₮</div>
          </div>
        </div>
      </div>
    </div>
  );
};
