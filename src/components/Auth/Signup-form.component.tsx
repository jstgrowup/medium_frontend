import { useState } from "react";
import { SignupInput } from "@jstgrwup/medium-common";
import LabelledInput from "../Labelled-input.component";
import AuthHeader from "./Auth-header.component";
import { AUTH_TYPE } from "../../utils/Enums";
import AuthButton from "./Auth-button.component";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { UserState } from "../../recoil/atoms";
import Cookies from "js-cookie";
const SignupForm = () => {
  const navigate = useNavigate();
  const setCount = useSetRecoilState(UserState);
  const [userInputs, setuserInput] = useState<SignupInput>({
    email: "",
    name: "",
    password: "",
  });
  const createUser = () => {
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/signup`,
        userInputs
      )
      .then((response) => {
        console.log(response);
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
      <AuthHeader type={AUTH_TYPE.SIGNUP} />
      <div className=" min-w-10 mt-4">
        <LabelledInput
          label="Email"
          placeholder="Enter your email"
          onChange={(e) =>
            setuserInput({ ...userInputs, email: e.target.value })
          }
        />
        <LabelledInput
          label="Name"
          placeholder="Enter your name"
          onChange={(e) =>
            setuserInput({ ...userInputs, name: e.target.value })
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
        <AuthButton type={AUTH_TYPE.SIGNUP} onclickFunc={createUser} />
      </div>
    </div>
  );
};

export default SignupForm;
