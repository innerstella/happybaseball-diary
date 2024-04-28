import { atom } from "recoil";

export const currSeasonState = atom({
  key: "currSeasonState",
  default: 2024,
});

export const loginState = atom({
  key: "loginState",
  default: false,
});

export const userDataState = atom({
  key: "userDataState",
  default: [],
});
