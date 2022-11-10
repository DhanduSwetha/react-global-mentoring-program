import { React } from "react";
import { Row } from "react-bootstrap";
import MovieGenre from "../MovieGenre";
import "./styles.css";

const Movies = () => {
  return (
    <Row className="movies-content">
      <Row>
        <MovieGenre />
      </Row>
    </Row>
  );
};
export default Movies;
