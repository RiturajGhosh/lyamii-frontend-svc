import React, { FC, useState } from "react";
import { Col, Row, Button, Container, Form } from "react-bootstrap";
import SubCard from "../../common/subCard/SubCard";
import RoundButton from "../../common/roundButton/RoundButton";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_USER_DATA,
  UserDataDto,
} from "../../../state/actions/types/userDataActionType";
import { userRegistrationApi } from "../../../api/userRegistrationApi";
import { getCookie } from "../../common/enum/functions";
import { getUserProfileDataApi } from "../../../api/getUserProfileDataApi";
import { selectUserData } from "../../../state/selectors/selectUserData";

const Personal: FC = () => {
  const cookie = getCookie("user");
  const user = cookie && JSON.parse(cookie);
  const [edit, setEdit] = useState(false);
  const userData = useSelector(selectUserData);
  const [detail, setDetail] = useState<UserDataDto>(userData?.userData);
  const dispatch = useDispatch();
  const setUserData = async (values: any) => {
    try {
      const res: any = await userRegistrationApi(values);

      const response = user.token && getUserProfileDataApi(user?.email);
      dispatch({
        type: SET_USER_DATA,
        payload: response,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div
      className={`bg-violet-blue px-5 min-vh-100 mw-100 w-100 align-items-center justify-content-end d-flex m-0`}
    >
      <Container
        fluid="lg"
        className="p-0 m-0 min-vh-100 justify-content-end d-flex flex-column w-100"
      >
        <Row className="p-0 m-0 min-vh-100 align-items-center justify-content-end d-flex">
          <Col className="col-12 py-4 m-0 gap-4 align-items-center d-grid p-0">
            <div className="form__input-group shadow pb-0 pt-4 px-lg-2 px-sm-1 px-md-2 px-sx-1 rounded-3 bg-white">
              <div className="form__input-label ml-3 p-2 px-3 bg-grey text-dark shadow rounded-3 border-1 border p">
                <img
                  className={`inline-flex w-20 h-10`}
                  alt={""}
                  src={require("../../../Assets/detail.png")}
                />
                Personal Data
              </div>
              <Form className="form__input">
                <Row className="p-0 m-0">
                  <Col
                    md={5}
                    sm={12}
                    lg={4}
                    xs={4}
                    sx={12}
                    className="col-12 gap-1 d-grid"
                  >
                    <SubCard
                      img={require("./../../../Assets/id.png")}
                      title="Name"
                      titleStyling={{
                        width: `${7 * 14}px`,
                      }}
                      titleClassName="small bold p-1 text-dark shadow bg-blue"
                      className="my-1 mt-3"
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
                                    userFirstName: e.target.value,
                                  })
                                }
                              />
                            ) : (
                              <div className="h4 text-dark p-0 px-2 m-0 font-weight-normal">
                                {detail?.userFirstName}
                              </div>
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
                                    userLastName: e.target.value,
                                  })
                                }
                              />
                            ) : (
                              <div className="h4 text-dark p-0 px-2 m-0 font-weight-normal">
                                {detail?.userLastName}
                              </div>
                            )}
                          </Form.Group>
                        </Col>
                      </Row>
                    </SubCard>
                    <SubCard
                      icon={"MdEmail"}
                      fill="white"
                      iconClassName={`w-20 h-30 p-1 m-1 rounded-circle`}
                      iconStyling={{
                        background: "#53bcf8",
                        padding: "0px !important",
                        margin: "0px !important",
                      }}
                      title="Email"
                      titleStyling={{
                        width: `${7 * 14}px`,
                      }}
                      titleClassName="small bold p-1 text-dark shadow bg-blue"
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
                              <div className="h5 text-dark px-2">
                                {detail?.email}
                              </div>
                            )}
                          </Form.Group>
                        </Col>
                      </Row>
                    </SubCard>
                    <SubCard
                      icon={"FaPhone"}
                      fill="white"
                      iconClassName={`w-10 h-20 p-1 m-1 rounded-circle`}
                      iconStyling={{
                        background: "#53bcf8",
                        padding: "0px !important",
                        margin: "0px !important",
                      }}
                      title="Phone Number"
                      titleStyling={{
                        width: `${12 * 14}px`,
                      }}
                      titleClassName="small bold p-1 text-dark shadow bg-blue"
                      className="my-2"
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
                                    phoneNumber: e.target.value,
                                  })
                                }
                              />
                            ) : (
                              <div className="h5 text-dark px-2">
                                {detail?.phoneNumber}
                              </div>
                            )}
                          </Form.Group>
                        </Col>
                      </Row>
                    </SubCard>
                    <SubCard
                      icon={"CiCalendar"}
                      fill="white"
                      iconClassName={`w-15 h-25 p-1 m-1 rounded-circle`}
                      iconStyling={{
                        background: "#53bcf8",
                        padding: "0px !important",
                        margin: "0px !important",
                      }}
                      title="Date of Birth"
                      titleStyling={{
                        width: `${11 * 14}px`,
                      }}
                      titleClassName="small bold p-1 text-dark shadow bg-blue"
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
                                    dateOfBirth: e.target.value,
                                  })
                                }
                              />
                            ) : (
                              <div className="h5 text-dark px-2">
                                {detail?.dateOfBirth}
                              </div>
                            )}
                          </Form.Group>
                        </Col>
                      </Row>
                    </SubCard>
                  </Col>
                  <Col md={7} sm={12} lg={8} xs={8} sx={12} className="col-12">
                    <SubCard
                      icon={"GoHomeFill"}
                      fill="white"
                      iconClassName={`w-20 h-30 p-1 m-1 rounded-circle`}
                      iconStyling={{
                        background: "#53bcf8",
                        padding: "0px !important",
                        margin: "0px !important",
                      }}
                      title="Address"
                      titleStyling={{
                        width: `${8 * 14}px`,
                      }}
                      titleClassName="small p-1 bold text-dark shadow bg-blue"
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
                                      address: {
                                        street: detail?.address?.street,
                                        houseNumber: e.target.value,
                                        city: detail?.address?.city,
                                        state: detail?.address?.state,
                                        pincode: detail?.address?.pincode,
                                        policeStation:
                                          detail?.address?.policeStation,
                                        postOffice: detail?.address?.postOffice,
                                      },
                                    })
                                  }
                                />
                              ) : (
                                <div
                                  className="h5 pt-0 p-2 text-dark font-weight-normal"
                                  style={{ minHeight: "29px" }}
                                >
                                  {detail?.address?.houseNumber}
                                </div>
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
                                      address: {
                                        houseNumber:
                                          detail?.address?.houseNumber,
                                        street: e.target.value,
                                        city: detail?.address?.city,
                                        state: detail?.address?.state,
                                        pincode: detail?.address?.pincode,
                                        policeStation:
                                          detail?.address?.policeStation,
                                        postOffice: detail?.address?.postOffice,
                                      },
                                    })
                                  }
                                />
                              ) : (
                                <div
                                  className="h5 pt-0 p-2 text-dark m-0 font-weight-normal"
                                  style={{ minHeight: "29px" }}
                                >
                                  {detail?.address?.street}
                                </div>
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
                                      address: {
                                        street: detail?.address?.street,
                                        city: e.target.value,
                                        houseNumber:
                                          detail?.address?.houseNumber,
                                        state: detail?.address?.state,
                                        pincode: detail?.address?.pincode,
                                        policeStation:
                                          detail?.address?.policeStation,
                                        postOffice: detail?.address?.postOffice,
                                      },
                                    })
                                  }
                                />
                              ) : (
                                <div className="h5 pt-0 text-dark p-2 m-0 font-weight-normal">
                                  {detail?.address?.city}
                                </div>
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
                                      address: {
                                        street: detail?.address?.street,
                                        state: e.target.value,
                                        houseNumber:
                                          detail?.address?.houseNumber,
                                        city: detail?.address?.city,
                                        pincode: detail?.address?.pincode,
                                        policeStation:
                                          detail?.address?.policeStation,
                                        postOffice: detail?.address?.postOffice,
                                      },
                                    })
                                  }
                                />
                              ) : (
                                <div
                                  className="h5 pt-0 text-dark p-2 m-0 font-weight-normal"
                                  style={{ minHeight: "29px" }}
                                >
                                  {detail?.address?.state}
                                </div>
                              )}
                            </Form.Group>
                          </Col>
                          <Col className="p-0 m-0">
                            <Form.Group
                              className="d-grid"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label
                                className="small p-0 m-0 px-2 font-weight-normal"
                                style={{ minHeight: "29px" }}
                              >
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
                                      address: {
                                        street: detail?.address?.street,
                                        pincode: e.target.value,
                                        houseNumber:
                                          detail?.address?.houseNumber,
                                        city: detail?.address?.city,
                                        state: detail?.address?.state,
                                        policeStation:
                                          detail?.address?.policeStation,
                                        postOffice: detail?.address?.postOffice,
                                      },
                                    })
                                  }
                                />
                              ) : (
                                <div
                                  className="h5 pt-0 text-dark p-2 m-0 font-weight-normal"
                                  style={{ minHeight: "29px" }}
                                >
                                  {detail?.address?.pincode}
                                </div>
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
                              <Form.Label
                                className="small p-0 m-0 px-2 font-weight-normal"
                                style={{ minHeight: "29px" }}
                              >
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
                                      address: {
                                        street: detail?.address?.street,
                                        pincode: detail?.address?.pincode,
                                        houseNumber:
                                          detail?.address?.houseNumber,
                                        city: detail?.address?.city,
                                        state: detail?.address?.state,
                                        policeStation:
                                          detail?.address?.policeStation,
                                        postOffice: e.target.value,
                                      },
                                    })
                                  }
                                />
                              ) : (
                                <div
                                  className="h5 p-0 m-0 text-dark px-2 font-weight-normal"
                                  style={{ minHeight: "29px" }}
                                >
                                  {detail?.address?.postOffice}
                                </div>
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
                                      address: {
                                        street: detail?.address?.street,
                                        pincode: detail?.address?.pincode,
                                        houseNumber:
                                          detail?.address?.houseNumber,
                                        city: detail?.address?.city,
                                        state: detail?.address?.state,
                                        policeStation: e.target.value,
                                        postOffice: detail?.address?.postOffice,
                                      },
                                    })
                                  }
                                />
                              ) : (
                                <div className="h5 text-dark p-0 m-0 px-2 font-weight-normal">
                                  {detail?.address?.policeStation}
                                </div>
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
                          img={require("../../../Assets/gender.png")}
                          title="Gender"
                          titleStyling={{
                            width: `${8 * 14}px`,
                          }}
                          titleClassName="small p-1 bold text-dark shadow bg-blue"
                          className="my-4"
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
                              <div className="h5 text-dark px-2">
                                {detail?.gender}
                              </div>
                            )}
                          </Form.Group>
                        </SubCard>
                      </Col>
                      <Col md={4} sm={4} lg={4} xs={4} sx={4}>
                        <SubCard
                          icon="TbDropletFilled"
                          fill="white"
                          iconClassName={`w-15 h-25 rounded-circle`}
                          iconStyling={{
                            color: "#53bcf8",
                            padding: "0px !important",
                            margin: "0px !important",
                          }}
                          title="Blood Group"
                          titleStyling={{
                            width: `${9.5 * 14}px`,
                          }}
                          titleClassName="small bold p-1 text-dark shadow bg-blue"
                          className="my-4"
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
                              <div className="h5 text-dark px-2">
                                {detail?.bloodGroup}
                              </div>
                            )}
                          </Form.Group>
                        </SubCard>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                {edit && (
                  <Button
                    onClick={() => {
                      setUserData(detail);
                      setEdit(false);
                    }}
                    className="d-flex float-right mx-2 px-3"
                  >
                    Submit
                  </Button>
                )}
                {!edit && (
                  <div
                    onClick={() => setEdit(true)}
                    className="d-flex position-absolute top-0 end-0 p-0"
                    style={{
                      margin: "-12px",
                      offset: "-14px",
                    }}
                  >
                    <RoundButton
                      className="border-5 border circle-core"
                      bordercolor="#0e3c30"
                      size={"calc(3*1vw"}
                      fill={"#c4cdfe"}
                      img={require("../../../Assets/editUser.png")}
                    ></RoundButton>
                  </div>
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
