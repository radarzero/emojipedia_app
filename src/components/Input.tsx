import React from "react";

function Input(props:any) {
  return (
    <input
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      required
    />
  );
}

export default Input;
