import React, { FC, useEffect } from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import SubCard from "../../common/subCard/SubCard";
import { getCookie } from "../../common/enum/functions";
import { getUserProfileDataApi } from "../../../api/userProfileData/getUserProfileDataApi";
import { SET_USER_DATA } from "../../../state/actions/types/userDataActionType";
import { useDispatch } from "react-redux";

const Profile: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const menus = [
    {
      title: "Personal Data",
      subTitle: "Edit Personal Details",
      path: "/profile/personalData",
    },
    {
      title: "Prefences",
      subTitle: "Change your preference in your way",
      path: "/profile/prefences",
    },
    {
      title: "Privacy & Security",
      subTitle: "Your Privacy Your Choice",
      path: "/profile/privacy&security",
    },
    {
      title: "Payments",
      subTitle: "Manage your payment methods",
      path: "/profile/payments",
    },
    {
      title: "Documentations",
      subTitle: "Stay updated with Digital Documents",
      path: "/profile/documentations",
    },
    {
      title: "Manage Travellers",
      subTitle: "Add members to Lyamii.",
      path: "/profile/manageTravellers",
    },
  ];

  useEffect(() => {
    const cookie = getCookie("user");
    const user = cookie && JSON.parse(cookie);
    // if (user.token) {
    try {
      getUserProfileDataApi(user?.email).then((response: any) => {
        if (response.status === 200) {
          dispatch({
            type: SET_USER_DATA,
            payload: {
              address: {
                houseNumber:
                  response.data.userProfileAddressResponse.houseNumber,
                street: response.data.userProfileAddressResponse.street,
                city: response.data.userProfileAddressResponse.city,
                state: response.data.userProfileAddressResponse.state,
                pincode: response.data.userProfileAddressResponse.pincode,
              },
              email: response.data.email,
              phoneNumber: response.data.phoneNumber,
              userFirstName: response.data.userFirstName,
              userLastName: response.data.userLastName,
              birthDate: response.data.birthDate,
              gender: response.data.gender,
              bloodGroup: response.data.bloodGroup,
              country: response.data.country,
            },
          });
        }
      });
    } catch (error: any) {
      console.log(error.message);
    }
    // }
  });

  return (
    <div
      className={`bg-violet-blue px-4 min-vh-100 mw-100 w-100 align-items-center justify-content-end d-flex m-0`}
    >
      <Container
        fluid="lg"
        className="p-0 m-0 min-vh-100 justify-content-end d-flex flex-column w-100"
      >
        <Row className="p-0 m-0 min-vh-100 align-items-center justify-content-end d-flex">
          <Col className="col-12 py-4 m-0 gap-4 align-items-center d-grid p-0">
            <Col>
              <div
                className="py-md-5 py-sm-3 text-dark fs-1 font-weight-normal pl-2"
                style={{ textShadow: "2px 2px #000000 !important" }}
              >
                Profile Managements
              </div>
            </Col>
            <Row>
              {menus.map((menu) => {
                return (
                  <Col md={6} sm={12} lg={6} xs={12} sx={6}>
                    <SubCard
                      titleClassName="small text-dark shadow bg-blue"
                      className="my-3"
                      cardColor="#e4e9ff "
                    >
                      <Card.Title
                        className="px-2 pointer"
                        onClick={() => history.push(menu.path)}
                      >
                        {menu.title}
                      </Card.Title>
                      <Card.Subtitle className="px-2">
                        {menu.subTitle}
                      </Card.Subtitle>
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
