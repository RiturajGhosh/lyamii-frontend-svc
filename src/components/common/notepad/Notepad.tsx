import React, { FC, useState } from "react";
import { Col, Row, Card, Image, Modal, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Notepad: FC = () => {
  const history = useHistory();
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>New Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Col className="col-12">
          <Form.Group className="mb-3" controlId="exampleForm.ControlSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </Col>

        <Col className="">
          <Form.Group className="mb-3" controlId="exampleForm.ControlNotes">
            <Form.Label>Comments</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Col>
      </Modal.Body>
      <Modal.Footer>
        <Button>Add Note</Button>
      </Modal.Footer>
    </div>
    // </Modal>
  );
};

export default Notepad;
