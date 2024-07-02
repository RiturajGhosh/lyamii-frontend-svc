import React, { FC, useEffect, useState } from "react";
import { Col, Row, Container, Form } from "react-bootstrap";
import SubCard from "../../common/subCard/SubCard";
import { useDispatch, useSelector } from "react-redux";
import { selectUserPrefence } from "../../../state/selectors/selectUserData";
import { SET_USER_PREFENCE } from "../../../state/actions/types/userDataActionType";

export type PrefenceDto = {
  checked: boolean;
  label: string;
  value: string;
};
const Prefences: FC = () => {
  const userPrefence = useSelector(selectUserPrefence);
  const dispatch = useDispatch();
  const [prefence, setPrefence] = useState<any[]>([
    { checked: false, label: "Luxury Tours", value: "Luxury Tours" },
    { checked: false, label: "⁠Regular Tours", value: "⁠Regular Tours" },
    {
      checked: false,
      label: "⁠Backpacking Tours",
      value: "⁠Backpacking Tours",
    },
    { checked: false, label: "⁠⁠Mountain", value: "⁠⁠Mountain" },
    { checked: false, label: "⁠Forest", value: "⁠Forest" },
    { checked: false, label: "⁠Ocean", value: "⁠Ocean" },
    { checked: false, label: "⁠Historic Places", value: "⁠Historic Places" },
    { checked: false, label: "⁠Solo", value: "⁠Solo" },
    { checked: false, label: "⁠Friends", value: "⁠Friends" },
    { checked: false, label: "⁠Family", value: "⁠Family" },
  ]);
  const handler = (label: string) => {
    const d = prefence;
    d.forEach((data) => {
      if (data.label === label) {
        data.checked = !data.checked;
      }
    });
    let pref = d
      .filter((data) => data.checked && data)
      .map((data) => data.value);
    dispatch({
      type: SET_USER_PREFENCE,
      payload: pref,
    });
  };

  useEffect(() => {
    const d = prefence;
    d.forEach((data) => {
      if (userPrefence.includes(data.label)) {
        data.checked = true;
      }
    });
    setPrefence(d);
  }, [userPrefence]);
  return (
    <div
      className={`bg-violet-blue px-4 min-vh-100 mw-100 w-100 align-items-center justify-content-end d-flex m-0`}
    >
      <Container
        fluid="lg"
        className="p-0 m-0 min-vh-100 justify-content-end d-flex flex-column w-100"
      >
        <Row className="p-0 m-0 min-vh-100 align-items-start justify-content-end d-flex">
          <Col className="col-12 py-4 m-0 gap-4 align-items-center d-grid p-0">
            <Col>
              <div
                className="py-5 display-5 fw-bold justify-content-start font-weight-normal pl-2 text-shadow-dark p-2"
                style={{ color: "#0752a1" }}
              >
                Prefence Management
              </div>
            </Col>
            <Row className="align-items-center">
              {prefence &&
                prefence?.map((p: any, index: number) => {
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
                                  id={''}
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
export default Prefences;
