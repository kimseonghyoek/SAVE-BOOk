import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "./Card";
import { useRecoilState } from 'recoil';
import { identication, password } from '../store/store.js';

const LoginForm = () => {

  const [id, setId] = useRecoilState(identication);
  const [pw, setPw] = useRecoilState(password);

  const changeID = (e) => {
    e.preventDefault();
    setId({
      id: e.target.value
    })
  }

  const changePw = (e) => {
    e.preventDefault();
    setPw({
      pw: e.target.value
    })
  }

  return (
    <Card styled="bg-maincolor2 p-8 flex flex-row justify-center w-half">
      <form className="flex flex-col">
        <Input
          placeholder="아이디"
          styled="p-3 m-3 w-long rounded-half"
          onChange={changeID}
        />
        <Input placeholder="비밀번호" styled="p-3 m-3 w-long rounded-half" onChange={changePw}/>
        <a
          className="text-white text-xs w-long text-right hover:text-maincolor1 pt-2 underline"
        >
          비밀번호를 모르시겠나요?
        </a>
        <Button
          styled="bg-maincolor1 inline-block text-white w-big h-middle rounded-test m-auto mt-7"
          text="로그인"
        ></Button>
      </form>
    </Card>
  );
};

export default LoginForm;
