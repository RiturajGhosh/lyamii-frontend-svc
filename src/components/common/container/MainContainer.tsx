import React, { FC } from "react";
import { Col, Container } from "react-bootstrap";

type ContainerSectionType = {
  children: React.ReactNode;
  className?: string;
  background?: string;
};
const MainContainer: FC<ContainerSectionType> = ({
  children,
  className,
  background,
}) => {
  return (
    <section className="d-contents p-0 m-0">
      <Container fluid className={`bg-dark pt-5 px-0`}>
        <Container className="pt-3" />
      </Container>
      <Col
        className={`p-0 m-0 ${className}`}
        style={{ background: `${background && background}` }}
      >
        {children}
      </Col>
    </section>
  );
};

export default MainContainer;
