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

export const checkP = atom({
  key: "secondPw",
  default: {
    cp: ""
  }
})

export const nickname = atom({
  key: "nickname",
  default: {
    name: ""
  }
});

export const modalState = atom({
  key: "modal",
  default: {
    modal: false
  }
})