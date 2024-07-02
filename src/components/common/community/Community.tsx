import React, { FC, useEffect } from "react";
import AboutUs from "../aboutUS/AboutUs";
import Mission from "../mission/Mission";
import { useLocation } from "react-router-dom";
import MainContainer from "../container/MainContainer";
import Review from "../review/Review";

const Community: FC = () => {
  const location = useLocation();
  const scrollToComment = () => {
    let currentLocation = location.pathname;
    const hasCommentAnchor = currentLocation.includes("/");
    if (hasCommentAnchor) {
      const anchorCommentId = `#${currentLocation.split("/")[1]}`;
      const anchorComment = document.getElementById(anchorCommentId);
      if (anchorComment) {
        anchorComment.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  useEffect(() => {
    scrollToComment();
  }, []);

  return (
    <section>
      <MainContainer background="white">
        <AboutUs />
        <Mission />
        {/* <Review /> */}
      </MainContainer>
    </section>
  );
};

export default Community;
