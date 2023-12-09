import React, { FC, useState } from "react";
import { backpackersTours } from "../../common/enum/enum";
import style from "./BackpackersTours.module.scss";
import { Card, Col, Container, Row } from "react-bootstrap";
import TourOverviewCard from "../../common/tourOverviewCard/TourOverviewCard";
import MainContainer from "../../common/container/MainContainer";
import Coursel from "../coursel/Coursel";
import HorizontalScroll from "../../common/horizontalScroll/HorizontalScroll";
import TourCard from "../../common/tourCard/TourCard";
import RecommandedTours from "../recommandedTours/RecommandedTours";
import RecentlyViewedTours from "../recentlyViewedTours/RecentlyViewedTours";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { tours } from "../mockData/destinations";
import { SET_SELECTED_TOUR_DATA } from "../../../state/actions/types/tourDataActionType";
import InfiniteScroll from "react-infinite-scroll-component";
import markers from "../../common/globe/markers";
import { stateType } from "../exploreDestination/ExploreDestination";

const BackpackersTours: FC = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const [products, setProducts] = useState(
    Array.from({ length: 10 }, (_, i) => `Product ${i + 1}`)
  );
  const [state, setState] = useState<stateType>({
    data: tours, // Your data from the API
    hasMore: true,
  }); // Initial set of products
  const [tourlist, settourList] = useState<any[]>(tours);
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

  const description =
    "Once you step in, Backpacking across India becomes a journey inward, a reflection of the external landscape mirroring the terrain of your own thoughts and emotions. It is a spiritual quest to discover the depths of your own being. This Edition is a reminder that sometimes the path to self discovery lies not in reaching a destination, but in the act of journeying itself. Includes all top rated hostel stays, domestic flights, local tours, day to day assistance.";

  return (
    // <TourOverviewCard
    //   tours={backpackersTours}
    //   title="Backpackers Edition"
    //   titleStyling={style.tourSection}
    // >
    //   <Container className={`py-5 p-0 d-grid justify-content-center`}>
    //     <Row className="p-0">
    //       <Col className="text-dark align-self-center">
    //         <p className="text-start small text-wrap">{description} </p>
    //       </Col>
    //     </Row>
    //   </Container>
    // </TourOverviewCard>

    <MainContainer background="#84f18f">
      <Coursel />

      <Col className={"p-0"}>
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
        <Row>
          <Col
            className={"col-4 overflow-auto"}
            id="scrollableDiv"
            style={{ height: 1000 }}
          >
            <InfiniteScroll
              dataLength={tourlist.length}
              next={fetchData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              scrollThreshold={0.5}
              scrollableTarget="scrollableDiv"
            >
              {tourlist.map((tour, index) => (
                <Col className="mx-3 col-12 d-inline-block position-relative">
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
            </InfiniteScroll>
          </Col>
          <Col
            className={"col-4 overflow-auto"}
            id="scrollableDiv"
            style={{ height: 1000 }}
          >
            <InfiniteScroll
              dataLength={tourlist.length}
              next={fetchData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              scrollThreshold={0.5}
              scrollableTarget="scrollableDiv"
            >
              {tourlist.map((tour, index) => (
                <Col className="mx-3 col-12 d-inline-block position-relative">
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
            </InfiniteScroll>
          </Col>
        </Row>
        <Row className="justify-content-around">
          <Col
            className={"col-4 overflow-auto d-flex flex-wrap"}
            id="scrollableDiv"
            style={{ height: 350 }}
          >
            <InfiniteScroll
              dataLength={tourlist.length}
              next={fetchData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              scrollThreshold={0.5}
              scrollableTarget="scrollableDiv"
              className="d-flex flex-wrap"
            >
              {tours.map((option, idx) => (
                <Col
                  key={idx}
                  md={6}
                  lg={6}
                  className={`d-flex ${style.reasonCard} p-0 m-0`}
                >
                  <Card className={`my-2 d-flex mx-1`}>
                    <Card.Body className="p-0">
                      <Card.Img
                        className={`p-0 m-0 justify-content-center ${style.reasonCard}`}
                        style={{
                          // width: "100%",
                          padding: "0px !important",
                          margin: "0px !important",
                        }}
                        src={require("../../../Assets/backpacker.png")}
                      />
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </InfiniteScroll>
          </Col>
          <Col
            className={"col-4 overflow-auto d-flex flex-wrap"}
            id="scrollableDiv"
            style={{ height: 350 }}
          >
            <InfiniteScroll
              dataLength={tourlist.length}
              next={fetchData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              scrollThreshold={0.5}
              scrollableTarget="scrollableDiv"
              className="d-flex flex-wrap"
            >
              {tours.map((option, idx) => (
                <Col
                  key={idx}
                  md={6}
                  lg={6}
                  className={`d-flex ${style.reasonCard} p-0 m-0`}
                >
                  <Card className={`my-2 d-flex mx-1`}>
                    <Card.Body className="p-0">
                      <Card.Img
                        className={`p-0 m-0 justify-content-center ${style.reasonCard}`}
                        style={{
                          // width: "100%",
                          padding: "0px !important",
                          margin: "0px !important",
                        }}
                        src={require("../../../Assets/backpacker.png")}
                      />
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </InfiniteScroll>
          </Col>
        </Row>
        <RecommandedTours />
      </Col>
    </MainContainer>
  );
};

export default BackpackersTours;
