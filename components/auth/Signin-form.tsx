"use client";
import { AUTH_TYPE } from "@/utils/enums/Global-enums";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/stores/auth.store";
import { useRouter } from "next/navigation";
import LabelledInput from "./Labelled-input";
import AuthButton from "./Auth-button";
const SigninForm = () => {
  const router = useRouter();
  const [userInputs, setuserInput] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const signinAction = useAuthStore((state) => state.signInAction);
  const isLoading = useAuthStore((state) => state.loading);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const handleSubmitForm = () => {
    signinAction(userInputs);
  };
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated]);

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
        type={AUTH_TYPE.SIGNIN}
        onclickFunc={handleSubmitForm}
        isLoading={isLoading}
      />
    </div>
  );
};

export default SigninForm;
