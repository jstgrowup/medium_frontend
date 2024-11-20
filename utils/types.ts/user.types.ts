export interface UserAuthType {
  token: string;
}
export type SignupPayloadType = {
  email: string;
  password: string;
  name: string;
};
export type SigninPayloadType = {
  email: string;
  password: string;
};
export type AuthStoreType = {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  data: any;
  signUpAction: (payload: SignupPayloadType) => Promise<void>;
  signInAction: (payload: SigninPayloadType) => Promise<void>;
  logoutAction: () => void;
};
