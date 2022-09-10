import React from "react";

const Input = (props) => {

  return (
    <div>
      <input
        value={props.value}
        placeholder={props.placeholder}
        className={"border-2 border-gray " + props.styled}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
