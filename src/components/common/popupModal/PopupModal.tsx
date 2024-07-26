import React, { FC, useState } from "react";
import { Modal } from "react-bootstrap";
type MessageType = {
  message: string;
  open: boolean;
  type: string;
};
const PopupModal: FC<MessageType> = ({ message, type, open }) => {
  const [show, setShow] = useState(open);
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {type}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{message}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PopupModal;
