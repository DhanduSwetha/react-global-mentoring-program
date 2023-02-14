import { React, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import MultiSelectDropDown from "../../common/MultiSelectDropdown";
import "./styles.css";

const AddorEditMovieModal = (props) => {
  const [title, setTitle] = useState();
  // const [genre, setGenre] = useState();
  const [date, setDate] = useState();
  const [movieUrl, setMovieUrl] = useState();
  const [rating, setRating] = useState();
  const [runtime, setRuntime] = useState();
  const [overview, setOverview] = useState();
  const options = [
    {
      id: 1,
      value: "Crime",
      label: "Crime",
    },
    {
      id: 2,
      value: "Documentary",
      label: "Documentary",
    },
    {
      id: 3,
      value: "Horror",
      label: "Horror",
    },
    {
      id: 4,
      value: "Comedy",
      label: "Comedy",
    },
  ];
  const onSubmit = () => {};
  return (
    <Modal show={props.show} onHide={props.handleClose} className="add-edit">
      <Modal.Header>
        <button
          type="button"
          id="close"
          className="btn-close"
          onClick={props.handleClose}
        >
          x
        </button>
      </Modal.Header>
      <Modal.Body>
        <p className="add-movie-title">ADD MOVIE</p>
        <Form buttons={["reset", "submit"]} onSubmit={onSubmit}>
          <div className="flex-wrapper">
            <div className="flex-col1">
              <Form.Group className="form-group">
                <Form.Label>TITLE</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>MOVIE URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="https://"
                  onChange={(e) => setMovieUrl(e.target.value)}
                  value={movieUrl}
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>GENRE</Form.Label>
                <MultiSelectDropDown options={options} value={options[0]} />
              </Form.Group>
            </div>
            <div className="flex-col2">
              <Form.Group className="form-group">
                <Form.Label>RELEASE DATE</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Select Date"
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>RATING</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="7.8"
                  onChange={(e) => setRating(e.target.value)}
                  value={rating}
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>RUNTIME</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="minutes"
                  onChange={(e) => setRuntime(e.target.value)}
                  value={runtime}
                />
              </Form.Group>
            </div>
            <Form.Group className="form-group overview">
              <Form.Label>OVERVIEW</Form.Label>
              <Form.Control
                as="textarea"
                rows="6"
                name="overview"
                placeholder="Movie Description"
                value={overview}
                onChange={(e) => {
                  setOverview(e.target.value);
                }}
              />
            </Form.Group>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="reset-btn" onClick={props.handleClose}>
          RESET
        </Button>
        <Button className="submit-btn" onClick={props.handleClose}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddorEditMovieModal;
