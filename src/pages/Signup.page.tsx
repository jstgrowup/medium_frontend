import Quote from "../components/Quote.component";

import SignupForm from "../components/Auth/Signup-form.component";
const Signup = () => {
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
};

export default Signup;
