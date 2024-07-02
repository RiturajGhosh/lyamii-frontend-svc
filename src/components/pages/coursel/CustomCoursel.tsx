import React, { FC, useEffect, useState } from "react";
import { Card, Carousel, Col } from "react-bootstrap";
import HorizontalScroll from "../../common/horizontalScroll/HorizontalScroll";
import style from "./Coursel.module.scss";
import { useHistory } from "react-router-dom";

type CustomCourselType = {
  page: number;
  setPage?: Function;
  data: any;
};
const CustomCoursel: FC<CustomCourselType> = ({ page = 0, setPage, data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const history = useHistory();

  // useEffect(() => {
  //   const scroll = () => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   };

  //   const id = setInterval(scroll, interval);
  //   return () => clearInterval(id);
  // }, [images.length]);

  const handleSelect = (selectedIndex: number) => {
    setCurrentIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={currentIndex} onSelect={handleSelect}>
      {/* {images.map((img: any) => { */}
        return (
          <Carousel.Item>
            <Card key={currentIndex} className={`d-inline-block mx-1 p-0 m-0`}>
              <Card.Img
                className={`p-0 pointer m-0 justify-content-center
           ${style.reasonCard}`}
                style={{
                  // width: "100%",
                  padding: "0px !important",
                  margin: "0px !important",
                }}
                // onClick={() => history.push(`/tour-detail:${img.packageId}`)}
                // src={img.imageUri}
              />{" "}
            </Card>
          </Carousel.Item>
        );
      {/* })} */}
    </Carousel>
  );
};

export default CustomCoursel;
