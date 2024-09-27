"use client";

import { InputComp } from "./InputComp";
import { ButtonComp } from "./ButtonComp";
import { useState } from "react";
import { AuthTitle } from "./AuthTitle";
import { ButtonTitle } from "./ButtonTitle";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export const LoginPage = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const emailHandler = (event) => {
    setUserInput((prev) => ({ ...prev, email: event.target.value }));
  };

  const passwordHandler = (event) => {
    setUserInput((prev) => ({ ...prev, password: event.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userInput;
    console.log(email, password);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/login",
        { email, password }
      );
      console.log(response.data);

      router.push("/information");
      4;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen w-full">
      <div className="flex w-1/2 flex-col gap-10 items-center justify-center">
        <div>
          <AuthTitle
            title={"Welcome Back"}
            description={"Welcome back, please enter your details"}
          />
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <InputComp placeholder="Email" changeHandler={emailHandler} />
          <InputComp
            placeholder="Password"
            type="password"
            changeHandler={passwordHandler}
          />
          <ButtonComp title={"Log in"} />
        </form>
        <div className="flex gap-2">
          <ButtonTitle title={"Don’t have an account?"} />
          <Link className="text-blue-600" href={"/signup"}>
            Sign up
          </Link>
        </div>
      </div>
      <div className="bg-blue-600 w-1/2"></div>
    </div>
  );
};
