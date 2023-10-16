import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./MapAndEscape.module.scss";
import BorderCard from "../../common/borderCard/BorderCard";
import Globe from "../../common/globe/Globe";
import escape from "../../../Assets/escape.jpeg";
import { exploreDescription, mapDescription } from "../../common/enum/enum";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { SET_SELECTED_LOCATION } from "../../../state/actions/types/globeDataActionType";

const MapAndEscape: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const screenSize = useSelector(selectScreenSize);
  return (
    <Container
      className="home-about-section sectionContainer py-42"
      fluid
      id="about"
    >
      <Container>
        <Row className="g-4">
          <Col md={7} className="">
            <BorderCard
              title="Home among the Stars"
              text={mapDescription}
              minHeight={screenSize.isDesktop ? "630px" : "0px"}
              buttonColor="bg-warning"
              descriptionStyling="text-blue"
              onClick={() => {
                dispatch({
                  type: SET_SELECTED_LOCATION,
                  payload: {},
                });
                history.push("explore");
              }}
              className={`border-5 pt-32 border-white shadow-lg justify-content-start d-table ${style.bgBluePink}`}
            >
              <div style={{ width: "25%", height: "25%", paddingLeft: "10px" }}>
                <Globe />
              </div>
            </BorderCard>
          </Col>
          <Col md={5} className="">
            <BorderCard
              title="The Escape Plan"
              text={exploreDescription}
              minHeight={screenSize.isDesktop ? "630px" : "0px"}
              buttonColor="bg-light"
              descriptionStyling="text-blue"
              className="border-5 shadow-lg border-white bg-dark text-white d-table"
              onClick={() => {
                dispatch({
                  type: SET_SELECTED_LOCATION,
                  payload: {},
                });
                history.push("explore");
              }}
              imageAbove={escape}
            ></BorderCard>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default MapAndEscape;
