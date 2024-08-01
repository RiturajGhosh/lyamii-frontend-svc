import React, { FC } from "react";
import { Card, Col } from "react-bootstrap";
import { termConditions } from "../../common/enum/termConditions";

const TermConditions: FC = () => {
  return (
    <section className="bg-white align-items-center d-flex justify-content-center flex-column">
      <Col className="justify-content-center align-self-center d-flex">
        <span className="fs-1 pb-3 mt-5 pl-4 pt-5 text-decoration-underline col-12 text-dark fw-bold">
          Term and Conditions
        </span>
      </Col>
      <Col className="col-10 d-flex flex-column">
        {termConditions.terms.map((term: any, index: number) => {
          return (
            <Col className="pb-4">
              <Card.Title style={{ fontSize: "2dvi" }}>{term.term}</Card.Title>
              <Card.Text className="">
                {term.text.map((text: any, index: number) => (
                  <div className={"pb-3"} style={{ fontSize: "1.5dvi" }}>
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

export default TermConditions;
