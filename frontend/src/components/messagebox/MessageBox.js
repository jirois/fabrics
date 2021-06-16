import React, { useState } from "react";
import "./messagebox.scss";

function MessageBox(props) {
  const { close, setClose } = useState(false);
  console.log(close);

  const toggleClose = () => {
    setClose(!true);
  };
  return (
    <div className={`message-box message-box-${props.variant}`}>
      <i className={`fa fa-${props.icon} fa-2x`}></i>
      <span className="message-text">
        <strong className="strong-text">{props.variant}: </strong>
        {props.children}
      </span>
      <i onClick={toggleClose} className="fa fa-times fa-2x exit-button"></i>
    </div>
  );
}

export default MessageBox;
