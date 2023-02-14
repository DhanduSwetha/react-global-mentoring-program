import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import successSVG from "./success.svg";
import "./styles.css";

const CongratsModalDialogue = () => {
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
        <Modal.Body className="congrats-body">
          <img src={successSVG} alt="Congratulations" className="success" />
          <p className="congrats-title">Congratulations!</p>
          <p>The movie has been added to database successfully</p>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default CongratsModalDialogue;
