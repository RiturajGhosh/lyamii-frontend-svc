import React, { FC, useEffect, useRef, useState } from "react";
import ContainerSection from "../../common/container/Container";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Modal,
  Ratio,
  Row,
} from "react-bootstrap";
import FormInput from "../../common/formInput/FormInput";
import { RiUploadCloud2Line } from "react-icons/ri";
import style from "./Hotel.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectedLocation } from "../../../state/selectors/selectGlobeData";
import { SET_SELECTED_LOCATION } from "../../../state/actions/types/globeDataActionType";
import markers from "../../common/globe/markers";
import Checkbox from "../../common/checkbox/Checkbox";
import CardWithShadow from "../../common/cardWithoutBorder/CardWithShadow";
import { tours } from "../mockData/destinations";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
import TourCard from "../../common/tourCard/TourCard";
import RecommandedTours from "../recommandedTours/RecommandedTours";
import { filterList, reviews, tourReviews } from "../../common/enum/enum";
import Coursel from "../coursel/Coursel";
import RecentlyViewedTours from "../recentlyViewedTours/RecentlyViewedTours";
import MainContainer from "../../common/container/MainContainer";
import HorizontalScroll from "../../common/horizontalScroll/HorizontalScroll";
import { SET_SELECTED_TOUR_DATA } from "../../../state/actions/types/tourDataActionType";
import { useHistory, useLocation } from "react-router-dom";
import Tick from "../../common/icon/tick";
import { FaUpload } from "react-icons/fa6";

type stateType = {
  data: any[];
  hasMore: boolean;
};
const Hotel: FC = () => {
  // const userData = useSelector(selectLoginData);
  const [detail, setDetail] = useState({
    hotelName: "",
    country: "",
    pinCode: "",
    reception: "",
  });
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef<any>();
  const indicatorRef = useRef<any>();
  const location = useLocation();

  const history = useHistory();
  // useEffect(() => {
  //   if (
  //     userData?.loginData?.userId?.length > 0 &&
  //     userData?.loginData?.password?.length > 0
  //   ) {
  //     history.push("/");
  //   }
  // }, [userData]);
  const fileUpload = (event: any) => {
    const files = event.target.files;
    const filesLength = files.length;
    if (filesLength > 0) {
      let imgSrc = URL.createObjectURL(files[0]) || "";
      let imafePreviewElement = document.querySelector("image") || "";
      // imafePreviewElement.src = imgSrc;
      // imafePreviewElement?.style.display = "block";
    }
  };
  console.log(location.pathname.includes('Hotel'))
  return (
    <section style={{ background: "#b5f4c5" }}>
      <Container className="min-vh-100 align-items-center d-flex">
        <Col className="gap-2 d-flex flex-column">
          <Col>
            <Row className="d-flex justify-content-start fit-content gap-2">
              <Col
                className="justify-content-start gap-3 round-edges px-4 m-0 d-flex"
                style={{ minHeight: "0%", background: "#5ba16b" }}
              >
                <Col
                  className="fit-content py-3 border-0"
                  onClick={(e: any) => {history.push("/addHotel")}}
                >
                  <span className="display-6 bold text-dark p-0 m-0">
                    Hotel
                  </span>
                </Col>
                {location.pathname.includes('Hotel') && (
                  <Button
                    style={{ background: "#2dcd6f" }}
                    className="align-items-center border-0 justify-content-center p-0 m-0 btn w-40 h-60 rounded-circle d-flex"
                  >
                    <Tick width="60" height="50" />
                  </Button>
                )}
              </Col>
              <Col
                className="justify-content-start gap-3 round-edges px-4 m-0 d-flex"
                style={{ minHeight: "0%", background: "#5ba16b" }}
              >
                <Col
                  className="fit-content py-3 border-0"
                  onClick={(e: any) => {history.push("/addHostel")}}
                >
                  <span className="display-6 bold text-dark p-0 m-0">
                    Hostel
                  </span>
                </Col>
                {location.pathname.includes('Hostel') && (
                  <Button
                    style={{ background: "#2dcd6f" }}
                    className="align-items-center border-0 justify-content-center p-0 m-0 btn w-40 h-60 rounded-circle d-flex"
                  >
                    <Tick width="60" height="50" />
                  </Button>
                )}
              </Col>
            </Row>
          </Col>
          <hr className="border-2 border border-dark"></hr>
          <Row className="d-flex">
            <Col
              md={8}
              xs={8}
              sx={8}
              lg={8}
              className="justify-content-center d-flex col-12 flex-column"
            >
              <Col className="justify-content-start d-flex">
                <span className="h3 w-30 text-dark p-0 m-0 system-ui">
                  HOTEL NAME:
                </span>
                <Col className="p-0 m-0 border-bottom border-dark border-2  w-100">
                  <input
                    className=" h3 justify-content-start p-0 text-dark text-center m-0 border-0"
                    type="text"
                    value={detail.hotelName}
                    style={{ background: "none" }}
                    onChange={(e: any) =>
                      setDetail({ ...detail, hotelName: e.target.value })
                    }
                  />
                </Col>
              </Col>
              <Col className="justify-content-start d-flex">
                <span className="h3 w-15 text-dark p-0 m-0 system-ui">
                  Country:
                </span>
                <Col className="p-0 m-0 border-bottom border-dark border-2  w-100">
                  <input
                    className=" w-100 h3 justify-content-start p-0 text-dark text-center m-0  border-0"
                    type="text"
                    value={detail.hotelName}
                    style={{ background: "none" }}
                    onChange={(e: any) =>
                      setDetail({ ...detail, hotelName: e.target.value })
                    }
                  />
                </Col>
              </Col>
              <Col className="justify-content-start d-flex">
                <span className="h3 w-20 text-dark p-0 m-0 system-ui">
                  Pin Code:
                </span>
                <Col className="p-0 m-0 border-bottom border-dark border-2 w-100">
                  <input
                    className=" w-100 h3 justify-content-start p-0 text-dark text-center m-0 border-0"
                    type="text"
                    value={detail.hotelName}
                    style={{ background: "none" }}
                    onChange={(e: any) =>
                      setDetail({ ...detail, hotelName: e.target.value })
                    }
                  />
                </Col>
              </Col>
              <Col className="justify-content-start d-flex">
                <span className="h3 w-20 text-dark p-0 system-ui">
                  Reception:
                </span>
                <Col className="p-0 m-0 border-bottom border-dark border-2 w-100">
                  <input
                    className=" w-100 h3 justify-content-start p-0 text-dark text-center m-0 border-0"
                    type="text"
                    value={detail.hotelName}
                    style={{ background: "none" }}
                    onChange={(e: any) =>
                      setDetail({ ...detail, hotelName: e.target.value })
                    }
                  />
                </Col>
              </Col>
            </Col>
            <Col>
              <Card
                style={{ height: window.innerWidth / 3, background: "#338f49" }}
                className="form__input text-white align-items-center d-flex h-100 position-relative p-2 m-0"
              >
                <Row className="p-0 m-0 w-100">
                  <Col className="p-0 col-7 m-0">
                    {reviews?.map((review: any) => (
                      <Row className="flex-row d-flex p-0 m-0">
                        <Col className="h6 align-items-center justify-content-end d-flex">
                          {review.name}
                        </Col>
                        <Button
                          style={{ background: "#000000" }}
                          className="align-items-center border-0 justify-content-center p-0 m-0 btn w-10 h-10 rounded-circle d-flex"
                        >
                          <Tick width="20" height="20" />
                        </Button>
                      </Row>
                    ))}
                    {reviews?.map((review: any) => (
                      <Row className="p-0 m-0">
                        <Col className="h6 align-items-center justify-content-end d-flex">
                          {review.name}
                        </Col>
                        <Button
                          style={{ background: "#000000" }}
                          className="align-items-center border-0 justify-content-center p-0 m-0 btn w-10 h-10 rounded-circle d-flex"
                        >
                          <Tick width="20" height="20" />
                        </Button>
                      </Row>
                    ))}
                  </Col>
                  <Col className="p-0 m-0 col-5 justify-content-center align-items-center d-flex">
                    <Col
                      className="p-0 m-0 fit-content h-30 w-50 col-6 rounded-circle"
                      style={{ background: "#b5f4c5" }}
                    >
                      <RiUploadCloud2Line
                        className={"w-100 h-100 p-1 text-dark"}
                        width={"100px"}
                        height={"100px"}
                      />
                      <Col>(Property Pictures)</Col>
                    </Col>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

          <Row className="gap-5 my-5 justify-content-around position-relative">
            <Col
              md={3}
              xs={3}
              sx={3}
              lg={3}
              className={`align-items-center col-12 flex-column m-0 justify-content-center position-relative d-flex `}
            >
              <Col
                className={`p-0 m-0 justify-content-center align-self-center d-flex w-100 ${style.reasonCard}`}
                style={{
                  background: "#7dc07c",
                }}
              >
                <Card.Img
                  className={`p-0 m-0 justify-content-center ${style.reasonCard}`}
                  style={{
                    // width: "100%",
                    padding: "0px !important",
                    margin: "0px !important",
                  }}
                  src={require("../../../Assets/accomodation.png")}
                />
              </Col>
              <Col
                className="display-6 w-100 text-white p-0 m-0 justify-content-center d-flex round-edges py-2 mt-2"
                style={{ background: "#4a915b" }}
              >
                PRIME
              </Col>
              <Col className="p-0 m-0 border-bottom border-dark border-2 w-100">
                <input
                  className=" h3 justify-content-start p-0 text-dark text-center m-0 border-0"
                  type="text"
                  value={detail.hotelName}
                  style={{ background: "none" }}
                  onChange={(e: any) =>
                    setDetail({ ...detail, hotelName: e.target.value })
                  }
                />
              </Col>
            </Col>
            <Col
              md={3}
              xs={3}
              sx={3}
              lg={3}
              className={`align-items-center col-12 flex-column m-0 justify-content-center position-relative d-flex `}
            >
              <Col
                className={`p-0 m-0 flex-column justify-content-center align-self-center d-flex w-100  w-100  ${style.reasonCard}`}
                style={{
                  background: "#7dc07c",
                }}
              >
                <label
                  htmlFor="file-upload"
                  className="justify-content-center align-self-center bold h3 rounded-3 gap-2 flex-row d-flex p-2"
                >
                  <span>Uploading...</span>
                </label>
                <input
                  className="w-100"
                  id="file-upload"
                  accept="image/*"
                  style={{ visibility: "hidden" }}
                  placeholder=""
                  onChange={(event) => fileUpload(event)}
                  type="file"
                />
              </Col>
              <Col
                className="display-6 w-100 text-white justify-content-center d-flex p-0 m-0 round-edges py-2 mt-2"
                style={{ background: "#4a915b" }}
              >
                MID RANGE
              </Col>
              <Col className="p-0 m-0 border-bottom border-dark border-2 w-100">
                <input
                  className=" h3 justify-content-start p-0 text-dark text-center m-0 border-0"
                  type="text"
                  value={detail.hotelName}
                  style={{ background: "none" }}
                  onChange={(e: any) =>
                    setDetail({ ...detail, hotelName: e.target.value })
                  }
                />
              </Col>
            </Col>
            <Col
              md={3}
              xs={3}
              sx={3}
              lg={3}
              className={`align-items-center col-12 flex-column m-0 justify-content-center position-relative d-flex `}
            >
              <Col
                className={`p-0 m-0 flex-column justify-content-center align-self-center d-flex w-100 ${style.reasonCard}`}
                style={{
                  background: "#7dc07c",
                }}
              >
                <label
                  htmlFor="file-upload"
                  style={{
                    color: "#7dc07c",
                  }}
                  className="bg-primary justify-content-center align-self-center bold h5 rounded-3 gap-2 flex-row d-flex p-2"
                >
                  <FaUpload />
                  <span>Upload Image</span>
                </label>
                <input
                  className="w-100"
                  id="file-upload"
                  accept="image/*"
                  style={{ visibility: "hidden" }}
                  placeholder=""
                  onChange={(event) => fileUpload(event)}
                  type="file"
                />
              </Col>
              <Col
                className="display-6 w-100 text-white min-vh-0 justify-content-center d-flex p-0 round-edges py-2 m-0 mt-2"
                style={{ background: "#4a915b" }}
              >
                <span className="p-0 m-0">BUDGET</span>
              </Col>
              <Col className="p-0 m-0 border-bottom border-dark border-2 w-100">
                <input
                  className=" h3 justify-content-start p-0 text-dark text-center m-0 border-0"
                  type="text"
                  value={detail.hotelName}
                  style={{ background: "none" }}
                  onChange={(e: any) =>
                    setDetail({ ...detail, hotelName: e.target.value })
                  }
                />
              </Col>
            </Col>
          </Row>
          <Row className="d-flex">
            <Col
              md={10}
              xs={10}
              sx={10}
              lg={10}
              className="justify-content-center d-flex col-12 flex-column"
            >
              <Col className="justify-content-start d-flex">
                <span className="h3 w-30 text-dark p-0 m-0 system-ui">
                  Active Email Address:
                </span>
                <Col className="p-0 m-0 border-bottom border-dark border-2 w-100">
                  <input
                    className=" w-100 h3 p-0 m-0 justify-content-start text-dark text-center m-0 border-bottom border-0 border-dark"
                    type="text"
                    value={detail.hotelName}
                    style={{ background: "none" }}
                    onChange={(e: any) =>
                      setDetail({ ...detail, hotelName: e.target.value })
                    }
                  />
                </Col>
              </Col>
              <Col className="justify-content-start d-flex">
                <span className="h3 w-40 text-dark p-0 m-0 system-ui">
                  Marketing team Contact:
                </span>
                <Col className="p-0 m-0 border-bottom border-dark border-2 w-100">
                  <input
                    className=" w-100 h3 justify-content-start p-0 text-dark text-center m-0 border-0"
                    type="text"
                    value={detail.hotelName}
                    style={{ background: "none" }}
                    onChange={(e: any) =>
                      setDetail({ ...detail, hotelName: e.target.value })
                    }
                  />
                </Col>
              </Col>
              <Col className="justify-content-start d-flex">
                <span className="h3 w-40 text-dark m-0 p-0 system-ui">
                  Operations Team Contact:
                </span>
                <Col className="p-0 m-0 border-bottom border-dark border-2 w-100">
                  <input
                    className=" w-100 h3 justify-content-start p-0 text-dark text-center m-0 border-0"
                    type="text"
                    value={detail.hotelName}
                    style={{ background: "none" }}
                    onChange={(e: any) =>
                      setDetail({ ...detail, hotelName: e.target.value })
                    }
                  />
                </Col>
              </Col>
            </Col>
            <Col className="align-self-center justify-content-end d-flex">
              <Button className="align-items-center bg-primary justify-content-center d-flex">
                <span className="display-6">Submit</span>
              </Button>
            </Col>
          </Row>
        </Col>
      </Container>
    </section>
  );
};

export default Hotel;
