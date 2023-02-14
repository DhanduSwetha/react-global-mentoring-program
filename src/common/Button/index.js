import React from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

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
ButtonComp.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ButtonComp;
