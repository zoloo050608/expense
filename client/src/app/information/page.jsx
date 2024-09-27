"use client";

import { Currency } from "@/components/Currency";
import "../globals.css";
import { Loading } from "@/components/Loading";
import { useEffect, useState } from "react";
import { Balance } from "@/components/Balance";
import { Finish } from "@/components/Finish";
import { InpormationGeld } from "@/components/Information";
import { useRouter } from "next/navigation";

const Conditionals = [Currency, Balance, Finish];

const InformationPage = () => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const router = useRouter();

  const ChosenComponent = Conditionals[step];

  const confirmHandler = () => {
    if (step == 2) {
      router.push("/dashBoard");
      return;
    }
    setStep((prev) => prev + 1);
  };

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="mt-10 flex flex-col gap-32">
      <InpormationGeld step={step} />
      <ChosenComponent confirmHandler={confirmHandler} />
    </div>
  );
};
export default InformationPage;
