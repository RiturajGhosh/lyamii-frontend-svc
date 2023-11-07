import React, { FC } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { HeaderList } from "../header/Header";
import { Link } from "react-router-dom";
import { communities, supports } from "../enum/enum";

const Footer: FC = () => {
  return (
    <Container fluid className="footer float-right p-5">
      <span className="row d-flex justify-content-between mx-5">
        <Col md={7} lg={7} className="mt-2">
          <h1>Lyamii.com</h1>
          <p>Inspiring a new generation of wanderers</p>
        </Col>
        <Col md={5} lg={5}>
          <Row>
            <Col className="p-0">
              <h2 className="ft-24 mt-2 fw-bold">Community</h2>
              <>
                {communities.map((community: HeaderList, index: number) => {
                  return (
                    <ul className="p-0 my-0">
                      <li className="social-icons py-0">
                        <Link
                          key={index}
                          to={community.path}
                          className="py-0 text-decoration-none icon-colour"
                        >
                          <p className="p fw-bold">{community.name}</p>
                        </Link>
                      </li>
                    </ul>
                  );
                })}
              </>
            </Col>
            <Col className="p-0 col-5 d-flex flex-column">
              <h2 className="ft-24 mt-2 fw-bold">Support</h2>
              <>
                {supports.map((support: HeaderList, index: number) => {
                  return (
                    <ul className="p-0 my-0">
                      <li className="social-icons py-0">
                        <Link
                          key={index}
                          to={support.path}
                          className="py-0 text-decoration-none icon-colour"
                        >
                          <p className="p fw-bold">{support.name}</p>
                        </Link>
                      </li>
                    </ul>
                  );
                })}
              </>
            </Col>
          </Row>
        </Col>
      </span>
    </Container>
  );
};

export default Footer;
