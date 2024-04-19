import React, { FC, useEffect } from "react";
import { Col } from "react-bootstrap";
import Destinations from "../destinations/Destinations";
import style from "./Home.module.scss";
import WhyLyamii from "../whyLyamii/WhyLyamii";
import MapAndEscape from "../mapAndEscape/MapAndEscape";
import Contact from "../contact/Contact";
import { useHistory } from "react-router-dom";
import LifetimeJourney from "../lifetimeJourney/LifetimeJourney";
import BeyoundObvious from "../beyoundObvious/BeyoundObvious";
import BusinessClients from "../businessClients/BusinessClients";
import CustomerReviewSection from "../customerReview/CustomerReviewSection";

const Home: FC = () => {
  useEffect(() => {}, []);

  const history = useHistory();
  return (
    <section>
      <Col
        className={`home-section position-relative p-0 ${style.imageSection}`}
        id="home"
      >
        <Col className="home-content position-relative zi-2 d-grid justify-content-center">
          <h1 className="text-center text-shadow-light">
            Dream. Discover. Live.
          </h1>
          <p className="text-center px-md-5 mx-md-5">
            Lyamii is a global community of tech heads, travel enthusiasts,
            hosts and volunteers. Together we simplify world tourism and operate
            preloaded vacation chains in 35+ countries. On the platform we cater
            Indian tours to our foreign guests in the Journey of a Lifetime
            segment and foreign tours to Indian travellers' in Beyond Obvious.
          </p>
          <button
            className="mt-5 align-middle btn rounded-4 border-1 border btn-outline-light py-0 px-3 my-0 justify-self-center"
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
      <CustomerReviewSection />
      <Contact />
      <BusinessClients />
    </section>
  );
};

export default Home;
