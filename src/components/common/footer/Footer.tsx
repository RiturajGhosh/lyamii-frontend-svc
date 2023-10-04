import React, { FC } from "react";
import { Container, Col } from "react-bootstrap";
import { HeaderList } from "../header/Header";

const Footer: FC = () => {
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
    <Container fluid className="footer float-right p-5">
      <span className="row d-flex justify-content-around">
        <Col md="4" className="">
          <h1>Lyamii.com</h1>
          <p>Inspiring a new generation of wanderers</p>
        </Col>
        <Col md="2" className="">
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
        <Col md="2" className="">
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
    </Container>
  );
};

export default Footer;
