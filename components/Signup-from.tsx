"use client";
import { AUTH_TYPE } from "@/utils/enums/Global-enums";
import { useState } from "react";
import LabelledInput from "./Labelled-input";
import AuthHeader from "./Auth-header";
import AuthButton from "./Auth-button";
import { useAuthStore } from "@/stores/auth.store";
import { SignupInput } from "@jstgrwup/medium-common";

const SignupForm = () => {
  const [userInputs, setuserInput] = useState<SignupInput>({
    email: "",
    name: "",
    password: "",
  });
  const signupAction = useAuthStore((state) => state.signUpAction);
  const isLoading = useAuthStore((state) => state.loading);
  const handleSubmitForm = () => {
    signupAction(userInputs);
  };
  return (
    <div className="h-screen flex justify-center flex-col items-center">
      <AuthHeader type={AUTH_TYPE.SIGNUP} />
      <div className=" min-w-10 mt-4">
        <LabelledInput
          label="Email"
          placeholder="Enter your email"
          onChange={(e: { target: { value: any } }) =>
            setuserInput({ ...userInputs, email: e.target.value })
          }
        />
        <LabelledInput
          label="Name"
          placeholder="Enter your name"
          onChange={(e: { target: { value: any } }) =>
            setuserInput({ ...userInputs, name: e.target.value })
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
        <AuthButton
          type={AUTH_TYPE.SIGNUP}
          onclickFunc={handleSubmitForm}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default SignupForm;
