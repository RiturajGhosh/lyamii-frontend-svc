import React, { FC, useCallback, useRef, useState } from "react";
import {
  Accordion,
  AccordionProps,
  Card,
  Col,
  Row,
  useAccordionButton,
} from "react-bootstrap";
import MainContainer from "../../common/container/MainContainer";
import { faqs } from "../../common/enum/faq";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";

const FAQ: FC = () => {
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
          <i className="bi bi-caret-right-fill"></i>
          // <IoMdArrowDropright className="col-2" size={"calc(0.05*100vw"} />
        ) : (
          <MdOutlineArrowDropDown className="col-2" size={"calc(0.05*100vw"} />
        )}
      </Row>
    );
  }
  return (
    <section className="bg-white">
      <Col className="justify-content-center align-self-center d-flex">
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
