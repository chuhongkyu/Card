import { atom } from "recoil";

const scoreState = atom({
  key: "scoreState",
  default: 0,
});

export { scoreState };