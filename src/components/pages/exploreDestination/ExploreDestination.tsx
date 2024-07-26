import React, { FC, useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectedLocation } from "../../../state/selectors/selectGlobeData";
import markers from "../../common/globe/markers";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
import { filterList, isoCountries } from "../../common/enum/enum";
import { SET_SELECTED_LOCATION } from "../../../state/actions/types/globeDataActionType";
import { FaSearch, FaFilter } from "react-icons/fa";
import sea from "../../../Assets/sea.png";
import { getPackageByDestinationApi } from "../../../api/packageByDestination/getPackageByDestinationApi";
import { tours } from "../../../state/selectors/selectTourData";
import { SET_TOUR_DATA } from "../../../state/actions/types/tourDataActionType";
import { getPackageDetailsByCountryAndDaysApi } from "../../../api/packageByCountryAndDays/getPackageDetailsByCountryAndDaysApi";
import { parseTourDataArray } from "../../../utils/parseTourData";
import MainContainer from "../../common/container/MainContainer";
import TourCard from "../../common/tourCard/TourCard";
import RecommandedTours from "../recommandedTours/RecommandedTours";
import RecentlyViewedTours from "../recentlyViewedTours/RecentlyViewedTours";
import ControlledCarousel from "../coursel/Coursel";

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

  const [tourDetail, setTourDetail] = useState({
    destination: destination.city,
    startDate: "",
  });

  const fetchTourData = async () => {
    window.scrollTo(0, 0);
    // const response = await getPopularPackageApi();
    // if (response.status === 200) {
    //   dispatch({
    //     type: SET_POPULAR_PACKAGE,
    //     payload: parseTourDataArray(response.data),
    //   });
    // }
    fetchTours();
  };

  const getPackage = async () => {
    const res = await getPackageByDestinationApi(tourDetail.destination);
    if (res.status === 200) {
      dispatch({
        type: SET_TOUR_DATA,
        payload: parseTourDataArray(res.data),
      });
    } else {
      dispatch({
        type: SET_TOUR_DATA,
        payload: [],
      });
    }
  };

  useEffect(() => {
    fetchTourData();
    setLoading(false);
  }, []);

  useEffect(() => {
    if (screenSize.screenSize >= 1000) {
      setShowFilter(true);
    } else {
      setShowFilter(false);
    }
  }, [screenSize]);
  const data = [
    {
      packageId: "RIE07****",
      imageUri:
        "https://drive.google.com/thumbnail?sz=w2000&id=1Koq1lfmozRqaLFRnlDdVhIGTqUdUm4ml",
    },
    {
      packageId: "RIE10****",
      imageUri:
        "https://drive.google.com/thumbnail?sz=w2000&id=1Kv43JJm2AsXyycIZuyYnmkh1fla5l0hz",
    },
    {
      packageId: "RIE10****",
      imageUri:
        "https://drive.google.com/thumbnail?sz=w2000&id=1KvGGrfvTtAo2rPhATPyxACOrgmWHv4cE",
    },
    {
      packageId: "RIE07****",
      imageUri:
        "https://drive.google.com/thumbnail?sz=w2000&id=1L5TNniaYtnbchWVeqyl4fZ9bELDmXa5r",
    },
    {
      packageId: "RIE10****",
      imageUri:
        "https://drive.google.com/thumbnail?sz=w2000&id=1LdNvDwTTIM4wfchObH9hhPs-2iPZRVMx",
    },
    {
      packageId: "RIE10****",
      imageUri:
        "https://drive.google.com/thumbnail?sz=w2000&id=1LCYIs31cQa4UA0brqKcqgJXuj7C6Cz4N",
    },
    {
      packageId: "RIE07****",
      imageUri:
        "https://drive.google.com/thumbnail?sz=w2000&id=1LDowNiXiretdLQbpqIBasnR5pMM1HOdR",
    },
    {
      packageId: "RIE10****",
      imageUri:
        "https://drive.google.com/thumbnail?sz=w2000&id=1LMXoAyLcs74oN_QTilC-wEE7OHIrIEd5",
    },
    {
      packageId: "RIE10****",
      imageUri:
        "https://drive.google.com/thumbnail?sz=w2000&id=1LRNDbK-qzumpoe8Jt3ZDSaDom08trf_r",
    },
    {
      packageId: "RIE10****",
      imageUri:
        "https://drive.google.com/thumbnail?sz=w2000&id=1LVRSOM5kC1LuLJnH1dIx_0vhnxrZ85_-",
    },
  ];
  const fetchTours = async () => {
    const filterData = markers.filter(
      (marker: any) =>
        tourDetail.destination.length !== 0 &&
        marker?.city?.toLowerCase()?.includes(tourDetail.destination) &&
        marker
    );
    console.log(filterData.length);
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
            country.country_name
              .toLowerCase()
              .includes(tourDetail.destination.toLowerCase()) &&
            country.country_name.length === tourDetail.destination.length
          )
            return country;
        })[0]?.id || 0;

      if (filter.noOfDays || countryId) {
        const response = await getPackageDetailsByCountryAndDaysApi(
          filter.noOfDays,
          countryId
        );
        if (response.status === 200) {
          dispatch({
            type: SET_TOUR_DATA,
            payload: parseTourDataArray(response.data),
          });
        } else {
          dispatch({
            type: SET_TOUR_DATA,
            payload: [],
          });
        }
      } else {
        getPackage();
      }
    }
  };

  useEffect(() => {
    fetchTours();
  }, [filter]);

  return (
    <MainContainer>
      <div className="image-banner">
        <ControlledCarousel images={data} interval={3000} />

        {/* <img
          src={sea}
          alt="Sea"
          style={{
            width: 1600,
            height: 470,
          }}
        /> */}
      </div>
      <div className="search-bar-container mt-5 mb-5">
        <Row className="align-items-center justify-content-center">
          <Col lg={8} className="text-center">
            <div
              className="input-group"
              style={{
                width: 821,
                height: 55,
              }}
            >
              <input
                type="text"
                placeholder="Search"
                value={tourDetail.destination}
                className="form-control search-input"
                onChange={(e: any) => {
                  setTourDetail({
                    ...tourDetail,
                    destination: e.target.value,
                  });
                }}
              />
              <div className="input-group-append">
                <Button
                  onClick={() => {
                    fetchTours();
                  }}
                  style={{
                    width: 169,
                    height: 56,
                    backgroundColor: "#879DFF",
                    fontSize: 20,
                    fontWeight: "600",
                    borderRadius: 0,
                  }}
                >
                  Search
                </Button>
              </div>
            </div>
          </Col>
          <Col
            onClick={() => setShow(!show)}
            lg="auto"
            className="text-center"
            style={{ paddingLeft: 0 }}
          >
            <Button
              style={{
                backgroundColor: "#879DFF",
                width: 63,
                height: 56,
                fontSize: 20,
                fontWeight: "600",
                borderRadius: 0,
                textAlign: "center",
              }}
            >
              <FaFilter />
            </Button>
          </Col>
          <Col lg="auto" className="text-center" style={{ paddingRight: 0 }}>
            <img
              src="https://images.unsplash.com/photo-1714259523626-2c5487107dc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGV1cm9wZXxlbnwwfHwwfHx8MA%3D%3D" // Replace with your image URL
              alt="circular-img"
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
              }}
            />
          </Col>
        </Row>
      </div>

      <div
        className="tabs-container"
        style={{
          textAlign: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          style={{
            backgroundColor: "#F0F4FF",
            fontSize: 25,
            fontWeight: "600",
            color: "#879DFF",
            width: 409,
            height: 55,
            marginRight: 10,
            borderRadius: 0,
            borderWidth: 0,
          }}
        >
          All
        </Button>
        <Button
          style={{
            backgroundColor: "#F0F4FF",
            fontSize: 25,
            fontWeight: "600",
            color: "#879DFF",
            width: 409,
            height: 55,
            marginRight: 10,
            borderRadius: 0,
            borderWidth: 0,
          }}
        >
          Incredible India
        </Button>
        <Button
          style={{
            backgroundColor: "#F0F4FF",
            fontSize: 25,
            fontWeight: "600",
            color: "#879DFF",
            width: 409,
            height: 55,
            marginRight: 10,
            borderRadius: 0,
            borderWidth: 0,
          }}
        >
          Beyond obvious
        </Button>
      </div>
      <div
        style={{
          justifyContent: "space-between",
          maxWidth: 1331,
          margin: "20px auto",
        }}
      >
        {tourData?.length > 0 ? (
          <>
            {tourData?.map((tour, index) => (
              <TourCard tourData={tour} key={index} />
            ))}
          </>
        ) : (
          <Col
            className="h3 justify-content-center d-flex m-5"
            style={{
              fontWeight: "700",
              padding: "20px",
              background: "#869cff",
              color: "white",
              margin: "50px",
            }}
          >
            There is no Tour for this Destination
          </Col>
        )}
      </div>
      {/* <Col className="my-5 p-0 m-0">
        <RecommandedTours />
      </Col>
      <Col className="my-5 p-0 m-0">
        <RecentlyViewedTours />
      </Col> */}
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
    </MainContainer>
  );
};

export default ExploreDestination;
