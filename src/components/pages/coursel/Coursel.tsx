import React, { useState, useEffect, useRef, FC } from "react";
import { Card } from "react-bootstrap";
import style from "./Coursel.module.scss";
import Carousel from "react-bootstrap/Carousel";
import { useHistory } from "react-router-dom";

type carouselProps = {
  images: banner[];
  interval: number;
};
type banner = {
  packageId: string;
  imageUri: any;
};
const ControlledCarousel: FC<carouselProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const history = useHistory();

  useEffect(() => {
    const scroll = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const id = setInterval(scroll, interval);
    return () => clearInterval(id);
  }, [images.length]);

  const handleSelect = (selectedIndex: number) => {
    setCurrentIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={currentIndex} onSelect={handleSelect}>
      {images.map((img: any) => {
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
                onClick={() => history.push(`/tour-detail:${img.packageId}`)}
                src={img.imageUri}
              />{" "}
            </Card>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default ControlledCarousel;
