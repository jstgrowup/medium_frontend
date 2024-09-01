import { useState } from "react";
import { SigninInput } from "@jstgrwup/medium-common";
import LabelledInput from "../Labelled-input.component";
import AuthHeader from "./Auth-header.component";
import { AUTH_TYPE } from "../../utils/Enums";
import AuthButton from "./Auth-button.component";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { UserState } from "../../recoil/atoms";
import Cookies from "js-cookie";
const SigninForm = () => {
  const navigate = useNavigate();
  const setCount = useSetRecoilState(UserState);
  const [userInputs, setuserInput] = useState<SigninInput>({
    email: "",
    password: "",
  });
  const signInUser = () => {
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/signin`,
        userInputs
      )
      .then((response) => {
        const token = response.data;
        setCount(token);
        Cookies.set("token", token);
        navigate("/blogs");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="h-screen flex justify-center flex-col items-center">
      <AuthHeader type={AUTH_TYPE.SIGNIN} />
      <div className=" min-w-10 mt-4">
        <LabelledInput
          label="Email"
          placeholder="Enter your email"
          onChange={(e) =>
            setuserInput({ ...userInputs, email: e.target.value })
          }
        />
        <LabelledInput
          label="Password"
          placeholder="Enter your password"
          type="password"
          onChange={(e) =>
            setuserInput({ ...userInputs, password: e.target.value })
          }
        />
        <AuthButton type={AUTH_TYPE.SIGNIN} onclickFunc={signInUser} />
      </div>
    </div>
  );
};

export default SigninForm;
