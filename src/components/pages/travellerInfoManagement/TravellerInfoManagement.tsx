import React, { FC, useState } from "react";
import { Col, Row, Card, Container, Form, Button } from "react-bootstrap";
import SubCard from "../../common/subCard/SubCard";
import FormInput from "../../common/formInput/FormInput";
import Icon from "../../common/icon/Icon";

export type TravellersDetailsDto = {
  travellerName: string;
  lyamiiId?: string;
  passport?: string;
};
const TravellerInfoManagement: FC = () => {
  const [travellersDetails, setTravellersDetails] = useState<
    TravellersDetailsDto[]
  >([]);
  const [haveQuantity, setHaveQuantity] = useState(1);
  const [notHaveQuantity, setNotHaveQuantity] = useState(1);
  const [edit, setEdit] = useState({ row: 1, index: "" });
  const [detail, setDetail] = useState({
    travellerName: "",
    lyamiiId: "",
    passport: "",
  });

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
                Traveller's Information Managements
              </div>
            </Col>
            <Col>
              <div
                className="h2 rounded-4 fit-content text-shadow-dark p-2"
                style={{ color: "#0752a1" }}
              >
                {"Have Traveller's Id"}
              </div>
            </Col>
            <Row className="align-items-center">
              {travellersDetails &&
                travellersDetails?.map((travellerDetail) => {
                  return (
                    <Col md={6} sm={12} lg={6} xs={6} sx={12}>
                      <SubCard
                        titleClassName="small text-dark shadow bg-blue"
                        className="my-3"
                        cardColor="#e4e9ff "
                      >
                        <Card.Title className="px-2">
                          {travellerDetail?.travellerName}
                        </Card.Title>
                        <Card.Subtitle className="px-2">
                          {travellerDetail?.lyamiiId}
                        </Card.Subtitle>
                      </SubCard>
                    </Col>
                  );
                })}
              {Array(haveQuantity)
                .fill(null)
                .map((_, index: number) => {
                  return (
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
                              {edit.row === 1 &&
                              edit?.index &&
                              !edit?.index.localeCompare(String(index)) ? (
                                <Col className="d-grid gap-2">
                                  <h6 className="small p-0 m-0">
                                    Traveller Name
                                  </h6>
                                  <FormInput
                                    direction={Col}
                                    value={detail?.travellerName}
                                    inputStyling={"w-100 p-2 border-0"}
                                    className="w-100"
                                    type={"text"}
                                    placeHolder={"Name"}
                                    controlId={"forGridFirstName"}
                                    onchange={(e: any) => {
                                      setDetail({
                                        ...detail,
                                        travellerName: e.target.value,
                                      });
                                    }}
                                  />
                                  <Col className="d-grid gap-2">
                                    <h6 className="small p-0 m-0">LyamiiId</h6>
                                    <FormInput
                                      direction={Col}
                                      value={detail?.lyamiiId}
                                      inputStyling={"w-100 p-2 border-0"}
                                      className="w-100"
                                      type={"text"}
                                      placeHolder={"LyamiiId"}
                                      controlId={"forGridFirstName"}
                                      onchange={(e: any) => {
                                        setDetail({
                                          ...detail,
                                          lyamiiId: e.target.value,
                                        });
                                      }}
                                    />
                                  </Col>

                                  <Col className="justify-content-end d-flex">
                                    <Button
                                      className="fit-content pointer"
                                      onClick={() => {
                                        setTravellersDetails([
                                          ...travellersDetails,
                                          detail,
                                        ]);
                                        setDetail({
                                          travellerName: "",
                                          lyamiiId: "",
                                          passport: "",
                                        });
                                        setEdit({
                                          row: 1,
                                          index: String(index),
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
                                    Traveller{" "}
                                    {travellersDetails?.length + index + 1}
                                  </Card.Header>
                                  <Card.Body>
                                    <Card.Title
                                    className="pointer"
                                      style={{ color: "#0752a1" }}
                                      onClick={() =>
                                        setEdit({
                                          row: 1,
                                          index: String(index),
                                        })
                                      }
                                    >
                                      Add Traveller
                                    </Card.Title>
                                  </Card.Body>
                                </div>
                              )}
                            </Form.Group>
                          </Col>
                        </Row>
                      </SubCard>{" "}
                    </Col>
                  );
                })}
              <Icon
                name="addRoundButton"
                className={`w-10 h-30 pointer`}
                onClick={() => setHaveQuantity(haveQuantity + 1)}
                style={{
                  padding: "0px !important",
                  margin: "0px !important",
                }}
              />
            </Row>
            <Col>
              <div
                className="h2 rounded-4 fit-content text-shadow-dark p-2"
                style={{ color: "#0752a1" }}
              >
                {"Does not Have Traveller's Id"}
              </div>
            </Col>
            <Row className="align-items-center">
              {travellersDetails &&
                travellersDetails?.map((travellerDetail) => {
                  return (
                    <Col md={6} sm={12} lg={6} xs={6} sx={12}>
                      <SubCard
                        titleClassName="small text-dark shadow bg-blue"
                        className="my-3"
                        cardColor="#e4e9ff "
                      >
                        <Card.Title className="px-2">
                          {travellerDetail?.travellerName}
                        </Card.Title>
                        <Card.Subtitle className="px-2">
                          {travellerDetail?.lyamiiId}
                        </Card.Subtitle>
                      </SubCard>
                    </Col>
                  );
                })}
              {Array(notHaveQuantity)
                .fill(null)
                .map((_, index: number) => {
                  return (
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
                                <Col className="d-grid gap-2">
                                  <h6 className="small p-0 m-0">
                                    Traveller Name
                                  </h6>
                                  <FormInput
                                    direction={Col}
                                    value={detail?.travellerName}
                                    inputStyling={"w-100 p-2 border-0"}
                                    className="w-100"
                                    type={"text"}
                                    placeHolder={"Name"}
                                    controlId={"forGridFirstName"}
                                    onchange={(e: any) => {
                                      setDetail({
                                        ...detail,
                                        travellerName: e.target.value,
                                      });
                                    }}
                                  />
                                  <Col className="d-grid gap-2">
                                    <h6 className="small p-0 m-0">
                                      Upload your Passport
                                    </h6>
                                    <div className="p-0  m-0">
                                      <input
                                        className="form-control p-2 bg-white p-0 m-0 border-0"
                                        type="file"
                                        value={detail?.passport}
                                        style={{ background: "#19bca1" }}
                                        onChange={(e: any) =>
                                          setDetail({
                                            ...detail,
                                            passport: e.target.value,
                                          })
                                        }
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
                                        setTravellersDetails([
                                          ...travellersDetails,
                                          detail,
                                        ]);
                                        setDetail({
                                          travellerName: "",
                                          lyamiiId: "",
                                          passport: "",
                                        });
                                        setEdit({
                                          row: 2,
                                          index: String(index),
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
                                    Traveller{" "}
                                    {travellersDetails?.length + index + 1}
                                  </Card.Header>
                                  <Card.Body>
                                    <Card.Title
                                    className="pointer"
                                      style={{ color: "#0752a1" }}
                                      onClick={() =>
                                        setEdit({
                                          row: 2,
                                          index: String(index),
                                        })
                                      }
                                    >
                                      Add Traveller
                                    </Card.Title>
                                  </Card.Body>
                                </div>
                              )}
                            </Form.Group>
                          </Col>
                        </Row>
                      </SubCard>{" "}
                    </Col>
                  );
                })}
              <Icon
                name="addRoundButton"
                className={`w-10 h-30 pointer`}
                onClick={() => setNotHaveQuantity(notHaveQuantity + 1)}
                style={{
                  padding: "0px !important",
                  margin: "0px !important",
                }}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TravellerInfoManagement;
