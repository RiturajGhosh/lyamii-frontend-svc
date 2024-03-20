import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";
import Destinations from "../destinations/Destinations";
import style from "./Home.module.scss";
import CustomerReviews from "../customerReview/CustomerReview";
import WhyLyamii from "../whyLyamii/WhyLyamii";
import MapAndEscape from "../mapAndEscape/MapAndEscape";
import Contact from "../contact/Contact";
import { useHistory } from "react-router-dom";
import LifetimeJourney from "../lifetimeJourney/LifetimeJourney";
import BeyoundObvious from "../beyoundObvious/BeyoundObvious";
import BusinessClients from "../businessClients/BusinessClients";

const Home: FC = () => {
  const history = useHistory();
  return (
    <section>
      <Col
        className={`home-section position-relative p-0 ${style.imageSection}`}
        id="home"
      >
        <Col className="home-content position-relative zi-2 d-grid justify-content-center">
          <h1 className="text-center text-shadow-light">Each Day Counts</h1>
          <p className="text-center px-2">
            Explore stunning destinations, from exotic tropical paradises to
            historic landmarks and vibrant cityscapes with Lyamii. Get insider
            insights into must see attractions, local cuisine, cultural
            experiences, and hidden gems. we Lyamii, a tour and travel company
            based in India. We have a selection of tours that showcase the best
            of worlds culture, nature and history. Lyamii will provide you with
            excellent service and support throughout your journey.
          </p>
          <button
            className="align-middle justify-self-center"
            onClick={() => {
              history.push("/passportRegistration");
            }}
          >
            Passport
          </button>
        </Col>
        <div
          className={`flex-grow-1 w-100 bottom-0 position-absolute bg-contain travel-image position-bottom`}
        ></div>
      </Col>
      <Destinations></Destinations>
      <MapAndEscape />
      <LifetimeJourney />
      <BeyoundObvious />
      <WhyLyamii />
      <CustomerReviews />
      <Contact />
      <BusinessClients />
    </section>
  );
};

export default Home;
