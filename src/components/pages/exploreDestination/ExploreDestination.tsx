import React, { FC, useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectedLocation } from "../../../state/selectors/selectGlobeData";
import markers from "../../common/globe/markers";
import Checkbox from "../../common/checkbox/Checkbox";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
import TourCard from "../../common/tourCard/TourCard";
import RecommandedTours from "../recommandedTours/RecommandedTours";
import { filterList, isoCountries } from "../../common/enum/enum";
import Coursel from "../coursel/Coursel";
import RecentlyViewedTours from "../recentlyViewedTours/RecentlyViewedTours";
import MainContainer from "../../common/container/MainContainer";
import HorizontalScroll from "../../common/horizontalScroll/HorizontalScroll";
import RoundButton from "../../common/roundButton/RoundButton";
import { SET_SELECTED_LOCATION } from "../../../state/actions/types/globeDataActionType";
import { FaSearch } from "react-icons/fa";
import { getPopularPackageApi } from "../../../api/popularPackage/getPopularPackageApi";
import { getPackageByDestinationApi } from "../../../api/packageByDestination/getPackageByDestinationApi";
import { tours } from "../../../state/selectors/selectTourData";
import {
  SET_POPULAR_PACKAGE,
  SET_TOUR_DATA,
} from "../../../state/actions/types/tourDataActionType";
import { getPackageDetailsByCountryAndDaysApi } from "../../../api/getPackageDetailsByCountryAndDaysApi";
import { parseTourDataArray } from "../../../utils/parseTourData";
import { Country } from "country-state-city";

export type stateType = {
  data: any[];
  hasMore: boolean;
};
const ExploreDestination: FC = () => {
  const destination = useSelector(selectedLocation);
  const screenSize = useSelector(selectScreenSize);
  const [show, setShow] = useState(false);
  const tourData = useSelector(tours);
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(true);
  const [showFilter, setShowFilter] = useState(true);
  const [filter, setFilter] = useState({
    minPrice: 0,
    maxPrice: 120000,
    noOfDays: 0,
  });
  const [type, setType] = useState("text");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState<stateType>({
    data: tourData, // Your data from the API
    hasMore: true,
  });

  const [tourDetail, setTourDetail] = useState({
    destination: destination.city,
    startDate: "",
  });
  // async function handleFilters(filterName: string, label: string) {
  //   let updateFilters = filters;
  //   updateFilters.forEach((filter) => {
  //     if (filter.filterName === filterName) {
  //       return filter.subFilter.forEach((sub: any) => {
  //         if (sub.label === label) {
  //           sub.checked = !sub.checked;
  //         }
  //       });
  //     }
  //   });
  //   await setFilters(updateFilters);
  //   setUpdate(true);
  // }

  const fetchTourData = async () => {
    window.scrollTo(0, 0);
    const response = await getPopularPackageApi();
    if (response.status === 200) {
      dispatch({
        type: SET_POPULAR_PACKAGE,
        payload: parseTourDataArray(response.data),
      });
    }
    getPackage();
  };
  const getPackage = async () => {
    const res = await getPackageByDestinationApi(tourDetail.destination);
    if (res.status === 200) {
      dispatch({
        type: SET_TOUR_DATA,
        payload: parseTourDataArray(res.data),
      });
    }
  };
  useEffect(() => {
    fetchTourData();
  }, []);

  useEffect(() => {
    if (screenSize.screenSize >= 1000) {
      setShowFilter(true);
    } else {
      setShowFilter(false);
    }
  }, [screenSize]);

  const fetchTours = async () => {
    const filterData = markers.filter(
      (marker: any) =>
        marker?.city?.toLowerCase()?.includes(tourDetail.destination) && marker
    );
    console.log(filterData);
    if (filterData.length > 0) {
      dispatch({
        type: SET_SELECTED_LOCATION,
        payload: filterData[0],
      });
      getPackage();
    } else {
      const countryId =
        isoCountries.filter((country: any) => {
          if (
            country.text
              .toLowerCase()
              .includes(tourDetail.destination.toLowerCase())
          )
            return country;
        })[0]?.id || "";
      if (countryId?.length > 0) {
        const response = await getPackageDetailsByCountryAndDaysApi(
          filter.noOfDays,
          parseInt(Country?.getCountryByCode(countryId)?.phonecode || "")
        );
        if (response.status === 200) {
          const data = parseTourDataArray(response.data);
          if (data?.length === 0) {
            setState({ data: state.data, hasMore: false });
          } else {
            setState((prevState) => ({
              data: [...prevState.data, ...data],
              hasMore: true,
            }));
          }
        }
      }
    }
  };
  useEffect(() => {
    fetchTours();
  }, [filter, page]);
  return (
    <MainContainer>
      <Coursel />
      <Row className="flex-lg-row flex-column-reverse p-0 m-0 fit-content py-5 justify-content-between align-items-center d-flex">
        <Col lg={9} className="p-0 col-12 m-0">
          <Row className="d-flex g-5">
            <Col lg={6} md={6} className="col-12 pr-5 align-self-center pl-0">
              <Row className="p-0 m-0">
                <Col
                  className={"col-1"}
                  style={{ background: "#0752a1" }}
                ></Col>
                <Col
                  className="bg-dark position-relative p-0 m-0"
                  style={{
                    background: "#cdface",
                    color: "#218a43",
                    textShadow: "#218a43",
                  }}
                >
                  <div className="w-100 position-relative">
                    <Col
                      className="py-2 px-4 col-11 p-0 bold fs-2 text-end w-100"
                      style={{
                        background: "#889dfe",
                        color: "white",
                        textShadow: "#218a43",
                        fontFamily: "bantayog",
                      }}
                    >
                      {"Indian Passport Holders"}
                    </Col>
                    <div className="position-absolute top-50 start-100 h3 translate-middle">
                      <Checkbox
                        option={filterList[0].subFilter[3]}
                        onClick={(label: string) => {
                          setUpdate(false);
                          // handleFilters("Type", "Others");
                        }}
                        label={false}
                        type={"checkbox"}
                      />
                    </div>
                  </div>
                  <div className="position-relative">
                    <Col
                      className="py-2 px-4 p-0 bold display-6 text-end w-100"
                      style={{
                        background: "#889dfe",
                        color: "white",
                        textShadow: "#218a43",
                        fontFamily: "bantayog",
                      }}
                    >
                      {"Others"}
                    </Col>
                    <div className="position-absolute top-50 start-100 h3 translate-middle">
                      <Checkbox
                        option={filterList[0].subFilter[3]}
                        onClick={(label: string) => {
                          setUpdate(false);
                          // handleFilters("Type", "Indian Passport Holders");
                        }}
                        label={false}
                        type={"checkbox"}
                      />
                    </div>
                  </div>
                  <Col className="position-relative p-0 border-1 text-center mx-42 justify-content-end text-white">
                    <Button
                      className="align-middle justify-self-center position-absolute top-100 mx-42 start-0 translate-middle btn-secondary"
                      style={{ background: "#0752a1" }}
                      onClick={() => setShow(!show)}
                    >
                      Filter
                    </Button>
                  </Col>
                </Col>
              </Row>
            </Col>
            <Col
              lg={6}
              md={6}
              className="col-12 align-self-center justify-content-center p-0"
            >
              <Col className="justify-content-center mx-4 d-flex">
                <input
                  className="form__input w-100 bg-white h2 font-norwester justify-content-center p-1 px-2 text-dark text-center m-0 border-0"
                  type="text"
                  placeholder="DESTINATION"
                  value={tourDetail.destination}
                  style={{ background: "#19bca1", fontFamily: "NORWESTER" }}
                  onChange={(e: any) => {
                    setTourDetail({
                      ...tourDetail,
                      destination: e.target.value,
                    });
                  }}
                />
              </Col>
              <Row className="pt-2 gap-2 mx-4">
                {/* <Col className="justify-content-center align-items-center flex-row ms-4 d-flex rounded-4 p-3 w-60 bg-white p-0 h2">
                  <label className="w-100 fs-medium">Starting Date:</label>
                  <input
                    className="rounded-4 w-100 bg-white justify-content-center fs-medium p-1 px-2 text-dark text-start m-0 border-0"
                    type={type}
                    id="startDate"
                    onFocus={() => setType("date")}
                    onBlur={() => setType("text")}
                    value={tourDetail.startDate}
                    style={{ background: "#19bca1", fontFamily: "NORWESTER" }}
                    onChange={(e: any) =>
                      setTourDetail({
                        ...tourDetail,
                        startDate: e.target.value,
                      })
                    }
                  />
                </Col> */}
                <Button
                  onClick={() => {
                    fetchTours();
                  }}
                  className="flex-row justify-content-center text-center flex-column me-4 d-flex rounded-4 p-3 w-100 p-0 h2"
                >
                  <span className="w-100 justify-content-between d-flex align-items-center">
                    <span className="flex-wrap d-flex align-items-center">
                      Search
                    </span>
                    <FaSearch size={"15px"} className="ms-3" />
                  </span>
                </Button>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="p-0 m-0 col-12 d-flex justify-content-center">
          <Col lg={7} className="col-4 d-flex position-relative p-0 m-0">
            <RoundButton
              className="border-5 border circle-core"
              bordercolor="#0e3c30"
              size={"calc(12*100vw"}
              fill={"#c4cdfe"}
              img={require("../../../Assets/avatar.png")}
            />
          </Col>
          {/* <Card className="rounded-circle w-75 h-100 p-0 m-0">
            <Card.Img
              className={`p-0 m-0 rounded-circle h-100 justify-content-center`}
              style={{
                // width: "100%",
                padding: "0px !important",
                margin: "0px !important",
              }}
              onClick={() => {
                setUpdate(false);
                handleFilters("season", "spring");
              }}
              src={require("../../../Assets/spring.jpg")}
            />
          </Card>{" "}
          <p className="justify-content-center d-flex display-1">{""}</p> */}
        </Col>
      </Row>

      <Col className={"mx-2 px-sm-2 px-md-5 pb-5"}>
        <Col className="my-5 p-0 m-0">
          <HorizontalScroll
            title={""}
            // className={""}
            setPage={(e: any) => setPage(e)}
            page={page}
          >
            {state?.data?.map((tour, index) => (
              <Col
                md={6}
                lg={4}
                sx={12}
                sm={8}
                key={index}
                className="mx-md-3 col-12 d-inline-block position-relative"
              >
                <Card key={index} className={`p-0 `}>
                  <TourCard
                    coordinates={[]}
                    className={"small"}
                    imageStyling={`img-fluid`}
                    imageRatio={150}
                    titleStyling="small"
                    tourData={tour}
                  />
                </Card>
              </Col>
            ))}
            {loading && (
              <div className="spinner-box h-100 ">
                <Col className="p-0 h-100 m-0">
                  <div className="circle-border">
                    <div className="circle-core"></div>
                  </div>
                </Col>
              </div>
            )}
          </HorizontalScroll>
        </Col>
        <Col className="my-5 p-0 m-0">
          <RecommandedTours />
        </Col>
        <Col className="my-5 p-0 m-0">
          <RecentlyViewedTours />
        </Col>
        <Modal show={show} fullscreen={"false"} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Filter</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <h3 className="p-2">No Of Days</h3>
              <div className="range-slider pt-3">
                <input
                  value={filter.noOfDays}
                  min="0"
                  max="100"
                  type="range"
                  onChange={(e) => {
                    e.preventDefault();
                    console.log(e);
                    setFilter({
                      ...filter,
                      noOfDays: parseInt(e.target.value),
                    });
                  }}
                />
              </div>

              <Row className="pt-3 d-flex justify-content-between">
                <Col>
                  <label>Days : </label>
                  <span>{filter.noOfDays}</span>
                </Col>
              </Row>
            </div>
            <div>
              <h3 className="p-2">Price Range</h3>
              <div className="range-slider pt-3">
                <input
                  value={filter.minPrice}
                  min="0"
                  max="120000"
                  step="500"
                  type="range"
                  onChange={(e) => {
                    e.preventDefault();
                    console.log(e);
                    parseFloat(e.target.value) < filter.maxPrice
                      ? setFilter({
                          ...filter,
                          minPrice: parseInt(e.target.value),
                        })
                      : setFilter({ ...filter });
                  }}
                />
                <input
                  value={filter.maxPrice}
                  min="0"
                  max="120000"
                  step="500"
                  type="range"
                  onChange={(e) => {
                    e.preventDefault();
                    parseFloat(e.target.value) > filter.minPrice
                      ? setFilter({
                          ...filter,
                          maxPrice: parseInt(e.target.value),
                        })
                      : setFilter({ ...filter });
                  }}
                />
              </div>

              <Row className="pt-3 d-flex justify-content-between">
                <Col>
                  <label>Min : </label>
                  <span>{filter.minPrice}</span>
                </Col>
                <Col className="text-end">
                  <label>Max : </label>
                  <span>{filter.maxPrice}</span>
                </Col>
              </Row>
            </div>
          </Modal.Body>
        </Modal>
      </Col>
    </MainContainer>
  );
};

export default ExploreDestination;
