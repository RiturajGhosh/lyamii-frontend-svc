import React, { FC, useEffect, useState } from "react";
import ContainerSection from "../../common/container/Container";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import FormInput from "../../common/formInput/FormInput";
import style from "./ExploreDestination.module.scss";
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
import { filterList } from "../../common/enum/enum";

type stateType = {
  data: any[];
  hasMore: boolean;
};
const ExploreDestination: FC = () => {
  const destination = useSelector(selectedLocation);
  const screenSize = useSelector(selectScreenSize);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(true);
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

    if (newData.length === 0) {
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
    <>
      <Container
        fluid
        className={`${style.tourSection} position-relative p-0`}
        id="home"
      >
        <Container className={`py-5 content p-0 d-grid justify-content-center`}>
          <Row className="p-0">
            <Col md={4}>
              <Card.Title className="py-5 title pl-2">
                Explore your next destination
              </Card.Title>
            </Col>
            <Col md={8} className="align-self-center p-0">
              <Card className="p-2">
                <Form>
                  <Row className="justify-content-start d-flex">
                    <FormInput
                      direction={screenSize.isMobile ? Row : Col}
                      value={tourDetail.city}
                      label={""}
                      className={`col-lg-3 col-md-12 col-sm-12 p-0 justify-content-start ${
                        screenSize.screenSize < 1000 &&
                        screenSize.screenSize > 768 &&
                        "mb-1"
                      }`}
                      type={"text"}
                      inputStyling="p-1"
                      placeHolder={"Enter a Destination"}
                      controlId={"forGridFirstName"}
                      onchange={(e: any) =>
                        setTourDetail({ ...tourDetail, city: e.target.value })
                      }
                    />

                    <FormInput
                      direction={screenSize.isMobile ? Row : Col}
                      value={tourDetail.startDate}
                      floatingLabel={"From:"}
                      type={"date"}
                      className={`p-0 ${
                        screenSize.isDesktop ? "ml-1" : "my-1"
                      }`}
                      labelStyling=""
                      inputStyling="p-1"
                      placeHolder={"Last name"}
                      controlId={"forGridLastName"}
                      onchange={(e: any) =>
                        setTourDetail({
                          ...tourDetail,
                          startDate: e.target.value,
                        })
                      }
                    />
                    <FormInput
                      direction={screenSize.isMobile ? Row : Col}
                      value={tourDetail.endDate}
                      floatingLabel={"To:"}
                      type={"date"}
                      className={`p-0 ${
                        screenSize.isDesktop ? "mx-1" : "mb-1"
                      }`}
                      inputStyling="p-1"
                      labelStyling=""
                      placeHolder={"Last name"}
                      controlId={"forGridLastName"}
                      onchange={(e: any) =>
                        setTourDetail({
                          ...tourDetail,
                          endDate: e.target.value,
                        })
                      }
                    />
                    <Button
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
                    </Button>
                  </Row>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className={"p-0 px-2"}>
        <RecommandedTours />
        <Row className="p-0 m-0 fit-content pb-5 justify-content-between d-flex">
          <Col md={7} sm={7} xs={7} className="p-0 m-0">
            <Row className="d-flex gap-2">
              <Col className="p-0 m-0 w-30">
                <Card className="img-round w-100 h-100 p-0 m-0">
                  <Card.Img
                    className={`p-0 m-0 img-round h-100 justify-content-center`}
                    style={{
                      // width: "100%",
                      padding: "0px !important",
                      margin: "0px !important",
                    }}
                    onClick={() => {
                      setUpdate(false);
                      handleFilters("season", "summer");
                    }}
                    src={require("../../../Assets/summer.jpg")}
                  />
                </Card>
                <p className="justify-content-center d-flex">{"Summer"}</p>
              </Col>
              <Col className="p-0 m-0 w-30">
                <Card className="img-round w-100 h-100 p-0 m-0">
                  <Card.Img
                    className={`p-0 m-0 img-round h-100 justify-content-center`}
                    style={{
                      // width: "100%",
                      padding: "0px !important",
                      margin: "0px !important",
                    }}
                    onClick={() => {
                      setUpdate(false);
                      handleFilters("season", "winter");
                    }}
                    src={require("../../../Assets/winter.jpg")}
                  />
                </Card>{" "}
                <p className="justify-content-center d-flex">{"Winter"}</p>
              </Col>
              <Col className="p-0 m-0 w-30">
                <Card className="img-round w-100 h-100 p-0 m-0">
                  <Card.Img
                    className={`p-0 m-0 img-round h-100 justify-content-center`}
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
                <p className="justify-content-center d-flex">{"Spring"}</p>
              </Col>
            </Row>
          </Col>
          <Card className="w-25 p-0 m-0 h-10 align-items-center align-self-center justify-content-end">
            <Card.Text
              className="small"
              onClick={() => {
                setUpdate(false);
                handleFilters("season", "spring");
              }}
            >
              Profile/Sign In
            </Card.Text>
          </Card>
          {!showFilter && (
            <Card className="fit-content m-0 h-10 align-items-center align-self-center justify-content-end p-0">
              <Button
                className={"px-2 fit-content float-right"}
                onClick={() => setShow(!show)}
              >
                Filter
              </Button>
            </Card>
          )}
        </Row>
        <Row className="p-0 m-0 w-100 d-flex justify-content-between">
          {update && showFilter && (
            <CardWithShadow col={3} classname={"p-0"}>
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
            </CardWithShadow>
          )}
          <Col className="p-0">
            <Row className="p-0 w-100">
              {tourlist.map((tour, idx) => (
                <Col
                  onClick={() => {}}
                  key={idx}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  className="p-0"
                >
                  <CardWithShadow>
                    <TourCard
                      coordinates={[]}
                      className={"small"}
                      imageStyling={`img-fluid`}
                      imageRatio={100}
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
                  </CardWithShadow>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
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
      </Container>
    </>
  );
};

export default ExploreDestination;
