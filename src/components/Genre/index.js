import React from "react";
import { Row } from "react-bootstrap";
import "./styles.css";
import PropTypes from "prop-types";

const Genre = (props) => {
  return (
    <Row className="genre">
      <input
        name={props.value}
        id={props.id}
        value={props.value}
        type="radio"
        onClick={props.onClick}
        className="genre-input"
      />
      <label className="genre-label" htmlFor={props.id}>
        {props.value}
      </label>
    </Row>
  );
};
Genre.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.any,
  onClick: PropTypes.func.isRequired,
};
export default Genre;
