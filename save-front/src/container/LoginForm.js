import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "./Card";
import { useRecoilState } from "recoil";
import {
  checkP,
  identication,
  modalState,
  nickname,
  password,
} from "../store/store.js";
import { useLocation } from "react-router-dom";
import Modal from "../components/Modal";
import ModalPortal from "../Portal";

const LoginForm = () => {
  
  const getURL = useLocation();
  const [id, setId] = useRecoilState(identication);
  const [pw, setPw] = useRecoilState(password);
  const [name, setName] = useRecoilState(nickname);
  const [secondPw, setSPw] = useRecoilState(checkP);
  const [modal, setModal] = useRecoilState(modalState);

  let modaltext = [];
  const [result, setResult] = useState('');

  const changeID = (e) => {
    e.preventDefault();
    setId({
      id: e.target.value,
    });
  };

  const changePw = (e) => {
    e.preventDefault();
    setPw({
      pw: e.target.value,
    });
  };

  const changeNN = (e) => {
    e.preventDefault();
    setName({
      name: e.target.value,
    });
  };

  const changeCP = (e) => {
    e.preventDefault();
    setSPw({
      secondPw: e.target.value,
    });
  };

  const openModal = () => {
    setModal({
      modal: true,
    });
  };

  const closeModal = () => {
    setModal({
      modal: false,
    });
    console.log(modal.modal);
  };

  const checkSumbit = (e) => {
    e.preventDefault();

    if (id.id === "" || id.id === null) {
      modaltext.push("아이디");
      openModal();
    }
    if (pw.pw === "" || pw.pw === null) {
      modaltext.push("비밀번호");
      openModal();
    }
    if (name.name === "" || name.name === null) {
      modaltext.push("닉네임");
      openModal();
    }
    if (secondPw.cp === "" || secondPw.cp === null) {
      modaltext.push("2차 비밀번호");
      openModal();
    }
    if (pw.pw !== secondPw) {
      openModal();
    }
    modaltext.push("빈 칸 입니다.");
    setResult({
      result: modaltext.join(" ")
    })
    console.log(result)
  };

  if (getURL.pathname === "/") {
    return (
      <Card styled="bg-maincolor2 p-8 flex flex-row justify-center w-half">
        <form className="flex flex-col">
          <Input
            placeholder="아이디"
            styled="p-3 m-3 w-long rounded-half"
            onChange={changeID}
          />
          <Input
            placeholder="비밀번호"
            styled="p-3 m-3 w-long rounded-half"
            onChange={changePw}
          />
          <a className="text-white text-xs w-long text-right hover:text-maincolor1 pt-2 underline">
            비밀번호를 모르시겠나요?
          </a>
          <Button
            styled="bg-maincolor1 inline-block text-white w-big h-middle rounded-test m-auto mt-7"
            text="로그인"
          ></Button>
        </form>
      </Card>
    );
  } else if (getURL.pathname === "/signup") {
    return (
      <form className="flex flex-col" onSubmit={checkSumbit}>
        <Input
          placeholder="닉네임"
          styled="p-3 m-3 w-long rounded-half"
          onChange={changeNN}
        />
        <Input
          placeholder="아이디"
          styled="p-3 m-3 w-long rounded-half"
          onChange={changeID}
          value={id.id}
        />
        <Input
          placeholder="비밀번호"
          styled="p-3 m-3 w-long rounded-half"
          onChange={changePw}
        />
        <Input
          placeholder="비밀번호 확인"
          styled="p-3 m-3 w-long rounded-half"
          onChange={changeCP}
        />
        <div className="text-white flex items-center m-3">
          <input type="checkbox" className="w-square h-square m-2 " />
          <h5>회원가입에 동의 하시나요?</h5>
        </div>
        <Button
          styled="bg-maincolor1 inline-block text-white w-big h-middle rounded-test m-auto mt-7"
          text="회원가입"
          type="true"
          onClick={checkSumbit}
        ></Button>
        <ModalPortal>
          {modal.modal ? (
            <Modal
              open={modal.modal}
              close={closeModal}
              title=""
              btnTrue="false"
              contents={result.result}
            ></Modal>
          ) : null}
        </ModalPortal>
      </form>
    );
  }
};

export default LoginForm;
