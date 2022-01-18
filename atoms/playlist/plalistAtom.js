const { atom } = require("recoil");

export const playlistIdState = atom({
  key: "playlistIdState",
  default: "3xcrbxV3qM25tMjfHqhvWv",
});

export const playlistState = atom({
  key: "playlistAtomState",
  default: null,
});
