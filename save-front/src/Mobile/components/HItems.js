import React, { useState } from "react";
import "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HItems = () => {
  
  const [showItem, setShowItem] = useState(false);

  const changeState = () => {
    setShowItem({
      showItem: true
    })
    console.log('눌림')
  }

  return (
    <div>
      <button className="w-itemsbtn" onClick={changeState}>
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
    </div>
  );
};

export default HItems;
