import { DashBoardComp } from "@/components/DashBoardComp";
import { Header } from "@/components/Header";
import React from "react";

export const page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <DashBoardComp />
    </div>
  );
};

export default page;
