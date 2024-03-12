import React, { FC, useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import MainContainer from "../../common/container/MainContainer";
import SubCard from "../../common/subCard/SubCard";
import { TravellersDetailsDto } from "../travellerInfoManagement/TravellerInfoManagement";
import { useSelector } from "react-redux";
import { selectUserData } from "../../../state/selectors/selectUserData";
import { UserDataDto } from "../../../state/actions/types/userDataActionType";

const CheckOut: FC = () => {
  const [accountDetail, setAccountDetail] = useState({
    accountNumber: 0,
    cvv: "",
    accountHolderName: "",
    phoneNo: "",
    expiryDate: "",
  });
  const userData = useSelector(selectUserData);
  const [userDetail, setUserDetail] = useState<UserDataDto>(userData?.userData);
  const [travellersDetails, setTravellersDetails] = useState<
    TravellersDetailsDto[]
  >([]);
  const [detail, setDetail] = useState({
    travellerName: "",
    lyamiiId: "",
    passport: "",
  });
  const [edit, setEdit] = useState({ row: 1, index: "" });
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState(0);

  useEffect(() => {
    console.log(userData);
  }, [userData]);
  return (
    <MainContainer className="p-3 py-5" background="white">
      <Card className="py-5 shadow">
        <Col className="row">
          <h3 className="justify-content-center d-flex">Checkout Page</h3>
          <div className="tab_container">
            <Row className="position-relative align-items-center p-0 my-3 m-0 justify-content-center d-flex w-100">
              <Col className="active text-center p-0 m-0 w-10">
                <label onClick={() => setStep(1)}>
                  {/* <span className="numberCircle">2</span> */}
                  <span>Customer Information</span>
                </label>
              </Col>
              <Col className="col-1 border-2 border p-0 m-0 w-10 timeline-line"></Col>
              <Col className="col-1 border-2 border p-0 m-0 w-10 timeline-line"></Col>

              <Col className="active text-center p-0 m-0 w-10">
                <label onClick={() => setStep(2)}>
                  {/* <span className="numberCircle">4</span> */}
                  <span>Payment</span>
                </label>
              </Col>
            </Row>

            {step === 1 && (
              <section id="content2" className="tab-content">
                <h3>Travellers</h3>

                <Row className="align-items-center">
                  {travellersDetails &&
                    travellersDetails?.map((travellerDetail, index: number) => {
                      return (
                        <Col
                          key={index}
                          md={12}
                          sm={12}
                          lg={12}
                          xs={12}
                          sx={12}
                        >
                          <SubCard
                            titleClassName="small text-dark"
                            className="my-3"
                          >
                            <Card.Title className="px-2">
                              {travellerDetail?.travellerName}
                            </Card.Title>
                            <Card.Subtitle className="px-2">
                              {travellerDetail?.lyamiiId}
                            </Card.Subtitle>
                          </SubCard>
                        </Col>
                      );
                    })}
                  {Array(2 - travellersDetails.length)
                    .fill(null)
                    .map((_, index: number) => {
                      return (
                        <Col
                          key={index}
                          md={12}
                          sm={12}
                          lg={12}
                          xs={12}
                          sx={12}
                        >
                          <SubCard
                            titleClassName="small text-dark shadow bg-blue"
                            className="my-3"
                          >
                            <Row className="mt-2">
                              <Col className="p-0 m-0">
                                <Form.Group className="d-grid">
                                  {edit.row === index &&
                                  edit?.index &&
                                  !edit?.index.localeCompare(String(index)) ? (
                                    <Col className="d-grid gap-2">
                                      <h6 className="small p-0 m-0">
                                        Traveller Name
                                      </h6>

                                      <input
                                        className="w-100"
                                        type="text"
                                        placeholder={"Name"}
                                        onChange={(e: any) => {
                                          setDetail({
                                            ...detail,
                                            travellerName: e.target.value,
                                          });
                                        }}
                                        value={detail?.travellerName}
                                      />
                                      <Col className="d-grid gap-2">
                                        <h6 className="small p-0 m-0">
                                          Upload your Passport
                                        </h6>
                                        <div className="p-0  m-0">
                                          <input
                                            className="form-control p-2 bg-white p-0 m-0 border-0"
                                            type="file"
                                            value={detail?.passport}
                                            onChange={(e: any) =>
                                              setDetail({
                                                ...detail,
                                                passport: e.target.value,
                                              })
                                            }
                                            id="formFile"
                                          />
                                        </div>
                                        <h6 className="small">
                                          Document format should be in .pdf{" "}
                                        </h6>
                                      </Col>

                                      <Col className="justify-content-end d-flex">
                                        <Button
                                          className="fit-content "
                                          onClick={() => {
                                            setTravellersDetails([
                                              ...travellersDetails,
                                              detail,
                                            ]);
                                            setDetail({
                                              travellerName: "",
                                              lyamiiId: "",
                                              passport: "",
                                            });
                                            setEdit({
                                              row: 2,
                                              index: String(index),
                                            });
                                          }}
                                          variant="primary"
                                          type="submit"
                                        >
                                          Submit
                                        </Button>
                                      </Col>
                                    </Col>
                                  ) : (
                                    <div
                                      className="fs-auto pt-0 p-2 text-dark m-0 font-weight-normal"
                                      style={{ minHeight: "29px" }}
                                    >
                                      {" "}
                                      <Card.Header className={"bg-white"}>
                                        Traveller{" "}
                                        {travellersDetails?.length + index + 1}
                                      </Card.Header>
                                      <Card.Body>
                                        <Card.Title
                                          style={{ color: "#0752a1" }}
                                          onClick={() =>
                                            setEdit({
                                              row: index,
                                              index: String(index),
                                            })
                                          }
                                        >
                                          Add Traveller
                                        </Card.Title>
                                      </Card.Body>
                                    </div>
                                  )}
                                </Form.Group>
                              </Col>
                            </Row>
                          </SubCard>{" "}
                        </Col>
                      );
                    })}
                </Row>
                <h3>Customer Information</h3>

                <Row className="justify-content-between gap-1">
                  {Object.entries(userData.userData).map(([key, value]) => {
                    return value === "" || value === null ? (
                      <Col className="col-3 p-0 m-0">
                        <Form.Group
                          className="my-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label
                            style={{ fontSize: "10px" }}
                            className="p-0 m-0 font-weight-normal"
                          >
                            {String(key).toUpperCase()}
                          </Form.Label>
                          {edit ? (
                            <Form.Control
                              className=""
                              type="text"
                              placeholder={""}
                              onChange={(e: any) => {}}
                            />
                          ) : (
                            <div className="h5 text-dark px-2">{}</div>
                          )}
                        </Form.Group>
                      </Col>
                    ) : (
                      ""
                    );
                  })}
                </Row>
              </section>
            )}

            {step === 2 && (
              <section className="tab-content">
                <h4 className="payment-title">Choose your payment method</h4>
                <Row className="justify-content-between">
                  <form
                    action=""
                    className="col-7 p-0 m-0 shadow-sm"
                    style={{
                      borderColor: "#f5f6fa",
                    }}
                  >
                    <div className="pymt-radio">
                      <Row
                        className="m-0 py-3 text-start align-items-center d-table w-100 px-md-5"
                        style={{
                          backgroundColor: "#f5f6fa",
                        }}
                      >
                        <Col className="col-1 p-2 text-start align-top d-table-cell">
                          <input
                            type="radio"
                            id="radio1"
                            name="radios"
                            value="pp"
                            onClick={() => setPaymentMethod(1)}
                          />
                          <label htmlFor="radio1"></label>
                        </Col>
                        <Col className="col-9 d-table-cell align-middle align-start pl-4 small">
                          <p className="fs-medium">Phonepe</p>
                          <p className="fs-small">
                            Safe payment online. Credit card needed. PayPal
                            account is not necessary.
                          </p>
                        </Col>
                        <Col className="p-2 align-top position-absollute pr-0">
                          <img
                            className="w-100"
                            src={require("./../../../Assets/phonepe.png")}
                            alt="Phonepe"
                          />
                        </Col>
                      </Row>
                    </div>
                    <div className="pymt-radio">
                      <div className="m-0 py-3 text-start align-items-center d-table w-100 px-md-5">
                        <Col className="col-1 p-2 text-start align-top d-table-cell">
                          <input
                            type="radio"
                            id="radio1"
                            name="radios"
                            value="pp"
                            onClick={() => setPaymentMethod(2)}
                          />
                          <label htmlFor="radio2"></label>
                        </Col>
                        <Col className="col-9 d-table-cell align-middle align-start pl-4 small">
                          <p className="fs-medium">Credit Card</p>
                          <p className="fs-small">
                            Safe money transfer using your bank account. Safe
                            payment online. Credit card needed. Visa, Maestro,
                            Discover, American Express
                          </p>
                        </Col>
                        <Col className="col-2 p-2 align-top position-absollute pr-0">
                          <div className="select-logo-sub logo-spacer">
                            <img
                              src="https://www.dropbox.com/s/by52qpmkmcro92l/logo-visa.png?raw=1"
                              alt="Visa"
                            />
                          </div>
                          <div className="select-logo-sub">
                            <img
                              src="https://www.dropbox.com/s/6f5dorw54xomw7p/logo-mastercard.png?raw=1"
                              alt="MasterCard"
                            />
                          </div>
                        </Col>
                      </div>
                    </div>
                    {paymentMethod === 2 && (
                      <div className="d-table w-100 text-start p-5">
                        <div className="d-table w-100 pb-1">
                          <div className="d-table-cell">
                            <div className="small pb-1">Credit Card Number</div>
                            <Row className="justify-content-between d-flex">
                              <Col className="p-0 m-0">
                                <div className="input-group align-items-center">
                                  {" "}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                    width="32px"
                                    height="38px"
                                    className="px-1 border-1 border"
                                  >
                                    <path
                                      fill="#ff9800"
                                      d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                                    />
                                    <path
                                      fill="#d50000"
                                      d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                                    />
                                    <path
                                      fill="#ff3d00"
                                      d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                                    />
                                  </svg>
                                  <input
                                    type="number"
                                    className="form-control border-secondary"
                                    name="cardNumber"
                                    onChange={(e) =>
                                      setAccountDetail({
                                        ...accountDetail,
                                        accountNumber: parseInt(e.target.value),
                                      })
                                    }
                                    placeholder="Valid Card Number"
                                  />
                                </div>
                                <span className="input-group-addon">
                                  <i className="fa fa-credit-card"></i>
                                </span>
                                <i className="ai-circle-check-fill size-lg f-main-color"></i>
                              </Col>
                            </Row>
                          </div>
                        </div>
                        <div className="d-table w-100 pb-1">
                          <div className="d-table-cell">
                            <div className="small pb-1">Expiry Date</div>
                            <Row>
                              <select
                                className="mr-2 p-1 w-50"
                                style={{
                                  borderColor: "#f0f4f7",
                                  backgroundColor: "#f0f4f7",
                                }}
                              >
                                <option selected>01</option>
                                <option>02</option>
                                <option>03</option>
                                <option>04</option>
                                <option>05</option>
                                <option>06</option>
                                <option>07</option>
                                <option>08</option>
                                <option>09</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                              </select>
                              <select
                                className="input mr-2 w-50 p-1"
                                style={{
                                  borderColor: "#f0f4f7",
                                  backgroundColor: "#f0f4f7",
                                }}
                              >
                                <option>01</option>
                                <option>02</option>
                                <option>03</option>
                                <option>04</option>
                                <option>05</option>
                                <option>06</option>
                                <option>07</option>
                                <option>08</option>
                                <option>09</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option selected>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                              </select>
                            </Row>
                          </div>
                          <div className="pl-1 d-table-cell">
                            <div className="small pb-1">
                              CVV Code<span className="numberCircle">?</span>
                            </div>
                            <Col className="p-0 m-0 justify-content-end align-items-center d-flex ">
                              <input
                                className="form-control border-secondary"
                                id="cvc"
                                placeholder="Card CVV"
                                maxLength={3}
                                onChange={(e) =>
                                  setAccountDetail({
                                    ...accountDetail,
                                    cvv: e.target.value,
                                  })
                                }
                                type="password"
                              />
                              <i
                                id="cvc_toggler"
                                data-target="cvc"
                                className="ai-eye-open pointer"
                              ></i>
                            </Col>{" "}
                          </div>
                        </div>
                        <div className="d-table w-100 pb-1">
                          <div className="col-6 d-table-cell">
                            <div className="small pb-1">Name on Card</div>
                            <Col className="p-0 m-0">
                              <Col className="justify-content-end align-items-center d-flex ">
                                <input
                                  className="form-control border-secondary"
                                  id="name"
                                  data-bound="name_mock"
                                  data-def="Mr. Cardholder"
                                  type="text"
                                  onChange={(e) =>
                                    setAccountDetail({
                                      ...accountDetail,
                                      accountHolderName: e.target.value,
                                    })
                                  }
                                  placeholder="Cardholder Name"
                                />
                                <i className="ai-person"></i>
                              </Col>
                            </Col>{" "}
                          </div>
                          <div className="col-5 pl-1 d-table-cell">
                            <div className="small pb-1">Phone Number</div>
                            <Col className="p-0 m-0">
                              <Col className="justify-content-end align-items-center d-flex ">
                                <input
                                  className="form-control border-secondary"
                                  id="name"
                                  data-bound="name_mock"
                                  data-def="Mr. Cardholder"
                                  type="text"
                                  onChange={(e) =>
                                    setAccountDetail({
                                      ...accountDetail,
                                      phoneNo: e.target.value,
                                    })
                                  }
                                  placeholder="Phone Number"
                                />
                                <i className="ai-person"></i>
                              </Col>
                            </Col>{" "}
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="d-flex gap-1 w-100 border-top border-1 align-bottom">
                      <Button className="w-50 d-table-cell text-center align-middle">
                        <div>Return to Tour</div>
                      </Button>
                      <Button className="w-50 d-table-cell text-center align-middle">
                        <div>Book Tour</div>
                      </Button>
                    </div>
                  </form>{" "}
                  <Col
                    className="p-4 col-4 text-dark"
                    style={{ background: "#F1F1F1" }}
                  >
                    <Col className="col-lg-4 col-md-12 py-5 w-100">
                      <Col></Col>
                      <Col className="purchase-section flex-fill flex-vertical">
                        <Col
                          className="p-3 w-100 "
                          style={{ background: "#71A2F7" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            width="40px"
                            height="40px"
                          >
                            <path
                              fill="#ff9800"
                              d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                            />
                            <path
                              fill="#d50000"
                              d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                            />
                            <path
                              fill="#ff3d00"
                              d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                            />
                          </svg>
                          <Col>
                            <strong>
                              <Col
                                id="name_mock"
                                className="size-md fs-small pb-sm uppercase ellipsis"
                              >
                                Mr.{" "}
                                {accountDetail.accountHolderName ||
                                  "Cardholder"}
                              </Col>
                            </strong>
                            <Col className="size-md pb-md">
                              <strong>
                                <span id="fs-small carddigits_mock">
                                  {accountDetail.accountNumber ||
                                    "0000 0000 0000 0000"}
                                </span>
                              </strong>
                            </Col>
                            <Row className="w-100 fs-small justify-content-stretch align-items-center d-flex p-0 m-0 flex-vertical-center">
                              <Col className="p-0 m-0">
                                <span>Expiry Date : </span>
                                <span id="mm_mock">00</span> /{" "}
                                <span id="yy_mock">00</span>
                              </Col>
                              <Col>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 48 48"
                                  width="40px"
                                  height="40px"
                                >
                                  <path
                                    fill="#1565C0"
                                    d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"
                                  />
                                  <path
                                    fill="#FFF"
                                    d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"
                                  />
                                  <path
                                    fill="#FFC107"
                                    d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"
                                  />
                                </svg>
                              </Col>
                            </Row>
                          </Col>
                        </Col>

                        <ul className="fs-small purchase-props">
                          <li className="flex-between">
                            <span>Tour Name</span> <strong>Goa</strong>
                          </li>
                          <li className="flex-between">
                            <span>Tour ID</span> <strong>429252965</strong>
                          </li>
                        </ul>
                      </Col>
                      <Col className="separation-line"></Col>
                      <Col className="total-section flex-between flex-vertical-center">
                        <Col className="fs-small flex-fill flex-vertical">
                          <Col className="total-label f-secondary-color">
                            You have to Pay
                          </Col>
                          <Col>
                            <strong>549</strong>
                            <small>
                              .99 <span className="f-secondary-color">USD</span>
                            </small>
                          </Col>
                        </Col>
                        <i className="ai-coin size-lg"></i>
                      </Col>
                    </Col>
                  </Col>
                </Row>
              </section>
            )}
          </div>
        </Col>
      </Card>
    </MainContainer>
  );
};

export default CheckOut;
