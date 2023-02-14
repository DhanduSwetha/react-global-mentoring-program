import { React, useState } from "react";
import NetflixLogo from "../../common/NetflixLogo";
import ButtonComp from "../../common/Button";
import FormInput from "../FormInput";
import { Row, Col } from "react-bootstrap";
import AddorEditMovieModal from "../../components/AddorEditModal";
import "./styles.css";

const Content = () => {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = () => {
    setShow(true);
  };
  const handleClose = () => setShow(false);
  return (
    <Row className="header">
      <Row className="netflix-add-movie">
        <Col md={6} className="netflix-roulette">
          <NetflixLogo />
        </Col>
        <Col className="add-movie">
          <ButtonComp name="+ADD MOVIE" onClick={handleClick} />
        </Col>
      </Row>
      <Row className="find-movie-row">
        <p className="find-movie">FIND YOUR MOVIE</p>
        <Row className="movie-search">
          <FormInput
            value={value}
            id="movie-name"
            handleChange={handleChange}
            placeholder="What do you want to watch?"
            required
          />
          <ButtonComp name="Search" onClick={handleClick} />
          <AddorEditMovieModal show={show} handleClose={handleClose} />
        </Row>
      </Row>
    </Row>
  );
};
export default Content;
