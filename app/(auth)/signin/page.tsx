import Quote from "@/components/auth/Quote-auth";
import SigninForm from "@/components/auth/Signin-form";

export default function Signup() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
      <div>
        <SigninForm />
      </div>
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
}
