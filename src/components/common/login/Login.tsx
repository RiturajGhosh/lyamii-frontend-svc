import React, { FC, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Button, Card, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectOtpVerification } from "../../../state/selectors/selectLoginData";
import {
  OTP_VERIFICATION,
  SET_LOGIN_DATA,
} from "../../../state/actions/types/loginDataActionType";
import { setCookie } from "../enum/functions";
import { otpVerification } from "../../../api/otpVerfication";
import { signUpApi } from "../../../api/signupApi";
import { signInApi } from "../../../api/signinApi";
import { getOtpApi } from "../../../api/otpApi";
import { Formik } from "formik";
import { validate } from "../../../utils/validationForm";
import InputForm from "../inputForm/InputForm";
import { okErrorCode } from "../enum/errorCode";

export type SideNavList = {
  name: string;
  path: string;
};
const Login: FC = () => {
  const verificationStatus = useSelector(selectOtpVerification);
  const [otpVerify, setOtpVerify] = useState(verificationStatus?.status);
  const [show, setShow] = useState(true);
  const [otpSent, setOtpSent] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const [usedEmailMessage, setUsedEmailMessage] = useState("");
  const [detail] = useState({
    email: "",
    password: "",
    userName: "",
    type: "",
    otp: "",
  });
  const [have, setHave] = useState(location?.pathname?.includes("/login"));
  const dispatch = useDispatch();

  useEffect(() => {
    if (otpSent) {
      setOtpVerify(verificationStatus?.status);
    }
  }, [verificationStatus]);

  useEffect(() => {
    setHave(location.pathname.includes("/login"));
  }, [location]);

  const signIN = async (values: any) => {
    try {
      const response: any = await signInApi(values);
      setCookie("user", {
        email: response?.data.email,
        token: response?.data.token,
      });
      dispatch({
        type: SET_LOGIN_DATA,
        payload: response.data || detail,
      });
      if (response.data.roles[0] === "ROLE_HOSTEL") {
        history.push("/addHostel");
      }
      if (response.data.roles[0] === "ROLE_HOTEL") {
        history.push("/addHotel");
      }
      if (response.data.roles[0] === "ROLE_USER") {
        history.push("/profile");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const signUp = async (values: any) => {
    try {
      const response: any = await signUpApi(values);
      okErrorCode.includes(response.status) && history.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const verify = async (values: any) => {
    try {
      const data = await otpVerification(values.email, values.otp);
      dispatch({
        type: OTP_VERIFICATION,
        payload: { status: data?.status === 204 },
      });
      setOtpSent(false);
    } catch (error: any) {
      setOtpSent(true);
      console.log(error.message);
    }
  };
  useEffect(() => {
    return () => setShow(false);
  }, []);

  return (
    <Col className="min-vh-100 align-items-center d-flex">
      <Modal
        show={show}
        fullscreen={"false"}
        // onHide={() => setShow(false)}
        centered
      >
        <Modal.Body className="p-5 gap-5 d-flex flex-column">
          <Formik
            initialValues={detail}
            validationSchema={validate}
            onSubmit={(values) => {}}
          >
            {({
              setValues,
              values,
              handleSubmit,
              setErrors,
              setTouched,
              touched,
              errors,
            }: any) => {
              return (
                <>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group
                      className="gap-4 d-flex flex-column"
                      controlId="exampleForm.ControlInput1"
                    >
                      {!have && (
                        <Row>
                          <Col className="px-1 m-0">
                            <InputForm
                              label={""}
                              className="w-100 bg-white h5 justify-content-center p-2 px-2 text-dark text-center m-0 border-2 border-top-0 border-end-0 border-start-0"
                              type="text"
                              placeholder="USER NAME"
                              values={values}
                              minLength={3}
                              maxLength={20}
                              style={{
                                background: "#19bca1",
                                borderColor:
                                  Object.keys(touched).includes("userName") &&
                                  Object.keys(errors).includes("userName")
                                    ? "red"
                                    : "#4a915b",
                              }}
                              touched={touched}
                              errors={errors}
                              required={"Required"}
                              name={"userName"}
                            />
                          </Col>
                        </Row>
                      )}
                      <Row>
                        <Col className="px-1 align-self-center m-0">
                          <InputForm
                            label={""}
                            className="w-100 bg-white h5 justify-content-center p-2 px-2 text-dark text-center m-0 border-2 border-top-0 border-end-0 border-start-0"
                            type="text"
                            placeholder="USER EMAIL"
                            values={values}
                            minLength={0}
                            maxLength={50}
                            onclick={() => setUsedEmailMessage("")}
                            style={{
                              background: "#19bca1",
                              borderColor:
                                Object.keys(touched).includes("email") &&
                                Object.keys(errors).includes("email")
                                  ? "red"
                                  : "#4a915b",
                            }}
                            touched={touched}
                            errors={errors}
                            required={"Required"}
                            name={"email"}
                          />
                        </Col>
                        {!have && (
                          <Col className="col-4 align-self-center p-0 m-0">
                            <Button
                              className="round-edges h2 py-1 m-0"
                              style={{ minHeight: "0%", background: "#4a915b" }}
                              onClick={(e: any) => {
                                e.preventDefault();
                                if (!Object.keys(errors).includes("email")) {
                                  setUsedEmailMessage("");
                                  getOtpApi(values.email).then(
                                    (response: any) => {
                                      if (response.status === 204) {
                                        setOtpSent(true);
                                        setOtpVerify(false);
                                      } else {
                                        setUsedEmailMessage(
                                          response.response.data.errors[0]
                                            .errorMessage
                                        );
                                        setOtpSent(false);
                                        setOtpVerify(false);
                                      }
                                    }
                                  );
                                }
                              }}
                            >
                              <span className="h6 p-0 m-0">Send OTP</span>
                            </Button>
                          </Col>
                        )}

                        {usedEmailMessage?.length > 0 && (
                          <span className="text-danger">
                            {usedEmailMessage}
                          </span>
                        )}
                      </Row>
                      {otpSent && (
                        <Row>
                          <Col className="col-8 align-self-center px-1 m-0">
                            <InputForm
                              label={""}
                              className="w-100 bg-white h5 justify-content-center p-2 px-2 text-dark text-center m-0 border-2 border-top-0 border-end-0 border-start-0"
                              type="text"
                              placeholder=""
                              values={values}
                              minLength={6}
                              maxLength={6}
                              style={{
                                background: "#19bca1",
                                borderColor:
                                  Object.keys(touched).includes("otp") &&
                                  Object.keys(errors).includes("otp")
                                    ? "red"
                                    : "#4a915b",
                              }}
                              touched={touched}
                              errors={errors}
                              required={"Required"}
                              name={"otp"}
                            />
                          </Col>

                          {!verificationStatus && (
                            <span className="text-danger">OTP is wrong</span>
                          )}
                          <Col className="col-4 align-self-center p-0 m-0">
                            <Button
                              className="round-edges h2 py-1 m-0"
                              style={{ minHeight: "0%", background: "#4a915b" }}
                              onClick={(e: any) => {
                                e.preventDefault();
                                if (!Object.keys(errors).includes("otp")) {
                                  verify(values);
                                }
                              }}
                            >
                              <span className="h6 p-0 m-0">verify</span>
                            </Button>
                          </Col>
                        </Row>
                      )}
                      {(have || (!have && otpVerify)) && (
                        <Row>
                          <Col className="px-1 m-0">
                            <InputForm
                              label={""}
                              className="w-100 bg-white h5 justify-content-center p-2 px-2 text-dark text-center m-0 border-2 border-top-0 border-end-0 border-start-0"
                              type="text"
                              placeholder="PASSWORD"
                              values={values}
                              minLength={6}
                              maxLength={40}
                              style={{
                                background: "#19bca1",
                                borderColor:
                                  Object.keys(touched).includes("password") &&
                                  Object.keys(errors).includes("password")
                                    ? "red"
                                    : "#4a915b",
                              }}
                              touched={touched}
                              errors={errors}
                              required={"Required"}
                              name={"password"}
                            />
                          </Col>
                          {!have && verificationStatus.status && (
                            <Col className="col-4 p-0 m-0">
                              <Dropdown
                                onSelect={(eventKey: any) => {
                                  eventKey.preventDefault();
                                  setValues({
                                    ...values,
                                    type: [eventKey.toLowerCase()],
                                  });
                                }}
                              >
                                <Dropdown.Toggle
                                  className="border-0 round-edges d-inline h2 py-1 m-0"
                                  style={{ background: "#4a915b" }}
                                  id="dropdown-basic"
                                >
                                  Type
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                  <Dropdown.Item
                                    className={"text-dark text-decoration-none"}
                                    eventKey={"user"}
                                  >
                                    User
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className={"text-dark text-decoration-none"}
                                    eventKey={"Hotel"}
                                  >
                                    Hotel
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className={"text-dark text-decoration-none"}
                                    eventKey={"Hostel"}
                                  >
                                    Hostel
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </Col>
                          )}
                        </Row>
                      )}
                      {have ? (
                        <Button
                          className="round-edges h2 h-100 py-1"
                          style={{ minHeight: "0%", background: "#4a915b" }}
                          onClick={(e: any) => {
                            e.preventDefault();
                            if (
                              !Object.keys(errors).includes("email") &&
                              !Object.keys(errors).includes("password")
                            ) {
                              signIN(values);
                            }
                          }}
                        >
                          <span className="h5 p-0 m-0">Log In</span>
                        </Button>
                      ) : (
                        <>
                          {otpVerify && (
                            <Button
                              className="round-edges h2 h-100 py-1"
                              style={{ minHeight: "0%", background: "#4a915b" }}
                              onClick={(e: any) => {
                                e.preventDefault();
                                if (Object.keys(errors).length === 0) {
                                  signUp(values);
                                }
                              }}
                            >
                              <span className="h5 p-0 m-0">Sign Up</span>
                            </Button>
                          )}
                        </>
                      )}
                    </Form.Group>
                  </Form>
                  <Col className="d-flex flex-column justify-content-center w-100">
                    <span
                      className="d-flex align-self-center fit-content h4"
                      style={{ color: "#4a915b" }}
                    >
                      Forget Password?
                    </span>
                    <Col className="position-relative d-flex align-items-center justify-content-center p-0 m-0">
                      <hr
                        className="d-flex position-absolute w-100 p-0 m-0"
                        style={{ border: "2px solid #4c905f" }}
                      ></hr>
                      <Card className="d-flex align-self-center shadow-none fit-content bold p-0 m-0 px-1">
                        or
                      </Card>
                    </Col>
                    {have ? (
                      <span
                        className="d-flex align-self-center display-6 bold fit-content"
                        style={{ color: "#4a915b" }}
                        onClick={(event) => {
                          event.preventDefault();
                          setValues(detail);
                          setOtpSent(false);
                          setTouched({});
                          setHave(false);
                          setShow(false);
                          history.push("/signup");
                        }}
                      >
                        Create New Profile
                      </span>
                    ) : (
                      <span
                        className="d-flex align-self-center display-6 bold fit-content"
                        style={{ color: "#4a915b" }}
                        onClick={(event) => {
                          event.preventDefault();
                          setValues(detail);
                          setOtpSent(false);
                          setTouched({});
                          setHave(true);
                          setShow(false);
                          history.push("/login");
                        }}
                      >
                        Login
                      </span>
                    )}
                  </Col>
                </>
              );
            }}
          </Formik>
        </Modal.Body>
      </Modal>
    </Col>
  );
};

export default Login;
