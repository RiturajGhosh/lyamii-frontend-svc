import React, { FC } from "react";
import { Container } from "react-bootstrap";

type ContainerSectionType = {
  children: React.ReactNode;
  className?: string;
};
const ContainerSection: FC<ContainerSectionType> = ({
  children,
  className,
}) => {
  return (
    <section>
      <Container fluid="lg"
        className={`home-about-section sectionContainer py-42 ${className}`}
      >
        <Container fluid="lg">
          {children}
        </Container>
      </Container>
    </section>
  );
};

export default ContainerSection;
