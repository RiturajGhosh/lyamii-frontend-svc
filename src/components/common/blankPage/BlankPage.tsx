import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";
import Icon from "../icon/Icon";
import { useHistory, useLocation } from "react-router-dom";

const BlankPage: FC = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <div
      className={`bg-violet-blue px-5 min-vh-100 mw-100 w-100 align-items-center justify-content-end d-flex m-0`}
    >
      <Col className="min-vh-100 justify-content-center align-self-center d-flex">
        <span className="my-5 pl-4 col-10 text-dark">
          <Col
            className={`${
              pathname === "/comingSoon" && "my-5"
            } position-relative min-vh-100`}
          >
            <Row
              onClick={() => history.goBack()}
              className={
                "position-absolute top-0 start-0 col-4 m-0 justify-content-start align-items-center p-0"
              }
            >
              <Icon
                name="back"
                className="m-0 justify-content-start p-0 w-10"
              />
              Back
            </Row>

            {!pathname.includes("payments") && (
              <Col
                className="col-12 position-absolute top-50 start-0 m-0 justify-content-center p-0"
                style={{ fontSize: "5dvi" }}
              >
                For Live Tours Only!.
              </Col>
            )}
            {/* {pathname.includes("dashboard") && (
              <Col
                className="col-12 position-absolute top-50 start-0 m-0 justify-content-center p-0"
                style={{ fontSize: "5dvi" }}
              >
                For Live Tours Only!.
              </Col>
            )} */}
            {pathname.includes("payments") && (
              <Col
                className="col-12 position-absolute top-50 start-0 m-0 justify-content-center p-0"
                style={{ fontSize: "5dvi" }}
              >
                Not Selected any Tour
              </Col>
            )}
          </Col>
        </span>
      </Col>
    </div>
  );
};

export default BlankPage;
