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
import { SET_SELECTED_TOUR_DATA } from "../../../state/actions/types/tourDataActionType";
import { useHistory } from "react-router-dom";
import RoundButton from "../../common/roundButton/RoundButton";

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
  const history = useHistory();
  const [tourlist, settourList] = useState<any[]>(tours);
  const [showFilter, setShowFilter] = useState(true);
  const [filters, setFilters] = useState(filterList);

  const [products, setProducts] = useState(
    Array.from({ length: 10 }, (_, i) => `Product ${i + 1}`)
  ); // Initial set of products
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState<stateType>({
    data: tours, // Your data from the API
    hasMore: true,
  });

  const fetchData = async () => {
    // Simulate an API call to get more data
    // Replace this with your actual API call
    const newData = markers;
    // await getTours(''); /* Your API call here */

    if (newData?.length === 0) {
      setState({ data: state.data, hasMore: false });
    } else {
      setState((prevState) => ({
        data: [...prevState.data, ...newData],
        hasMore: true,
      }));
    }
  };
  function handleScroll(e: any) {
    const element = e.target;
    if (element.scrollLeft + element.clientWidth >= element.scrollWidth) {
      loadMoreProducts();
    }
  }
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

  return (
    <MainContainer background="#84f18f">
      <Coursel />
      <Row className="p-0 m-0 fit-content py-5 justify-content-between align-items-center d-flex">
        <Col className="p-0 col-9 m-0">
          <Row className="d-flex">
            <Col className="col-6 pr-5 align-self-center pl-0">
              <Row className="p-0 m-0">
                <Col
                  className={"col-1"}
                  style={{ background: "#0a99d7" }}
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
                      className="py-2 px-4 col-11 p-0 display-6 text-end w-100"
                      style={{
                        background: "#cdface",
                        color: "#218a43",
                        textShadow: "#218a43",
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
                      className="py-2 px-4 p-0 display-6 text-end w-100"
                      style={{
                        background: "#cdface",
                        color: "#218a43",
                        textShadow: "#218a43",
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
                      style={{ background: "#0a99d7" }}
                      onClick={() => setShow(!show)}
                    >
                      Filter
                    </Button>
                  </Col>
                </Col>
              </Row>
            </Col>
            <Col className="align-self-center col-6 justify-content-center p-0">
              <Col className="justify-content-center d-flex">
                <input
                  className="form__input w-100 bg-white h2 justify-content-center p-1 px-2 text-dark text-center m-0 border-0"
                  type="text"
                  placeholder="USER ID"
                  value={tourDetail.city}
                  style={{ background: "#19bca1" }}
                  onChange={(e: any) =>
                    setTourDetail({ ...tourDetail, city: e.target.value })
                  }
                />
              </Col>
              <Row className="pt-2 gap-2">
                <Col className="justify-content-center d-flex form__input w-60 bg-white p-0 h2">
                  <label className="">from:</label>
                  <input
                    className="form__input w-60 bg-white justify-content-center h2 p-1 px-2 text-dark text-center m-0 border-0"
                    type="text"
                    value={tourDetail.endDate}
                    style={{ background: "#19bca1" }}
                    onChange={(e: any) =>
                      setTourDetail({
                        ...tourDetail,
                        startDate: e.target.value,
                      })
                    }
                  />
                </Col>
                <Col className="justify-content-center d-flex form__input w-60 bg-white p-0 h2">
                  <label className="">to:</label>
                  <input
                    className="form__input w-60 bg-white justify-content-center h2 p-1 px-2 text-dark text-center m-0 border-0"
                    type="text"
                    value={tourDetail.endDate}
                    style={{ background: "#19bca1" }}
                    onChange={(e: any) =>
                      setTourDetail({ ...tourDetail, endDate: e.target.value })
                    }
                  />
                </Col>
              </Row>

              {/* <Button
                      onClick={async () => {
                        const filterData = markers.filter(
                          (marker: any) =>
                            marker.city
                              .toLowerCase()
                              .includes(tourDetail.city) && marker
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
                        // await gettours(payload));
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
        <Col className="p-0 m-0 col-3 d-flex justify-content-center">
          <Col className="col-7 d-flex position-relative p-0 m-0">
            <RoundButton
              className="border-5 border circle-core"
              bordercolor="#0e3c30"
              size={"calc(12*100vw"}
              fill={"#8dc498"}
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

      <Col className={"p-5"}>
        {/* <Row className="p-0 m-0 w-100 d-flex justify-content-between">
          <Col className="p-0">
            <Row className="p-0 w-100">
              {tourlist.map((tour, idx) => (
                <Col
                  onClick={() => {}}
                  key={idx}
                  lg={3}
                  md={3}
                  sm={12}
                  xs={12}
                  className="p-0"
                >
                  <CardWithShadow>
                    <TourCard
                      coordinates={[]}
                      className={"small"}
                      imageStyling={``}
                      imageRatio={150}
                      titleStyling="small"
                      tour={tour}
                      tourname={tour?.displayName}
                      mealPaln={tour?.mealPlanIncluded}
                      recommendedDate={tour?.recommendedDate}
                      location={tour?.location}
                      acceptsWalletCredit={tour?.acceptsWalletCredit}
                      unitConfigurations={tour?.matchingUnitConfigurations}
                      price={tour?.priceDisplayInfoIrene}
                      propertyData={tour?.basicPropertyData}
                    />
                  </CardWithShadow>
                </Col>
              ))}
            </Row>
          </Col>
        </Row> */}
        <Col>
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
                className="mx-3 col-12 d-inline-block position-relative"
              >
                <Card key={index} className={`p-0 `}>
                  <TourCard
                    coordinates={[]}
                    className={"small"}
                    imageStyling={`img-fluid`}
                    imageRatio={150}
                    titleStyling="small"
                    tourname={tour?.displayName}
                    mealPaln={tour?.mealPlanIncluded}
                    recommendedDate={tour?.recommendedDate}
                    location={tour?.location}
                    acceptsWalletCredit={tour?.acceptsWalletCredit}
                    unitConfigurations={tour?.matchingUnitConfigurations}
                    price={tour?.priceDisplayInfoIrene}
                    propertyData={tour?.basicPropertyData}
                  />
                </Card>
                <Card.Text
                  className="position-absolute top-0 mt-5 start-90 translate-middle fit-content text-white border-5 my-4 border"
                  style={{ background: "#79c78d", borderColor: "#9e9e9e " }}
                  onClick={() => {
                    dispatch({
                      type: SET_SELECTED_TOUR_DATA,
                      payload: tour,
                    });
                    history.push("/tour-detail");
                  }}
                >
                  {tour?.displayName?.text && tour?.displayName?.text}
                </Card.Text>
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
        <RecommandedTours />
        <RecentlyViewedTours />
        <Modal show={show} fullscreen={"false"} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Filter</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {filters.map((field) => {
              return (
                <>
                  <h3 className="p-2">{field?.filterName}</h3>
                  {field?.subFilter.map((sub, index: number) => {
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
          </Modal.Body>
        </Modal>
      </Col>
    </MainContainer>
  );
};

export default ExploreDestination;
