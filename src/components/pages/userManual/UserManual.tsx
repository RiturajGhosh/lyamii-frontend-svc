import React, { FC } from "react";
import { Button, Col } from "react-bootstrap";
import { manuals } from "../../common/enum/enum";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
import { useSelector } from "react-redux";
import { MdDownloadForOffline } from "react-icons/md";

const UserManual: FC = () => {
  const screenSize = useSelector(selectScreenSize);

  const downloadFileFromGoogleDrive = async (url: string) => {
    // try {
    // const response = await axios({
    //   url: `https://drive.google.com/uc?export=download&id=${fileId}`,
    //   method: "GET",
    //   responseType: "blob", // Important to specify blob response type
    // });
    const link = document.createElement("a");
    link.href = url;
    link.download = "file.pdf"; // Specify the download filename
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link); // Clean up the link element
    // } catch (error) {
    //   console.error("Error downloading the file:", error);
    // }
  };

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
          <Col className="justify-content-between p-0 d-flex">
            <div
              style={{
                width: "100%",
              }}
              className={`
              d-flex flex-wrap
              p-0`}
            >
              {manuals.map((option: any, index: number) => {
                return (
                  <Col
                    md={4}
                    lg={4}
                    sm={6}
                    xs={12}
                    key={index}
                    className="d-flex flex-column col-4 top-0 my-3"
                    style={{
                      float: "inherit",
                      objectFit: "cover",
                    }}
                    onClick={() => downloadFileFromGoogleDrive(option?.path)}
                  >
                    <img
                      src={option?.imgPath}
                      alt="Paris"
                      style={{
                        float: "inherit",
                        width: "90%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <Button className="align-items-center position-relative mh-15 mt-2 w-90 bg-dark-blue justify-content-center d-flex">
                      <span
                        onClick={() =>
                          downloadFileFromGoogleDrive(option?.path)
                        }
                        className="bold fs-auto p-2 d-inline-flex m-0 fw-bold"
                        style={{ fontFamily: "OldStandard" }}
                      >
                        Download
                      </span>

                      <span className="text-nowrap">
                        <MdDownloadForOffline
                          size={screenSize.screenSize < 786 ? "20px" : "30px"}
                          onClick={() =>
                            downloadFileFromGoogleDrive(option?.path)
                          }
                        />
                      </span>
                    </Button>
                  </Col>
                );
              })}
            </div>
          </Col>
        </Col>
      </Col>
    </>
  );
};

export default UserManual;
