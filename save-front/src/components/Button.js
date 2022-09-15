import React from "react";

const Button = (props) => {
  return <button disabled={props.block} onClick={props.onClick} className={props.styled} type={props.type}>{props.text}</button>;
};

Button.defaultProps = {
  text: "Button",
  styled: "bg-white w-middle h-middle rounded-default"
};

export default Button;
// bg-maincolor1 w-small h-small rounded-default