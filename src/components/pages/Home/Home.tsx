import React, { FC, useEffect, useState } from "react";
import {
  Col,
  Navbar,
  Nav,
  Container,
  Form,
  Carousel,
  Button,
  Row,
} from "react-bootstrap";
import Destinations from "../destinations/Destinations";
import WhyLyamii from "../whyLyamii/WhyLyamii";
import MapAndEscape from "../mapAndEscape/MapAndEscape";
import { useHistory } from "react-router-dom";
import LifetimeJourney from "../lifetimeJourney/LifetimeJourney";
import BeyoundObvious from "../beyoundObvious/BeyoundObvious";
import BusinessClients from "../businessClients/BusinessClients";
import sky from "../../../Assets/sky.png";
import signin from "../../../Assets/signin.png";
import profileUpdate from "../../../Assets/profileUpdate.png";
import verification from "../../../Assets/verification.png";
import travellerId from "../../../Assets/travellerId.png";
import firstTour from "../../../Assets/firstTour.png";
import documentation from "../../../Assets/documentation.png";
import CustomerReviewSection from "../customerReview/CustomerReviewSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { SET_SELECTED_LOCATION } from "../../../state/actions/types/globeDataActionType";
import { useDispatch } from "react-redux";
import {
  SET_NON_INDIAN_TOURS,
  SET_TOUR_DATA,
} from "../../../state/actions/types/tourDataActionType";
import { parseTourDataArray } from "../../../utils/parseTourData";
import { getNonIndianToursApi } from "../../../api/nonIndianTours/getNonIndianToursApi";
import { getPackageDetailsByCountryAndDaysApi } from "../../../api/packageByCountryAndDays/getPackageDetailsByCountryAndDaysApi";
import { reasons } from "../../common/enum/enum";

const Home: FC = () => {
  const [index, setIndex] = useState(0); // State to manage carousel index
  const [tourDetail, setTourDetail] = useState({
    destination: "",
    startDate: "",
  });
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex); // Function to update selected index
  };
  const dispatch = useDispatch();
  const [flippedIndex, setFlippedIndex] = useState(-1);

  const handleCardHover = (index: number) => {
    setFlippedIndex(index);
  };

  const fetchTours = () => {
    dispatch({
      type: SET_SELECTED_LOCATION,
      payload: {
        city: tourDetail.destination,
        id: "",
        value: "",
        coordinates: "",
        color: "",
      },
    });
    window.scroll(0, 0);
    history.push("/explore");
  };
  const handleCardLeave = () => {
    setFlippedIndex(-1);
  };
  const fetchTourData = async () => {
    window.scrollTo(0, 0);
    const response = await getPackageDetailsByCountryAndDaysApi(0, 1);
    if (response.status === 200) {
      dispatch({
        type: SET_TOUR_DATA,
        payload: parseTourDataArray(response.data),
      });
    }
    const res = await getNonIndianToursApi();
    if (response.status === 200) {
      dispatch({
        type: SET_NON_INDIAN_TOURS,
        payload: parseTourDataArray(res?.data),
      });
    }
  };
  useEffect(() => {
    fetchTourData();
  }, []);

  const history = useHistory();

  return (
    <section>
      {/* Top Navigation Bar */}
      {/* <Navbar expand="lg"fixed="top"style={{ backgroundColor: "#1C1C1C"}}>
        <Container>
          <div style={{ display: "flex", justifyContent: "flex-start"}}>
            <Navbar.Brand href="#home"className="text-white ms-0">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="ms-2"
                color="#75abdc"
              />{""}
              Connect.helpdesk@lyamii.com
            </Navbar.Brand>
            <Nav
              className="ms-auto"
              style={{ borderLeft: "1px solid #75abdc", paddingLeft: "10px"}}
            >
              <Nav.Link href="#home"className="text-white">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="ms-2"
                  color="#75abdc"
                />{""}
                Connect.business@lyamii.com
              </Nav.Link>
              <Nav.Link
                href="#"
                className="text-white"
                style={{ borderLeft: "1px solid #75abdc", paddingLeft: "10px"}}
              >
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="me-1"
                  color="#75abdc"
                />{""}
                Indra Nagar, Banglore
              </Nav.Link>
            </Nav>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end"}}>
            <Nav>
              <Nav.Link href="#"className="text-white">
                <FontAwesomeIcon icon={faTwitter} className="ms-0"/>
              </Nav.Link>
              <Nav.Link href="#"className="text-white">
                <FontAwesomeIcon icon={faInstagram} className="ms-0"/>
              </Nav.Link>
              <Nav.Link href="#"className="text-white">
                <FontAwesomeIcon icon={faFacebook} className="ms-0"/>
              </Nav.Link>
              <Nav.Link
                href="#"
                className="text-white"
                style={{ backgroundColor: "#75abdc"}}
              >
                Log In
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar> */}
      {/* Movable Navbar */}
      {/* <Navbar
        expand="lg"
        style={{
          position: "sticky",
          top: "50px",
          zIndex: "1020",
          backgroundColor: "rgba(28, 28, 28, 0.8)",
          width: "100%",
        }}
      >
        <Container fluid>
          <Navbar.Brand href="#home"style={{ marginRight: "auto"}}>
            <img
              src="https://lyamii.com/static/media/logo.1f8ab1a3952e8db84941.png"
              style={{
                width: 50,
                height: 50,
              }}
            />
            <img
              src="https://lyamii.com/static/media/lyamii.8da8f0171bd8461ee18f.png"
              style={{
                width: 70,
                height: 30,
                marginLeft: 10,
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto"style={{ gap: "1rem"}}>
              <Nav.Link
                href="#home"
                style={{
                  marginRight: "1rem",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#packages"
                style={{
                  marginRight: "1rem",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Packages
              </Nav.Link>
              <Nav.Link
                href="#contact"
                style={{
                  marginRight: "1rem",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                href="#faq"
                style={{
                  marginRight: "1rem",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                FAQ
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      {/* Main Section */}
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={2000}
        wrap={true}
        style={{ marginTop: "0px" }}
      >
        <Carousel.Item>
          <img
            className="w-100 object-fit-cover"
            src="https://drive.google.com/thumbnail?sz=w2000&id=1-TPIgLsncoqnuxsTZhBukQk2sQhctYot"
            alt="First slide"
            loading="lazy"
            style={{ height: "65vh" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://drive.google.com/thumbnail?sz=w2000&id=1tDLklw45WQLVVIxQ5ebb8YtqO-py6Vtr"
            alt="Second slide"
            loading="lazy"
            style={{ height: "65vh", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://drive.google.com/thumbnail?sz=w2000&id=1jqijmfsF5WN8fzJEt5PYyTZaTQMYfpHW"
            alt="fourth slide"
            loading="lazy"
            style={{ height: "65vh", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://drive.google.com/thumbnail?sz=w2000&id=1k09rkJVx55oQIWijilw15vEuY5QRz0QU"
            alt="fifth slide"
            loading="lazy"
            style={{ height: "65vh", objectFit: "cover" }}
          />
        </Carousel.Item>
      </Carousel>
      <section
        style={{
          position: "absolute",
          bottom: "40%", // Move up by 20px from the bottom
          left: "50%",
          zIndex: 5,
          transform: "translateX(-50%)",
          width: "100%",
        }}
      >
        <h1 className="text-center pb-5 textShadow text-shadow-dark text-white">
          Dream. Discover. Live.
        </h1>
        <Form className="d-flex justify-content-around mt-5">
          <div
            className="mx-2 m-0 position-absolute bottom-0 start-0"
            style={{
              display: "flex",
              alignItems: "center",
              // backgroundColor: "white",
              borderRadius: "5px",
              // padding: "0 10px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              // marginBottom: 20,
            }}
          >
            <Button
              onClick={() => {
                history.push("/passportRegistration");
              }}
              className="p-2 m-0 small"
              style={{
                backgroundColor: "#75abdc",
                fontWeight: "bold",
                height: 50,
                border: "none",
                boxShadow: "none",
                // marginLeft: "10px",
              }}
            >
              Verify Passport
            </Button>
          </div>
          <div
            className="mx-2 m-0 position-absolute col-lg-4 col-8 bottom-0 end-0"
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: "5px",
              // padding: "0 10px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              marginBottom: 20,
            }}
          >
            <Form.Control
              type="search"
              value={tourDetail.destination}
              className="border border-0"
              placeholder="Where to?"
              aria-label="Search"
              onChange={(e: any) => {
                setTourDetail({
                  ...tourDetail,
                  destination: e.target.value,
                });
              }}
              style={{
                height: 50,
                // border: "none",
                boxShadow: "none",
              }}
            />
            {/* <div
              style={{
                width: "1px",
                height: "60px",
                backgroundColor: "#ddd",
                margin: "0 10px",
              }}
            /> */}
            {/* <Form.Control
              type="date"
              className="border border-0"
              placeholder="Month"
              aria-label="Month"
              style={{
                width: 150,
                height: 60,
                // border: "none",
                boxShadow: "none",
              }}
            /> */}
            <Button
              onClick={() => {
                fetchTours();
              }}
              className="small text-nowrap"
              style={{
                backgroundColor: "#75abdc",
                fontWeight: "bold",
                height: 50,
                border: "none",
                boxShadow: "none",
                marginLeft: "10px",
              }}
            >
              Find Now
            </Button>
          </div>
        </Form>
      </section>
      <Destinations />
      {/* steps of progress */}
      <div style={{ padding: "50px 0", textAlign: "center" }}>
        {/* Header Text */}
        {/* <p
          style={{
            fontSize: 28,
            fontWeight: "400",
            color: "#75abdc",
            marginBottom: 10,
            fontFamily: "cursive",
          }}
        >
          How It Works
        </p> */}
        <h2
          className="pt-5 bold"
          style={{
            fontSize: 45,
            fontWeight: "400",
            marginBottom: 40,
            color: "#686868",
            textAlign: "center",
            position: "relative",
          }}
        >
          <img
            className="col-md-3 col-sm-4 col-lg-2 col-sx-2 col-6"
            src={require("../../../Assets/escape.png")}
          />
        </h2>
        {/* Horizontal Scrollable Section */}
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            padding: "0 20px",
            alignItems: "center",
            gap: 20,
          }}
        >
          {[
            {
              id: 1,
              title: "Sign In",
              description:
                "Use your preferred virtual id to Sign up and Log into your profile on Lyamii.",
              img: "https://drive.google.com/thumbnail?sz=w2000&id=1jXzdnKb2wyyd2VQI1dqmpsP66xvyTc1W",
              url: "/login",
            },
            {
              id: 2,
              title: "Profile Update",
              description:
                "Edit and update your profile in the My Profile section.",
              img: "https://drive.google.com/thumbnail?sz=w2000&id=1jY813eDAowz63_r0ezpjDO84B0s-K2Yp",
              url: "/profile/personalData",
            },
            {
              id: 3,
              title: "First Tour",
              description:
                "Select your first Lyamii vacation and proceed with the book now option.",
              img: "https://drive.google.com/thumbnail?sz=w2000&id=1jaLTfXpjBo5etObenG7XdO5reNkmJYxg",
              url: "/explore",
            },
            {
              id: 4,
              title: "Verification",
              description:
                "Verify your profile with your passport to generate the Traveller ID.",
              img: "https://drive.google.com/thumbnail?sz=w2000&id=1jZ8Vcb3-UrzpXFVn53HY39AWC8p0-WNR",
              url: "/passportRegistration",
            },
            {
              id: 5,
              title: "Traveller ID",
              description: "Receive your Traveller ID in the User Dashboard.",
              img: "https://drive.google.com/thumbnail?sz=w2000&id=1ja0YAdA4RrSoXsdyrYOfGvo7mHd6Vii1",
              url: "",
            },
            {
              id: 6,
              title: "Documentation",
              description:
                "Complete the documentation process for insurance papers and reservations.",
              img: documentation,
              url: "/profile/documentations",
            },
            {
              id: 7,
              title: "Arrival",
              description:
                "Arrive at the destination and meet your assigned Lyamii volunteer at the airport",
              img: "https://drive.google.com/thumbnail?sz=w2000&id=1jcDFQemjeh6RCFm1JnznN-2NConKEAh4",
              url: "/profile/documentations",
            },
            {
              id: 8,
              title: "Transaction",
              description:
                "Meet our representative at the common space of your day one accommodation and complete transaction and currency exchange seamlessly.",
              img: "https://drive.google.com/thumbnail?sz=w2000&id=1jeAD3DQ_lxFEYSioVAA6Od8rJXnMh3bh",
              url: "/profile/documentations",
            },
            {
              id: 9,
              title: "Tour ID",
              description:
                "Receive your activated Tour ID that connects all the details of your vacation.",
              img: "https://drive.google.com/thumbnail?sz=w2000&id=1jeEFqh44Uw3ZJ6ahNIYlqEG6oAPcuav_",
              url: "/profile/documentations",
            },
            {
              id: 10,
              title: "Ongoing Tour",
              description:
                "Enjoy perfectly crafted preloaded Lyamii vacation chains in foreign countries.",
              img: "https://drive.google.com/thumbnail?sz=w2000&id=1jgs36a5jysnk8RknsKEZrc8fL0W8NfLf",
              url: "/profile/documentations",
            },
            {
              id: 11,
              title: "Departure",
              description:
                "Return to your home with a suitcase full of memories.",
              img: "https://drive.google.com/thumbnail?sz=w2000&id=1jj1q9biMYZZ-TXIbU8BbhurIqDkRPoiL",
              url: "/profile/documentations",
            },
            {
              id: 12,
              title: "Journal",
              description:
                "Receive your customised Tour Journal and cherish the everlasting moments of the vacation.",
              img: "https://drive.google.com/thumbnail?sz=w2000&id=1jko6sxJ1iR2NK-1xhFTac76vZ1dwcZKH",
              url: "/profile/documentations",
            },
            {
              id: 13,
              title: "Souvenir",
              description:
                "Get your souvenir items (ordered on Lyamii during the ongoing tour) delivered at your doorstep.",
              img: "https://drive.google.com/thumbnail?sz=w2000&id=1jmdpZ_6CQn59Y6gjRH_BdfJeXVFGv84F",
              url: "/profile/documentations",
            },
            {
              id: 14,
              title: "Second Tour",
              description:
                "With your already verified traveller ID book or buy your next vacation directly from the platform.",
              img: "https://drive.google.com/thumbnail?sz=w2000&id=1jaLTfXpjBo5etObenG7XdO5reNkmJYxg",
              url: "/profile/documentations",
            },

            {
              id: 15,
              title: "Arrival",
              description:
                "Arrive at the destination and meet your assigned Lyamii volunteer at the airport",
              img: "https://drive.google.com/thumbnail?sz=w2000&id=1jcDFQemjeh6RCFm1JnznN-2NConKEAh4",
              url: "/profile/documentations",
            },
            {
              id: 16,
              title: "Transaction",
              description:
                "Meet our representative at the common space of your day one accommodation and complete transaction and currency exchange seamlessly.",
              img: "https://drive.google.com/thumbnail?sz=w2000&id=1jeAD3DQ_lxFEYSioVAA6Od8rJXnMh3bh",
              url: "/profile/documentations",
            },
            {
              id: 17,
              title: "Tour ID",
              description:
                "Receive your activated Tour ID that connects all the details of your vacation.",
              img: "https://drive.google.com/thumbnail?sz=w2000&id=1jeEFqh44Uw3ZJ6ahNIYlqEG6oAPcuav_",
              url: "/profile/documentations",
            },
            {
              id: 18,
              title: "Ongoing Tour",
              description:
                "Complete the documentation process for insurance papers and reservations.",
              img: "https://drive.google.com/thumbnail?sz=w2000&id=1jgs36a5jysnk8RknsKEZrc8fL0W8NfLf",
              url: "/profile/documentations",
            },
            {
              id: 19,
              title: "Departure",
              description:
                "Complete the documentation process for insurance papers and reservations.",
              img: "https://drive.google.com/thumbnail?sz=w2000&id=1jj1q9biMYZZ-TXIbU8BbhurIqDkRPoiL",
              url: "/profile/documentations",
            },
            {
              id: 20,
              title: "Journal",
              description:
                "Complete the documentation process for insurance papers and reservations.",
              img: "https://drive.google.com/thumbnail?sz=w2000&id=1jko6sxJ1iR2NK-1xhFTac76vZ1dwcZKH",
              url: "/profile/documentations",
            },
            {
              id: 21,
              title: "Souvenir",
              description:
                "Complete the documentation process for insurance papers and reservations.",
              img: "https://drive.google.com/thumbnail?sz=w2000&id=1jmdpZ_6CQn59Y6gjRH_BdfJeXVFGv84F",
              url: "/profile/documentations",
            },
          ].map((step, index, arr) => (
            <React.Fragment key={step.id}>
              <div
                style={{
                  minWidth: 300,
                  textAlign: "center",
                  position: "relative",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    width: 250,
                    height: 250,
                    borderRadius: "50%",
                    overflow: "hidden",
                    margin: "0 auto 20px",
                    position: "relative",
                    border: "2px dotted #ccc",
                    borderColor: "#75abdc",
                    padding: 20,
                    boxSizing: "border-box",
                  }}
                >
                  <img
                    onClick={() => history.push(step.url)}
                    src={step.img}
                    loading="lazy"
                    alt={`Step ${step.id}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 50,
                      right: 10,
                      backgroundColor: "#75abdc",
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: "700",
                      border: "4px solid white",
                    }}
                  >
                    {`${step.id < 10 ? "0" : ""}${step.id}`}
                  </div>
                </div>
                <h3
                  style={{
                    margin: "10px 0",
                    fontSize: 25,
                    fontWeight: "700",
                    color: "black",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: 18,
                    fontWeight: "400",
                    color: "black",
                  }}
                >
                  {step.description}
                </p>
              </div>

              {index < arr.length - 1 && (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <svg
                    width="100"
                    height="50"
                    viewBox="0 0 100 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 25C30 0 70 0 100 25"
                      stroke="#ccc"
                      strokeWidth="2"
                      fill="none"
                      markerEnd="url(#arrowhead)"
                    />
                    <defs>
                      <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="7"
                        refX="10"
                        refY="3.5"
                        orient="auto"
                      >
                        <polygon points="0 0, 10 3.5, 0 7" fill="black" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <LifetimeJourney />
      <div style={{ position: "relative", padding: "50px 0" }}>
        {/* Background Image */}
        {/* <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${sky})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
            filter: "brightness(50%)", // Adjust brightness to ensure text is readable
          }}
        ></div> */}

        {/* Text with background */}
        <p
          style={{
            fontSize: 45,
            fontWeight: "700",
            color: "#686868",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <img
            className="col-md-3 col-sm-4 col-lg-2 col-sx-2 col-6"
            src={require("../../../Assets/whyLyami.png")}
          />
        </p>

        {/* Horizontal cards */}

        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 30,
            marginTop: 50,
            position: "relative",
            zIndex: 1,
          }}
        >
          {reasons.map((card, index) => (
            <Col
              lg={3}
              md={6}
              sm={6}
              sx={6}
              key={index}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
              style={{
                width: 300,
                height: 300, // Adjust height if needed
                perspective: "1000px", // Add perspective for 3D effect
                position: "relative",
                transformStyle: "preserve-3d",
                transition: "transform 0.6s",
                transform:
                  index === flippedIndex ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Front side (image) */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  backfaceVisibility: "hidden",
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >
                <img
                  src={card.image}
                  loading="lazy"
                  alt={card.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Back side (text) */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  backfaceVisibility: "hidden",
                  borderRadius: 8,
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transform: "rotateY(180deg)",
                  padding: 20,
                }}
              >
                <h3
                  style={{ fontSize: 25, fontWeight: "700", color: "#75abdc" }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 18, fontWeight: "400", lineHeight: 1.8 }}>
                  {card.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* krna hai espe work */}
      {/* <BeyoundObvious /> */}
      {/* <WhyLyamii /> */}
      <CustomerReviewSection />
      {/* <Contact /> */}

      <MapAndEscape />
      <BusinessClients />
    </section>
  );
};

export default Home;
