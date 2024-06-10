import React, { FC, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Button, Col, Nav, Navbar, Row } from "react-bootstrap";
import { AiTwotoneHome } from "react-icons/ai";
import { BsArrowRightCircle, BsFillPersonFill } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { SET_LOGIN_DATA } from "../../../state/actions/types/loginDataActionType";
import { useDispatch, useSelector } from "react-redux";
import { setCookie } from "../enum/functions";
import Icon from "../icon/Icon";
import { FaGripLinesVertical } from "react-icons/fa6";
import { SET_NAV_HIDDEN } from "../../../state/actions/types/sideNavType";
import { selectSideNav } from "../../../state/selectors/selectSideNav";
import RoundButton from "../roundButton/RoundButton";

export type SideNavList = {
  name: string;
  path: string;
};
const SideCrmNav: FC = () => {
  const dispatch = useDispatch();
  const sideNav = useSelector(selectSideNav);
  const [hidden, setHide] = useState(sideNav.hidden || false);
  const sidebarNavItems = [
    {
      display: "Support",
      // height: "65px",
      // icon: "home",
      // className: "d-inline mt-1",
      to: "/profile/dashboard",
      section: "dashboard",
    },
    {
      display: "My Profile",
      // height: "60px",
      // className: "d-inline mt-1",
      // icon: "person",
      to: "/profile/personalData",
      section: "personalData",
    },
    {
      display: "Trips",
      // height: "60px",
      // icon: "MdOutlineLocationOn",
      // className: `w-20 h-50 p-1 mr-1 rounded-circle`,
      to: "/profile/trips",
      section: "trips",
    },
    {
      display: "Sales",
      // className: `w-20 h-50 p-1 mr-1 rounded-circle`,
      // height: "60px",
      icon: "lock",
      to: "/profile/order",
      section: "order",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  function navigate() {
    history.push("/");
  }
  useEffect(() => {
    dispatch({
      type: SET_NAV_HIDDEN,
      payload: hidden,
    });
  }, [hidden]);

  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);
  const history = useHistory();
  return (
    <Col className="fit-content p-0 m-0 position-absolute" style={{background:"#c4cdfe"}}>
      <nav className="sidenav justify-content-center flex-column d-flex h-100 p-3 flex-wrap min-vh-100 mw-100 w-100 align-content-around justify-content-start d-flex m-0">
        <Col
          id="sidenav"
          style={{ minWidth: "18vh" }}
          className={`${
            hidden ? "d-none" : "d-flex"
          } align-content-center justify-content-center flex-column pe-2 w-100 gap-4 flex-nowrap`}
        >
          <Col className="align-content-center justify-content-center flex-column d-flex">
            <Col
              lg={7}
              className="col-4 d-flex  align-self-center position-relative p-0 m-0"
            >
              <RoundButton
                className="border-5 border circle-core"
                bordercolor="#0e3c30"
                size={"calc(12*100vw"}
                fill={"#c4cdfe"}
                img={require("../../../Assets/avatar.png")}
              />
            </Col>
          </Col>
          <Col className="col-12">
            <Nav.Item className="navmenu gap-2 align-items-flex-start col-12 justify-content-center d-flex flex-column text-start p-0 m-0">
              {sidebarNavItems.map((items) => {
                return (
                  <>
                    <Nav.Link
                      style={{ width: "auto" }}
                      onClick={() => history.push(items.to)}
                      className="text-start w-100 align-items-center flex-row d-flex p p-0 m-0 text-white text-decoration-none"
                    >
                      <Col className="col-12 p-0 m-0">
                        <Button
                          className="w-100 fs-3 font-norwester justify-content-center p-1 px-2 text-white text-center m-0 border-0"
                          style={{ background: "#0752a1" }}
                          onChange={(e: any) => {}}
                        >
                          <Row className="flex-row align-items-center d-flex">
                            <Col className="col align-items-center justify-content-center p-0 m-0 d-flex">
                              {items.display}
                              {items.icon && (
                                <Icon
                                  fill="black"
                                  className={`p-1 ms-2 rounded-circle`}
                                  style={{
                                    // width: "max-content",
                                    background: "white",
                                    padding: "0px !important",
                                    margin: "0px !important",
                                  }}
                                  name={items?.icon}
                                />
                              )}
                            </Col>
                          </Row>
                        </Button>
                      </Col>
                    </Nav.Link>
                  </>
                );
              })}
            </Nav.Item>
          </Col>
          <Col
            className="gap-2 flex-column d-flex justify-content-center align-items-center"
            style={{ minHeight: "30vh" }}
          >
            <Row className="justify-content-center d-flex">
              <Col className="col-9 p-0 m-0">
                <input
                  className="rounded-4 w-100 h2 font-norwester justify-content-center p-1 px-2 text-dark text-center m-0 border-0"
                  type="text"
                  value={""}
                  style={{
                    background: "#889dfe",
                    fontFamily: "NORWESTER",
                  }}
                  onChange={(e: any) => {}}
                />
              </Col>
            </Row>
            <Row className="justify-content-center d-flex p-0 m-0">
              <Col className="col-9 p-0 m-0">
                <input
                  className="rounded-4 w-100 h2 font-norwester justify-content-center p-1 px-2 text-dark text-center m-0 border-0"
                  type="text"
                  value={""}
                  style={{
                    background: "#889dfe",
                    fontFamily: "NORWESTER",
                  }}
                  onChange={(e: any) => {}}
                />
              </Col>
            </Row>
          </Col>
        </Col>
        <FaGripLinesVertical
          className={`${hidden ? "w-20" : "w-10"} h-20 p-0 ${
            !hidden ? "start-90" : "start-50"
          } m-0 position-absolute`}
          onClick={() => setHide(!hidden)}
        />
      </nav>
    </Col>
  );
};

export default SideCrmNav;
