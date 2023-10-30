import React, { FC, useEffect, useRef, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { getData } from "../../../api/getData";
type HorizontalScrollType = {
  setPage: Function;
  page: number;
  children: React.ReactNode;
  title?: string;
};
const HorizontalScroll: FC<HorizontalScrollType> = ({ page,children, setPage,title }) => {
  const [disableScroll, setdisableScroll] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scrollWidth, setscrollWidth] = useState(0);
  const [data, setData] = useState<any[]>([]);
  const [scrollPos, setscrollPos] = useState(1);
  // const [page, setPage] = useState(0);
  const [clonesWidth, setclonesWidth] = useState(0);
  const scrollContainerRef = useRef<HTMLInputElement>(null);

  function reCalc() {
    let scrollpos = scrollPos;
    let scrollWidth = scrollContainerRef.current?.clientWidth || 0;
    let clonesWidth = getClonesWidth();

    if (scrollPos <= 0) {
      scrollpos = 1;
    }
    setscrollPos(scrollpos);
    setscrollWidth(scrollWidth);
    setclonesWidth(clonesWidth);
  }

  function handleScroll(e: any) {
    const container = e.currentTarget;
    const scrollWidth = container.scrollWidth;
    const clonesWidth = getClonesWidth();
    let scrollpos = container.scrollLeft;
    let scrollPosAdd;
    container.clientWidth > clonesWidth
      ? (scrollPosAdd = container.clientWidth)
      : (scrollPosAdd = clonesWidth);

    if (!disableScroll) {
      if (scrollpos + scrollPosAdd >= scrollWidth - 10) {
        setPage(page + 1);
        setLoading(true);
        setdisableScroll(true);
      } else if (scrollpos <= 0) {
        setScroll(
          container,
          scrollWidth - clonesWidth - Math.floor(scrollPosAdd / 12.09)
        );

        setdisableScroll(true);
      }
    }
    setscrollPos(container.scrollLeft);
    setscrollWidth(container.scrollWidth);
  }

  function getClonesWidth() {
    const clones = document.getElementsByClassName("is-clone");
    let clonesWidth = 0;
    for (let i = 0; i < clones.length; i++) {
      clonesWidth = clonesWidth + clones[i].clientWidth;
    }
    return clonesWidth;
  }

  function setScroll(element: any, pos: any) {
    element.scrollLeft = pos;
    setscrollPos(element.scrollLeft);
    setLoading(false);
  }

  useEffect(() => {
    if (disableScroll) {
      window.setTimeout(
        function () {
          setdisableScroll(false);
        }.bind(this),
        40
      );
    }
  }, [disableScroll]);

  useEffect(() => {
    window.addEventListener("resize", reCalc);
  }, []);

  return (
    <Container className={`py-5 p-0 justify-content-center`}>
      <Row className="p-0">
        {title && <div className="text-secondary title p-0">{title}</div>}
        <Col className="card-container p-0 d-block position-relative">
          <div
            ref={scrollContainerRef}
            className="scrolling-wrapper"
            onScroll={handleScroll}
          >
            {children}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HorizontalScroll;
