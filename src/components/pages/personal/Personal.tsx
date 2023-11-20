import React, { FC, useEffect, useState } from "react";
import { Col, Row, Button, Container, Form } from "react-bootstrap";
import SubCard from "../../common/subCard/SubCard";
import SideNav from "../../common/sideNav/SideNav";

const Personal: FC = () => {
  const [edit, setEdit] = useState(false);
  const [detail, setDetail] = useState({
    firstName: "",
    lastName: "",
    city: "",
    zipcode: "",
    state: "",
    address: "",
    dob: "",
    phoneNo: "",
    address2: "",
    email: "",
    station: "",
    post: "",
    houseNo: "",
    bloodGroup: "",
    gender: "",
  });

  return (
    <div
      className={`bg-violet-blue px-4 min-vh-100 mw-100 w-100 align-items-center justify-content-end d-flex m-0`}
    >
      <Container className="p-0 m-0 min-vh-100 justify-content-end d-flex flex-column w-100">
        <Row className="p-0 m-0 min-vh-100 align-items-center justify-content-end d-flex">
          <Col className="col-12 py-4 m-0 gap-4 align-items-center d-grid p-0">
            <div className="form__input-group shadow pb-0 pt-4 px-lg-2 px-sm-1 px-md-2 px-sx-1 rounded-3 bg-white">
              <div className="form__input-label ml-3 bg-grey text-dark shadow rounded-3 border-1 border p">
                Personal Data
              </div>
              <Form className="form__input">
                <Row className="p-0 m-0">
                  <Col md={5} sm={12} lg={4} xs={4} sx={12} className="col-12">
                    <SubCard
                      title="Name"
                      titleStyling="small text-dark shadow bg-blue"
                      className="my-3"
                    >
                      <Row className="mt-2 gap-1">
                        <Col className="p-0 m-0">
                          <Form.Group
                            className="d-grid"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label className="small p-0 m-0 px-2 font-weight-normal">
                              First Name
                            </Form.Label>
                            {edit ? (
                              <Form.Control
                                className=""
                                type="text"
                                placeholder=""
                                onChange={(e: any) =>
                                  setDetail({
                                    ...detail,
                                    firstName: e.target.value,
                                  })
                                }
                              />
                            ) : (
                              <Form.Text className="p p-0 px-2 m-0 font-weight-normal">
                                {detail.firstName}
                              </Form.Text>
                            )}
                          </Form.Group>
                        </Col>
                        <Col className="p-0 ml-1 m-0">
                          <Form.Group
                            className="d-grid"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label className="small p-0 m-0 px-2 font-weight-normal">
                              Last Name
                            </Form.Label>
                            {edit ? (
                              <Form.Control
                                className=""
                                type="text"
                                placeholder=""
                                onChange={(e: any) =>
                                  setDetail({
                                    ...detail,
                                    lastName: e.target.value,
                                  })
                                }
                              />
                            ) : (
                              <Form.Text className="p p-0 px-2 m-0 font-weight-normal">
                                {detail.lastName}
                              </Form.Text>
                            )}
                          </Form.Group>
                        </Col>
                      </Row>
                    </SubCard>
                    <SubCard
                      title="Email"
                      titleStyling="small text-dark shadow bg-blue"
                      className="my-4"
                    >
                      <Row>
                        <Col className="p-0 m-0">
                          <Form.Group
                            className="my-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            {edit ? (
                              <Form.Control
                                className=""
                                type="email"
                                placeholder=""
                                onChange={(e: any) =>
                                  setDetail({
                                    ...detail,
                                    email: e.target.value,
                                  })
                                }
                              />
                            ) : (
                              <Form.Text className="px-2">
                                {detail.email}
                              </Form.Text>
                            )}
                          </Form.Group>
                        </Col>
                      </Row>
                    </SubCard>
                    <SubCard
                      title="Phone Number"
                      titleStyling="small text-dark shadow bg-blue"
                      className="my-4"
                    >
                      <Row>
                        <Col className="p-0 m-0">
                          <Form.Group
                            className="my-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            {edit ? (
                              <Form.Control
                                className=""
                                type="text"
                                placeholder=""
                                onChange={(e: any) =>
                                  setDetail({
                                    ...detail,
                                    phoneNo: e.target.value,
                                  })
                                }
                              />
                            ) : (
                              <Form.Text className="px-2">
                                {" "}
                                {detail.phoneNo}
                              </Form.Text>
                            )}
                          </Form.Group>
                        </Col>
                      </Row>
                    </SubCard>
                    <SubCard
                      title="Date of Birth"
                      titleStyling="small text-dark shadow bg-blue"
                      className="my-4"
                    >
                      <Row>
                        <Col className="p-0 m-0">
                          <Form.Group
                            className="my-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            {edit ? (
                              <Form.Control
                                className=""
                                type="date"
                                placeholder=""
                                onChange={(e: any) =>
                                  setDetail({
                                    ...detail,
                                    dob: e.target.value,
                                  })
                                }
                              />
                            ) : (
                              <Form.Text className="px-2">
                                {" "}
                                {detail.dob}
                              </Form.Text>
                            )}
                          </Form.Group>
                        </Col>
                      </Row>
                    </SubCard>
                  </Col>
                  <Col md={7} sm={12} lg={8} xs={8} sx={12} className="col-12">
                    <SubCard
                      title="Address"
                      titleStyling="small text-dark shadow bg-blue"
                      className="my-3"
                    >
                      <Col className="m-0 py-12">
                        <Row className="mt-3">
                          <Col className="p-0 m-0">
                            <Form.Group
                              className="d-grid"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="small p-0 m-0 px-2 font-weight-normal">
                                House Number
                              </Form.Label>
                              {edit ? (
                                <Form.Control
                                  className=""
                                  type="text"
                                  placeholder=""
                                  onChange={(e: any) =>
                                    setDetail({
                                      ...detail,
                                      houseNo: e.target.value,
                                    })
                                  }
                                />
                              ) : (
                                <Form.Text className="small pt-0 p-2 m-0 font-weight-normal">
                                  {detail.houseNo}
                                </Form.Text>
                              )}
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row className="mt-2">
                          <Col className="p-0 m-0">
                            <Form.Group
                              className="d-grid"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="small p-0 m-0 px-2 font-weight-normal">
                                Street
                              </Form.Label>
                              {edit ? (
                                <Form.Control
                                  className=""
                                  type="text"
                                  placeholder=""
                                  onChange={(e: any) =>
                                    setDetail({
                                      ...detail,
                                      address: e.target.value,
                                    })
                                  }
                                />
                              ) : (
                                <Form.Text className="small pt-0 p-2 m-0 font-weight-normal">
                                  {detail.address}
                                </Form.Text>
                              )}
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row className="mt-2 gap-1">
                          <Col className="p-0 m-0">
                            <Form.Group
                              className="d-grid"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="small p-0 m-0 px-2 font-weight-normal">
                                City
                              </Form.Label>
                              {edit ? (
                                <Form.Control
                                  className=""
                                  type="text"
                                  placeholder=""
                                  onChange={(e: any) =>
                                    setDetail({
                                      ...detail,
                                      city: e.target.value,
                                    })
                                  }
                                />
                              ) : (
                                <Form.Text className="small pt-0 p-2 m-0 font-weight-normal">
                                  {detail.city}
                                </Form.Text>
                              )}
                            </Form.Group>
                          </Col>
                          <Col className="p-0 m-0">
                            <Form.Group
                              className="d-grid"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="small p-0 m-0 px-2 font-weight-normal">
                                State
                              </Form.Label>
                              {edit ? (
                                <Form.Control
                                  className=""
                                  type="text"
                                  placeholder=""
                                  onChange={(e: any) =>
                                    setDetail({
                                      ...detail,
                                      state: e.target.value,
                                    })
                                  }
                                />
                              ) : (
                                <Form.Text className="small pt-0 p-2 m-0 font-weight-normal">
                                  {detail.state}
                                </Form.Text>
                              )}
                            </Form.Group>
                          </Col>
                          <Col className="p-0 m-0">
                            <Form.Group
                              className="d-grid"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="small p-0 m-0 px-2 font-weight-normal">
                                Pincode
                              </Form.Label>
                              {edit ? (
                                <Form.Control
                                  className=""
                                  type="number"
                                  placeholder=""
                                  onChange={(e: any) =>
                                    setDetail({
                                      ...detail,
                                      zipcode: e.target.value,
                                    })
                                  }
                                />
                              ) : (
                                <Form.Text className="small pt-0 p-2 m-0 font-weight-normal">
                                  {detail.zipcode}
                                </Form.Text>
                              )}
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row className="mt-2 mb-3 gap-1">
                          <Col
                            md={4}
                            sm={4}
                            lg={4}
                            xs={4}
                            sx={4}
                            className="p-0 m-0"
                          >
                            <Form.Group
                              className="d-grid"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="small p-0 m-0 px-2 font-weight-normal">
                                Post-Office
                              </Form.Label>
                              {edit ? (
                                <Form.Control
                                  className=""
                                  type="text"
                                  placeholder=""
                                  onChange={(e: any) =>
                                    setDetail({
                                      ...detail,
                                      post: e.target.value,
                                    })
                                  }
                                />
                              ) : (
                                <Form.Text className="small p-0 m-0 px-2 font-weight-normal">
                                  {detail.post}
                                </Form.Text>
                              )}
                            </Form.Group>
                          </Col>
                          <Col
                            md={4}
                            sm={4}
                            lg={4}
                            xs={4}
                            sx={4}
                            className="p-0 m-0"
                          >
                            <Form.Group
                              className="d-grid"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="small p-0 m-0 px-2 font-weight-normal">
                                Police Station
                              </Form.Label>
                              {edit ? (
                                <Form.Control
                                  className=""
                                  type="text"
                                  placeholder=""
                                  onChange={(e: any) =>
                                    setDetail({
                                      ...detail,
                                      station: e.target.value,
                                    })
                                  }
                                />
                              ) : (
                                <Form.Text className="small p-0 m-0 px-2 font-weight-normal">
                                  {detail.station}
                                </Form.Text>
                              )}
                            </Form.Group>
                          </Col>
                        </Row>
                      </Col>
                    </SubCard>
                    <Row className="p-0 m-0">
                      <Col
                        md={4}
                        sm={4}
                        lg={4}
                        xs={4}
                        sx={4}
                        className="p-0 m-0"
                      >
                        <SubCard
                          title="Gender"
                          titleStyling="small text-dark shadow bg-blue"
                          className="my-2"
                        >
                          <Form.Group
                            className="my-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            {edit ? (
                              <Form.Control
                                className=""
                                type="text"
                                placeholder=""
                                onChange={(e: any) =>
                                  setDetail({
                                    ...detail,
                                    gender: e.target.value,
                                  })
                                }
                              />
                            ) : (
                              <Form.Text className="px-2">
                                {" "}
                                {detail.gender}
                              </Form.Text>
                            )}
                          </Form.Group>
                        </SubCard>
                      </Col>
                      <Col md={4} sm={4} lg={4} xs={4} sx={4}>
                        <SubCard
                          title="Blood Group"
                          titleStyling="small text-dark shadow bg-blue"
                          className="my-2"
                        >
                          <Form.Group
                            className="my-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            {edit ? (
                              <Form.Control
                                className=""
                                type="text"
                                placeholder=""
                                onChange={(e: any) =>
                                  setDetail({
                                    ...detail,
                                    bloodGroup: e.target.value,
                                  })
                                }
                              />
                            ) : (
                              <Form.Text className="px-2">
                                {" "}
                                {detail.bloodGroup}
                              </Form.Text>
                            )}
                          </Form.Group>
                        </SubCard>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                {edit && (
                  <Button
                    onClick={() => setEdit(false)}
                    className="d-flex float-right mx-2 px-3"
                  >
                    Submit
                  </Button>
                )}
                {!edit && (
                  <Button
                    onClick={() => setEdit(true)}
                    className="d-flex position-absolute top-0 end-0 p-0"
                    style={{
                      margin: "-12px",
                      offset: "-14px",
                    }}
                  >
                    Edit
                  </Button>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Personal;
