import Quote from "@/components/auth/Quote-auth";
import SignupForm from "@/components/auth/Signup-from";

export default function Signup() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
      <div>
        <SignupForm />
      </div>
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
}
