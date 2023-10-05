import React, { FC } from "react";
import { Button, Container } from "react-bootstrap";
import Destinations from "../destinations/Destinations";
import style from "./Home.module.scss";
import Wave from "../../common/icon/waveBottom";
import CustomerReviews from "../customerReview/CustomerReview";
import WhyLyamii from "../whyLyamii/WhyLyamii";
import MapAndEscape from "../mapAndEscape/MapAndEscape";
import Contact from "../contact/Contact";
import { useHistory } from "react-router-dom";

const Home: FC = () => {
  const history = useHistory();
  return (
    <section>
      <Container
        fluid
        className={`home-section position-relative ${style.imageSection}`}
        id="home"
      >
        <Container className="home-content d-grid justify-content-center">
          <h1 className="text-center">Meet your </h1>
          <h1 className="text-center">"SOUL"</h1>
          <p className="text-center">
            Explore stunning destinations, from exotic tropical paradises to
            historic landmarks and vibrant cityscapes with Lyamii. Get insider
            insights into must see attractions, local cuisine, cultural
            experiences, and hidden gems. we Lyamii, a tour and travel company
            based in India. We have a selection of tours that showcase the best
            of worlds culture, nature and history. Lyamii will provide you with
            excellent service and support throughout your journey.
          </p>
          <Button
            className="align-middle justify-self-center"
            onClick={() => history.push("/PassportRegistration")}
          >
            Get your Passport
          </Button>
        </Container>
        <div className="flex-grow-1">
          <Wave></Wave>
        </div>
      </Container>
      <Destinations></Destinations>
      <MapAndEscape />
      <WhyLyamii />
      <CustomerReviews />
      <Contact />
    </section>
  );
};

export default Home;
