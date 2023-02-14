import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./styles.css";

const DeleteModalDialogue = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <button
            type="button"
            id="close"
            className="btn-close"
            onClick={handleClose}
          >
            x
          </button>
        </Modal.Header>
        <Modal.Body>
          <p className="delete-title">DELETE MOVIE</p>
          <p>Are you sure you want to delete this movie?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} className="confirm-btn">
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default DeleteModalDialogue;
