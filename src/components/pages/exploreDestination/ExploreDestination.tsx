import React, { FC, useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectedLocation } from "../../../state/selectors/selectGlobeData";
import markers from "../../common/globe/markers";
import Checkbox from "../../common/checkbox/Checkbox";
import { tours } from "../mockData/destinations";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
import TourCard from "../../common/tourCard/TourCard";
import RecommandedTours from "../recommandedTours/RecommandedTours";
import { filterList } from "../../common/enum/enum";
import Coursel from "../coursel/Coursel";
import RecentlyViewedTours from "../recentlyViewedTours/RecentlyViewedTours";
import MainContainer from "../../common/container/MainContainer";
import HorizontalScroll from "../../common/horizontalScroll/HorizontalScroll";
// import { useHistory } from "react-router-dom";
import RoundButton from "../../common/roundButton/RoundButton";
import { getTours } from "../../../state/actions/getTours";
import { SET_SELECTED_LOCATION } from "../../../state/actions/types/globeDataActionType";
import { FaSearch } from "react-icons/fa";

export type stateType = {
  data: any[];
  hasMore: boolean;
};
const ExploreDestination: FC = () => {
  const destination = useSelector(selectedLocation);
  const screenSize = useSelector(selectScreenSize);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(true);
  // const history = useHistory();
  const [tourlist, settourList] = useState<any[]>(tours);
  const [showFilter, setShowFilter] = useState(true);
  const [filters, setFilters] = useState(filterList);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 120000 });
  const [type, setType] = useState("text");
  const [products, setProducts] = useState(
    Array.from({ length: 10 }, (_, i) => `Product ${i + 1}`)
  ); // Initial set of products
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState<stateType>({
    data: tours, // Your data from the API
    hasMore: true,
  });

  // const fetchData = async () => {
  //   // Simulate an API call to get more data
  //   // Replace this with your actual API call
  //   const newData = markers;
  //   await getTours(filters); /* Your API call here */

  //   if (newData?.length === 0) {
  //     setState({ data: state.data, hasMore: false });
  //   } else {
  //     setState((prevState) => ({
  //       data: [...prevState.data, ...newData],
  //       hasMore: true,
  //     }));
  //   }
  // };
  // function handleScroll(e: any) {
  //   const element = e.target;
  //   if (element.scrollLeft + element.clientWidth >= element.scrollWidth) {
  //     loadMoreProducts();
  //   }
  // }
  // Function to load more products
  const loadMoreProducts = () => {
    // Simulate fetching more products (you would typically make an API call here)
    setTimeout(() => {
      const newProducts = Array.from(
        { length: 10 },
        (_, i) => `Product ${products.length + i + 1}`
      );
      setProducts([...products, ...newProducts]);
    }, 1000);
  };

  const [tourDetail, setTourDetail] = useState({
    city: destination.city,
    startDate: "",
    endDate: "",
  });
  async function handleFilters(filterName: string, label: string) {
    let updateFilters = filters;
    updateFilters.forEach((filter) => {
      if (filter.filterName === filterName) {
        return filter.subFilter.forEach((sub: any) => {
          if (sub.label === label) {
            sub.checked = !sub.checked;
          }
        });
      }
    });
    await setFilters(updateFilters);
    setUpdate(true);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
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
        marker.city.toLowerCase().includes(tourDetail.city) && marker
    );
    dispatch({
      type: SET_SELECTED_LOCATION,
      payload: filterData[0],
    });
    let payload = {
      ...filterData[0],
      startDate: destination.startDate,
      endDate: destination.endDate,
    };
    const range = [
      {
        priceRange: {
          min: "0",
          max: priceRange,
        },
      },
    ];
    if (filters) {
      payload = { ...payload, ...filters, ...range };
    }
    settourList(tours);
    await getTours(payload);
  };
  useEffect(() => {
    fetchTours();
  }, [priceRange, filters]);
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
                          handleFilters("Type", "Others");
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
                          handleFilters("Type", "Indian Passport Holders");
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
                  value={tourDetail.city}
                  style={{ background: "#19bca1", fontFamily: "NORWESTER" }}
                  onChange={(e: any) =>
                    setTourDetail({ ...tourDetail, city: e.target.value })
                  }
                />
              </Col>
              <Row className="pt-2 gap-2">
                <Col className="justify-content-center align-items-center flex-row ms-4 d-flex rounded-4 p-3 w-60 bg-white p-0 h2">
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
                </Col>
                <Button className="flex-row justify-content-center text-center flex-column me-4 d-flex rounded-4 p-3 w-25 p-0 h2">
                 <span className="w-100 justify-content-between d-flex align-items-center"><span className="flex-wrap d-flex align-items-center">Search</span><FaSearch /></span>
                </Button>
              </Row>

              {/* <Button
                onClick={async () => {
                  const filterData = markers.filter(
                    (marker: any) =>
                      marker.city.toLowerCase().includes(tourDetail.city) &&
                      marker
                  );
                  dispatch({
                    type: SET_SELECTED_LOCATION,
                    payload: filterData[0],
                  });
                  let payload = {
                    ...filterData[0],
                    startDate: destination.startDate,
                    endDate: destination.endDate,
                  };
                  if (filters) {
                    payload = { ...payload, ...filters };
                  }
                  settourList(tours);
                  await getTours(payload);
                }}
                style={{ width: "fit-content" }}
                variant="secondary"
                className={`${
                  screenSize.isMobile ? "row-2" : "col-1"
                } btn-secondary px-2 p-0 m-0 text-nowrap`}
              >
                Submit
              </Button> */}
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
            {tourlist.map((tour, index) => (
              <Col
                md={6}
                lg={4}
                sx={12}
                sm={8}
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
            {filters.slice(0, 3).map((field) => {
              return (
                <>
                  <h3 className="p-2">{field?.filterName}</h3>
                  {field?.subFilter?.map((sub, index: number) => {
                    return (
                      <Checkbox
                        key={index}
                        option={sub}
                        onClick={(label: string) => {
                          setUpdate(false);
                          handleFilters(field?.filterName, label);
                        }}
                        type={"checkbox"}
                      />
                    );
                  })}
                </>
              );
            })}
            <div>
              <h3 className="p-2">Price Range</h3>
              <div className="range-slider pt-3">
                <input
                  value={priceRange.min}
                  min="0"
                  max="120000"
                  step="500"
                  type="range"
                  onChange={(e) => {
                    e.preventDefault();
                    console.log(e);
                    parseFloat(e.target.value) < priceRange.max
                      ? setPriceRange({
                          ...priceRange,
                          min: parseInt(e.target.value),
                        })
                      : setPriceRange({ ...priceRange });
                  }}
                />
                <input
                  value={priceRange.max}
                  min="0"
                  max="120000"
                  step="500"
                  type="range"
                  onChange={(e) => {
                    e.preventDefault();
                    parseFloat(e.target.value) > priceRange.min
                      ? setPriceRange({
                          ...priceRange,
                          max: parseInt(e.target.value),
                        })
                      : setPriceRange({ ...priceRange });
                  }}
                />
              </div>
              
              <Row className="pt-3 d-flex justify-content-between">
                  <Col>
                    <label>Min : </label>
                    <span>{priceRange.min}</span>
                  </Col>
                  <Col className="text-end">
                    <label>Max : </label>
                    <span>{priceRange.max}</span>
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
