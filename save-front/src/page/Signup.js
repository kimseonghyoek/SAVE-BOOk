import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import Modal from "../components/Modal";
import Card from "../container/Card";
import LoginForm from "../container/LoginForm";
import ModalPortal from "../Portal";
import { modalState } from "../store/store";
import "./css/signup.css";

const Singup = (props) => {
  const [modal, setModal] = useRecoilState(modalState);

  const closeModal = () => {
    setModal({
      modal: false,
    });
    console.log(modal.modal);
  };

  return (
    <>
      <div
        id="background"
        className="flex justify-center items-center flex-col"
      >
        <h1 className="text-white text-big text-center p-3 font-Chewy">
          Save Book
        </h1>
        <Card styled="bg-maincolor2 flex flex-col  h-signup m-4 p-8 justify-center">
          <h1 className="text-white text-middle2 p-4 pb-2">
            SAVE BOOK 에 오신 것을 환영합니다.
          </h1>
          <Link to="/">
            <p className="inline-block text-maincolor1 text-small p-4 pt-1">
              혹시 이미 가입하셨나요?
            </p>
          </Link>
          <LoginForm />
        </Card>
        <ModalPortal>
          {modal.modal ? (
            <Modal
              open={modal.modal}
              close={closeModal}
              title="아이디"
              contents="아이디가 공백입니다."
            ></Modal>
          ) : null}
          {modal.modal ? (
            <Modal
              open={modal.modal}
              close={closeModal}
              title="아이디"
              contents="아이디가 공백입니다."
            ></Modal>
          ) : null}
          {modal.modal ? (
            <Modal
              open={modal.modal}
              close={closeModal}
              title="아이디"
              contents="아이디가 공백입니다."
            ></Modal>
          ) : null}
        </ModalPortal>
      </div>
    </>
  );
};

export default Singup;
