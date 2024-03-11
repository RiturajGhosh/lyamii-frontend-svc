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
      <Row className="d-flex">
        <button
          type="button"
          className="border-0 col-10 bold text-start p-2"
          style={{ background: "#c4cdfe" }}
          onClick={() => decoratedOnClick(eventKey)}
        >
          {children}
        </button>
        {isExpanded ? (
          <MdOutlineArrowRight
            onClick={() => decoratedOnClick(eventKey)}
            className="col-2 pointer"
            size={"calc(0.05*100vw"}
          />
        ) : (
          // <IoMdArrowDropright className="col-2" size={"calc(0.05*100vw"} />
          <MdOutlineArrowDropDown
            onClick={() => decoratedOnClick(eventKey)}
            className="col-2 pointer"
            size={"calc(0.05*100vw"}
          />
        )}
      </Row>
    );
  }
  return (
    <section className="bg-white">
      <Col className="justify-content-center align-self-center d-flex">
        <Row
          onClick={() => history.goBack()}
          className={
            "position-absolute top-0 start-0 col-4 m-0 justify-content-start align-items-center p-0"
          }
        >
          <Icon name="back" className="m-0 justify-content-start p-0 w-10" />
          Back
        </Row>
        <span className="fs-1 my-5 pl-4 text-decoration-underline col-10 text-dark fw-bold">
          FREQUENTLY ASKED QUESTIONS:
        </span>
      </Col>
      <Accordion className="justify-content-center d-flex">
        <Row className="col-10">
          {faqs.slice(0, faqs.length).map((faq: any, index: number) => {
            return (
              <li className="w-50 d-table">
                <Card className="shadow-none">
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
                      style={{ color: "#6b7488", background: "#e6e6e6" }}
                    >
                      {faq.ans}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </li>
            );
          })}
        </Row>
      </Accordion>
    </section>
  );
};

export default FAQ;
