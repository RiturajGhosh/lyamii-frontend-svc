import React, { FC } from "react";
import { Button, Card, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  SET_TOUR_PACKAGE_ID,
  selectedTourDataDto,
} from "../../../state/actions/types/tourDataActionType";

type TourCardType = {
  tourData: selectedTourDataDto;
  key: number;
};
const TourCard: FC<TourCardType> = ({ tourData, key }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Card
      key={key}
      style={{
        border: "1px solid #E0E0E0",
        width: "100%",
        borderRadius: 10,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ display: "flex", padding: "20px" }}>
        <Card.Img
          variant="center"
          style={{
            width: 322,
            height: 319,
            borderRadius: 10,
            objectFit: "cover",
          }}
          onClick={() => {
            dispatch({
              type: SET_TOUR_PACKAGE_ID,
              payload: tourData.packageId,
            });
            history.push(`/tour-detail:${tourData.packageId}`);
          }}
          src="https://plus.unsplash.com/premium_photo-1672082422409-879d79636902?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYXxlbnwwfHwwfHx8MA%3D%3D"
        />

        <Card.Body style={{ flex: 1 }}>
          <Card.Title
            style={{
              fontSize: 30,
              fontWeight: "600",
              color: "#4A90E2",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
            onClick={() => {
              dispatch({
                type: SET_TOUR_PACKAGE_ID,
                payload: tourData.packageId,
              });
              history.push(`/tour-detail:${tourData.packageId}`);
            }}
          >
            {tourData?.title && tourData?.title}
          </Card.Title>
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              marginBottom: 10,
            }}
          >
            {tourData.destinations.map((month) => (
              <span
                key={month}
                style={{
                  padding: "5px 10px",
                  borderRadius: 0,
                  backgroundColor: "#F0F4FF",
                  color: "#4A90E2",
                  fontSize: 14,
                }}
              >
                {month}
              </span>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: 10,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            {tourData?.includes?.slice(0, 4).map((item) => (
              <span
                key={item}
                style={{
                  padding: "5px 10px",
                  borderRadius: 0,
                  backgroundColor: "#F0F4FF",
                  color: "#000000",
                  fontSize: 14,
                  fontWeight: "400",
                }}
              >
                {item}
              </span>
            ))}
            +{tourData?.includes.length - 4}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              marginTop: -100,
            }}
          >
            <div>
              <span
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                  color: "#818181",
                  marginBottom: 10,
                }}
              >
                Tour Duration:{" "}
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                    color: "#879DFF",
                  }}
                >
                  {tourData?.noOfDays - 1}N/{tourData?.noOfDays}D
                </span>
              </span>
              <Row
                className="align-items-center d-flex border border-0"
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                  color: "#818181",
                  marginBottom: 10,
                }}
              >
                Total Cost:{" "}
                {/* <span
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                    color: "#879DFF",
                  }}
                > */}
                <select
                  className="form-select w-60 border border-top-0 border-start-0 border-end-0 pointer"
                  aria-label="Default select example"
                >
                  {tourData?.packagePrice?.map(
                    (price: string, index: number) => (
                      <option key={index} value={price}>
                        {price}
                        {tourData?.packagePrice.length === 1 && " INR"}
                      </option>
                    )
                  )}
                </select>
                {/* </span> */}
              </Row>
              <br />
              <Button
                className="view-more-button"
                onClick={() => {
                  dispatch({
                    type: SET_TOUR_PACKAGE_ID,
                    payload: tourData.packageId,
                  });
                  history.push(`/tour-detail:${tourData.packageId}`);
                }}
                style={{
                  width: 258,
                  height: 52,
                  backgroundColor: "#4A90E2",
                  fontSize: 25,
                  fontWeight: "600",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: 0,
                  alignSelf: "center",
                  margin: "20px auto 0",
                }}
              >
                View More
              </Button>
            </div>
          </div>

          <hr style={{ border: "1px dotted #E0E0E0", margin: "10px 0" }} />
          <div style={{ marginBottom: 10 }}>
            <h5
              style={{
                fontSize: 20,
                fontWeight: "600",
                color: "#4A90E2",
              }}
            >
              Highlights
            </h5>
            <ul
              style={{
                fontSize: 16,
                fontWeight: "400",
                color: "#2E2E2E",
                paddingLeft: 20,
              }}
            >
              {tourData.highlights.slice(3).map((highlight) => (
                <li>{highlight}</li>
              ))}
            </ul>
            <a
              style={{
                fontSize: 16,
                color: "#879DFF",
                fontWeight: "600",
                textDecorationLine: "none",
              }}
              onClick={(e) => {
                e.preventDefault();
                dispatch({
                  type: SET_TOUR_PACKAGE_ID,
                  payload: tourData.packageId,
                });
                history.push(`/tour-detail:${tourData.packageId}`);
              }}
            >
              Read More
            </a>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
};

export default TourCard;
