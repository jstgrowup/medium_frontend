"use client";
import { AUTH_TYPE } from "@/utils/enums/Global-enums";
import { useState } from "react";
import { useAuthStore } from "@/stores/auth.store";
import AuthHeader from "./Auth-header";
import LabelledInput from "./Labelled-input";
import AuthButton from "./Auth-button";
import Socials from "./Socials";

import { showErrorToast, showSuccessToast } from "../common/toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const SignupForm = () => {
  const [userInputs, setuserInput] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const router = useRouter();
  const signupAction = useAuthStore((state) => state.signUpAction);
  const isLoading = useAuthStore((state) => state.loading);
  const { data: session } = useSession();
  const handleSubmitForm = async () => {
    // signupAction(userInputs);
    try {
      const result = await signIn("credentials", {
        email: userInputs.email,
        password: userInputs.password,
        redirect: false,
        callbackUrl: "/",
      });

      console.log("result:", result);
      if (result?.error) {
        showErrorToast(result?.error || "errorororor");
      } else {
        showSuccessToast("Signined successfully");
        router.push("/");
      }
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
