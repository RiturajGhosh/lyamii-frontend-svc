import React, { FC, useEffect, useState } from "react";
import {
  Image,
  Col,
  Row,
  Ratio,
  Card,
  Button,
  Container,
} from "react-bootstrap";
import style from "./TourDetailCard.module.scss";
import { IoIosHeart, IoMdHeartEmpty } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { BsHouseCheck } from "react-icons/bs";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
import { useSelector } from "react-redux";
import { selectTourData } from "../../../state/selectors/selectTourData";
import { tours } from "../../pages/mockData/destinations";
import ContainerSection from "../../common/container/Container";
import { useHistory } from "react-router-dom";
import path from "path";
import SubCard from "../../common/subCard/SubCard";

const Profile: FC = () => {
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
      path: "/profile/personalData",
    },
    {
      title: "Prefences",
      subTitle: "Change your preference in your way",
      path: "/profile/personalData",
    },
    {
      title: "Privacy & Security",
      subTitle: "Your Privacy Your Choice",
      path: "/profile-personalData",
    },
    {
      title: "Payments",
      subTitle: "Manage your payment methods",
      path: "/profile/personalData",
    },
    {
      title: "Documentations",
      subTitle: "Stay updated with Digital Documents",
      path: "/profile/personalData",
    },
    {
      title: "Account Information",
      subTitle: "Edit Personal Details",
      path: "/profile-personalData",
    },
    {
      title: "Manage Travellers",
      subTitle: "Add members to Lyamii.",
      path: "/profile/personalData",
    },
  ];

  return (
    <>
      <Col className="col-9">
        <div
          className={`bg-violet-blue align-content-start flex-wrap p-5 min-vh-100 min-vw-100 mw-100 w-100 align-items-center justify-content-end d-flex m-0`}
        >
          <Container className="p-0 m-0 justify-content-end d-flex flex-column w-100">
            <Row className="p-0 m-0 align-items-center justify-content-end d-flex">
              <Col className="col-9 p-0 m-0">
                <Col>
                  <div
                    className="py-5 text-white title font-weight-normal pl-2"
                    style={{ textShadow: "2px 2px #000000 !important" }}
                  >
                    Profile Managements
                  </div>
                </Col>
                <Row>
                  {menus.map((menu) => {
                    return (
                      <Col md={6} sm={6} lg={6} xs={6} sx={6}>
                        <SubCard
                          titleStyling="small text-dark shadow bg-blue"
                          className="my-3"
                          cardColor="#e4e9ff "
                        >
                          <Card.Title onClick={() => history.push(menu.path)}>
                            {menu.title}
                          </Card.Title>
                          <Card.Subtitle>{menu.subTitle}</Card.Subtitle>
                        </SubCard>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </Col>
    </>
  );
};

export default Profile;
