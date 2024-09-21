import { AUTH_TYPE } from "@/utils/enums/Global-enums";
import Link from "next/link";

const AuthHeader = ({ type }: { type: AUTH_TYPE }) => {
  return (
    <div>
      <div className="text-3xl font-extrabold">
        {type === AUTH_TYPE.SIGNIN
          ? "Login to your account"
          : "Create and account"}
      </div>
      <p className="text-slate-400 font-semibold ">
        {type === AUTH_TYPE.SIGNIN
          ? "Dont have an account?"
          : "Already have an account?"}
        <Link
          href={type === AUTH_TYPE.SIGNIN ? "/signup" : "/signin"}
          className="underline ml-1"
        >
          {type === AUTH_TYPE.SIGNIN ? "Sign Up" : "Sign In"}
        </Link>
      </p>
    </div>
  );
};

export default AuthHeader;
