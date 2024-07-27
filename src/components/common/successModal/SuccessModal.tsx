import React, { FC, useEffect, useState } from "react";
import { Col, Modal } from "react-bootstrap";
import "./SuccessModal.scss";
import { IoMdClose } from "react-icons/io";
// import { SiTicktick } from "react-icons/si";
import { TiTick } from "react-icons/ti";
import Tick from "../icon/tick";
import { FaArrowRight } from "react-icons/fa6";

type MessageType = {
  message: string;
  open: boolean;
  type: string;
  onClick?: Function;
};

const SuccessModal: FC<MessageType> = ({ message, type, open, onClick }) => {
  const [show, setShow] = useState(open);
  useEffect(() => {
    setShow(open);
  }, [open]);
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Body className="text-center justify-content-center align-self-center w-100 p-0 m-0">
          <Modal.Header
            className={"w-100 justify-content-center m-0"}
            style={{ background: "#47c9a2" }}
          >
            <Tick
              style={{
                width: "50%",
                height: "50%",
                border: "5px solid white",
                borderRadius: "50%",
              }}
              width=""
              height=""
            />
          </Modal.Header>
          <Col className="p-5">
            <h4>Great!</h4>
            <p>Your Tour has been booked successfully.</p>
            <button
              onClick={() => onClick && onClick()}
              className="btn btn-success"
              data-dismiss="modal"
            >
              <span>Start Exploring</span> <FaArrowRight />
            </button>
          </Col>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SuccessModal;
