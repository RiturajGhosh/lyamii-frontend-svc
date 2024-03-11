import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { HeaderList } from "../header/Header";
import { Link, useHistory } from "react-router-dom";
import { communities, mustReads, supports } from "../enum/enum";

const Footer: FC = () => {
  const history = useHistory();
  return (
    <footer>
      <Col className="footer float-right p-0 m-0 w-100">
        <Col className="m-0 p-0 w-100">
          <Col className="mt-5 row d-flex justify-content-between m-5">
            <Col md={7} lg={7}>
              <Row>
                <Col className="p-0">
                  <h2 className="ft-24 mt-2 fw-bold">Community</h2>
                  <>
                    {communities.map((community: HeaderList, index: number) => {
                      return (
                        <ul key={index} className="p-0 my-0">
                          <li key={index} className="social-icons py-0">
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
                <Col className="p-0">
                  <h2 className="ft-24 mt-2 fw-bold">Must Reads</h2>
                  <>
                    {mustReads.map((reads: HeaderList, index: number) => {
                      return (
                        <ul key={index} className="p-0 my-0">
                          <li key={index} className="social-icons py-0">
                            <Link
                              key={index}
                              to={reads.path}
                              className="py-0 text-decoration-none icon-colour"
                            >
                              <p className="p fw-bold">{reads.name}</p>
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
                        <ul key={index} className="p-0 my-0">
                          <li key={index} className="social-icons py-0">
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
            <Col md={5} lg={5} className="mt-2">
              <span
                className="display-1 text-white"
                onClick={() => history.push("/")}
              >
                L<span>y</span>am
                <span className={"dot"}>ii</span>
                <img
                  className={`p-0 m-0 pb-3 justify-content-center`}
                  style={{
                    width: "15%",
                    padding: "0px !important",
                    margin: "0px !important",
                    fontFamily: "DellaRespira",
                  }}
                  src={require("../../../Assets/logo.png")}
                />
              </span>
              <p>Inspiring a new generation of wanderers</p>
            </Col>
          </Col>
        </Col>
      </Col>
    </footer>
  );
};

export default Footer;
