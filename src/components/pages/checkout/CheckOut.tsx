import React, {
  ChangeEvent,
  FC,
  FocusEvent,
  FormEvent,
  useEffect,
  useState,
} from "react";
import { Accordion, Card, Col, Form, Image, Row } from "react-bootstrap";
import MainContainer from "../../common/container/MainContainer";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../../state/selectors/selectUserData";
import {
  SET_USER_DATA,
  UserDataDto,
} from "../../../state/actions/types/userDataActionType";
import Payment from "../../../components/common/payment/Payment";
import { selectTourData } from "../../../state/selectors/selectTourData";
import { getCookie } from "../../common/enum/functions";
import { getUserProfileDataApi } from "../../../api/userProfileData/getUserProfileDataApi";
import { useHistory } from "react-router-dom";
import { updateUserDetailsApi } from "../../../api/userProfileData/updateUserDetailsApi";
import { userRegistrationApi } from "../../../api/userProfileData/userRegistrationApi";
interface Errors {
  userFirstName?: string;
  email?: string;
  phoneNumber?: string;
}

const CheckOut: FC = () => {
  const dispatch = useDispatch();
  const tourData = useSelector(selectTourData);
  const userProfileCookie = getCookie("userProfile");
  const userData = userProfileCookie
    ? JSON.parse(JSON.parse(userProfileCookie))
    : {};
  // useSelector(selectUserData);
  const [activeKey, setActiveKey] = useState("0");
  const [userDetail, setUserDetail] = useState<UserDataDto>(userData);
  const history = useHistory();

  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<string[]>([]);

  const validateForm = (name: string): boolean => {
    let valid = true;
    const errors: Errors = {};
    // Validate User Name
    if (touched.includes("userFullName")) {
      if (!userDetail.userFirstName) {
        errors.userFirstName = "User Name is required";
        valid = false;
      } else if (userDetail.userFirstName.length < 3) {
        errors.userFirstName = "User Name must be at least 3 characters";
        valid = false;
      }
    }
    // Validate Email
    if (touched.includes("email")) {
      if (!userDetail.email) {
        errors.email = "Email is required";
        valid = false;
      } else if (!/\S+@\S+\.\S+/.test(userDetail.email)) {
        errors.email = "Email is invalid";
        valid = false;
      }
    }

    // Validate Phone Number
    if (touched.includes("phoneNumber")) {
      if (!userDetail.phoneNumber) {
        errors.phoneNumber = "Phone Number is required";
        valid = false;
      } else if (!/^\d{10}$/.test(userDetail.phoneNumber)) {
        errors.phoneNumber = "Phone Number must be 10 digits";
        valid = false;
      }
    }

    setErrors(errors);
    return valid;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserDetail((prevDetail) => ({ ...prevDetail, [name]: value }));
  };

  const handleFocus = (event: any): void => {
    setTouched((prevValue) => [...prevValue, event.target.name]);
  };

  const handleBlur = (event: any): void => {
    const { name } = event.target;
    event.preventDefault();
    validateForm(name);
  };
  // const getUserData = async (user: any) => {
  //   getUserProfileDataApi(user?.email).then((response: any) => {
  //     if (response.status === 200) {
  //       dispatch({
  //         type: SET_USER_DATA,
  //         payload: {
  //           address: {
  //             houseNumber: response.data.userProfileAddressResponse.houseNumber,
  //             street: response.data.userProfileAddressResponse.street,
  //             city: response.data.userProfileAddressResponse.city,
  //             state: response.data.userProfileAddressResponse.state,
  //             pincode: response.data.userProfileAddressResponse.pincode,
  //           },
  //           email: response.data.email,
  //           phoneNumber: response.data.phoneNumber,
  //           userFirstName: response.data.userFirstName,
  //           userLastName: response.data.userLastName,
  //           birthDate: response.data.birthDate,
  //           gender: response.data.gender,
  //           bloodGroup: response.data.bloodGroup,
  //           country: response.data.country,
  //         },
  //       });
  //     }
  //   });
  // };
  // useEffect(() => {
  //   const cookie = getCookie("user");
  //   const user = cookie && JSON.parse(cookie);
  //   if (user.token) {
  //     try {
  //       getUserData(user.email);
  //     } catch (error: any) {
  //       console.log(error.message);
  //     }
  //   } else {
  //     history.push("/login");
  //   }
  // }, []);
  const handleToggle = (eventKey: any) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };
  // const setUserData = async (values: any) => {
  //   try {
  //     const res = userData?.userData?.email
  //       ? await updateUserDetailsApi(values)
  //       : await userRegistrationApi(values);
  //     res.response.status === 201 && (await getUserData(values.email));
  //   } catch (error: any) {
  //     console.log(error.message);
  //   }
  // };

  const setUserData = () => {
    dispatch({
      type: SET_USER_DATA,
      payload: {
        email: userDetail.email,
        phoneNumber: userDetail.phoneNumber,
        userFullName: userDetail.userFullName,
      },
    });
  };
  return (
    <MainContainer className="p-3 py-5" background="white">
      <Row className="justify-content-between d-flex flex-row p-5">
        <Col md={7} lg={7} className="col-12 gap-3 d-flex flex-column">
          <Accordion activeKey={activeKey} className="shadow rounded-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header
                style={{ background: "#4A90E2" }}
                onClick={() => handleToggle("0")}
              >
                Booking Detail
              </Accordion.Header>
              <Accordion.Body>
                <Form className="d-flex flex-column">
                  <Row className="mb-3">
                    <Col md={6} lg={6} className="col-12 mb-3">
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label
                          style={{ fontSize: "10px" }}
                          className="p-0 m-0 font-weight-normal"
                        >
                          User Name
                        </Form.Label>
                        <Form.Control
                          className="border-secondary"
                          type="text"
                          name="userFullName"
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          placeholder={userDetail?.userFirstName}
                          value={userDetail.userFirstName}
                          onChange={handleChange}
                        />
                        {errors.userFirstName && (
                          <div style={{ color: "red", fontSize: "10px" }}>
                            {errors.userFirstName}
                          </div>
                        )}
                      </Form.Group>
                    </Col>
                    <Col md={6} lg={6} className="col-12">
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label
                          style={{ fontSize: "10px" }}
                          className="p-0 m-0 font-weight-normal"
                        >
                          User Email
                        </Form.Label>
                        <Form.Control
                          className="border-secondary"
                          type="email"
                          name="email"
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          placeholder={userDetail?.email}
                          value={userDetail.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <div style={{ color: "red", fontSize: "10px" }}>
                            {errors.email}
                          </div>
                        )}
                      </Form.Group>
                    </Col>
                    <Col md={6} lg={6} className="col-12">
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label
                          style={{ fontSize: "10px" }}
                          className="p-0 m-0 font-weight-normal"
                        >
                          Phone Number
                        </Form.Label>
                        <Form.Control
                          className="border-secondary"
                          type="text"
                          name="phoneNumber"
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          placeholder={userDetail?.phoneNumber}
                          value={userDetail.phoneNumber}
                          onChange={handleChange}
                        />
                        {errors.phoneNumber && (
                          <div style={{ color: "red", fontSize: "10px" }}>
                            {errors.phoneNumber}
                          </div>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header
                style={{ background: "#4A90E2" }}
                onClick={() => handleToggle("1")}
              >
                Tour Detail
              </Accordion.Header>
              <Accordion.Body>
                {Object?.values(tourData)?.length > 0 && (
                  <Card
                    className="p-0 m-0"
                    style={{
                      border: "1px solid #E0E0E0",
                      width: "100%",
                      borderRadius: 10,
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div style={{ display: "flex", padding: "20px" }}>
                      <Image
                        className="d-flex w-40"
                        style={{
                          borderRadius: 10,
                          objectFit: "cover",
                        }}
                        src={
                          tourData?.imageUri?.length > 0 &&
                          tourData?.imageUri[0] !== ""
                            ? `https://drive.google.com/thumbnail?sz=w2000&id=${tourData?.imageUri[0]}`
                            : "https://drive.google.com/thumbnail?sz=w2000&id=1j8giF6uvrDsI-yfMYZFWxdBGe0wirl6w"
                        }
                      />

                      <Card.Body style={{ flex: 1 }}>
                        <Card.Title
                          style={{
                            fontSize: 30,
                            fontWeight: "600",
                            color: "#4A90E2",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                          }}
                        >
                          {tourData?.title && tourData?.title}
                        </Card.Title>
                        <Row>
                          {/* <Col className="col-8"> */}
                          <div
                            style={{
                              display: "flex",
                              flexFlow: "wrap",
                              gap: "10px",
                              justifyContent: "flex-start",
                              alignItems: "flex-start",
                              marginBottom: 10,
                            }}
                          >
                            {tourData?.destinations?.length > 0 &&
                              tourData?.destinations
                                .slice(0, 10)
                                ?.map((destination) => (
                                  <span
                                    key={destination}
                                    style={{
                                      padding: "5px 10px",
                                      borderRadius: 0,
                                      backgroundColor: "#F0F4FF",
                                      color: "#4A90E2",
                                      fontSize: 14,
                                    }}
                                  >
                                    {destination}
                                  </span>
                                ))}
                            <span
                              style={{
                                padding: "5px 10px",
                                borderRadius: 0,
                                backgroundColor: "#F0F4FF",
                                color: "#4A90E2",
                                fontSize: 14,
                              }}
                            >
                              {tourData?.destinations?.length > 10 &&
                                tourData?.destinations?.length - 10 + "+"}
                            </span>
                          </div>
                          {/* </Col> */}
                        </Row>
                        <p
                          className="p-0 m-0 text-end"
                          style={{
                            fontSize: 23,
                            fontWeight: "600",
                            color: "#879DFF",
                            marginTop: -10,
                          }}
                        >
                          {tourData.noOfDays - 1}N/{tourData.noOfDays}D
                        </p>
                        <hr
                          style={{
                            border: "1px dotted #E0E0E0",
                            margin: "10px 0",
                          }}
                        />
                      </Card.Body>
                    </div>
                  </Card>
                )}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col md={5} lg={5} className="col-12 pt-3 p-md-0 p-lg-0">
          <Card className="text-start py-0 m-0">
            <Card.Header
              className="bold text-white"
              style={{ background: "#4A90E2" }}
            >
              Price Details
            </Card.Header>
            <Card.Body>
              <Row className="justify-content-between">
                <Card.Title className="col-6">Booking Price</Card.Title>
                <Card.Text className="col-4 text-end">
                  {/* {tourData?.packagePrice?.length > 0 &&
                    tourData?.packagePrice[5]} */}
                  24 USD
                </Card.Text>
              </Row>
              <Row className="justify-content-between">
                <Card.Title className="col-6">Discount</Card.Title>
                <Card.Text className="col-4 text-end">{0.0}</Card.Text>
              </Row>

              <Row className="justify-content-between">
                <Card.Title className="col-6">
                  <del>Delivery Charges</del>
                </Card.Title>
                <Card.Text className="col-4 text-end">
                  <del>{0.0}</del>
                </Card.Text>
              </Row>
              <Row className="justify-content-between">
                <Card.Title className="col-6 bold">Total Price</Card.Title>
                <Card.Text className="col-4 text-end">
                  {/* {tourData?.packagePrice?.length > 0 &&
                    tourData?.packagePrice[5]} */}
                  24 USD
                </Card.Text>
              </Row>
            </Card.Body>
            <Card.Footer
              className="text-white"
              style={{ background: "#4A90E2" }}
            >
              Your Total Saving is 0 Rs
            </Card.Footer>
          </Card>
          <Col className="col-12 py-2 d-flex flex-column">
            <Payment userDetail={userDetail} />
          </Col>
        </Col>
      </Row>
    </MainContainer>
  );
};

export default CheckOut;
