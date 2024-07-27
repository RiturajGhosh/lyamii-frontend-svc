import React, { FC, useEffect, useState } from "react";
import { Col, Modal } from "react-bootstrap";
import "./ErrorModal.scss";
import { IoMdClose } from "react-icons/io";
// import { SiTicktick } from "react-icons/si";
import { TiTick } from "react-icons/ti";
import Tick from "../icon/tick";
import { FaArrowRight } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { BiSolidError } from "react-icons/bi";

type MessageType = {
  message: string;
  open: boolean;
  type: string;
  onClick?: Function;
};

const ErrorModal: FC<MessageType> = ({ message, type, open, onClick }) => {
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
            style={{ background: "#d75b4a" }}
          >
            <BiSolidError
              style={{
                fill: "white",
                width: "40%",
                height: "40%",
              }}
            />
          </Modal.Header>
          <Col className="p-5">
            <h4>Sorry!</h4>
            <p>Your Payment Failed.</p>
            <p>
              If your payment got detucted for above transaction, the same shall
              be credited back to your account in 5 working days.
            </p>
            <button
              onClick={() => onClick && onClick()}
              className="btn btn-success"
              data-dismiss="modal"
            >
              <span>Try Again</span> <FaArrowRight />
            </button>
          </Col>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ErrorModal;
