import React, { FC } from "react";
import { Container } from "react-bootstrap";

const Home: FC = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content"></Container>
      </Container>
    </section>
  );
};

export default Home;
