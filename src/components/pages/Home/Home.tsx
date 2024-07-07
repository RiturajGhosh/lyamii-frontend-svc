import React, { FC, useEffect, useState } from "react";
import {
  Col,
  Navbar,
  Nav,
  Container,
  Form,
  Carousel,
  Button,
} from "react-bootstrap";
import Destinations from "../destinations/Destinations";
import WhyLyamii from "../whyLyamii/WhyLyamii";
import MapAndEscape from "../mapAndEscape/MapAndEscape";
import Contact from "../contact/Contact";
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
import { useDispatch, useSelector } from "react-redux";
import { getPopularPackageApi } from "../../../api/popularPackage/getPopularPackageApi";
import {
  SET_POPULAR_PACKAGE,
  selectedTourDataDto,
} from "../../../state/actions/types/tourDataActionType";
import { parseTourDataArray } from "../../../utils/parseTourData";
import { selectPopularPackage } from "../../../state/selectors/selectTourData";

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

  const cards = [
    {
      title: "Global Reach",
      description:
        "Our global accommodation covers 77+ countries. 500+ volunteers are always there to assist you on the way. Find comfort wherever you wander.",
      image:
        "https://images.unsplash.com/photo-1600907055749-d6cc7e75efd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2xvYmV8ZW58MHx8MHx8fDA%3D", // Replace with your image URLs
    },
    {
      title: "Complete Tours",
      description:
        "The traveller ID solves all your headaches. Travel Insurance? Sorted. Air Tickets? Done. Government Documentation? Checked. All stays? Covered. Pack your bag and leave the rest to us.",
      image:
        "https://images.unsplash.com/photo-1598194310253-4415c3c052ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbXBsZXRlJTIwdG91cnxlbnwwfHwwfHx8MA%3D%3D", // Replace with your image URLs
    },
    {
      title: "Secure & Convenient",
      description:
        "Experience secure and seamless transactions with our online/offline model. Embrace easy currency exchange for a Journey of a Lifetime.",
      image:
        "https://images.unsplash.com/photo-1526666361175-e3595627c376?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2VjdXJlJTIwJTI2JTIwQ29udmVuaWVudHxlbnwwfHwwfHx8MA%3D%3D", // Replace with your image URLs
    },
    {
      title: "Customer Support",
      description:
        "Our customer support is available 24/7 to assist you with all your needs and inquiries. Travel with peace of mind knowing we are always here to help.",
      image:
        "https://plus.unsplash.com/premium_photo-1661434914660-c68d9fd54753?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q3VzdG9tZXIlMjBTdXBwb3J0fGVufDB8fDB8fHww", // Replace with your image URLs
    },
  ];

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
    const response = await getPopularPackageApi();
    if (response.status === 200) {
      dispatch({
        type: SET_POPULAR_PACKAGE,
        payload: parseTourDataArray(response.data),
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
      {/* <Navbar expand="lg" fixed="top" style={{ backgroundColor: "#1C1C1C" }}>
        <Container>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Navbar.Brand href="#home" className="text-white ms-0">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="ms-2"
                color="#879DFF"
              />{" "}
              Connect.helpdesk@lyamii.com
            </Navbar.Brand>
            <Nav
              className="ms-auto"
              style={{ borderLeft: "1px solid #879DFF", paddingLeft: "10px" }}
            >
              <Nav.Link href="#home" className="text-white">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="ms-2"
                  color="#879DFF"
                />{" "}
                Connect.business@lyamii.com
              </Nav.Link>
              <Nav.Link
                href="#"
                className="text-white"
                style={{ borderLeft: "1px solid #879DFF", paddingLeft: "10px" }}
              >
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="me-1"
                  color="#879DFF"
                />{" "}
                Indra Nagar, Banglore
              </Nav.Link>
            </Nav>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Nav>
              <Nav.Link href="#" className="text-white">
                <FontAwesomeIcon icon={faTwitter} className="ms-0" />
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                <FontAwesomeIcon icon={faInstagram} className="ms-0" />
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                <FontAwesomeIcon icon={faFacebook} className="ms-0" />
              </Nav.Link>
              <Nav.Link
                href="#"
                className="text-white"
                style={{ backgroundColor: "#879DFF" }}
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
          <Navbar.Brand href="#home" style={{ marginRight: "auto" }}>
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{ gap: "1rem" }}>
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
            className="d-block w-100"
            src="https://plus.unsplash.com/premium_photo-1673866900349-6a97ff688506?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNlYSUyMHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="First slide"
            style={{ height: "60vh", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1618946467973-a5105efa83eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VhJTIwdHJhdmVsfGVufDB8fDB8fHww"
            alt="Second slide"
            style={{ height: "60vh", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1653234031926-2ea39ccab91b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2VhJTIwdHJhdmVsfGVufDB8fDB8fHww"
            alt="Third slide"
            style={{ height: "60vh", objectFit: "cover" }}
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
        <h1 className="text-center pb-5 text-shadow-light text-white">
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
              className="p-2 m-0"
              style={{
                backgroundColor: "#879DFF",
                fontSize: 20,
                fontWeight: "bold",
                height: 60,
                border: "none",
                boxShadow: "none",
                // marginLeft: "10px",
              }}
            >
              Verify Passport
            </Button>
          </div>
          <div className="mx-2 m-0 position-absolute bottom-0 end-0"
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
                width: 300,
                height: 60,
                // border: "none",
                boxShadow: "none",
              }}
            />
            <div
              style={{
                width: "1px",
                height: "60px",
                backgroundColor: "#ddd",
                margin: "0 10px",
              }}
            />
            <Form.Control
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
            />
            <Button
              onClick={() => {
                fetchTours();
              }}
              style={{
                backgroundColor: "#879DFF",
                fontSize: 20,
                fontWeight: "bold",
                height: 60,
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
            color: "#879DFF",
            marginBottom: 10,
            fontFamily: "cursive",
          }}
        >
          How It Works
        </p> */}
        <h2
          style={{
            fontSize: 45,
            fontWeight: "400",
            marginBottom: 40,
            color: "#686868",
            textAlign: "center",
            position: "relative",
          }}
        >
          Escape Plan
          <span
            style={{
              display: "block",
              width: 180,
              height: 6,
              backgroundColor: "#879DFF",
              position: "absolute",
              bottom: -10,
              left: "50%",
              transform: "translateX(-50%)",
              borderRadius: "0px 0px 5px 5px",
              opacity: 0.7,
            }}
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
                "We provide a range of digital marketing solutions including website design.",
              img: signin,
            },
            {
              id: 2,
              title: "Profile Update",
              description:
                "We provide a range of digital marketing solutions including website design.",
              img: profileUpdate,
            },
            {
              id: 3,
              title: "Verification",
              description:
                "We provide a range of digital marketing solutions including website design.",
              img: verification,
            },
            {
              id: 4,
              title: "Travel ID",
              description:
                "We provide a range of digital marketing solutions including website design.",
              img: travellerId,
            },
            {
              id: 5,
              title: "First Tour",
              description:
                "We provide a range of digital marketing solutions including website design.",
              img: firstTour,
            },
            {
              id: 6,
              title: "Documentation",
              description:
                "We provide a range of digital marketing solutions including website design.",
              img: documentation,
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
                    borderColor: "#879DFF",
                    padding: 20,
                    boxSizing: "border-box",
                  }}
                >
                  <img
                    src={step.img}
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
                      top: 10,
                      right: 10,
                      backgroundColor: "#879DFF",
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
                    {`0${step.id}`}
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
        <div
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
        ></div>

        {/* Text with background */}
        <p
          style={{
            fontSize: 45,
            fontWeight: "700",
            color: "#000000",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          Why Lyamii
        </p>
        <div
          style={{
            width: "15%",
            height: 6,
            borderRadius: "0px 0px 5px 5px",
            background: "#879DFF",
            margin: "0 auto",
            position: "relative",
            top: -10, // Adjust to position below the text
            zIndex: 1,
          }}
        ></div>

        {/* Horizontal cards */}

        <div
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
          {cards.map((card, index) => (
            <div
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
                  style={{ fontSize: 25, fontWeight: "700", color: "#879DFF" }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 18, fontWeight: "400", lineHeight: 1.8 }}>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
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
