import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import DropDown from "../../common/DropDown";
import Genre from "../Genre";
import "./styles.css";

const MovieGenre = () => {
  const [active, setActive] = useState("ALL");
  const handleClick = (e) => {
    setActive(e.target.name);
    console.log("active", active);
  };
  const options = [
    {
      id: 1,
      value: "release date",
      label: "release date",
    },
    {
      id: 2,
      value: "movie name",
      label: "movie name",
    },
  ];
  return (
    <Row className="movie-genre-dropdown">
      <Col className="movie-genre" md={8}>
        <Col md={2}>
          <Genre value="All" onClick={handleClick} />
        </Col>
        <Col md={2}>
          <Genre value="Documentary" onClick={handleClick} />
        </Col>
        <Col md={2}>
          <Genre value="Comedy" onClick={handleClick} />
        </Col>
        <Col md={2}>
          <Genre value="Horror" onClick={handleClick} />
        </Col>
        <Col md={2}>
          <Genre value="Crime" onClick={handleClick} />
        </Col>
      </Col>
      <Col className="sort-dropdown" md={4}>
        <span>Sort By</span>
        <DropDown options={options} value={options[0]} />
      </Col>
    </Row>
  );
};
export default MovieGenre;
