import React, { FC, useEffect, useState } from "react";
import {
  Image,
  Col,
  Row,
  Ratio,
  Card,
  Button,
  Container,
  Nav,
} from "react-bootstrap";
import style from "./TourDetailCard.module.scss";
import { IoIosHeart, IoLogoFacebook, IoMdHeartEmpty } from "react-icons/io";
import {
  AiFillStar,
  AiFillTwitterCircle,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsHouseCheck } from "react-icons/bs";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
import { useSelector } from "react-redux";
import { selectTourData } from "../../../state/selectors/selectTourData";
import { tours } from "../mockData/destinations";
import ContainerSection from "../../common/container/Container";
import { useHistory } from "react-router-dom";
import path from "path";
import SubCard from "../../common/subCard/SubCard";
import { FaHeart, FaLandMineOn } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
import { HiThumbUp, HiThumbDown } from "react-icons/hi";
import { IoIosPaperPlane } from "react-icons/io";
import ArrowButton from "../../common/arrowButton/ArrowButton";

const Login: FC = () => {
  const screenSize = useSelector(selectScreenSize);
  const [IsWishlisted, setToWishList] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(true);
  const [page, setPage] = useState(0);
  const history = useHistory();
  const selectedtourData: any = tours[0] || {};
  // (selectTourData);
  const menus = [
    {
      title: "Personal Data",
      subTitle: "Edit Personal Details",
      path: "/personalData",
    },
    {
      title: "Prefences",
      subTitle: "Change your preference in your way",
      path: "/personalData",
    },
    {
      title: "Privacy & Security",
      subTitle: "Your Privacy Your Choice",
      path: "/personalData",
    },
    {
      title: "Payments",
      subTitle: "Manage your payment methods",
      path: "/personalData",
    },
    {
      title: "Documentations",
      subTitle: "Stay updated with Digital Documents",
      path: "/personalData",
    },
    {
      title: "Account Information",
      subTitle: "Edit Personal Details",
      path: "/personalData",
    },
    {
      title: "Manage Travellers",
      subTitle: "Add members to Lyamii.",
      path: "/personalData",
    },
  ];

  return (
    <div
      className={`bg-white px-4 min-vh-100 mw-100 w-100 align-items-center justify-content-end d-flex m-0`}
    >
      <Container className="p-0 m-0 min-vh-100 justify-content-end d-flex flex-column w-100">
        <Row className="p-0 m-0 min-vh-100 align-items-center justify-content-end d-flex">
          <Col className="col-12 py-4 m-0 gap-4 align-items-center d-grid p-0">
            <SubCard
              titleStyling="small d-flex shadow bg-blue"
              className="h-100 d-flex"
              cardColor="#e4e9ff"
            >
              <Col>
                <h1 className="small p-0 pt-4 px-4 m-0 d-flex font-weight-normal">
                  Note down your first Day Experience
                </h1>{" "}
                <h1 className="title p-0 px-4 m-0 d-flex fw-bold font-weight-normal">
                  Start your Journal
                </h1>
                <ArrowButton
                  fill="#97a9ff"
                  className={"position-absolute bottom-0 p-2 end-0"}
                  onClick={() => {}}
                />
              </Col>
            </SubCard>
            <SubCard
              titleStyling="small d-flex shadow bg-blue"
              className="h-100 d-flex"
              cardColor="#e4e9ff"
            >
              <Col>
                <h1 className="small p-0 pt-4 px-4 m-0 d-flex font-weight-normal">
                  Note down your first Day Experience
                </h1>{" "}
                <h1 className="title p-0 px-4 m-0 d-flex fw-bold font-weight-normal">
                  Start your Journal
                </h1>
                <ArrowButton
                  fill="#97a9ff"
                  className={"position-absolute bottom-0 p-2 end-0"}
                  onClick={() => {}}
                />
              </Col>
            </SubCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
