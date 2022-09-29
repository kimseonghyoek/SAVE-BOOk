import React, { useState } from "react";
import "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import HeadItem from "../../components/Navbar/HeadItem";
import { headerItem } from "../../store/store";

const HItems = () => {
  const [showItem, setShowItem] = useRecoilState(headerItem);

  const changeState = () => {
    showItem.showItem
      ? setShowItem({
          showItem: false,
        })
      : setShowItem({
          showItem: true,
        });
    console.log(showItem);
    console.log("눌림");
  };

  return (
    <div>
      <button className="w-itemsbtn" onClick={changeState}>
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
    </div>
  );
};

export default HItems;
