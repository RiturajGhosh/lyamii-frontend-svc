import React, { FC, useState } from "react";
import { Col, Row, Card, Container, Form, Button } from "react-bootstrap";
import SubCard from "../../common/subCard/SubCard";

export type DocumentDetailsDto = {
  documentName: string;
  uploaded: boolean;
  value: string;
};
const Documentation: FC = () => {
  const [edit, setEdit] = useState({ row: 1, index: "" });
  const [details, setDetails] = useState([
    { documentName: "⁠Profile Picture ", uploaded: false, value: "" },
    { documentName: "⁠Passport", uploaded: false, value: "" },
    { documentName: "⁠Traveller's ID", uploaded: false, value: "" },
    { documentName: "⁠Tour 1ID", uploaded: false, value: "" },
    { documentName: "⁠Tour 2ID", uploaded: false, value: "" },
    { documentName: "⁠Tour 3ID", uploaded: false, value: "" },
  ]);

  const handler = (value: string, index: number) => {
    const d = details;
    d[index].value = value;
    d[index].uploaded = true;
    setDetails(d);
  };

  return (
    <div
      className={`bg-violet-blue px-4 min-vh-100 mw-100 w-100 align-items-center justify-content-end d-flex m-0`}
    >
      <Container
        fluid="lg"
        className="p-0 m-0 min-vh-100 justify-content-end d-flex flex-column w-100"
      >
        <Row className="p-0 m-0 min-vh-100 align-items-start justify-content-end d-flex">
          <Col className="col-12 py-4 m-0 gap-4 align-items-center d-grid p-0">
            <Col>
              <div
                className="py-5 display-5 fw-bold justify-content-start font-weight-normal pl-2 text-shadow-dark p-2"
                style={{ color: "#0752a1" }}
              >
                Uploaded Documents
              </div>
            </Col>
            <Row className="align-items-center">
              {details &&
                details.map((detail, index) => {
                  return (
                    <>
                      {detail && detail?.uploaded ? (
                        <Col md={6} sm={12} lg={6} xs={6} sx={12}>
                          <SubCard
                            titleClassName="small text-dark shadow bg-blue"
                            className="my-3"
                            cardColor="#e4e9ff "
                          >
                            <Row className="mt-2">
                              <Col
                                style={{ minHeight: "29px" }}
                                className="fs-auto pt-0 p-2 text-dark m-0 font-weight-normal"
                              >
                                <Form.Group
                                  className="d-grid"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Card.Title className="p-2">
                                    {detail?.documentName}
                                  </Card.Title>
                                  <Card.Subtitle className="p-2 overflow-hidden">
                                    {detail?.value}
                                  </Card.Subtitle>
                                </Form.Group>
                              </Col>
                            </Row>
                          </SubCard>
                        </Col>
                      ) : (
                        <Col md={6} sm={12} lg={6} xs={6} sx={12}>
                          <SubCard
                            titleClassName="small text-dark shadow bg-blue"
                            className="my-3"
                            cardColor="#e4e9ff "
                          >
                            <Row className="mt-2">
                              <Col className="p-0 m-0">
                                <Form.Group
                                  className="d-grid"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  {edit.row === 2 &&
                                  edit?.index &&
                                  !edit?.index.localeCompare(String(index)) ? (
                                    <Col className="d-grid gap-2" key={index}>
                                      <Col className="d-grid gap-2">
                                        <h6 className="small p-0 m-0">
                                          Upload your Document
                                        </h6>
                                        <div className="p-0  m-0">
                                          <input
                                            className="form-control p-2 bg-white p-0 m-0 border-0"
                                            type="file"
                                            value={detail.value}
                                            style={{ background: "#19bca1" }}
                                            onChange={(e) => {
                                              e.preventDefault();
                                              handler(e.target.value, index);
                                            }}
                                            id="formFile"
                                          />
                                        </div>
                                        <h6 className="small">
                                          Document format should be in .pdf{" "}
                                        </h6>
                                      </Col>

                                      <Col className="justify-content-end d-flex">
                                        <Button
                                          className="fit-content pointer"
                                          onClick={() => {
                                            setEdit({
                                              row: 2,
                                              index: "",
                                            });
                                          }}
                                          variant="primary"
                                          type="submit"
                                        >
                                          Submit
                                        </Button>
                                      </Col>
                                    </Col>
                                  ) : (
                                    <div
                                      className="fs-auto pt-0 p-2 text-dark m-0 font-weight-normal"
                                      style={{ minHeight: "29px" }}
                                    >
                                      {" "}
                                      <Card.Header className={"bg-transparent"}>
                                        {detail.documentName}
                                      </Card.Header>
                                      <Card.Body>
                                        <Card.Title
                                          className="pointer"
                                          style={{ color: "#0752a1" }}
                                          onClick={() => {
                                            setEdit({
                                              row: 2,
                                              index: String(index),
                                            });
                                          }}
                                        >
                                          Add {detail.documentName}
                                        </Card.Title>
                                      </Card.Body>
                                    </div>
                                  )}
                                </Form.Group>
                              </Col>
                            </Row>
                          </SubCard>{" "}
                        </Col>
                      )}
                    </>
                  );
                })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Documentation;
