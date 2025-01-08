"use client";
import { AUTH_TYPE } from "@/utils/enums/Global-enums";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/stores/auth.store";
import { useRouter } from "next/navigation";
import LabelledInput from "./Labelled-input";
import AuthButton from "./Auth-button";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "../ui/input";
import { CommonModal } from "../common/Modal";
import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
const SigninForm = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const steps = [
    { title: "OTP", description: "Enter your 4 digit OTP" },
    { title: "Second", description: "Date & Time" },
    { title: "Third", description: "Select Rooms" },
  ];
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });
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
  const handleSaveChanges = () => {
    setIsModalOpen(false);
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
      <div className="flex items-center justify-between mt-3 ">
        <div className="flex justify-center">
          <input
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 "
          />
          <div className="ml-3 text-sm">
            <label className="text-gray-900  dark:text-gray-300">
              Remember me
            </label>
          </div>
        </div>
        <CommonModal
          triggerContent={
            <p className="cursor-pointer text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
              Forgot password?
            </p>
          }
          title="Edit Profile"
          description="Make changes to your profile here. Click save when you're done."
          footer={
            <Button type="submit" onClick={handleSaveChanges}>
              Save changes
            </Button>
          }
          loading={loading}
          handleSaveChanges={handleSaveChanges}
          btnText="Update"
          onClose={() => setIsModalOpen(!isModalOpen)}
          isOpen={isModalOpen}
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Stepper index={activeStep}>
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>

                  <Box flexShrink="0">
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </Box>

                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
            {/* <Label htmlFor="name">About</Label> */}
            {/* <Input
              id="name"
              value={formData}
              onChange={(e) => setFormData(e.target.value)}
              className="col-span-3"
            /> */}
          </div>
        </CommonModal>
      </div>
      <AuthButton
        type={AUTH_TYPE.SIGNIN}
        onclickFunc={handleSubmitForm}
        isLoading={isLoading}
      />
    </div>
  );
};

export default SigninForm;
