import React, { FC, useEffect, useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
// import style from "./Header.module.scss";
import { Button, Col, Container, Nav, Navbar } from "react-bootstrap";
import SubCard from "../subCard/SubCard";
import { AiTwotoneHome } from "react-icons/ai";
import { BsArrowRightCircle, BsFillPersonFill } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import ArrowButton from "../arrowButton/ArrowButton";
import { SET_LOGIN_DATA } from "../../../state/actions/types/loginDataActionType";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginData } from "../../../state/selectors/selectLoginData";
// import "./sidebar.scss";
export type SideNavList = {
  name: string;
  path: string;
};
const SideNav: FC = () => {
  const dispatch = useDispatch();
  const sidebarNavItems = [
    {
      display: "Dashboard",
      icon: <i className="bx bx-home"></i>,
      to: "/profile-dashboard",
      section: "",
    },
    {
      display: "Getting Started",
      icon: <i className="bx bx-star"></i>,
      to: "/started",
      section: "started",
    },
    {
      display: "Calendar",
      icon: <i className="bx bx-calendar"></i>,
      to: "/calendar",
      section: "calendar",
    },
    {
      display: "User",
      icon: <i className="bx bx-user"></i>,
      to: "/user",
      section: "user",
    },
    {
      display: "Orders",
      icon: <i className="bx bx-receipt"></i>,
      to: "/order",
      section: "order",
    },
  ];

  const userData = useSelector(selectLoginData);
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef<any>();
  const indicatorRef = useRef<any>();
  const location = useLocation();

  // useEffect(() => {
  //   setTimeout(() => {
  //     const sidebarItem = sidebarRef.current.querySelector(
  //       ".sidebar__menu__item"
  //     );
  //     indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
  //     setStepHeight(sidebarItem.clientHeight);
  //   }, 50);
  // }, []);

  // change active index 
  function check () {
    if (
      userData?.loginData?.userId?.length > 0 &&
      userData?.loginData?.password?.length > 0
    ) {
      history.push("/");
    }
  }
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);
  const history = useHistory();
  return (
    <Col className="fit-content p-0 m-0 bg-violet-blue position-absolute">
      <nav
        className="sidenav justify-content-center flex-column d-flex h-100 p-3 flex-wrap min-vh-100 mw-100 w-100 align-content-between justify-content-start d-flex m-0"
        id="sidenav"
      >
        <Col className="align-content-between flex-column w-100 gap-4 d-flex flex-nowrap">
          <Col className="justify-content-center align-items-center d-flex ">
            <Navbar.Brand className="justify-content-center align-items-center d-flex  p-0 m-0">
              <h2
                className="subtitle title-medium text-center p-0 m-0"
                onClick={() => history.push("/")}
              >
                Lyamii.com
              </h2>
            </Navbar.Brand>
          </Col>
          <Col>
            <Nav.Item className="navmenu align-items-flex-start mx-5 justify-content-center d-flex flex-column text-start p-0 m-0">
              <Nav.Link
                style={{ height: "65px" }}
                onClick={() => history.push("/profile/dashboard")}
                className="text-start  align-items-center flex-row d-flex p p-0 m-0 text-white text-decoration-none"
              >
                <Col
                  className="p-0 col-2 m-0 w-15 border align-items-center border-1 text-center img-round"
                  style={{ background: "white" }}
                >
                  <AiTwotoneHome
                    fill="#c7ccff"
                    className="d-inline mt-1"
                    size={"20px"}
                  />
                </Col>
                <Col className="pl-1">Dashboard</Col>
              </Nav.Link>
              <Nav.Link
                style={{ height: "60px" }}
                onClick={() => history.push("/profile/personalData")}
                className="text-start  align-items-center flex-row d-flex p p-0 m-0 text-white text-decoration-none"
              >
                <Col
                  className="p-0 col-2 m-0 w-15 border align-items-center border-1 text-center img-round"
                  style={{ background: "white" }}
                >
                  <BsFillPersonFill
                    fill="#c7ccff"
                    className="d-inline mt-1"
                    size={"20px"}
                  />
                </Col>
                <Col className="pl-1">My Profile</Col>
              </Nav.Link>
              <Nav.Link
                style={{ height: "60px" }}
                onClick={() => history.push("/profile/trips")}
                className="text-start  align-items-center flex-row d-flex p p-0 m-0 text-white text-decoration-none"
              >
                <Col
                  className="p-0 col-2 m-0 w-15 border align-items-center border-1 text-center img-round"
                  style={{ background: "white" }}
                >
                  <MdOutlineLocationOn
                    fill="#c7ccff"
                    className="d-inline mt-1"
                    size={"20px"}
                  />
                </Col>
                <Col className="pl-1">Trips</Col>
              </Nav.Link>
              <Nav.Link
                style={{ height: "60px" }}
                onClick={() => history.push("/profile/order")}
                className="text-start  align-items-center flex-row d-flex p p-0 m-0 text-white text-decoration-none"
              >
                <Col
                  className="p-0 col-2 m-0 w-15 border align-items-center border-1 text-center img-round"
                  style={{ background: "white" }}
                >
                  <HiShoppingCart
                    fill="#c7ccff"
                    className="d-inline mt-1"
                    size={"20px"}
                  />
                </Col>
                <Col className="pl-1">Orders</Col>
              </Nav.Link>
            </Nav.Item>
          </Col>
          <Col className="align-items-center p-0 m-0 justify-content-center d-flex">
            <div
              className="form__input text-start d-flex flex-column p-0 m-0 p-3 fit-content"
              style={{ background: "#e0e8ff" }}
            >
              <p className="text-start px-2">Helpdesk</p>
              <span className="small text-start px-2">Facing any problem?</span>
              <span className="small text-start px-2">
                Let me handle !
              </span>
            </div>
          </Col>
          <Col className="align-items-center w-100 justify-content-center p-0 m-0 h-0 fit-content flex-wrap justify-content-center d-flex">
            <Nav.Link
              href="#"
              onClick={(e: any) => {
                dispatch({
                  type: SET_LOGIN_DATA,
                  payload: {},
                });
                check();
              }}
              className="bg-light-grey form__input align-items-center d-flex text-decoration-none fit-content p-2 px-4 m-0"
              style={{ minHeight: "0" }}
            >
              Log out <BsArrowRightCircle className="px-2" size="39px" />
            </Nav.Link>
          </Col>
        </Col>
      </nav>
    </Col>
  );
};

export default SideNav;
