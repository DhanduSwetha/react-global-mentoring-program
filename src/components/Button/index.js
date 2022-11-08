import React from "react";
import Button from "react-bootstrap/Button";
import "./styles.css";

const ButtonComp = (props) => {
  return (
    <Button
      className="btn"
      //icon={props.icon}
      // disabled={disabled}
      onClick={props.onClick}
    >
      {props.name}
    </Button>
  );
};
export default ButtonComp;
