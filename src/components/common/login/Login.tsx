import React, { FC, useEffect, useRef, useState } from "react";
import style from "./login.module.scss";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
// import style from "./Header.module.scss";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import SubCard from "../subCard/SubCard";
import { AiTwotoneHome } from "react-icons/ai";
import { BsArrowRightCircle, BsFillPersonFill } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import ArrowButton from "../arrowButton/ArrowButton";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginData } from "../../../state/selectors/selectLoginData";
import { SET_LOGIN_DATA } from "../../../state/actions/types/loginDataActionType";
// import "./sidebar.scss";
export type SideNavList = {
  name: string;
  path: string;
};
const Login: FC = () => {
  const userData = useSelector(selectLoginData);
  const [detail, setDetail] = useState({
    userId: "",
    password: "",
  });
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef<any>();
  const indicatorRef = useRef<any>();
  const location = useLocation();

  const history = useHistory();
  useEffect(() => {
    if (
      userData?.loginData?.userId?.length > 0 &&
      userData?.loginData?.password?.length > 0
    ) {
      history.push("/");
    }
  }, [userData]);
  return (
    <Container className="min-vh-100 align-items-center d-flex">
      <Col className="flex-column d-flex gap-3"> 
        <Col className="justify-content-center d-flex">
          <input
            className="form__input w-30 bg-white h2 justify-content-center p-1 px-2 text-dark text-center m-0 border-0"
            type="text"
            placeholder="USER ID"
            value={detail.userId}
            style={{ background: "#19bca1" }}
            onChange={(e: any) =>
              setDetail({ ...detail, userId: e.target.value })
            }
          />
        </Col>
        <Col className="justify-content-center d-flex">
          <input
            className="form__input w-30 bg-white justify-content-center h2 p-1 px-2 text-dark text-center m-0 border-0"
            type="text"
            value={detail.password}
            placeholder="PASSWORD"
            style={{ background: "#19bca1" }}
            onChange={(e: any) =>
              setDetail({ ...detail, password: e.target.value })
            }
          />
        </Col>
        <Col className="justify-content-center p-0 m-0 d-flex">
          <Button
            className="fit-content py-2"
            style={{minHeight:'0%',background:'#4a915b'}}
            onClick={(e: any) => {
              dispatch({
                type: SET_LOGIN_DATA,
                payload: detail,
              });
            }}
          >
            <span className="h2 px-4 p-0 m-0">Log In</span>
          </Button>
        </Col>
        <Col className="d-flex flex-column justify-content-center w-100">
          <span className="d-flex align-self-center fit-content h2"  style={{color:'#4a915b'}}>
            Forget Password?
          </span>
          <Col className="position-relative d-flex align-items-center justify-content-center">
            <hr className="d-flex position-absolute w-100 p-0 m-0"  style={{border: '2px solid #4c905f'}}></hr>
            <Card className="d-flex align-self-center shadow-none fit-content bold px-1">
              or
            </Card>
          </Col>
          <span className="d-flex align-self-center display-5 bold fit-content"  style={{color:'#4a915b'}}>
            Create New Profile
          </span>
        </Col>
        <Row className="gap-5 justify-content-around position-relative">
          <Col
            className={`form__input align-items-center p-0 m-0 justify-content-center  position-relative d-flex ${style.reasonCard}`}
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
            <span className="h4 text-white p-2  mt-2 position-absolute top-100 start-50 translate-middle" style={{background:'#4a915b'}}>
              Accomadation
            </span>
          </Col>
          <Col
            className={`form__input align-items-center p-0 m-0 justify-content-center position-relative d-flex ${style.reasonCard}`}
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
            <span className="h4 text-white p-2 mt-2 position-absolute top-100 start-50 translate-middle" style={{background:'#4a915b',width:'max-content'}}>
              Tour Guide
            </span>
          </Col>
          <Col
            className={`form__input align-items-center p-0 m-0 justify-content-center  position-relative d-flex ${style.reasonCard}`}
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
            <span className="h4  text-white mt-2 p-2 position-absolute top-100 start-50 translate-middle" style={{background:'#4a915b'}}>
              Transfers
            </span>
          </Col>
          <Col
            className={`form__input align-items-center m-0 justify-content-center position-relative d-flex ${style.reasonCard}`}
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
            <span className="h4  text-white p-2  mt-2 position-absolute top-100 start-50 translate-middle" style={{background:'#4a915b'}}>
              Volunteer
            </span>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default Login;
