import React, { FC, useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import Destinations from "../destinations/Destinations";
import style from "./Home.module.scss";
import Wave from "../../common/icon/waveBottom";
import CustomerReviews from "../customerReview/CustomerReview";
import WhyLyamii from "../whyLyamii/WhyLyamii";
import MapAndEscape from "../mapAndEscape/MapAndEscape";
import Contact from "../contact/Contact";
import { useHistory } from "react-router-dom";
import LifetimeJourney from "../lifetimeJourney/LifetimeJourney";
import BeyoundObvious from "../beyoundObvious/BeyoundObvious";
import { getData } from "../../../api/getData";

const Home: FC = () => {
  const history = useHistory();
  useEffect(() => {
    getData(1).then(() => console.log("done"));
  }, []);
  return (
    <section>
      <Container
        fluid
        className={`home-section position-relative p-0 ${style.imageSection}`}
        id="home"
      >
        <Container className="home-content position-relative zi-2 d-grid justify-content-center">
          <h1 className="text-center text-shadow-light">Each Day Counts</h1>
          <p className="text-center">
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
              console.log("hi");
              history.push("/passportRegistration");
            }}
          >
            Get your Passport
          </button>
        </Container>
        <div
          className={`flex-grow-1 w-100 bottom-0 position-absolute travel-image position-bottom`}
        ></div>
      </Container>
      <Destinations></Destinations>
      <MapAndEscape />
      <LifetimeJourney />
      <BeyoundObvious />
      <WhyLyamii />
      <CustomerReviews />
      <Contact />
      <div className="position-relative p-0 m-0 w-100">
        <Row className="p-0 m-0 w-100 flex-row d-flex position-absolute justify-content-around">
          <div
            className="piller float-left left-0"
            style={{ zIndex: "1" }}
          ></div>
          <div className="col-4"></div>
          <div
            className="piller float-left right-0"
            style={{ zIndex: "1" }}
          ></div>
        </Row>
        <div
          className={`flex-grow-1 footer w-100 top-0 rotate-180 p-0 m-0 travel-image position-bottom p-0 m-0`}
          style={{ minHeight: "150px" }}
        ></div>
      </div>
    </section>
  );
};

export default Home;
