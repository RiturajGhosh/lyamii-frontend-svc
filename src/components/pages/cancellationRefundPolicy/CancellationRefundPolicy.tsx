import React, { FC } from "react";
import { Card, Col } from "react-bootstrap";
import { policies } from "../../common/enum/policies";

const CancellationRefundPolicy: FC = () => {
  return (
    <section className="bg-white align-items-center d-flex justify-content-center flex-column">
      <Col className="justify-content-center align-self-center d-flex">
        <span className="fs-1 my-5 pl-4 text-decoration-underline col-12 text-dark fw-bold">
          Cancellation and Refund Policy
        </span>
      </Col>

      <Col className="col-10 d-flex flex-column pb-4">
        {" "}
        <Card.Text className="">
          <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
            {policies.description}
          </div>
        </Card.Text>
      </Col>
      <Col className="col-10 d-flex flex-column">
        {policies.policies.map((policy: any, index: number) => {
          return (
            <Col className="pb-4">
              <Card.Title style={{ fontSize: "2dvi" }}>
                {policy.policy}
              </Card.Title>
              <Card.Text className="">
                {policy.text.map((text: any, index: number) => (
                  <div className={"pb-2"} style={{ fontSize: "1.5dvi" }}>
                    {text}
                  </div>
                ))}
              </Card.Text>
            </Col>
          );
        })}
      </Col>
    </section>
  );
};

export default CancellationRefundPolicy;
