import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { HeaderList } from "../header/Header";
import { Link, useHistory } from "react-router-dom";
import { communities, mustReads, supports } from "../enum/enum";
import { getCookie } from "../enum/functions";
import footerImage from "../../../Assets/footerImage.png";
import { url } from "inspector";

const Footer: FC = () => {
  const history = useHistory();
  const cookie = getCookie("user");
  const user = cookie && JSON.parse(cookie);
  return (
    <footer>
      <Col
        className="float-right p-0 m-0 w-100"
        style={{
          minHeight:"450px",
          backgroundImage:
            // "url('https://images.unsplash.com/photo-1603041080359-2f930d7db86e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            "url('https://drive.google.com/thumbnail?sz=w2000&id=117w8IjpqjmzE125BhLwxtlVHumfXnyn7')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#fff",
        }}
      >
        <Col className="m-0 p-0 w-100">
          <Col className="mt-5 row d-flex justify-content-between m-5">
            <Col md={12} lg={7}>
              <Row>
                <Col md={4} lg={4} sm={12} className="p-0">
                  <h2
                    className="text-shadow-dark"
                    style={{
                      fontSize: 26,
                      fontWeight: "700",
                      marginTop: 2,
                      textAlign: "center",
                    }}
                  >
                    Community
                  </h2>
                  <>
                    {communities.map((community: HeaderList, index: number) => {
                      return (
                        <ul key={index} className="p-0 my-0">
                          <li
                            key={index}
                            className="list-unstyled social-icons py-0"
                          >
                            <Link
                              key={index}
                              to={community.path}
                              className="py-0 text-decoration-none icon-colour"
                            >
                              <p
                                className="text-shadow-dark"
                                style={{
                                  fontSize: 20,
                                  fontWeight: "500",
                                  color: "white",
                                  textAlign: "center",
                                }}
                              >
                                {community.name}
                              </p>
                            </Link>
                          </li>
                        </ul>
                      );
                    })}
                  </>
                </Col>
                <Col md={5} lg={4} sm={12} className="p-0">
                  <h2
                    className="text-shadow-dark"
                    style={{
                      fontSize: 26,
                      fontWeight: "700",
                      marginTop: 2,
                      textAlign: "center",
                    }}
                  >
                    Must Reads
                  </h2>
                  <>
                    {mustReads.map((reads: HeaderList, index: number) => {
                      return (
                        <ul key={index} className="p-0 my-0">
                          <li
                            key={index}
                            className="list-unstyled social-icons py-0"
                          >
                            <Link
                              key={index}
                              to={reads.path}
                              className="py-0 text-decoration-none icon-colour"
                            >
                              <p
                                className="text-shadow-dark"
                                style={{
                                  fontSize: 20,
                                  fontWeight: "500",
                                  color: "white",
                                  textAlign: "center",
                                }}
                              >
                                {reads.name}
                              </p>
                            </Link>
                          </li>
                        </ul>
                      );
                    })}
                  </>
                </Col>
                <Col md={3} lg={4} sm={12} className="p-0 d-flex flex-column">
                  <h2
                    className="text-shadow-dark"
                    style={{
                      fontSize: 26,
                      fontWeight: "700",
                      marginTop: 2,
                      textAlign: "center",
                    }}
                  >
                    Support
                  </h2>
                  <>
                    {supports.map((support: HeaderList, index: number) => {
                      return (
                        <ul
                          key={index}
                          className="p-0 my-0 justify-content-center d-flex"
                        >
                          <li
                            key={index}
                            className="list-unstyled social-icons py-0"
                          >
                            <Link
                              key={index}
                              to={
                                support.name === "My Profile" && user?.token
                                  ? "/profile"
                                  : support.path
                              }
                              className="py-0 text-decoration-none icon-colour"
                            >
                              <p
                                className="text-shadow-dark"
                                style={{
                                  fontSize: 20,
                                  fontWeight: "500",
                                  color: "white",
                                  textAlign: "center",
                                }}
                              >
                                {support.name}
                              </p>
                            </Link>
                          </li>
                        </ul>
                      );
                    })}
                  </>
                </Col>
              </Row>
            </Col>
            <Col md={12} lg={5} className="mt-2 text-center text-lg-start">
              <span
                className="display-1 text-white"
                onClick={() => history.push("/")}
              >
                {/* L<span>y</span>am
                <span className={"dot"}>ii</span> */}
                <img
                  className={`p-0 pe-2 m-0 justify-content-center`}
                  style={{
                    width: "50%",
                    padding: "0px !important",
                    margin: "0px !important",
                    fontFamily: "DellaRespira",
                  }}
                  alt=""
                  loading="lazy"
                  src={require("../../../Assets/lyamii.png")}
                />
                <img
                  className={`p-0 m-0 pb-3 justify-content-center`}
                  style={{
                    width: "15%",
                    padding: "0px !important",
                    margin: "0px !important",
                    fontFamily: "DellaRespira",
                  }}
                  alt=""
                  loading="lazy"
                  // src="https://drive.google.com/thumbnail?id=15g5EvDhBSNxSSEgZ_sryNZhqic0EB5lm" alt="drive image"
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
