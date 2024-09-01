import axios from "axios";
import { atom, atomFamily, selector, selectorFamily } from "recoil";

export const UserState = atom({
  key: "userAtom",
  default: "",
});
