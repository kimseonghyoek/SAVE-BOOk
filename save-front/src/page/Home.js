import React from "react";
import Button from "../components/Button";
import Card from "../container/Card";
import LoginForm from "../container/LoginForm";
import { Link } from "react-router-dom";
import "./css/home.css";
import ModalPortal from "../Portal";
import { modalState, modalText } from "../store/store";
import { useRecoilState } from "recoil";
import Modal from "../components/Modal";
import { Mobile, PC } from "../Responsive/responsive";

const Home = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [result] = useRecoilState(modalText);
  const closeModal = () => {
    setModal({
      modal: false,
    });
    console.log(modal.modal);
  };
  return (
    <div className="flex justify-center w-full2">
      <div id="background" className="flex justify-center flex-col">
        <PC>
          <h1 className="text-white text-big text-center p-5 font-Chewy">
            Save Book
          </h1>
          <div className="flex justify-center p-8 w-full2">
            <LoginForm />
          </div>
        </PC>
        <Mobile>
          <h1 className="text-white text-big2 text-center p-5 font-Chewy">
            Save Book
          </h1>
          <div className="flex justify-center p-4 w-full">
            <LoginForm />
          </div>
        </Mobile>

        <Link to="/service">
          <p className="text-white text-xs underline flex justify-center mt-9">
            아직 Save Book의 회원이 아니신가요?
          </p>
        </Link>
        <p className="text-maincolor1 text-small flex justify-center mt-2">
          Save Book은 1920 X 933 의 사이즈를 지향합니다.
        </p>
      </div>
      <ModalPortal>
        {modal.modal ? (
          <Modal
            open={modal.modal}
            close={closeModal}
            title=""
            btnTrue="false"
            contents={result.text}
          ></Modal>
        ) : null}
      </ModalPortal>
    </div>
  );
};

export default Home;
