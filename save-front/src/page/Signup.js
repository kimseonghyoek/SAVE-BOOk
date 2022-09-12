import React from "react";
import { Link } from "react-router-dom";
import Card from "../container/Card";
import LoginForm from "../container/LoginForm";
import "./css/signup.css";

const Singup = (props) => {
  return (
    <div id="background" className="flex justify-center items-center">
      <Card styled="bg-maincolor2 flex flex-col w-signup h-signup  p-4 justify-center">
        <h1 className="text-white text-middle2 p-4 pb-2">SAVE BOOK 에 오신 것을 환영합니다.</h1>
        <Link to="/"><p className="inline-block text-white p-4 pt-1">혹시 이미 가입하셨나요?</p></Link>
        <LoginForm />
      </Card>
    </div>
  );
};

export default Singup;
