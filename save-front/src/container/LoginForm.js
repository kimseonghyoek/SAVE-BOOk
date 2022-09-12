import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "./Card";
import { useRecoilState } from "recoil";
import { identication, isSignUp, password } from "../store/store.js";
import { useLocation } from "react-router-dom";

const LoginForm = () => {
  const [id, setId] = useRecoilState(identication);
  const [pw, setPw] = useRecoilState(password);

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

  const getURL = useLocation();

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
      <form className="flex flex-col">
        <Input
          placeholder="닉네임"
          styled="p-3 m-3 w-long rounded-half"
          onChange={changeID}
        />
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
        <Input
          placeholder="비밀번호 확인"
          styled="p-3 m-3 w-long rounded-half"
          onChange={changePw}
        />
        <div className="text-white flex items-center m-3">
          <input type="checkbox" className="w-square h-square m-2 "/>
          <h5>회원가입에 동의 하시나요?</h5>
        </div>
        <Button
          styled="bg-maincolor1 inline-block text-white w-big h-middle rounded-test m-auto mt-7"
          text="회원가입" block="true"
        ></Button>
      </form>
    );
  }
};

export default LoginForm;
