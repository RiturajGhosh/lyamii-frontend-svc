import React, { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./Header.module.scss";
import { Col, Nav, Navbar } from "react-bootstrap";
import { getCookie } from "../enum/functions";
import { FaCartShopping } from "react-icons/fa6";

export type HeaderList = {
  name: string;
  path: string;
};
const Header: FC = () => {
  const [headers, setHeaders] = useState<HeaderList[]>([]);
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();
  window.addEventListener("scroll", scrollHandler);

  function scrollHandler() {
    if (
      (window.scrollY >= 20 && location.pathname.includes("/")) ||
      (location.pathname.length > 1 && window.screenY >= 20)
    ) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  const cookie = getCookie("user");
  const token = cookie && JSON.parse(cookie).token;
  const headerList: HeaderList[] = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "FAQs", path: "/faqs" },
    { name: "Login", path: "/login" },
  ];
  const loggedHeaderList: HeaderList[] = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "FAQs", path: "/faqs" },
    { name: "My Profile", path: "/profile" },
  ];

  useEffect(() => {
    if (token) {
      setHeaders(loggedHeaderList);
    } else {
      setHeaders(headerList);
    }
  }, [token]);

  return (
    <header>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={
          (location.pathname.length === 1 && navColour) ||
          location.pathname.length > 1
            ? "sticky"
            : "navbar"
        }
      >
        <Col
          className={`${
            expand && "flex-column"
          } d-flex align-items-center justify-content-between`}
        >
          <Navbar.Brand href="/" className="align-self-center">
            <div className={`d-flex align-items-center ${style.currentPage}`}>
              <h3 className="text-white align-items-start">
                <img
                  className={`p-0 m-0 pb-1 justify-content-center`}
                  style={{
                    width: "25px",
                    padding: "0px !important",
                    margin: "0px !important",
                    fontFamily: "DellaRespira",
                  }}
                  alt=""
                  src={require("../../../Assets/logo.png")}
                />
                <img
                  className={`px-1 p-0 m-0 justify-content-center`}
                  style={{
                    width: "100px",
                    padding: "0px !important",
                    margin: "0px !important",
                    fontFamily: "DellaRespira",
                  }}
                  alt=""
                  src={require("../../../Assets/lyamii.png")}
                />
                {/* Lyam<span className={style.dot}>ii</span>
                <span style={{ color: "#12856e" }}></span> */}
              </h3>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : true);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse className={`flex-grow-0`} id="responsive-navbar-nav">
            <Nav className="ml-auto" defaultActiveKey="#home">
              {headers?.map((header: HeaderList, index: number) => {
                return (
                  <Nav.Item key={index}>
                    <Nav.Link
                      as={Link}
                      key={index}
                      className="text-decoration-none"
                      to={header.path}
                      onClick={() => updateExpanded(false)}
                    >
                      <h6 className="body fw-bold h6 m-0">{header?.name}</h6>
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
              {token && (
                <Nav.Item key={5}>
                  <Nav.Link
                    as={Link}
                    key={5}
                    className="text-decoration-none"
                    to={"/cart"}
                    onClick={() => updateExpanded(false)}
                  >
                    <h6 className="body fw-bold h6 m-0">
                      <FaCartShopping size={"2.5vh"} />
                    </h6>
                  </Nav.Link>
                </Nav.Item>
              )}
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Navbar>
    </header>
  );
};

export default Header;
