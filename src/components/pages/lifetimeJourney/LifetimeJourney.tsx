import React, { FC, useEffect, useState } from "react";
import { Card, Container, Carousel, Button, Col, Row } from "react-bootstrap";
import { journeyOptions } from "../../common/enum/enum";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectNonIndianTours } from "../../../state/selectors/selectTourData";
import {
  SET_TOUR_PACKAGE_ID,
  selectedTourDataDto,
} from "../../../state/actions/types/tourDataActionType";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
const LifetimeJourney: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const nonIndianTours = useSelector(selectNonIndianTours);
  const [tourlist, setTourList] =
    useState<selectedTourDataDto[]>(nonIndianTours);
  useEffect(() => {
    filterData();
    nonIndianTours?.length > 0 && setTourList(filterData());
  }, [nonIndianTours]);

  const filterData = () => {
    return nonIndianTours.filter(
      (tour) => tour.packageName.indexOf("India") === -1
    );
  };
  const screenSize = useSelector(selectScreenSize);
  return (
    <Container
      fluid
      className="d-flex flex-column"
      style={styles.lifetimeJourney}
    >
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
      <div style={styles.cardContainer} className="row">
        <Col
          lg={4}
          md={4}
          sm={12}
          sx={12}
          style={styles.card}
          className="text-center"
        >
          <img
            src="https://drive.google.com/thumbnail?sz=w2000&id=1wOTvo27hpyi3ZvD2cdcJBNHhCdz2W8cF"
            alt="Royal Bharat Edition"
            loading="lazy"
            style={styles.image}
          />
          <p style={styles.cardTitle}>Royal Bharat Edition</p>
          <Col className="w-100 justify-content-center d-flex">
            <button
              onClick={() => history.push(journeyOptions[0].path)}
              style={styles.button}
            >
              View More
            </button>
          </Col>
        </Col>
        <Col
          lg={4}
          md={4}
          sm={12}
          sx={12}
          style={styles.card}
          className="text-center"
        >
          <img
            src="https://drive.google.com/thumbnail?sz=w2000&id=1wV2RNRvFCy8ew9aqzpeR-zbITwbY5sR1"
            alt="Backpackers Edition"
            loading="lazy"
            style={styles.image}
          />
          <p style={styles.cardTitle}>Backpackers Edition</p>
          <Col className="w-100 justify-content-center d-flex">
            <button
              onClick={() => history.push(journeyOptions[1].path)}
              style={styles.button}
            >
              View More
            </button>
          </Col>
        </Col>
        <Col
          lg={4}
          md={4}
          sm={12}
          sx={12}
          style={styles.card}
          className="text-center"
        >
          <img
            // src="https://drive.google.com/thumbnail?sz=w2000&id=1wQauWIEPsLvtFOVsHHu7gTYgECXxOgDg"
            src={require("../../../Assets/1000135220.jpg")}
            alt="Combos"
            loading="lazy"
            style={styles.image}
          />
          <p style={styles.cardTitle}>Combos</p>
          <Col className="w-100 justify-content-center d-flex">
            <button
              onClick={() => history.push(journeyOptions[2].path)}
              style={styles.button}
            >
              View More
            </button>
          </Col>
        </Col>
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
      </h2>{" "}
      <div className="scrolling-wrapper p-4 w-90 align-self-center row flex-row flex-nowrap">
        {tourlist.map((tour, index: number) => {
          return (
            <Col
              md={6}
              lg={4}
              sx={6}
              sm={12}
              key={index}
              className="expand col-12 d-inline-block position-relative"
            >
              <Card
                className={`${styles.carouselCard}`}
                style={{ minWidth: "290px" }}
              >
                <Card.Img
                  variant="top"
                  style={{ minHeight: "290px" }}
                  src={
                    tour?.imageUri?.length > 0 && tour.imageUri[0] !== ""
                      ? `https://drive.google.com/thumbnail?sz=w2000&id=${tour.imageUri[0]}`
                      : "https://drive.google.com/thumbnail?sz=w2000&id=1j8giF6uvrDsI-yfMYZFWxdBGe0wirl6w"
                  }
                  alt={tour.title}
                  // className={styles.cardImage}
                />
                <Card.Body
                  className={`align-items-between d-grid ${styles.cardTextOverlay}`}
                  style={{ minHeight: "229px" }}
                >
                  <div className="d-flex w-100 align-items-center justify-content-between align-content-between">
                    <Card.Title
                      className={`position-absolute bg-white m-0 p-0 ${
                        screenSize?.screenSize < 767
                          ? "normal"
                          : screenSize?.screenSize > 767 &&
                            screenSize?.screenSize < 969
                          ? "fs-medium"
                          : "fs-auto"
                      }`}
                      style={{
                        zIndex: "1",
                        // fontSize: 25,
                        fontWeight: "700",
                        color: "#75abdc",
                        whiteSpace: "pre",
                      }}
                    >
                      {tour.title}
                    </Card.Title>
                    <hr
                      style={{
                        zIndex: "0",
                        border: "0.5px solid #D0D0D0",
                        width: "100%",
                        height: "1px",
                        // margin: "10px 0",
                      }}
                    />
                    <Card.Subtitle
                      className="small"
                      style={{
                        // fontSize: 13,
                        height: "25px",
                        fontWeight: "400",
                        color: "#75abdc",
                        border: "0.2px solid #75abdc",
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
                                  color: "#75abdc",
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
                          <select
                            style={{
                              WebkitAppearance: "none",
                              MozAppearance: "none",
                              background: "transparent",
                              // fontSize: "16px",
                              fontWeight: "700",
                              color: "rgb(134, 133, 133)",
                            }}
                            className=" p-0 pointer border small border-0 w-100"
                            aria-label="Default select example"
                          >
                            {tour?.packagePrice?.map(
                              (price: string, index: number) => (
                                <option
                                  key={index}
                                  value={price}
                                  className="small"
                                  style={{
                                    // fontSize: "16px",
                                    fontWeight: "700",
                                    color: "rgb(134, 133, 133)",
                                  }}
                                >
                                  {price}
                                </option>
                              )
                            )}
                          </select>
                        </span>
                        <span
                          className="small"
                          style={{
                            // fontSize: 16,
                            fontWeight: "700",
                            color: "#868585",
                          }}
                        >
                          / Person
                        </span>
                      </p>
                      <Button
                        className="small"
                        style={{
                          backgroundColor: "#75abdc",
                          fontWeight: "700",
                          // fontSize: 15,
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
    // width: 382,
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
    color: "#75abdc",
    margin: "10px 0",
  },
  button: {
    fontSize: 15,
    fontWeight: "700",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: "#75abdc",
    marginBottom: 20,
    display: "block",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};
export default LifetimeJourney;
