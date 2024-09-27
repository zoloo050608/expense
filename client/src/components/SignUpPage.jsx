"use client";
import { InputComp } from "./InputComp";
import { ButtonComp } from "./ButtonComp";
import { useState } from "react";
import { AuthTitle } from "./AuthTitle";
import { ButtonTitle } from "./ButtonTitle";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

export const SignUpPage = () => {
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const router = useRouter();

  const nameHandler = (event) => {
    setUserInput((prev) => ({ ...prev, username: event.target.value }));
  };

  const emailHandler = (event) => {
    setUserInput((prev) => ({ ...prev, email: event.target.value }));
  };

  const passwordHandler = (event) => {
    setUserInput((prev) => ({ ...prev, password: event.target.value }));
  };

  const rePasswordHandler = (event) => {
    setUserInput((prev) => ({ ...prev, rePassword: event.target.value }));
  };

  const signupSubmit = async () => {
    const { rePassword, ...rest } = userInput;

    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/signup",
        rest
      );
      console.log(response.data);
      alert("Burtgel amjilttai");
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex h-screen w-full">
        <div className="flex w-1/2 flex-col gap-10 items-center justify-center">
          <div>
            <AuthTitle
              title={"Create Geld account "}
              description={"Sign up below to create your Wallet account"}
            />
          </div>
          <div className="flex flex-col gap-4">
            <InputComp placeholder="Name" changeHandler={nameHandler} />
            <InputComp placeholder="Email" changeHandler={emailHandler} />
            <InputComp
              placeholder="Password"
              type="password"
              changeHandler={passwordHandler}
            />
            <InputComp
              placeholder="Re-password"
              type="password"
              changeHandler={rePasswordHandler}
            />
            <ButtonComp title={"Sign up"} handlerButtonClick={signupSubmit} />
          </div>
          <div className="flex gap-2">
            <ButtonTitle title={"Already have an account?"} />
            <Link className="text-blue-600" href={"/login"}>
              Login
            </Link>
          </div>
        </div>
        <div className="bg-blue-600 w-1/2"></div>
      </div>
    </div>
  );
};
