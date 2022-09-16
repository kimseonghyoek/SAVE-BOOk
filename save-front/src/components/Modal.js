import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Card from "../container/Card";
import { modalState } from "../store/store";
import Button from "./Button";
import "./css/modal.css";

const Modal = (props) => {
  const [modal, setModal] = useRecoilState(modalState);
  const [opacity, setOpacity] = useState(100);

  useEffect(() => {
    setTimeout(() => {
      setModal({
        modal: false
      }) 
    }, 2000)
  });

  if (opacity > 1) {
    return (
      <Card
        styled={
          "border-2 border-popup bg-maincolor2 text-white p-4 w-modal rounded-half z-5 modal" +
          ` opacity-${opacity}`
        }
      >
        <div className="flex justify-between items-center">
          <h1>{props.title}</h1>
        </div>
        <div className="p-4">{props.contents}</div>
        <div className="flex flex-row-reverse">
          <Button
            styled="bg-maincolor1 w-middle h-small rounded-half text-small2 "
            text="CLOSE"
            onClick={props.close}
          />
        </div>
      </Card>
    );
  } else if (opacity === 0) {
    return null;
  }
};


Modal.defaultProps = {
  title: "Modal Popup",
  children: "Modal Popup content",
};

export default Modal;
