import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import { Container, Nav, Navbar } from "react-bootstrap";

export type HeaderList = {
  name: string;
  path: string;
};
const Header: FC = () => {
  const [headers, setHeaders] = useState<HeaderList[]>([]);
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  window.addEventListener("scroll", scrollHandler);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const loggedIn = true;
  const headerList: HeaderList[] = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/" },
    { name: "FAQs", path: "/" },
    { name: "Login", path: "/" },
  ];
  const loggedHeaderList: HeaderList[] = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/" },
    { name: "FAQs", path: "/" },
    { name: "My Profile", path: "/" },
  ];

  useEffect(() => {
    if (loggedIn) {
      setHeaders(loggedHeaderList);
    } else {
      setHeaders(headerList);
    }
  }, [loggedIn]);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container className="d-flex container align-items-center d-print-block justify-content-between">
        <Navbar.Brand href="/" className="align-self-center">
          <div className={`d-flex align-items-center ${style.currentPage}`}>
            <h3>Lyamii.com</h3>
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
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    key={index}
                    to={header.path}
                    onClick={() => updateExpanded(false)}
                  >
                    <p className="body m-0">{header?.name}</p>
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
