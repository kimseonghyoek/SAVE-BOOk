import React from "react";
import { Link } from "react-router-dom";

const HeadItem = (props) => {
  return (
    <>
      <li className={"p-7 pl-12 list-none pr-12 hover:text-green2 " + props.styled} key={props.key} id="headitem">
        <Link to={props.link}>
          <p>{props.name}</p>
        </Link>
      </li>
    </>
  );
};

export default HeadItem;
