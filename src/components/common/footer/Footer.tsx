import React, { FC } from "react";
import { Container, Col, Nav } from "react-bootstrap";
import { HeaderList } from "../header/Header";
import { Link } from "react-router-dom";
import { communities, supports } from "../enum/enum";

const Footer: FC = () => {
  return (
    <Container fluid className="footer float-right p-5">
      <span className="row d-flex justify-content-around">
        <Col md="4" className="mt-2">
          <h1>Lyamii.com</h1>
          <p>Inspiring a new generation of wanderers</p>
        </Col>
        <Col md="2" className="">
          <h2 className="ft-24 mt-2">Community</h2>
          <>
            {communities.map((community: HeaderList, index: number) => {
              return (
                <ul className="p-0 my-0">
                  <li className="social-icons py-0">
                    <Link
                      key={index}
                      to={community.path}
                      className="py-0 icon-colour"
                    >
                      <p className="ft-16">{community.name}</p>
                    </Link>
                  </li>
                </ul>
              );
            })}
          </>
        </Col>
        <Col md="2" className="">
          <h2 className="ft-24 mt-2">Support</h2>
          <>
            {supports.map((support: HeaderList, index: number) => {
              return (
                <ul className="p-0 my-0">
                  <li className="social-icons py-0">
                    <Link
                      key={index}
                      to={support.path}
                      className="py-0 icon-colour"
                    >
                      <p className="ft-16">{support.name}</p>
                    </Link>
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
