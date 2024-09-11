import Quote from "@/components/Quote-auth";
import SignupForm from "@/components/Signup-from";

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
