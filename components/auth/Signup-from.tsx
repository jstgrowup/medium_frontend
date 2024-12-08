"use client";
import { AUTH_TYPE } from "@/utils/enums/Global-enums";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/stores/auth.store";
import LabelledInput from "./Labelled-input";
import AuthButton from "./Auth-button";
import { useRouter } from "next/navigation";
const SignupForm = () => {
  const router = useRouter();
  const [userInputs, setuserInput] = useState<{
    email: string;
    password: string;
    name: string;
  }>({
    email: "",
    password: "",
    name: "",
  });
  const signupAction = useAuthStore((state) => state.signUpAction);
  const isLoading = useAuthStore((state) => state.loading);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const handleSubmitForm = () => {
    signupAction(userInputs);
  };
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated]);
  return (
    <div className="min-w-10 mt-4 flex flex-col gap-2">
      <LabelledInput
        label="Name"
        placeholder="Enter your name"
        type="text"
        onChange={(e: { target: { value: any } }) =>
          setuserInput({ ...userInputs, name: e.target.value })
        }
      />
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
