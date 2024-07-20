import React, { useEffect, useState } from "react";
import { Card, Container, Carousel, Button, Col, Row } from "react-bootstrap";
import styles from "./Destinations.module.scss"; // Correct import path
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { tours } from "../../../state/selectors/selectTourData";
import {
  SET_TOUR_PACKAGE_ID,
  selectedTourDataDto,
} from "../../../state/actions/types/tourDataActionType";
import { TbWorldSearch } from "react-icons/tb";

const Destinations = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const indianTours = useSelector(tours);
  const [tourlist, setTourList] = useState<selectedTourDataDto[]>(indianTours);
  useEffect(() => {
    indianTours?.length > 0 && setTourList(indianTours);
  }, [indianTours]);

  // const tours = [
  //   {
  //     id: 1,
  //     country: "India",
  //     duration: "11N/12D",
  //     cities: "• 3N Delhi • 5N Manali • 3N Shimla",
  //     features: [
  //       "Round Trip Flights",
  //       "Intercity Car Transfers",
  //       "3 Star Hotels",
  //       "Airport Transfers",
  //       "7 Activities",
  //       "Selected Meals",
  //     ],
  //     price: "₹1,00,000",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1620403724159-40363e84a155?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdW50YWluJTIwaGQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
  //   },
  //   {
  //     id: 2,
  //     country: "South Africa",
  //     duration: "10N/11D",
  //     cities: "• 3N Cape Town • 4N Johannesburg • 3N Durban",
  //     features: [
  //       "Round Trip Flights",
  //       "Intercity Car Transfers",
  //       "4 Star Hotels",
  //       "Airport Transfers",
  //       "8 Activities",
  //       "Selected Meals",
  //     ],
  //     price: "₹2,20,000",
  //     imageUrl:
  //       "https://plus.unsplash.com/premium_photo-1669131388697-fab59ba90484?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VhfGVufDB8fDB8fHww",
  //   },
  //   {
  //     id: 3,
  //     country: "Brazil",
  //     duration: "9N/10D",
  //     cities: "• 3N Rio De Janeiro • 3N São Paulo • 3N Salvador",
  //     features: [
  //       "Round Trip Flights",
  //       "Intercity Car Transfers",
  //       "4 Star Hotels",
  //       "Airport Transfers",
  //       "7 Activities",
  //       "Selected Meals",
  //     ],
  //     price: "₹1,90,000",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1491378630646-3440efa57c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNlYXxlbnwwfHwwfHx8MA%3D%3D",
  //   },
  //   {
  //     id: 4,
  //     country: "China",
  //     duration: "12N/13D",
  //     cities: "• 3N Beijing • 4N Shanghai • 3N Guangzhou • 2N Hong Kong",
  //     features: [
  //       "Round Trip Flights",
  //       "Intercity Car Transfers",
  //       "5 Star Hotels",
  //       "Airport Transfers",
  //       "10 Activities",
  //       "Selected Meals",
  //     ],
  //     price: "₹3,50,000",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNlYXxlbnwwfHwwfHx8MA%3D%3D",
  //   },
  //   {
  //     id: 5,
  //     country: "Argentina",
  //     duration: "8N/9D",
  //     cities: "• 3N Buenos Aires • 3N Mendoza • 2N Iguazu Falls",
  //     features: [
  //       "Round Trip Flights",
  //       "Intercity Car Transfers",
  //       "4 Star Hotels",
  //       "Airport Transfers",
  //       "6 Activities",
  //       "Selected Meals",
  //     ],
  //     price: "₹1,60,000",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1628371655947-f65194a1bd37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhhcHB5fGVufDB8fDB8fHww",
  //   },
  //   {
  //     id: 6,
  //     country: "New Zealand",
  //     duration: "14N/15D",
  //     cities: "• 3N Auckland • 4N Rotorua • 3N Wellington • 4N Queenstown",
  //     features: [
  //       "Round Trip Flights",
  //       "Intercity Car Transfers",
  //       "5 Star Hotels",
  //       "Airport Transfers",
  //       "12 Activities",
  //       "Selected Meals",
  //     ],
  //     price: "₹3,80,000",
  //     imageUrl:
  //       "https://plus.unsplash.com/premium_photo-1669704099116-a325b4d6186f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhhcHB5fGVufDB8fDB8fHww",
  //   },
  // ];

  return (
    <Container
      fluid
      className="d-flex flex-column"
      style={{
        marginTop: 40,
        marginBottom: 40,
      }}
    >
      <h2
        className="bold d-flex justify-content-center align-items-center"
        style={{
          fontSize: 45,
          fontWeight: "400",
          marginTop: 20,
          marginBottom: 40,
          color: "#686868",
          textAlign: "center",
          fontFamily: "Poppins, sans-serif",
          position: "relative",
        }}
      >
        <span
          onClick={() => {
            history.push("/explore");
          }}
        >
          Lyamii Tours
        </span>
        <TbWorldSearch
          onClick={() => {
            history.push("/explore");
          }}
          className="top-0 align-items-center"
        />
        <span
          style={{
            display: "block",
            width: 90,
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
      <div className="scrolling-wrapper p-4 w-90 align-self-center row flex-row flex-nowrap">
        {tourlist.map((tour) => {
          return (
            <Col
              md={6}
              lg={4}
              sx={6}
              sm={12}
              className="expand col-12 d-inline-block position-relative"
            >
              <Card className={`${styles.carouselCard}`}>
                <Card.Img
                  variant="top"
                  src={
                    "https://drive.google.com/thumbnail?sz=w2000&id=1j8giF6uvrDsI-yfMYZFWxdBGe0wirl6w"
                  }
                  alt={tour.title}
                  className={styles.cardImage}
                />
                <Card.Body
                  className={`align-items-between d-grid ${styles.cardTextOverlay}`}
                >
                  <div className="d-flex w-100 align-items-center justify-content-between align-content-between">
                    <Card.Title
                      className="position-absolute bg-white p-0 m-0"
                      style={{
                        fontSize: 25,
                        fontWeight: "700",
                        zIndex:"1",
                        color: "#879DFF",
                        whiteSpace: "pre",
                      }}
                    >
                      {tour.title}
                    </Card.Title>
                    <hr
                      style={{
                        border: "0.5px solid #D0D0D0",
                        width: "100%",
                        height: "1px",
                        zIndex: "0",
                        // margin: "10px 0",
                      }}
                    />
                    <Card.Subtitle
                      style={{
                        fontSize: 13,
                        height: "25px",
                        fontWeight: "400",
                        color: "#879DFF",
                        border: "0.2px solid #879DFF",
                        padding: "2px 5px",
                        borderRadius: "3px",
                        textAlign: "center",
                        alignContent: "center",
                      }}
                    >
                      {tour.noOfDays}
                    </Card.Subtitle>
                  </div>
                  <Col className="pt-2">
                    <div className="d-flex p-0 m-0 flex-row justify-content-between">
                      <Row className="list-unstyled">
                        {tour.destinations
                          .slice(0, 4)
                          .map((destination, index) => (
                            <li
                              key={index}
                              style={{
                                fontSize: 13,
                                fontWeight: "400",
                                color: "#818181",
                                marginTop: 5,
                              }}
                              className="col px-0 mx-0"
                            >
                              <span
                                style={{
                                  color: "#879DFF",
                                }}
                              >
                                •
                              </span>{" "}
                              {destination}
                            </li>
                          ))}
                        <span
                          style={{
                            fontSize: 13,
                            fontWeight: "400",
                            color: "#818181",
                            marginTop: 5,
                          }}
                          className="col"
                        >
                          {tour.destinations.length > 5 &&
                            tour.destinations.length - 5 + "+"}
                        </span>
                      </Row>
                    </div>
                    {/* </Card.Text> */}
                    <hr
                      style={{
                        border: "0.5px solid #D0D0D0",
                        width: "100%",
                        margin: "10px 0",
                      }}
                    />
                    <div className="d-flex justify-content-between align-items-center">
                      <p
                        className="d-flex align-items-center p-0 my-2"
                        style={{
                          fontSize: 16,
                          fontWeight: "700",
                          color: "#05A1A5",
                        }}
                      >
                        <span>
                          {/* <select
                            style={{
                              WebkitAppearance: "none",
                              MozAppearance: "none",
                              background: "transparent",
                              fontSize: "16px",
                              fontWeight: "700",
                              color: "rgb(134, 133, 133)",
                            }}
                            className=" p-0 pointer border border-0 w-100"
                            aria-label="Default select example"
                          >
                            {tour?.packagePrice?.map(
                              (price: string, index: number) => (
                                <option
                                  key={index}
                                  value={price}
                                  style={{
                                    fontSize: "16px",
                                    fontWeight: "700",
                                    color: "rgb(134, 133, 133)",
                                  }}
                                >
                                   {price.split(" ")[0]}
                                  {/* {tour?.packagePrice.length === 1 && " INR"} 
                                </option>
                              )
                            )}
                          </select> */}

                          {tour?.packagePrice[0]?.split(" ")[0]}
                        </span>
                        <span
                          style={{
                            fontSize: 16,
                            fontWeight: "700",
                            color: "#868585",
                          }}
                        >
                          / Person
                        </span>
                      </p>
                      <Button
                        style={{
                          backgroundColor: "#879DFF",
                          fontWeight: "700",
                          fontSize: 15,
                          borderRadius: 0,
                          borderWidth: 0,
                        }}
                        onClick={() => {
                          dispatch({
                            type: SET_TOUR_PACKAGE_ID,
                            payload: tour.packageId,
                          });
                          history.push(`/tour-detail:${tour.packageId}`);
                        }}
                      >
                        View More
                      </Button>
                    </div>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </div>
    </Container>
  );
};

export default Destinations;
