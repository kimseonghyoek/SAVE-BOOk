import React from "react";

const Input = (props) => {

  return (
    <div className="flex justify-center text-default">
      <input
        value={props.value}
        placeholder={props.placeholder}
        className={"border-2 border-gray " + props.styled}
        onChange={props.onChange}
        type={props.type}
      />
    </div>
  );
};

export default Input;
