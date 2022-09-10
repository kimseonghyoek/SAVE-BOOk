import React from "react";
import Button from "../components/Button";
import Card from "../container/Card";
import LoginForm from "../container/LoginForm";
import { Link } from "react-router-dom";
import "./css/home.css";

const Home = () => {
  return (
    <div id="background" className="flex justify-center flex-col">
      <h1 className="text-white text-big text-center p-5 font-Chewy">
        Save Book
      </h1>
      <div className="flex justify-center">
        <LoginForm />
      </div>
      <Link to="/service">
        <p className="text-white text-xs underline flex justify-center mt-9">
          아직 Save Book의 회원이 아니신가요?
        </p>
      </Link>
      <p className="text-maincolor1 text-small flex justify-center mt-2">
        Save Book은 1920 X 933 의 사이즈를 지향합니다.
      </p>
    </div>
  );
};

export default Home;
