import React, { FC } from "react";
import { Container, Col } from "react-bootstrap";
import { useLocation } from "react-router";
import { HeaderList } from "../header/Header";

const Footer: FC = () => {
  const location = useLocation();

  const communities: HeaderList[] = [
    { name: "About us", path: "/" },
    { name: "Our Mission", path: "/" },
    { name: "Join us", path: "/" },
    { name: "Reviews", path: "/" },
    { name: "Privacy policy", path: "/" },
    { name: "Terms and conditions", path: "/" },
    { name: "FAQ", path: "/" },
  ];
  const supports: HeaderList[] = [
    { name: "My Profile", path: "/" },
    { name: "Helpdesk", path: "/" },
    { name: "Feedback", path: "/" },
  ];
  return (
    <Container fluid className="footer">
      {location.pathname !== "/portfolio" && (
        <span className="row d-flex">
          <Col md="4" className="footer-copywright">
            <h3>Community</h3>
            <>
              {communities.map((community: HeaderList) => {
                return (
                  <ul className="footer-icons">
                    <li className="social-icons">
                      <a
                        href={community.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-colour"
                      >
                        {community.name}
                      </a>
                    </li>
                  </ul>
                );
              })}
            </>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Support</h3>
            <>
              {supports.map((support: HeaderList) => {
                return (
                  <ul className="footer-icons">
                    <li className="social-icons">
                      <a
                        href={support.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-colour"
                      >
                        {support.name}
                      </a>
                    </li>
                  </ul>
                );
              })}
            </>
          </Col>
        </span>
      )}
    </Container>
  );
};

export default Footer;
