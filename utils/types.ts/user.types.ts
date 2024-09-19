export interface UserAuthType {
  token: string;
}
export type SignupPayloadType = {
  email: string;
  name: string;
  password: string;
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
};
