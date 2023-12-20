import React, { FC } from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import SubCard from "../../common/subCard/SubCard";

const Profile: FC = () => {
  const history = useHistory();
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
    <div
      className={`bg-violet-blue px-4 min-vh-100 mw-100 w-100 align-items-center justify-content-end d-flex m-0`}
    >
      <Container className="p-0 m-0 min-vh-100 justify-content-end d-flex flex-column w-100">
        <Row className="p-0 m-0 min-vh-100 align-items-center justify-content-end d-flex">
          <Col className="col-12 py-4 m-0 gap-4 align-items-center d-grid p-0">
            <Col>
              <div
                className="py-5 text-dark title font-weight-normal pl-2"
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
  );
};

export default Profile;
