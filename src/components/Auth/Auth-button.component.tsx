import { AUTH_TYPE } from "../../utils/Enums";

const AuthButton = ({
  type,
  onclickFunc,
}: {
  type: AUTH_TYPE;
  onclickFunc: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onclickFunc}
      className="text-white bg-gray-800 w-full hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-4"
    >
      {type === AUTH_TYPE.SIGNIN ? "Sign In" : "Sign Up"}
    </button>
  );
};

export default AuthButton;
