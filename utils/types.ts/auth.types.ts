export const AUTH_CONSTANTS = {
  NO_EMAIL_PASS: "Please provide both email and password",
  WRONG_PASS: "Wrong password, please try again",
  ERROR_IN_CREATING_ACCOUNT:
    "Something went wrong while creating your account please try again later",
  SIGNUP_SUCCESS: "Signup Sucessfull!",
  SIGNIN_SUCCESS: "Successfully Signed in!",
  WRONG_CREDS: "Wrong credentials, please try again",
};
export interface AuthUserResponseInterface {
  id?: string;
  email?: string;
  password?: string;
}
export interface CommonModalProps {
  triggerContent: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  loading?: boolean;
  handleSaveChanges: () => void;
  btnText: string;
  onClose: (value: React.SetStateAction<boolean>) => void;
  isOpen: boolean;
}
