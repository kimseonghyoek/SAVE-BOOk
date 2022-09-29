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
  key: "phonenumber",
  default: {
    phonenumber: ""
  }
})

export const nickname = atom({
  key: "nickname",
  default: {
    name: ""
  }
});

export const modalText = atom({
  key: "text",
  default: {
    text: ''
  }
})

export const modalState = atom({
  key: "modal",
  default: {
    modal: false
  }
})

export const headerItem = atom({
  key: "hItem",
  default: {
    showItem: false
  }
})