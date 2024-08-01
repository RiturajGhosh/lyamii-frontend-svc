import React, { FC, useEffect, useState } from "react";
import { Col, Row, Container, Form } from "react-bootstrap";
import SubCard from "../../common/subCard/SubCard";
import { useDispatch, useSelector } from "react-redux";
import { selectUserPrivacy } from "../../../state/selectors/selectUserData";
import { SET_USER_PRIVACY } from "../../../state/actions/types/userDataActionType";

export type PrefenceDto = {
  checked: boolean;
  label: string;
  value: string;
};
const PrivacyAndSecurity: FC = () => {
  const userPrivacy = useSelector(selectUserPrivacy);
  const dispatch = useDispatch();
  const [privacy, setPrivacy] = useState<any[]>([
    { checked: false, label: "Private", value: "Private" },
    { checked: false, label: "Public", value: "Public" },
  ]);
  const handler = (label: string) => {
    const d = privacy;
    d.forEach((data) => {
      if (data.label === label) {
        data.checked = !data.checked;
      }
    });
    let pref = d
      .filter((data) => data.checked && data)
      .map((data) => data.value);
    dispatch({
      type: SET_USER_PRIVACY,
      payload: pref,
    });
  };

  useEffect(() => {
    const d = privacy;
    d.forEach((data) => {
      if (userPrivacy.includes(data.label)) {
        data.checked = true;
      }
    });
    setPrivacy(d);
  }, [userPrivacy]);
  return (
    <div
      className={`bg-violet-blue px-4 min-vh-100 mw-100 w-100 align-items-center justify-content-end d-flex m-0`}
    >
      <Container
        fluid="lg"
        className="p-0 m-0 min-vh-100 justify-content-end d-flex flex-column w-100"
      >
        <Row className="p-0 m-0 min-vh-100 align-items-start justify-content-end d-flex">
          <Col className="col-12 py-5 m-0 gap-4 align-items-center d-grid p-0">
            <Col>
              <div
                className="py-5 display-5 fw-bold justify-content-start font-weight-normal pl-2 text-shadow-dark p-2"
                style={{ color: "#0752a1" }}
              >
                Privacy and Security Management
              </div>
            </Col>
            <Row className="align-items-center">
              {privacy &&
                privacy?.map((p: any, index: number) => {
                  return (
                    <Col md={6} sm={6} lg={3} xs={3} sx={6} key={index}>
                      <SubCard
                        titleClassName="small text-dark shadow bg-blue"
                        className="my-3"
                        cardColor="#e4e9ff "
                      >
                        <Row className="mt-2">
                          <Col
                            style={{ minHeight: "29px" }}
                            className="fs-auto pt-0 p-2 text-dark m-0 font-weight-normal"
                          >
                            <Row className="p-0 m-0">
                              <Col className="p-0 m-0 mx-3 ml-0 col-2">
                                <Form.Check
                                  type={"checkbox"}
                                  id={""}
                                  key={index}
                                >
                                  <Form.Check.Input
                                    className="pointer"
                                    checked={p.checked ? true : false}
                                    onChange={(e) => {
                                      e.preventDefault();
                                      handler(p.label);
                                    }}
                                    type={"checkbox"}
                                    isValid
                                  />
                                </Form.Check>
                              </Col>
                              <Col
                                key={index}
                                className="fs-6 p-0 m-0 align-items-center text-start justify-content-start d-flex"
                              >
                                {p.label}
                              </Col>
                            </Row>
                          </Col>
                        </Row>
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
export default PrivacyAndSecurity;
