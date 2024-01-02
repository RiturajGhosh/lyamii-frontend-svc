import React, { FC } from "react";
import { Modal } from "react-bootstrap";
type ErrorMessageType = {
  onClick: Function;
  show: boolean;
};
const ErrorMessage: FC<ErrorMessageType> = ({ show, onClick }) => {
  return (
    <Modal
      className={"align-content-center d-grid"}
      show={show}
      fullscreen={"false"}
      onHide={() => onClick()}
    >
      <Modal.Header closeButton>
        <Modal.Title>Oops...</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{"Something went Wrong"}</p>
      </Modal.Body>
    </Modal>
  );
};

export default ErrorMessage;
