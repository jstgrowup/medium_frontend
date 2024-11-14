"use client";
import { AUTH_TYPE } from "@/utils/enums/Global-enums";
import { useState } from "react";
import { useAuthStore } from "@/stores/auth.store";
import AuthHeader from "./Auth-header";
import LabelledInput from "./Labelled-input";
import AuthButton from "./Auth-button";
import Socials from "./Socials";

import { showErrorToast, showSuccessToast } from "../common/toast";

const SignupForm = () => {
  const [userInputs, setuserInput] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const signupAction = useAuthStore((state) => state.signUpAction);
  const isLoading = useAuthStore((state) => state.loading);
  const handleSubmitForm = async () => {
    try {
      signupAction(userInputs);
    } catch (error) {
      console.log("error:", error);
      showErrorToast("error");
    }
  };
  return (
    <div className="min-w-10 mt-4">
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
      <AuthButton
        type={AUTH_TYPE.SIGNUP}
        onclickFunc={handleSubmitForm}
        isLoading={isLoading}
      />
    </div>
  );
};

export default SignupForm;
