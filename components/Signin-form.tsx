"use client";
import { AUTH_TYPE } from "@/utils/enums/Global-enums";
import { useState } from "react";
import LabelledInput from "./Labelled-input";
import AuthHeader from "./Auth-header";
import { SigninInput } from "@jstgrwup/medium-common";
import AuthButton from "./Auth-button";
import { useAuthStore } from "@/store";
const SigninForm = () => {
  const [userInputs, setuserInput] = useState<SigninInput>({
    email: "",
    password: "",
  });
  const signinAction = useAuthStore((state) => state.signInAction);
  const handleSubmitForm = () => {
    signinAction(userInputs);
  };

  return (
    <div className="h-screen flex justify-center flex-col items-center">
      <AuthHeader type={AUTH_TYPE.SIGNIN} />
      <div className=" min-w-10 mt-4">
        <LabelledInput
          label="Email"
          placeholder="Enter your email"
          onChange={(e: { target: { value: any } }) =>
            setuserInput({ ...userInputs, email: e.target.value })
          }
        />
        <LabelledInput
          label="Password"
          placeholder="Enter your password"
          type="password"
          onChange={(e: { target: { value: any } }) =>
            setuserInput({ ...userInputs, password: e.target.value })
          }
        />
        <AuthButton type={AUTH_TYPE.SIGNIN} onclickFunc={handleSubmitForm} />
      </div>
    </div>
  );
};

export default SigninForm;
