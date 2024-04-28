import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const currSeasonState = atom({
  key: "currSeasonState",
  default: 2024,
  effects_UNSTABLE: [persistAtom],
});

export const loginState = atom({
  key: "loginState",
  default: {
    isLogin: false,
    uid: null,
  },
  effects_UNSTABLE: [persistAtom],
});

export const userDataState = atom({
  key: "userDataState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
