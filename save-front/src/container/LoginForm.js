import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "./Card";
import { useRecoilState } from "recoil";
import {
  checkP,
  identication,
  modalState,
  modalText,
  nickname,
  password,
} from "../store/store.js";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const getURL = useLocation();
  const [id, setId] = useRecoilState(identication);
  const [pw, setPw] = useRecoilState(password);
  const [name, setName] = useRecoilState(nickname);
  const [phonenumber, setPn] = useRecoilState(checkP);
  const [modal, setModal] = useRecoilState(modalState);
  const [result, setResult] = useRecoilState(modalText);
  const history = useNavigate();

  let modaltext = [];

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

  const changePn = (e) => {
    e.preventDefault();
    setPn({
      phonenumber: e.target.value,
    });
  };

  const openModal = () => {
    setModal({
      modal: true,
    });
  };

  const initState = () => {
    setId({
      id: "",
    });

    setName({
      name: "",
    });

    setPw({
      pw: "",
    });

    setPn({
      phonenumber: "",
    });
  };

  const checkSumbit = (e) => {
    e.preventDefault();

    let check = false;

    if (name.name === "") {
      modaltext.push("닉네임");
      check = true;
      openModal();
    }
    if (id.id === "") {
      modaltext.push("이메일");
      check = true;
      openModal();
    }
    if (pw.pw === "") {
      modaltext.push("비밀번호");
      check = true;
      openModal();
    }
    if (phonenumber.phonenumber === "") {
      modaltext.push("전화번호");
      check = true;
      openModal();
    }
    modaltext.push("빈 칸 입니다.");

    setResult({
      text: modaltext.join(" "),
    });

    if (check === false) {
      axios
        .post("/signup/post", {
          nickname: name.name,
          email: id.id,
          pw: pw.pw,
          phonenumber: phonenumber.phonenumber,
        })
        .then((res) => {
          console.log(res);
          alert("회원가입 완료!");
          history("/");
          initState();
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
      <form
        className="flex flex-col"
        action=""
        method="GET"
        onSubmit={checkSumbit}
      >
        <Input
          placeholder="닉네임"
          styled="p-3 m-3 w-long rounded-half"
          onChange={changeNN}
        />
        <Input
          placeholder="이메일"
          styled="p-3 m-3 w-long rounded-half"
          onChange={changeID}
          value={id.id}
        />
        <Input
          placeholder="비밀번호"
          styled="p-3 m-3 w-long rounded-half"
          onChange={changePw}
          type="password"
        />
        <Input
          placeholder="전화번호 - 빼고 입력"
          styled="p-3 m-3 w-long rounded-half"
          onChange={changePn}
          type="number"
        />
        <div className="text-white flex items-center m-3">
          <input type="checkbox" className="w-square h-square m-2 " />
          <h5>회원가입에 동의 하시나요?</h5>
        </div>
        <Button
          styled="bg-maincolor1 inline-block text-white w-big h-middle rounded-test m-auto mt-7"
          text="회원가입"
          type="submit"
        ></Button>
      </form>
    );
  }
};

export default LoginForm;
