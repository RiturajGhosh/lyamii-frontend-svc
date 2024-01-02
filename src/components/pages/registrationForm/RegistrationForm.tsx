import React, { FC, useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { RiUploadCloud2Line } from "react-icons/ri";
import style from "./RegistrationForm.module.scss";
import { amenities } from "../../common/enum/enum";
import { useHistory, useLocation } from "react-router-dom";
import Tick from "../../common/icon/tick";
import { FaUpload } from "react-icons/fa6";
import { RegistrationDetailDto } from "../../../state/actions/types/registrationType";
import Checkbox from "../../common/checkbox/Checkbox";
import { getBase64 } from "../../../utils/getBase64";
import { countries } from "../../common/enum/countryCode";
import Select from "react-select";

type RegistrationFormType = {
  detail: RegistrationDetailDto;
  setDetailHandler: Function;
  submit: Function;
  stayType: string;
  fileUpload: Function;
};
const RegistrationForm: FC<RegistrationFormType> = ({
  detail,
  setDetailHandler,
  submit,
  stayType,
  fileUpload,
}) => {
  const location = useLocation();
  const history = useHistory();
  const [preview, setPreview] = React.useState({
    dorm1: "",
    dorm2: "",
    single: "",
    prime: "",
    budget: "",
    midRange: "",
    property: "",
  });
  const [state, setState] = useState<RegistrationDetailDto>(detail);

  useEffect(() => {
    setDetailHandler(state);
  }, [state]);

  async function handler(label: string) {
    let datas = amenities;
    datas.forEach((data) => {
      if (data.label === label) {
        data.checked = !data.checked;
      }
    });
    let amenity = datas
      .filter((data) => data.checked && data)
      .map((data) => data.value);
    await setState({ ...state, amenities: amenity });
  }
  return (
    <section
      style={{ background: "#b5f4c5" }}
      className="justify-content-center align-items-center d-flex"
    >
      <Col
        lg={10}
        className="min-vh-100 justify-content-center align-items-center d-flex"
      >
        <Col className="gap-2 lh-1 d-flex flex-column">
          <Col className="p-2 m-0">
            <Row className="d-flex justify-content-start fit-content gap-2">
              <Col
                className="justify-content-start gap-3 round-edges px-4 m-0 d-flex"
                style={{ minHeight: "0%", background: "#5ba16b" }}
              >
                <Col
                  className="fit-content py-3 border-0"
                  onClick={(e: any) => {
                    history.push("/addHotel");
                  }}
                >
                  <span className="display-6 bold text-dark p-0 m-0">
                    Hotel
                  </span>
                </Col>
                {location.pathname.includes("Hotel") && (
                  <Button
                    style={{ background: "#2dcd6f" }}
                    className="align-items-center border-0 justify-content-center p-0 m-0 btn w-40 h-60 rounded-circle d-flex"
                  >
                    <Tick width="60" height="50" />
                  </Button>
                )}
              </Col>
              <Col
                className="justify-content-start gap-3 round-edges px-4 m-0 d-flex"
                style={{ minHeight: "0%", background: "#5ba16b" }}
              >
                <Col
                  className="fit-content py-3 border-0"
                  onClick={(e: any) => {
                    history.push("/addHostel");
                  }}
                >
                  <span className="display-6 bold text-dark p-0 m-0">
                    Hostel
                  </span>
                </Col>
                {location.pathname.includes("Hostel") && (
                  <Button
                    style={{ background: "#2dcd6f" }}
                    className="align-items-center border-0 justify-content-center p-0 m-0 btn w-40 h-60 rounded-circle d-flex"
                  >
                    <Tick width="60" height="50" />
                  </Button>
                )}
              </Col>
            </Row>
          </Col>
          <hr className="border-2 border p-0 m-0 border-dark"></hr>
          <Row className="d-flex">
            <Col
              md={8}
              xs={8}
              sx={8}
              lg={8}
              className="justify-content-center mb-4 mb-md-0 d-flex col-12 flex-column"
            >
              <Col className="lh-lg">
                {stayType.includes("HOTEL") ? (
                  <Col className="justify-content-start d-flex">
                    <Col className="p text-nowrap w-30 text-dark p-0 system-ui d-flex align-items-center">
                      HOTEL NAME:
                    </Col>
                    <div className="p-0 m-0 border-bottom border-dark border-2 d-flex align-items-center w-100">
                      <input
                        className="px-3 p justify-content-start p-0 text-dark m-0 border-0"
                        type="text"
                        value={detail.stayName}
                        style={{ background: "none" }}
                        onChange={(e: any) =>
                          setState({ ...state, stayName: e.target.value })
                        }
                      />
                    </div>
                  </Col>
                ) : (
                  <Col className="justify-content-start d-flex">
                    <Col className="p text-nowrap w-30 text-dark p-0 system-ui d-flex align-items-center">
                      HOSTEL NAME:
                    </Col>
                    <div className="p-0 m-0 border-bottom border-dark border-2 d-flex align-items-center w-100">
                      <input
                        className="px-3 p justify-content-start p-0 text-dark m-0 border-0"
                        type="text"
                        value={detail.stayName}
                        style={{ background: "none" }}
                        onChange={(e: any) =>
                          setState({ ...state, stayName: e.target.value })
                        }
                      />
                    </div>
                  </Col>
                )}
                <Col className="justify-content-start d-flex">
                  <Col className="p text-nowrap w-30 text-dark p-0 system-ui d-flex align-items-center">
                    Country:
                  </Col>
                  <div className="p-0 m-0 border-bottom border-dark border-2 d-flex align-items-center w-100">
                    <Select
                      className="px-3 w-100 p justify-content-start p-0 text-dark m-0 border-0"
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderWidth: "0",
                          background: "none",
                          borderColor: "none",
                          borderRadius: "0",
                          boxShadow: "none",
                        }),
                        indicatorsContainer: (baseStyles, state) => ({
                          ...baseStyles,
                          display: "none",
                        }),
                      }}
                      placeholder=""
                      onChange={(e) =>
                        setState({
                          ...state,
                          countryDisplayCode: e?.value || "",
                        })
                      }
                      options={countries}
                    ></Select>
                  </div>
                </Col>
                <Col className="justify-content-start d-flex">
                  <Col className="p text-nowrap w-30 text-dark p-0 system-ui d-flex align-items-center">
                    Pin Code:
                  </Col>
                  <div className="p-0 m-0 border-bottom border-dark border-2 d-flex align-items-center w-100">
                    <input
                      className="px-3 w-100 p justify-content-start p-0 text-dark m-0 border-0"
                      type="text"
                      value={detail.pincode}
                      style={{ background: "none" }}
                      onChange={(e: any) =>
                        setState({ ...state, pincode: e.target.value })
                      }
                    />
                  </div>
                </Col>
                <Col className="justify-content-start d-flex">
                  <Col className="p text-nowrap w-30 text-dark p-0 system-ui d-flex align-items-center">
                    Reception:
                  </Col>
                  <div className="p-0 m-0 border-bottom border-dark border-2 d-flex align-items-center w-100">
                    <input
                      className="px-3 w-100 p justify-content-start p-0 text-dark  m-0 border-0"
                      type="text"
                      value={detail.hostName}
                      style={{ background: "none" }}
                      onChange={(e: any) =>
                        setState({ ...state, hostName: e.target.value })
                      }
                    />
                  </div>
                </Col>
              </Col>
            </Col>
            <Col>
              <Card
                style={{ height: window.innerWidth / 3, background: "#338f49" }}
                className="form__input text-white align-items-center d-flex h-100 position-relative p-2 m-0"
              >
                <Row className="p-0 m-0 w-100">
                  <Col className="p-0 col-7 m-0">
                    {amenities?.map((amenity: any, index: number) => {
                      return (
                        <Row className="p-0 m-0">
                          <Col
                            key={index}
                            className="fs-6 p-0 m-0 align-items-center text-end justify-content-end d-flex"
                          >
                            {amenity.label}
                          </Col>
                          <Col className="p-0 m-0 col-1 px-2">
                            <Checkbox
                              key={index}
                              label={false}
                              option={amenity}
                              onClick={(label: string) => {
                                handler(label);
                              }}
                              type={"checkbox"}
                            />
                          </Col>
                        </Row>
                      );
                    })}
                  </Col>
                  <Col className="p-0 m-0 col-5 justify-content-center align-self-center d-flex flex-column">
                    <label
                      htmlFor="file-upload"
                      className="p-0 m-0 fit-content align-self-center h-30 w-50 col-6 rounded-circle"
                      style={{ background: "#b5f4c5" }}
                    >
                      <input
                        className="w-10 position-absolute"
                        id="file-upload"
                        accept=".jpg,.gif,.png"
                        style={{ visibility: "hidden" }}
                        placeholder=""
                        onChange={(event: any) => {
                          if (event.target.files?.length > 0) {
                            getBase64(event.target.files[0]).then((result) => {
                              setPreview({ ...preview, budget: `${result}` });
                              fileUpload("PROPERTY", event);
                            });
                          }
                        }}
                        type="file"
                      />
                      <RiUploadCloud2Line
                        className={"w-100 h-100 p-1 text-dark"}
                        width={"100px"}
                        height={"100px"}
                      />
                    </label>
                    <Col className="text-center">(Property Pictures)</Col>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

          {stayType.includes("HOTEL") ? (
            <Row className="gap-5 my-3 justify-content-around position-relative">
              <Col
                md={3}
                xs={3}
                sx={3}
                lg={3}
                className={`align-items-center col-12 flex-column m-0 position-relative justify-content-center position-relative d-flex `}
              >
                <Col
                  className={`p-0 m-0 justify-content-center position-relative align-self-center d-flex w-100 ${style.reasonCard}`}
                  style={{
                    background: "#7dc07c",
                  }}
                >
                  <Card.Img
                    className={`p-0 m-0 justify-content-center position-relative ${style.reasonCard}`}
                    style={{
                      // width: "100%",
                      padding: "0px !important",
                      margin: "0px !important",
                      background: `url(${preview.prime})`,
                    }}
                    // src={require("../../../Assets/accomodation.png")}
                  />
                  <label
                    htmlFor="file-upload"
                    style={{
                      color: "#7dc07c",
                    }}
                    className="position-absolute top-0 pt-2 start-90"
                  >
                    <FaUpload color="green" />
                  </label>
                  <input
                    className="w-10 position-absolute"
                    id="file-upload"
                    accept=".jpg,.gif,.png"
                    style={{ visibility: "hidden" }}
                    placeholder=""
                    onChange={(event: any) => {
                      if (event.target.files?.length > 0) {
                        getBase64(event.target.files[0]).then((result) => {
                          setPreview({ ...preview, prime: `${result}` });
                          fileUpload("PRIME", event);
                        });
                      }
                    }}
                    type="file"
                  />
                </Col>
                <Col
                  className="fs-16 w-100 text-white p-0 m-0 justify-content-center d-flex round-edges py-2 mt-2"
                  style={{ background: "#4a915b" }}
                >
                  PRIME
                </Col>
                <Col className="p-0 m-0 border-bottom border-dark border-2 w-100">
                  <input
                    className=" p justify-content-start p-0 text-dark  m-0 border-0"
                    type="text"
                    value={""}
                    style={{ background: "none" }}
                    onChange={(e: any) => {}}
                  />
                </Col>
              </Col>
              <Col
                md={3}
                xs={3}
                sx={3}
                lg={3}
                className={`align-items-center col-12 flex-column m-0 justify-content-center position-relative d-flex `}
              >
                <Col
                  className={`p-0 m-0 justify-content-center position-relative align-self-center d-flex w-100 ${style.reasonCard}`}
                  style={{
                    background: "#7dc07c",
                  }}
                >
                  <Card.Img
                    className={`p-0 m-0 justify-content-center position-relative ${style.reasonCard}`}
                    style={{
                      // width: "100%",
                      padding: "0px !important",
                      margin: "0px !important",
                      background: `url(${preview.midRange})`,
                    }}
                    // src={require("../../../Assets/accomodation.png")}
                  />
                  <label
                    htmlFor="file-upload"
                    style={{
                      color: "#7dc07c",
                    }}
                    className="position-absolute top-0 pt-2 start-90"
                  >
                    <FaUpload color="green" />
                  </label>
                  <input
                    className="w-10 position-absolute"
                    id="file-upload"
                    accept=".jpg,.gif,.png"
                    style={{ visibility: "hidden" }}
                    placeholder=""
                    onChange={(event: any) => {
                      if (event.target.files?.length > 0) {
                        getBase64(event.target.files[0]).then((result) => {
                          setPreview({ ...preview, midRange: `${result}` });
                          fileUpload("MID_RANGE", event);
                        });
                      }
                    }}
                    type="file"
                  />
                </Col>
                <Col
                  className="fs-16 w-100 text-white justify-content-center d-flex p-0 m-0 round-edges py-2 mt-2"
                  style={{ background: "#4a915b" }}
                >
                  MID RANGE
                </Col>
                <Col className="p-0 m-0 border-bottom border-dark border-2 w-100">
                  <input
                    className=" p justify-content-start p-0 text-dark  m-0 border-0"
                    type="text"
                    value={""}
                    style={{ background: "none" }}
                    onChange={(e: any) => {}}
                  />
                </Col>
              </Col>
              <Col
                md={3}
                xs={3}
                sx={3}
                lg={3}
                className={`align-items-center col-12 flex-column m-0 justify-content-center position-relative d-flex `}
              >
                <Col
                  className={`p-0 m-0 justify-content-center position-relative align-self-center d-flex w-100 ${style.reasonCard}`}
                  style={{
                    background: "#7dc07c",
                  }}
                >
                  <Card.Img
                    className={`p-0 m-0 justify-content-center position-relative ${style.reasonCard}`}
                    style={{
                      // width: "100%",
                      padding: "0px !important",
                      margin: "0px !important",
                      background: `url(${preview.budget})`,
                    }}
                    src={require("../../../Assets/accomodation.png")}
                  />
                  <label
                    htmlFor="file-upload"
                    style={{
                      color: "#7dc07c",
                    }}
                    className="position-absolute top-0 pt-2 start-90"
                  >
                    <FaUpload color="green" />
                  </label>
                  <input
                    className="w-10 position-absolute"
                    id="file-upload"
                    accept=".jpg,.gif,.png"
                    style={{ visibility: "hidden" }}
                    placeholder=""
                    onChange={(event: any) => {
                      if (event.target.files?.length > 0) {
                        getBase64(event.target.files[0]).then((result) => {
                          setPreview({ ...preview, budget: `${result}` });
                          fileUpload("BUDGET", event);
                        });
                      }
                    }}
                    type="file"
                  />
                </Col>
                <Col
                  className="fs-16 w-100 text-white min-vh-0 justify-content-center d-flex p-0 round-edges py-2 m-0 mt-2"
                  style={{ background: "#4a915b" }}
                >
                  <span className="p-0 m-0">BUDGET</span>
                </Col>
                <Col className="p-0 m-0 border-bottom border-dark border-2 w-100">
                  <input
                    className="px-3 p justify-content-start p-0 text-dark  m-0 border-0"
                    type="text"
                    value={""}
                    style={{ background: "none" }}
                    onChange={(e: any) => {}}
                  />
                </Col>
              </Col>
            </Row>
          ) : (
            <Row className="gap-5 my-3 justify-content-around position-relative">
              <Col
                md={3}
                xs={3}
                sx={3}
                lg={3}
                className={`align-items-center col-12 flex-column m-0 justify-content-center position-relative d-flex `}
              >
                <Col
                  className={`p-0 m-0 justify-content-center align-self-center d-flex w-100 ${style.reasonCard}`}
                  style={{
                    background: "#7dc07c",
                  }}
                >
                  <Card.Img
                    className={`p-0 m-0 justify-content-center ${style.reasonCard}`}
                    style={{
                      // width: "100%",
                      padding: "0px !important",
                      margin: "0px !important",
                      background: `url(${preview.dorm1})`,
                    }}
                    // src={require("../../../Assets/accomodation.png")}
                  />
                  <label
                    htmlFor="file-upload"
                    style={{
                      color: "#7dc07c",
                    }}
                    className="position-absolute top-0 pt-2 start-90"
                  >
                    <FaUpload color="green" />
                  </label>
                  <input
                    className="w-10 position-absolute"
                    id="file-upload"
                    accept=".jpg,.gif,.png"
                    style={{ visibility: "hidden" }}
                    placeholder=""
                    onChange={(event: any) => {
                      if (event.target.files?.length > 0) {
                        getBase64(event.target.files[0]).then((result) => {
                          setPreview({ ...preview, dorm1: `${result}` });
                          fileUpload("DORM", event);
                        });
                      }
                    }}
                    type="file"
                  />
                </Col>
                <Col
                  className="fs-16 w-100 text-white p-0 m-0 justify-content-center d-flex round-edges p-2 mt-2"
                  style={{ background: "#4a915b" }}
                >
                  DORMITORY 1
                </Col>
                <Col className="p-0 m-0 border-bottom border-dark border-2  w-100">
                  <input
                    className=" p justify-content-start p-0 text-dark  m-0 border-0"
                    type="text"
                    value={""}
                    style={{ background: "none" }}
                    onChange={(e: any) => {}}
                  />
                </Col>
              </Col>
              <Col
                md={3}
                xs={3}
                sx={3}
                lg={3}
                className={`align-items-center col-12 flex-column m-0 justify-content-center position-relative d-flex `}
              >
                <Col
                  className={`p-0 m-0 justify-content-center position-relative align-self-center d-flex w-100 ${style.reasonCard}`}
                  style={{
                    background: "#7dc07c",
                  }}
                >
                  <Card.Img
                    className={`p-0 m-0 justify-content-center position-relative ${style.reasonCard}`}
                    style={{
                      // width: "100%",
                      padding: "0px !important",
                      margin: "0px !important",
                      background: `url(${preview.dorm2})`,
                    }}
                    // src={require("../../../Assets/accomodation.png")}
                  />
                  <label
                    htmlFor="file-upload"
                    style={{
                      color: "#7dc07c",
                    }}
                    className="position-absolute top-0 pt-2 start-90"
                  >
                    <FaUpload color="green" />
                  </label>
                  <input
                    className="w-10 position-absolute"
                    id="file-upload"
                    accept=".jpg,.gif,.png"
                    style={{ visibility: "hidden" }}
                    placeholder=""
                    onChange={(event: any) => {
                      if (event.target.files?.length > 0) {
                        getBase64(event.target.files[0]).then((result) => {
                          setPreview({ ...preview, dorm2: `${result}` });
                          fileUpload("DORM", event);
                        });
                      }
                    }}
                    type="file"
                  />
                </Col>
                <Col
                  className="fs-16 w-100 text-white justify-content-center d-flex p-0 m-0 round-edges p-2 mt-2"
                  style={{ background: "#4a915b" }}
                >
                  DORMITORY 2
                </Col>
                <Col className="p-0 m-0 border-bottom border-dark border-2  w-100">
                  <input
                    className="px-3 p justify-content-start p-0 text-dark  m-0 border-0"
                    type="text"
                    value={""}
                    style={{ background: "none" }}
                    onChange={(e: any) => {}}
                  />
                </Col>
              </Col>
              <Col
                md={3}
                xs={3}
                sx={3}
                lg={3}
                className={`align-items-center col-12 flex-column m-0 justify-content-center position-relative d-flex `}
              >
                <Col
                  className={`p-0 m-0 justify-content-center position-relative align-self-center d-flex w-100 ${style.reasonCard}`}
                  style={{
                    background: "#7dc07c",
                  }}
                >
                  <Card.Img
                    className={`p-0 m-0 justify-content-center position-relative ${style.reasonCard}`}
                    style={{
                      // width: "100%",
                      padding: "0px !important",
                      margin: "0px !important",
                      background: `url(${preview.single})`,
                    }}
                    // src={require("../../../Assets/accomodation.png")}
                  />
                  <label
                    htmlFor="file-upload"
                    style={{
                      color: "#7dc07c",
                    }}
                    className="position-absolute top-0 pt-2 start-90"
                  >
                    <FaUpload color="green" />
                  </label>
                  <input
                    className="w-10 position-absolute"
                    id="file-upload"
                    accept=".jpg,.gif,.png"
                    style={{ visibility: "hidden" }}
                    placeholder=""
                    onChange={(event: any) => {
                      if (event.target.files?.length > 0) {
                        getBase64(event.target.files[0]).then((result) => {
                          setPreview({ ...preview, single: `${result}` });
                          fileUpload("SINGLE_ROOM", event);
                        });
                      }
                    }}
                    type="file"
                  />
                </Col>
                <Col
                  className="fs-16 w-100 text-white min-vh-0 justify-content-center d-flex p-0 round-edges p-2 m-0 mt-2"
                  style={{ background: "#4a915b" }}
                >
                  <span className="p-0 m-0">SINGLE ROOM</span>
                </Col>
                <Col className="p-0 m-0 border-bottom border-dark border-2 w-100">
                  <input
                    className="px-3 p justify-content-start p-0 text-dark  m-0 border-0"
                    type="text"
                    value={""}
                    style={{ background: "none" }}
                    onChange={(e: any) => {}}
                  />
                </Col>
              </Col>
            </Row>
          )}
          <Row className="d-flex">
            <Col className="justify-content-center d-flex lh-lg flex-column">
              {stayType.includes("HOTEL") && (
                <Col className="justify-content-start d-flex">
                  <Col className="p text-nowrap w-30 text-dark p-0 system-ui d-flex align-items-center">
                    Host Name:
                  </Col>
                  <div className="p-0 m-0 border-bottom border-dark border-2 d-flex align-items-center w-100">
                    <input
                      className="px-3 w-100 p p-0 m-0 justify-content-start text-dark m-0 border-0 border-dark"
                      type="text"
                      value={detail.hostName}
                      style={{ background: "none" }}
                      onChange={(e: any) =>
                        setState({
                          ...state,
                          ...detail,
                          hostName: e.target.value,
                        })
                      }
                    />
                  </div>
                </Col>
              )}
              {stayType.includes("HOTEL") && (
                <Col className="justify-content-start d-flex">
                  <Col className="p text-nowrap w-30 text-dark p-0 system-ui d-flex align-items-center">
                    Contact Number:
                  </Col>
                  <div className="p-0 m-0 border-bottom border-dark border-2 d-flex align-items-center w-100">
                    <input
                      className="px-3 w-100 p justify-content-start p-0 text-dark  m-0 border-0"
                      type="text"
                      value={detail.contactNumber}
                      style={{ background: "none" }}
                      onChange={(e: any) =>
                        setState({
                          ...state,
                          ...detail,
                          contactNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                </Col>
              )}
              <Col className="justify-content-start d-flex">
                <Col className="p text-nowrap w-40 text-dark p-0 system-ui d-flex align-items-center">
                  Active Email Address:
                </Col>
                <div className="p-0 m-0 border-bottom border-dark border-2 d-flex align-items-center w-100">
                  <input
                    className="px-3 w-100 p p-0 m-0 justify-content-start text-dark m-0 border-0 border-dark"
                    type="text"
                    value={detail.emailAddress}
                    style={{ background: "none" }}
                    onChange={(e: any) =>
                      setState({ ...state, emailAddress: e.target.value })
                    }
                  />
                </div>
              </Col>

              {!stayType.includes("HOTEL") && (
                <Col className="justify-content-start d-flex">
                  <Col className="p text-nowrap w-40 text-dark p-0 system-ui d-flex align-items-center">
                    Marketing team Contact:
                  </Col>
                  <div className="p-0 m-0 border-bottom border-dark border-2 d-flex align-items-center w-100">
                    <input
                      className="px-3 w-100 p justify-content-start p-0 text-dark  m-0 border-0"
                      type="text"
                      value={detail.marketingContact}
                      style={{ background: "none" }}
                      onChange={(e: any) =>
                        setState({ ...state, marketingContact: e.target.value })
                      }
                    />
                  </div>
                </Col>
              )}

              {!stayType.includes("HOTEL") && (
                <Col className="justify-content-start d-flex">
                  <Col className="p text-nowrap w-40 text-dark p-0 system-ui d-flex align-items-center">
                    Operations Team Contact:
                  </Col>
                  <div className="p-0 m-0 border-bottom border-dark border-2 d-flex align-items-center w-100">
                    <input
                      className="px-3 w-100 p justify-content-start p-0 text-dark  m-0 border-0"
                      type="text"
                      value={detail.opsContact}
                      style={{ background: "none" }}
                      onChange={(e: any) =>
                        setState({ ...state, opsContact: e.target.value })
                      }
                    />
                  </div>
                </Col>
              )}
            </Col>
            <Col className="col-3 align-self-center justify-content-center d-flex">
              <Button
                className="align-items-center bg-primary justify-content-center d-flex"
                onClick={() => submit()}
              >
                <span className="display-6">Submit</span>
              </Button>
            </Col>
          </Row>
        </Col>
      </Col>
    </section>
  );
};

export default RegistrationForm;
