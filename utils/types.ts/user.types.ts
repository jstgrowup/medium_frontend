import { uploadBlogImageResponseBody } from "./blogs.types";

export interface UserAuthType {
  token: string;
}
export interface UserType {
  id: string;
  email: string;
  password: string;
  name: string;
  profilePic: string;
}
export interface UpdateProfileType {
  id?: string;
  email?: string;
  password?: string;
  about?: string;
  role?: string;
  name?: string;
  imageUrl?: string;
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
export type LogoutResponseType = {
  data: {
    message: string;
  };
};
export type AuthStoreType = {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  data: any;
  signUpAction: (payload: SignupPayloadType) => Promise<void>;
  signInAction: (payload: SigninPayloadType) => Promise<void>;
  logoutAction: () => Promise<LogoutResponseType | undefined>;
  checkSessionToken: () => Promise<UserType | undefined>;
  updateProfilePictureAction: (
    formdata: any
  ) => Promise<uploadBlogImageResponseBody | undefined>;
  updateProfileAction: (
    body: UpdateProfileType
  ) => Promise<uploadBlogImageResponseBody | undefined>;
};
