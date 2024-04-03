import React, { FC } from "react";
import { Button, Col } from "react-bootstrap";
import { journeyOptions } from "../../common/enum/enum";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
import { useSelector } from "react-redux";
import { MdDownloadForOffline } from "react-icons/md";
const UserManual: FC = () => {
  const screenSize = useSelector(selectScreenSize);

  return (
    <>
      <Col
        className="home-about-section sectionContainer d-flex justify-content-center py-42 px-0"
        id="about"
      >
        <Col lg={11} md={11} sx={11} xs={11}>
          <Col className="card-body w-100">
            {
              <>
                <span
                  className="display-3 text-outline fw-bold flex-row position-relative"
                  style={{
                    color: "#EA8A04",
                    fontFamily: "DISTILLERYSTRONG",
                    // fontSize: screenSize.screenSize < 786 ? "5.5dvi" : "6dvi",
                  }}
                >
                  User Manual
                </span>
              </>
            }
          </Col>
          {}
          <Col md={12} lg={12} className="justify-content-between p-0 d-flex">
            <div
              style={{
                flex: "row !important",
                width: "100%",
              }}
              className={`
              d-flex flex-row 
              p-0`}
            >
              <Col
                className={`${"my-2 mx-1"} `}
                style={{
                  float: "inherit",
                  width: "30%",
                  height: "60%",
                  objectFit: "cover",
                }}
                onClick={() => {}}
              >
                <img
                  src={journeyOptions[0].imgPath}
                  alt="Paris"
                  style={{
                    float: "inherit",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Button className="align-items-center mh-15 mt-2 w-100 bg-dark-blue justify-content-center d-flex">
                  <span
                    onClick={() => {}}
                    className="bold fs-auto p-2 d-inline-flex m-0 fw-bold"
                    style={{ fontFamily: "OldStandard" }}
                  >
                    Download
                  </span>
                  <span className="text-nowrap">
                    <MdDownloadForOffline
                      size={screenSize.screenSize < 786 ? "20px" : "30px"}
                      onClick={() => {}}
                    />
                  </span>
                </Button>
              </Col>
              <Col
                className={`${"my-2 mx-1"} `}
                style={{
                  float: "inherit",
                  width: "30%",
                  height: "60%",
                  objectFit: "cover",
                }}
                onClick={() => {}}
              >
                <img
                  src={journeyOptions[0].imgPath}
                  alt="Paris"
                  style={{
                    float: "inherit",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Button className="align-items-center mh-15 mt-2 w-100 bg-dark-blue justify-content-center d-flex">
                  <span
                    onClick={() => {}}
                    className="bold fs-auto p-2 d-inline-flex m-0 fw-bold"
                    style={{ fontFamily: "OldStandard" }}
                  >
                    Download
                  </span>
                  <span className="text-nowrap">
                    <MdDownloadForOffline
                      size={screenSize.screenSize < 786 ? "20px" : "30px"}
                      onClick={() => {}}
                    />
                  </span>
                </Button>
              </Col>
              <Col
                className={`${"my-2 mx-1"} `}
                style={{
                  float: "inherit",
                  width: "30%",
                  height: "60%",
                  objectFit: "cover",
                }}
                onClick={() => {}}
              >
                <img
                  src={journeyOptions[0].imgPath}
                  alt="Paris"
                  style={{
                    float: "inherit",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Button className="align-items-center mh-15 mt-2 w-100 bg-dark-blue justify-content-center d-flex">
                  <span
                    onClick={() => {}}
                    className="bold fs-auto p-2 d-inline-flex m-0 fw-bold"
                    style={{ fontFamily: "OldStandard" }}
                  >
                    Download
                  </span>
                  <span className="text-nowrap">
                    <MdDownloadForOffline
                      size={screenSize.screenSize < 786 ? "20px" : "30px"}
                      onClick={() => {}}
                    />
                  </span>
                </Button>
              </Col>
            </div>
          </Col>
        </Col>
      </Col>
    </>
  );
};

export default UserManual;
