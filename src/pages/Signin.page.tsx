import Quote from "../components/Quote.component";
import SigninForm from "../components/Auth/SignIn-form.component";

const SignIn = () => {
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
};

export default SignIn;
