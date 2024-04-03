import React, { FC, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Col, Nav, Navbar } from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs";
import { SET_LOGIN_DATA } from "../../../state/actions/types/loginDataActionType";
import { useDispatch, useSelector } from "react-redux";
import { setCookie } from "../enum/functions";
import Icon from "../icon/Icon";
import { FaGripLinesVertical } from "react-icons/fa6";
import { SET_NAV_HIDDEN } from "../../../state/actions/types/sideNavType";
import { selectSideNav } from "../../../state/selectors/selectSideNav";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";

export type SideNavList = {
  name: string;
  path: string;
};
const SideNav: FC = () => {
  const dispatch = useDispatch();
  const sideNav = useSelector(selectSideNav);
  const screenSize = useSelector(selectScreenSize);
  const [hidden, setHide] = useState(
    sideNav.hidden || screenSize.screenSize < 768
  );
  const sidebarNavItems = [
    {
      display: "My Profile",
      height: "60px",
      className: "d-inline mt-1",
      icon: "person",
      to: "/profile/personalData",
      section: "personalData",
    },
    {
      display: "Dashboard",
      height: "65px",
      icon: "home",
      className: "d-inline mt-1",
      to: "/profile/dashboard",
      section: "dashboard",
    },
    {
      display: "Trips",
      height: "60px",
      icon: "MdOutlineLocationOn",
      className: `w-20 h-50 p-1 mr-1 rounded-circle`,
      to: "/profile/trips",
      section: "trips",
    },
    {
      display: "Orders",
      className: `w-20 h-50 p-1 mr-1 rounded-circle`,
      height: "60px",
      icon: "HiShoppingCart",
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
    <Col className="fit-content p-0 m-0 bg-violet-blue position-absolute">
      <nav className="sidenav justify-content-center flex-column d-flex h-100 p-3 flex-wrap min-vh-100 mw-100 w-100 align-content-between justify-content-start d-flex m-0">
        <Col
          id="sidenav"
          className={`${
            hidden ? "d-none" : "d-flex"
          } align-content-between flex-column w-100 gap-4 flex-nowrap`}
        >
          <Col className="justify-content-center align-items-center d-flex">
            <Navbar.Brand className="justify-content-center align-items-center d-flex p-0 m-0">
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
              {sidebarNavItems.map((items) => {
                return (
                  <>
                    <Nav.Link
                      style={{ height: items.height, width: "max-content" }}
                      onClick={() => history.push(items.to)}
                      className="text-start align-items-center flex-row d-flex p p-0 m-0 text-white text-decoration-none"
                    >
                      <Icon
                        fill="#c7ccff"
                        className={`p-1 mr-1 rounded-circle`}
                        style={{
                          // width: "max-content",
                          background: "white",
                          padding: "0px !important",
                          margin: "0px !important",
                        }}
                        name={items.icon}
                      />
                      <Col className="pl-1">{items.display}</Col>
                    </Nav.Link>
                  </>
                );
              })}
            </Nav.Item>
          </Col>
          <Col className="align-items-center p-0 m-0 justify-content-center d-flex">
            <div
              className="form__input text-start d-flex flex-column p-0 m-0 p-3 fit-content"
              style={{ background: "#e0e8ff" }}
            >
              <p className="text-start px-2">Helpdesk</p>
              <span className="small text-start px-2">Facing any problem?</span>
              <span className="small text-start px-2">Let me handle !</span>
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
                setCookie("user", {});
                navigate();
              }}
              className="bg-light-grey form__input align-items-center d-flex text-decoration-none fit-content p-2 px-4 m-0"
              style={{ minHeight: "0" }}
            >
              Log out <BsArrowRightCircle className="px-2" size="39px" />
            </Nav.Link>
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

export default SideNav;
