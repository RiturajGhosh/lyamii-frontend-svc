import React, { FC, useEffect, useState } from "react";
import { Card, Container, Carousel, Button } from "react-bootstrap";
import { journeyOptions } from "../../common/enum/enum";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectPopularPackage } from "../../../state/selectors/selectTourData";
import {
  SET_TOUR_PACKAGE_ID,
  selectedTourDataDto,
} from "../../../state/actions/types/tourDataActionType";
const LifetimeJourney: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const popularTours = useSelector(selectPopularPackage);
  const [tourlist, setTourList] = useState<selectedTourDataDto[]>(popularTours);
  useEffect(() => {
    filterData();
    popularTours?.length > 0 && setTourList(filterData());
  }, [popularTours]);

  const filterData = () => {
    return popularTours.filter(
      (tour) => tour.packageName.indexOf("India") === -1
    );
  };
  const tours = [
    {
      id: 1,
      country: "India",
      duration: "11N/12D",
      cities: "• 3N Delhi • 5N Manali • 3N Shimla",
      features: [
        "Round Trip Flights",
        "Intercity Car Transfers",
        "3 Star Hotels",
        "Airport Transfers",
        "7 Activities",
        "Selected Meals",
      ],
      price: "₹1,00,000",
      imageUrl:
        "https://images.unsplash.com/photo-1620403724159-40363e84a155?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdW50YWluJTIwaGQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      country: "South Africa",
      duration: "10N/11D",
      cities: "• 3N Cape Town • 4N Johannesburg • 3N Durban",
      features: [
        "Round Trip Flights",
        "Intercity Car Transfers",
        "4 Star Hotels",
        "Airport Transfers",
        "8 Activities",
        "Selected Meals",
      ],
      price: "₹2,20,000",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1669131388697-fab59ba90484?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VhfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      country: "Brazil",
      duration: "9N/10D",
      cities: "• 3N Rio De Janeiro • 3N São Paulo • 3N Salvador",
      features: [
        "Round Trip Flights",
        "Intercity Car Transfers",
        "4 Star Hotels",
        "Airport Transfers",
        "7 Activities",
        "Selected Meals",
      ],
      price: "₹1,90,000",
      imageUrl:
        "https://images.unsplash.com/photo-1491378630646-3440efa57c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNlYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      country: "China",
      duration: "12N/13D",
      cities: "• 3N Beijing • 4N Shanghai • 3N Guangzhou • 2N Hong Kong",
      features: [
        "Round Trip Flights",
        "Intercity Car Transfers",
        "5 Star Hotels",
        "Airport Transfers",
        "10 Activities",
        "Selected Meals",
      ],
      price: "₹3,50,000",
      imageUrl:
        "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNlYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      country: "Argentina",
      duration: "8N/9D",
      cities: "• 3N Buenos Aires • 3N Mendoza • 2N Iguazu Falls",
      features: [
        "Round Trip Flights",
        "Intercity Car Transfers",
        "4 Star Hotels",
        "Airport Transfers",
        "6 Activities",
        "Selected Meals",
      ],
      price: "₹1,60,000",
      imageUrl:
        "https://images.unsplash.com/photo-1628371655947-f65194a1bd37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhhcHB5fGVufDB8fDB8fHww",
    },
    {
      id: 6,
      country: "New Zealand",
      duration: "14N/15D",
      cities: "• 3N Auckland • 4N Rotorua • 3N Wellington • 4N Queenstown",
      features: [
        "Round Trip Flights",
        "Intercity Car Transfers",
        "5 Star Hotels",
        "Airport Transfers",
        "12 Activities",
        "Selected Meals",
      ],
      price: "₹3,80,000",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1669704099116-a325b4d6186f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhhcHB5fGVufDB8fDB8fHww",
    },
  ];
  return (
    <div style={styles.lifetimeJourney}>
      <h2
        className="bold"
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
          className="col-md-4 col-sm-6 col-lg-3 col-sx-3 col-9"
          src={require("../../../Assets/incredible.png")}
        />
      </h2>
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <img
            src="https://drive.google.com/thumbnail?sz=w2000&id=1wOTvo27hpyi3ZvD2cdcJBNHhCdz2W8cF"
            alt="Royal Bharat Edition"
            style={styles.image}
          />
          <p style={styles.cardTitle}>Royal Bharat Edition</p>
          <button
            onClick={() => history.push(journeyOptions[0].path)}
            style={styles.button}
          >
            View More
          </button>
        </div>
        <div style={styles.card}>
          <img
            src="https://drive.google.com/thumbnail?sz=w2000&id=1wV2RNRvFCy8ew9aqzpeR-zbITwbY5sR1"
            alt="Backpackers Edition"
            style={styles.image}
          />
          <p style={styles.cardTitle}>Backpackers Edition</p>
          <button
            onClick={() => history.push(journeyOptions[1].path)}
            style={styles.button}
          >
            View More
          </button>
        </div>
        <div style={styles.card}>
          <img
            // src="https://drive.google.com/thumbnail?sz=w2000&id=1wQauWIEPsLvtFOVsHHu7gTYgECXxOgDg"
            src={require("../../../Assets/1000135220.jpg")}
            alt="Combos"
            style={styles.image}
          />
          <p style={styles.cardTitle}>Combos</p>
          <button
            onClick={() => history.push(journeyOptions[2].path)}
            style={styles.button}
          >
            View More
          </button>
        </div>
      </div>
      {/* International packages */}
      <h2
        className=""
        style={{
          fontSize: 50,
          fontFamily: "auto",
          fontWeight: "400",
          marginBottom: 40,
          color: "black",
          textAlign: "center",
          position: "relative",
        }}
      >
        <img
          className="col-md-4 col-sm-6 col-lg-3 col-sx-3 col-9"
          src={require("../../../Assets/beyond.png")}
        />
      </h2>
      <Carousel indicators={false} interval={null} pause={false}>
        {[...Array(Math.ceil(tourlist.length / 3))].map((_, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex m-1 justify-content-around">
              {tourlist.slice(index * 3, index * 3 + 3).map((tour) => (
                <Card key={""} style={styles.carouselCard}>
                  <Card.Img
                    variant="top"
                    src={require("../../../Assets/america.png")}
                    alt={tour.title}
                    style={styles.cardImage}
                  />
                  <Card.Body
                    className="border border-0"
                    style={styles.cardTextOverlay}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <Card.Title
                        style={{
                          fontSize: 25,
                          fontWeight: "700",
                          color: "#879DFF",
                        }}
                      >
                        {tour.title}
                      </Card.Title>
                      <hr
                        style={{
                          border: "0.5px solid #D0D0D0",
                          width: "100%",
                          margin: "10px 0",
                        }}
                      />
                      <Card.Subtitle
                        style={{
                          fontSize: 13,
                          fontWeight: "400",
                          color: "#879DFF",
                          border: "0.2px solid #879DFF",
                          padding: "2px 5px",
                          borderRadius: "3px",
                        }}
                      >
                        {tour.noOfDays}
                      </Card.Subtitle>
                    </div>

                    <Card.Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        color: "#818181",
                      }}
                    >
                      {tour.destinations.map(
                        (destination) => destination + " "
                      )}
                      {/* <hr
                        style={{
                          border: "0.5px solid #D0D0D0",
                          width: "80%",
                          margin: "10px 0",
                        }}
                      /> */}
                      {/* <div className="d-flex justify-content-between">
                        <ul className="list-unstyled">
                          {tour.includes.slice(0, 3).map((includes, index) => (
                            <li
                              key={index}
                              style={{
                                fontSize: 13,
                                fontWeight: "400",
                                color: "#818181",
                                marginTop: 5,
                              }}
                            >
                              <span
                                style={{
                                  color: "#879DFF",
                                }}
                              >
                                •
                              </span>{" "}
                              {includes}
                            </li>
                          ))}
                        </ul>
                        <ul className="list-unstyled">
                          {tour.includes.slice(3, 6).map((includes, index) => (
                            <li
                              key={index}
                              style={{
                                fontSize: 13,
                                fontWeight: "400",
                                color: "#818181",
                                marginTop: 5,
                              }}
                            >
                              <span
                                style={{
                                  color: "#879DFF",
                                }}
                              >
                                •
                              </span>{" "}
                              {includes}
                            </li>
                          ))}
                        </ul>
                      </div> */}
                    </Card.Text>
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
                          <select
                            className="form-select pointer border border-0 w-100"
                            aria-label="Default select example"
                          >
                            {tour?.packagePrice?.map(
                              (price: string, index: number) => (
                                <option key={index} value={price}>
                                  {price}
                                  {tour?.packagePrice.length === 1 && " INR"}
                                </option>
                              )
                            )}
                          </select>
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
                        onClick={() => {
                          dispatch({
                            type: SET_TOUR_PACKAGE_ID,
                            payload: tour.packageId,
                          });
                          history.push(`/tour-detail:${tour.packageId}`);
                        }}
                        style={{
                          backgroundColor: "#879DFF",
                          fontWeight: "700",
                          fontSize: 15,
                          borderRadius: 0,
                          borderWidth: 0,
                        }}
                      >
                        View More
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

const styles = {
  lifetimeJourney: {
    textAlign: "center" as const,
    padding: "20px",
  },
  heading: {
    marginBottom: "20px",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "40px",
  },
  carouselCard: {
    width: 382,
    height: 370,
    position: "relative" as "relative", // Ensure position is explicitly typed
    margin: 0,
    opacity: 1,
  },
  cardImage: {
    width: "100%",
    height: 250,
    objectFit: "cover" as "cover", // Ensure objectFit is explicitly typed
    padding: 0,
    margin: 0,
  },
  cardTextOverlay: {
    position: "relative" as "relative", // Ensure position is explicitly typed
    padding: 10,
    color: "black",
    background: "white",
    border: "1px solid black" as "1px solid black", // Ensure border is properly typed
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "4px",
    textAlign: "left" as const, // Ensure textAlign is explicitly typed
    width: 402,
    padding: "20px",
  },
  image: {
    width: "100%",
    height: 228,
    borderBottom: "1px solid #ddd",
  },
  cardTitle: {
    fontSize: 35,
    fontWeight: "700",
    color: "#879DFF",
    margin: "10px 0",
  },
  button: {
    fontSize: 15,
    fontWeight: "700",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: "#879DFF",
    marginBottom: 20,
    display: "block",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};
export default LifetimeJourney;
