import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import Modal from "../components/Modal";
import Card from "../container/Card";
import LoginForm from "../container/LoginForm";
import ModalPortal from "../Portal";
import {
  checkP,
  identication,
  modalState,
  nickname,
  password,
} from "../store/store";
import "./css/signup.css";

const Singup = (props) => {
  const [modal, setModal] = useRecoilState(modalState);
  const [id, setId] = useRecoilState(identication);
  const [pw, setPw] = useRecoilState(password);
  const [name, setName] = useRecoilState(nickname);
  const [secondPw, setSPw] = useRecoilState(checkP);
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
        {/* {id.id === "" || name.name === "" || pw.pw === "" ? (
          <ModalPortal>
            {modal.modal ? (
              <Modal
                open={modal.modal}
                close={closeModal}
                title=""
                btnTrue = "false"
                contents=""
              ></Modal>
            ) : null}
          </ModalPortal>
        ) : null} */}
        {/* {name.name === "" ? (
          <ModalPortal>
            {modal.modal ? (
              <Modal
                open={modal.modal}
                close={closeModal}
                title=""
                btnTrue = "false"
                contents="닉네임이 공백입니다."
              ></Modal>
            ) : null}
          </ModalPortal>
        ) : null}
        {pw.pw === "" ? (
          <ModalPortal>
            {modal.modal ? (
              <Modal
                open={modal.modal}
                close={closeModal}
                title=""
                btnTrue = "false"
                contents="비밀번호가 공백입니다."
              ></Modal>
            ) : null}
          </ModalPortal>
        ) : null} */}
      </div>
    </>
  );
};

export default Singup;
