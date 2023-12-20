import React, { FC, useEffect, useState } from "react";
import style from "./login.module.scss";
import { Cookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLoginData,
  selectOtpVerification,
} from "../../../state/selectors/selectLoginData";
import {
  OTP_VERIFICATION,
  SET_LOGIN_DATA,
} from "../../../state/actions/types/loginDataActionType";
import { emailVerification } from "../../../api/emailVerfication";
import { signIn } from "../../../api/signin";
import { signUp } from "../../../api/signup";
import { getCookie, setCookie } from "../enum/functions";
import { otpVerification } from "../../../api/otpVerfication";
import { getOtp } from "../../../api/otp";
export type SideNavList = {
  name: string;
  path: string;
};
const Login: FC = () => {
  const userData = useSelector(selectLoginData);
  const verificationStatus = useSelector(selectOtpVerification);
  const [otpVerify, setOtpVerify] = useState(verificationStatus);
  const [otpSent, setOtpSent] = useState(false);
  const [show, setShow] = useState(true);
  const [otp, setOtp] = useState("");
  const [detail, setDetail] = useState({
    userId: "",
    password: "",
    userName: "",
  });
  const [have, setHave] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (
      userData?.loginData?.userId?.length > 0 &&
      userData?.loginData?.password?.length > 0
    ) {
      history.push("/");
    }
  }, [userData]);
  const update = () => {
    setDetail({
      userId: "",
      password: "",
      userName: "",
    });
    setOtp("");
    setOtpSent(false);
  };
  const signIN = async () => {
    try {
      const data = await signIn(detail.userId, detail.password);
      setCookie("user", { email: data?.data.email, token: data?.data.token });
      dispatch({
        type: SET_LOGIN_DATA,
        payload: data || detail,
      });
      history.push("/");
    } catch (error: any) {
      console.log(error);
    }
  };
  const create = async () => {
    try {
      await emailVerification(detail.userId);
      const data = await signUp(detail);
      setCookie("user", data?.data);
      console.log(getCookie("user"));
      dispatch({
        type: SET_LOGIN_DATA,
        payload: data || detail,
      });
      history.push("/");
    } catch (error: any) {
      console.log(error);
    }
  };
  const verify = async () => {
    try {
      const data = await otpVerification(detail.userId, otp);
      dispatch({
        type: OTP_VERIFICATION,
        payload: { status: data?.data || false },
      });
      setOtpSent(false);
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <Col className="min-vh-100 align-items-center d-flex">
      <Col className="flex-column align-items-center d-flex gap-3">
        <Row className="gap-lg-5 gap-md-3 gap-2 justify-content-around position-relative">
          <Col
            md={2}
            lg={2}
            xs={2}
            sx={2}
            sm={2}
            className={`rounded-4 m-3 align-items-center p-0 m-0 justify-content-center col-5 position-relative d-flex `}
            style={{ background: "#7ed994" }}
          >
            <Card.Img
              className={`p-0 m-0 justify-content-center ${style.reasonCard}`}
              style={{
                // width: "100%",
                padding: "0px !important",
                margin: "0px !important",
              }}
              src={require("../../../Assets/accomodation.png")}
            />
            <span
              className="h4 text-white p-2  mt-2 position-absolute top-100 start-50 translate-middle"
              style={{ background: "#4a915b" }}
            >
              Accomadation
            </span>
          </Col>
          <Col
            md={2}
            lg={2}
            xs={2}
            sm={2}
            className={`rounded-4 m-3 align-items-center p-0 m-0 justify-content-center col-5 position-relative d-flex `}
            style={{ background: "#7ed994" }}
          >
            <Card.Img
              className={`p-0 m-0 justify-content-center ${style.reasonCard}`}
              style={{
                // width: "100%",
                padding: "0px !important",
                margin: "0px !important",
              }}
              src={require("../../../Assets/tourGuide.png")}
            />
            <span
              className="h4 text-white p-2 mt-2 position-absolute top-100 start-50 translate-middle"
              style={{ background: "#4a915b", width: "max-content" }}
            >
              Tour Guide
            </span>
          </Col>
          <Col
            md={2}
            lg={2}
            xs={2}
            sm={2}
            className={`rounded-4 m-3 align-items-center p-0 m-0 justify-content-center col-5 position-relative d-flex `}
            style={{ background: "#7ed994" }}
          >
            <Card.Img
              className={`p-0 m-0 justify-content-center ${style.reasonCard}`}
              style={{
                // width: "100%",
                padding: "0px !important",
                margin: "0px !important",
              }}
              src={require("../../../Assets/transfers.png")}
            />
            <span
              className="h4  text-white mt-2 p-2 position-absolute top-100 start-50 translate-middle"
              style={{ background: "#4a915b" }}
            >
              Transfers
            </span>
          </Col>
          <Col
            md={2}
            lg={2}
            xs={2}
            sm={2}
            className={`rounded-4 m-3 align-items-center m-0 justify-content-center col-5 position-relative d-flex `}
            style={{ background: "#7ed994" }}
          >
            <Card.Img
              className={`p-0 m-0 justify-content-center ${style.reasonCard}`}
              style={{
                // width: "100%",
                padding: "0px !important",
                margin: "0px !important",
              }}
              src={require("../../../Assets/volunteer.png")}
            />
            <span
              className="h4  text-white p-2  mt-2 position-absolute top-100 start-50 translate-middle"
              style={{ background: "#4a915b" }}
            >
              Volunteer
            </span>
          </Col>
        </Row>
      </Col>
      <Modal
        show={true}
        fullscreen={"false"}
        onHide={() => setShow(false)}
        centered
      >
        <Modal.Body className="p-5 gap-5 d-flex flex-column">
          <Form>
            <Form.Group
              className="gap-3 d-flex flex-column"
              controlId="exampleForm.ControlInput1"
            >
              {!have && (
                <Row>
                  <Col className="px-1 m-0">
                    <input
                      className="w-100 bg-white h5 justify-content-center p-2 px-2 text-dark text-center m-0 border-0 border-bottom"
                      type="text"
                      placeholder="USER NAME"
                      value={detail.userName}
                      minLength={3}
                      maxLength={20}
                      style={{ background: "#19bca1" }}
                      onChange={(e: any) =>
                        setDetail({ ...detail, userName: e.target.value })
                      }
                    />
                  </Col>
                </Row>
              )}
              <Row>
                <Col className="col-8 px-1 align-self-center m-0">
                  <input
                    className="w-100 bg-white h5 justify-content-center p-2 px-2 text-dark text-center m-0 border-0 border-bottom"
                    type="text"
                    placeholder="USER ID"
                    value={detail.userId}
                    minLength={0}
                    maxLength={50}
                    style={{ background: "#19bca1" }}
                    onChange={(e: any) =>
                      setDetail({ ...detail, userId: e.target.value })
                    }
                  />
                </Col>
                <Col className="col-4 align-self-center p-0 m-0">
                  <Button
                    className="round-edges h2 py-1"
                    style={{ minHeight: "0%", background: "#4a915b" }}
                    onClick={(e: any) => {
                      setOtpSent(true);
                      getOtp(detail.userId);
                    }}
                  >
                    <span className="h6 p-0 m-0">Send OTP</span>
                  </Button>
                </Col>
              </Row>
              {otpSent && !verificationStatus.status && (
                <Row>
                  <Col className="col-8 align-self-center px-1 m-0">
                    <input
                      className="w-100 bg-white h5 justify-content-center p-2 px-2 text-dark text-center m-0 border-0 border-bottom"
                      type="text"
                      placeholder=""
                      value={otp}
                      minLength={3}
                      maxLength={20}
                      style={{ background: "#19bca1" }}
                      onChange={(e: any) => setOtp(e.target.value)}
                    />
                  </Col>
                  <Col className="col-4 align-self-center p-0 m-0">
                    <Button
                      className="round-edges h2 py-1"
                      style={{ minHeight: "0%", background: "#4a915b" }}
                      onClick={(e: any) => {
                        verify();
                      }}
                    >
                      <span className="h6 p-0 m-0">verify</span>
                    </Button>
                  </Col>
                </Row>
              )}
              {verificationStatus.status && detail.userName && (
                <Row>
                  <Col className="col-8 px-1 m-0">
                    <input
                      className="w-100 bg-white h5 justify-content-center p-2 px-2 text-dark text-center m-0 border-0 border-bottom"
                      type="text"
                      placeholder="PASSWORD"
                      value={detail.password}
                      minLength={6}
                      maxLength={40}
                      style={{ background: "#19bca1" }}
                      onChange={(e: any) =>
                        setDetail({ ...detail, password: e.target.value })
                      }
                    />
                  </Col>
                  <Col className="col-4 p-0 m-0">
                    <Button
                      className="round-edges h2 h-100 py-1"
                      style={{ minHeight: "0%", background: "#4a915b" }}
                      onClick={(e: any) => {
                        signIN();
                      }}
                    >
                      <span className="h5 p-0 m-0">Log In</span>
                    </Button>
                  </Col>
                </Row>
              )}
            </Form.Group>
          </Form>{" "}
          <Col className="d-flex flex-column justify-content-center w-100">
            <span
              className="d-flex align-self-center fit-content h2"
              style={{ color: "#4a915b" }}
            >
              Forget Password?
            </span>
            <Col className="position-relative d-flex align-items-center justify-content-center">
              <hr
                className="d-flex position-absolute w-100 p-0 m-0"
                style={{ border: "2px solid #4c905f" }}
              ></hr>
              <Card className="d-flex align-self-center shadow-none fit-content bold px-1">
                or
              </Card>
            </Col>
            {have ? (
              <span
                className="d-flex align-self-center display-6 bold fit-content"
                style={{ color: "#4a915b" }}
                onClick={() => {
                  update();
                  setHave(false);
                }}
              >
                Create New Profile
              </span>
            ) : (
              <span
                className="d-flex align-self-center display-6 bold fit-content"
                style={{ color: "#4a915b" }}
                onClick={() => {
                  update();
                  setHave(true);
                }}
              >
                Login
              </span>
            )}
          </Col>
        </Modal.Body>
      </Modal>
    </Col>
  );
};

export default Login;
