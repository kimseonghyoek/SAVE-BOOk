import { atom } from 'recoil';

export const identication = atom({
  key: "id",
  default: {
    id: ""
  }
});

export const password = atom({
  key: "pw",
  default: {
    pw: ""
  }
});
