import React, { FC, useState } from "react";
import { Button, Col, Row, Form, Card } from "react-bootstrap";
import FormInput from "../../common/formInput/FormInput";
import PhoneInput from "react-phone-number-input";
import RoundButton from "../../common/roundButton/RoundButton";

const PassportRegistrationForm: FC = () => {
  const [detail, setDetail] = useState({
    fullName: "",
    lastName: "",
    city: "",
    zipcode: "",
    state: "",
    Adhaar: "",
    phone: "",
    station: "",
    email: "",
    check: "off",
  });
  const [step, setStep] = useState(3);

  return (
    <div
      className={`bg-white align-content-start flex-wrap p-5 min-vh-100 min-vw-100 mw-100 w-100 align-items-center justify-content-end d-flex m-0`}
    >
      <Row className="py-42 g-5 flex-lg-row flex-column-reverse">
        <Col
          lg={6}
          className="col-12 position-relative align-items-center d-flex flex-column align-self-start justify-content-start"
          // style={{ top: "90px" }}
        >
          <Col className="p-0 m-0 text-align-start flex-column d-flex">
            <h6>
              Already have a Passport?{" "} 
              <label
                htmlFor="file-upload"
                style={{
                  cursor: "pointer"
                }}
              >
                Upload here
                <input
                  id="file-upload"
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e: any) => e.target.files[0]}
                />
              </label>
            </h6>
            <div
              className="border-2 border my-2"
              style={{ border: "#14a8e3" }}
            ></div>

            <p>Generate your passport in just 3 steps!</p>

            <h6 className="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
            </h6>
            <ul>
              <li>
                Fill up the required details and upload your documentations.
              </li>
              <li>Pay online seamlessly & securely.</li>
              <li>Visit offline center and you will get it within few days</li>
            </ul>
          </Col>
        </Col>
        <Col
          lg={6}
          className="col-12 align-self-start position-relative"
          // style={{ top: "90px" }}
        >
          <Form className="gap-4 d-flex flex-column">
            <Col className="justify-content-center d-flex">
              <Row className="position-relative align-items-center p-0 my-3 m-0 justify-content-center d-flex w-100">
                <Col className="col-1 d-flex position-relative p-0 m-0">
                  <RoundButton
                    className="border-5 border circle-core"
                    bordercolor="#0e3c30"
                    size={"calc(0.10*100vw"}
                    fill={"#8dc498"}
                  />
                </Col>
                <Col className="col-1 active text-center p-0 m-0 w-10">
                  {"step 1"}
                </Col>
                <Col className="col-1 border-2 border p-0 m-0 w-10 timeline-line"></Col>
                <Col className="col-1 d-flex position-relative p-0 m-0">
                  <RoundButton
                    className="border-5 border circle-core"
                    bordercolor="#0e3c30"
                    size={"calc(0.10*100vw"}
                    fill={"#8dc498"}
                  />
                </Col>
                <Col className="col-1 active text-center p-0 m-0 w-10">
                  {"step 2"}
                </Col>
                <Col className="col-1 border-2 border p-0 m-0 w-10 timeline-line"></Col>
                <Col className="col-1 d-flex position-relative p-0 m-0">
                  <RoundButton
                    className="border-5 border circle-core"
                    bordercolor="#0e3c30"
                    size={"calc(0.10*100vw"}
                    fill={"#8dc498"}
                  />
                </Col>
                <Col className="col-1 active text-center p-0 m-0 w-10">
                  {"step 3"}
                </Col>
              </Row>
            </Col>
            {step === 1 && (
              <Col className="gap-5 d-flex flex-column">
                <FormInput
                  direction={Col}
                  value={detail.fullName}
                  inputStyling={"border-0"}
                  className="border-bottom border-dark"
                  type={"text"}
                  placeHolder={"Name"}
                  controlId={"forGridFirstName"}
                  onchange={(e: any) => {
                    setDetail({ ...detail, fullName: e.target.value });
                  }}
                />
                <Col>
                  <h6 className="small p-0 m-0">phone</h6>
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={detail.phone}
                    defaultCountry="IN"
                    className="flex-row d-flex"
                    onChange={(value: any) =>
                      setDetail({ ...detail, phone: value })
                    }
                  />
                </Col>
                <FormInput
                  direction={Col}
                  value={detail.email}
                  type={"email"}
                  className="border-bottom border-dark"
                  placeHolder={"Email Address"}
                  inputStyling={"border-0"}
                  controlId={"formGridEmail"}
                  onchange={(e: any) =>
                    setDetail({ ...detail, email: e.target.value })
                  }
                />
                <Col>
                  <h6 className="small p-0 m-0">Upload Your Adhaar</h6>
                  <div className="p-0  m-0">
                    <input
                      className="form-control bg-white p-0 m-0 border-0"
                      type="file"
                      value={detail.Adhaar}
                      style={{ background: "#19bca1" }}
                      onChange={(e: any) =>
                        setDetail({ ...detail, Adhaar: e.target.value })
                      }
                      id="formFile"
                    />
                  </div>
                  <h6 className="small">Document format should be in .pdf </h6>
                </Col>
              </Col>
            )}
            {step === 2 && (
              <Col className="gap-5 d-flex flex-column">
                <Form.Group
                  as={Col}
                  className="border-bottom border-dark"
                  controlId="formGridState"
                >
                  <Form.Label>Passport Seva Kendra</Form.Label>
                  <Form.Select
                    className="border-0"
                    value={detail.city}
                    // onSelect={(e: any) =>
                    //   setDetail({ ...detail, city: e.target.value })
                    // }
                    onClick={(e: any) =>
                      setDetail({ ...detail, city: e.target.value })
                    }
                    defaultValue="Select Your Preferable City"
                  >
                    <option value="1">Select Your Preferable City</option>
                    <option value="2">mumbai</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            )}
            {step === 3 && (
              <Col className="gap-4 d-flex flex-column">
                <FormInput
                  value={detail.station}
                  type={"text"}
                  inputStyling={"border-0 p-0 m-0"}
                  className="border-bottom border-dark"
                  placeHolder={"Nearly Police Station"}
                  controlId={"forGridAddress"}
                  onchange={(e: any) =>
                    setDetail({ ...detail, station: e.target.value })
                  }
                />

                <Row className="gap-3">
                  <Form.Group
                    as={Col}
                    className="border-bottom p-0 m-0 border-dark"
                    controlId="formGridState"
                  >
                    <Form.Label>Day</Form.Label>
                    <Form.Select
                      className="border-0 p-0 m-0"
                      defaultValue="Select Day"
                    >
                      <option>Select Day</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    className="border-bottom p-0 m-0 border-dark"
                    controlId="formGridState"
                  >
                    <Form.Label>Month</Form.Label>
                    <Form.Select
                      className="border-0 p-0 m-0"
                      defaultValue="Select Month"
                    >
                      <option>Select Month</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    className="border-bottom border-dark"
                    controlId="formGridState"
                  >
                    <Form.Label>Year</Form.Label>
                    <Form.Select
                      className="border-0 p-0 m-0"
                      defaultValue="2023"
                    >
                      <option>2023</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Col>
                  <h6 className="small p-0 m-0">Upload Birth Certificate</h6>
                  <div className="p-0  m-0">
                    {" "}
                    <input
                      className="form-control bg-white p-0 m-0 border-0"
                      type="file"
                      value={detail.city}
                      style={{ background: "#19bca1" }}
                      onChange={(e: any) =>
                        setDetail({ ...detail, city: e.target.value })
                      }
                      id="formFile"
                    />
                  </div>
                </Col>
                <Row className="">
                  <Col className="col-7 p-0 m-0">
                    <Form.Group
                      as={Col}
                      className="border-bottom border-dark p-0 m-0 w-100"
                      controlId="formGridState"
                    >
                      <Form.Label>Education</Form.Label>
                      <Form.Select
                        className="border-0 p-0 m-0"
                        defaultValue="Select Qualification"
                      >
                        <option>Select Qualification</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>{" "}
                  </Col>
                  <Col className="col-5 flex-column justify-self-end">
                    <h6 className="small p-0 m-0">
                      Upload Education Certificate
                    </h6>
                    <div className="p-0 m-0">
                      {" "}
                      <input
                        className="form-control bg-white p-0 m-0 border-0"
                        style={{ background: "#19bca1" }}
                        type="file"
                        value={detail.Adhaar}
                        onChange={(e: any) =>
                          setDetail({ ...detail, Adhaar: e.target.value })
                        }
                        id="formFile"
                      />
                    </div>
                  </Col>
                </Row>
                <div className="">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Your message to Lyamii"
                    rows={5}
                  ></textarea>
                </div>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <h6 className="small p-0 m-0">Consent</h6>
                  <Form.Check
                    type="checkbox"
                    label="Yes, I agree with the privacy policy and terms and condition"
                    value={detail.check}
                    onClick={(e: any) =>
                      setDetail({ ...detail, check: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
            )}

            <Row className="justify-content-between d-flex flex-row p-0 m-0">
              <Row className="w-50">
                {step > 1 && (
                  <Col className="justify-content-start d-flex">
                    <Button
                      style={{ background: "#19bca1" }}
                      className="fit-content "
                      onClick={() => setStep(step - 1)}
                      variant="primary"
                      type="submit"
                    >
                      {"Previous"}
                    </Button>
                  </Col>
                )}
                <Col className="justify-content-start fit-content align-self-center d-flex">
                  <Card.Text className="small" onClick={() => {}}>
                    Save as Draft
                  </Card.Text>
                </Col>
              </Row>
              <Col className="justify-content-end d-flex">
                <Button
                  style={{ background: step === 3 ? "#14a8e3" : "#19bca1" }}
                  className="fit-content "
                  onClick={() => {
                    if (
                      step === 1 &&
                      detail.fullName.length > 2 &&
                      detail.phone.length > 5 &&
                      detail.email.length > 6 &&
                      detail.Adhaar.length > 0
                    ) {
                      setStep(step + 1);
                    }
                    if (step === 2 && detail.city.length > 0) {
                      setStep(step + 1);
                    }
                  }}
                  variant="primary"
                  type="submit"
                >
                  {step === 3 ? "Pay to Continue" : "Next"}
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default PassportRegistrationForm;
