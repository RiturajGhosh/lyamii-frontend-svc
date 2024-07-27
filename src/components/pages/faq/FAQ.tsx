import React, { FC, useState } from "react";
import { Accordion, Card, Col, Row, useAccordionButton } from "react-bootstrap";
import { faqs } from "../../common/enum/faq";
import { MdOutlineArrowDropDown, MdOutlineArrowRight } from "react-icons/md";
import Icon from "../../common/icon/Icon";
import { useHistory } from "react-router-dom";

const FAQ: FC = () => {
  const history = useHistory();
  function CustomToggle({
    children,
    eventKey,
  }: {
    children: any;
    eventKey: any;
  }): JSX.Element {
    const [isExpanded, setExpand] = useState<boolean>();
    const decoratedOnClick = useAccordionButton(eventKey, () => {
      setExpand(!isExpanded);
    });

    return (
      <Row className="d-flex align-items-center">
        <Col className="col-10 align-items-center p-2">
          <button
            type="button"
            className="border-0 pointer pointer bold text-start m-0 p-0"
            style={{ background: "#c4cdfe" }}
            onClick={() => decoratedOnClick(eventKey)}
          >
            {children}
          </button>
        </Col>
        <Col className="col-2 p-0 pointer m-0 justify-content-end d-flex">
          {isExpanded ? (
            <MdOutlineArrowRight
              onClick={() => decoratedOnClick(eventKey)}
              className="pointer"
              size={"50%"}
            />
          ) : (
            // <IoMdArrowDropright className="col-2" size={"calc(0.05*100vw"} />
            <MdOutlineArrowDropDown
              onClick={() => decoratedOnClick(eventKey)}
              className="pointer"
              size={"50%"}
            />
          )}
        </Col>
      </Row>
    );
  }
  return (
    <section className="bg-white">
      <Col className="mt-5 justify-content-center align-self-center d-flex">
        <span className="fs-1 my-5 pl-4 text-decoration-underline col-10 text-dark fw-bold">
          <p
            style={{
              fontSize: 45,
              fontWeight: "700",
              color: "#686868",
              textAlign: "start",
              position: "relative",
              zIndex: 1,
            }}
          >
            <img
              loading="lazy"
              className="col-md-3 col-sm-4 col-lg-2 col-sx-2 col-6"
              src={
                "https://drive.google.com/thumbnail?sz=w2000&id=1ErHp6DFIt-hkOp03XjEYZXnL4LWNAW9l"
              }
            />
          </p>
        </span>
      </Col>
      <Accordion className="pb-5 justify-content-center d-flex">
        <Row className="col-10">
          {faqs.slice(0, faqs.length).map((faq: any, index: number) => {
            return (
              <Col md={6} lg={6} sm={12} xs={12} className="d-table">
                <Card className="shadow-none mx-0">
                  <Card.Header
                    className="fs-16 p-2"
                    style={{ background: "#c4cdfe", color: "#2a3d66" }}
                  >
                    <CustomToggle eventKey={index.toString()}>
                      {faq.ques}
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={index.toString()}>
                    <Card.Body
                      className="fs-16 p-2"
                      style={{ color: "#6b7488", background: "#e6e6e6" }}
                    >
                      {faq.ans}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Accordion>
    </section>
  );
};

export default FAQ;
