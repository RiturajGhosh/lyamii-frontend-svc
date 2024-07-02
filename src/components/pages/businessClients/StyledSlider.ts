import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled(Slider)`
  .slick-slide {
    background-color: white;
  }
  .slick-slide div {
    justify-content: center;
    align-self:center;
    display:flex;
    align-items: center;
    flex-wrap:wrap;
    outline: none;
    background-color: white;
    width: 80%;
    height:9dvi;
    margin: auto auto;
  }
`;
export default StyledSlider;
