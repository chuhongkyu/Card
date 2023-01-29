import { atom } from "recoil";

const scoreState = atom({
  key: "scoreState",
  default: {first : true, min : 0, sec: 0},
});

const recordState = atom({
  key: "recordState",
  default: false,
});

export { scoreState, recordState};