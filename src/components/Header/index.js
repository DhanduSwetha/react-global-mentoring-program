import { React, useState } from "react";
import NetflixLogo from "../../common/NetflixLogo";
import ButtonComp from "../Button";
import FormInput from "../FormInput";
import { Row, Col } from "react-bootstrap";
import "./styles.css";

const Content = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Row className="header">
      <Row>
        <Col sm={6} className="netflix-roulette">
          <NetflixLogo />
        </Col>
      </Row>
      <Row className="find-movie-row">
        <Row>
          <p className="find-movie">FIND YOUR MOVIE</p>
        </Row>
        <Row className="movie-search">
          <FormInput
            value={value}
            id="movie-name"
            handleChange={handleChange}
            placeholder="What do you want to watch?"
            required
          />
          <ButtonComp
            color="red"
            name="Search"
            // onClick={}
          />
        </Row>
      </Row>
      <Row></Row>
    </Row>
  );
};
export default Content;
