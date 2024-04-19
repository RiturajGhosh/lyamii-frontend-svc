import React, { FC } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { bussinessClints } from "../../common/enum/enum";

const BusinessClients: FC = () => {
  return (
    <Col
      className="sectionContainer d-flex justify-content-center py-42"
      style={{ background: "#0852A1" }}
      id="about"
    >
      <Col className="col-12">
        <Row className="d-flex justify-content-center">
          <div className="card-body p-0 m-0 w-25 align-items-center">
            {
              <>
                <span
                  className="display-5 p-0 m-0 align-self-center text-center justify-content-center mb-5 d-flex text-white fw-bold"
                  style={{ fontFamily: "" }}
                >
                  Business Clients
                </span>
              </>
            }
          </div>
          <Row className="bg-white" style={{ opacity: 1 }}>
            {bussinessClints.map((clients: any, index: number) => {
              return (
                <Col
                  key={index}
                  className="position-relative align-items-center d-flex p-0 m-0"
                >
                  <Col className={`justify-content-end px-0 mx-0`}>
                    <Card.Body className="justify-content-end px-0 mx-0">
                      <Row className="d-flex justify-content-end col-12 flex-row flex-nowrap position-relative">
                        <Col className="justify-content-center d-flex align-items-center p-0 m-0">
                          <Image
                            className="mb-3 justify-content-start image align-self-center"
                            style={{
                              width: "9dvi",
                            }}
                            alt=""
                            src={clients}
                          />
                        </Col>

                        <div className="col-4 position-absolute top-0 start-90 translate-middle-x pr-3"></div>
                      </Row>
                    </Card.Body>
                  </Col>
                </Col>
              );
            })}
          </Row>
        </Row>
      </Col>
    </Col>
  );
};

export default BusinessClients;
