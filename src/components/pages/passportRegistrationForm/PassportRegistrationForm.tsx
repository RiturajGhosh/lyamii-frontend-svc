import React, { FC, useState } from "react";
import { Button, Col, Row, Form, Card } from "react-bootstrap";
import FormInput from "../../common/formInput/FormInput";

const PassportRegistrationForm: FC = () => {
  const [detail, setDetail] = useState({
    firstName: "",
    lastName: "",
    city: "",
    zipcode: "",
    state: "",
    address: "",
    address2: "",
    email: "",
    password: "",
    check: "off",
  });
  return (
    <Card className="m-3 my-5 p-3">
      <Card.Title className="py-5 ft-32">Passport Registration Form</Card.Title>
      <Form>
        <Row className="mb-3">
          <FormInput
            direction={Col}
            value={detail.firstName}
            label={"First Name"}
            type={"text"}
            placeHolder={"First name"}
            controlId={"forGridFirstName"}
            onchange={(e: any) =>
              setDetail({ ...detail, firstName: e.target.value })
            }
          />

          <FormInput
            direction={Col}
            value={detail.lastName}
            label={"Last Name"}
            type={"text"}
            placeHolder={"Last name"}
            controlId={"forGridLastName"}
            onchange={(e: any) =>
              setDetail({ ...detail, lastName: e.target.value })
            }
          />
        </Row>
        <Row className="mb-3">
          <FormInput
            direction={Col}
            value={detail.email}
            label={"Email"}
            type={"email"}
            placeHolder={"Enter email"}
            controlId={"formGridEmail"}
            onchange={(e: any) =>
              setDetail({ ...detail, email: e.target.value })
            }
          />
          <FormInput
            direction={Col}
            value={detail.password}
            label={"Password"}
            type={"password"}
            placeHolder={"Password"}
            controlId={"forGridPassword"}
            onchange={(e: any) =>
              setDetail({ ...detail, password: e.target.value })
            }
          />
        </Row>

        <FormInput
          className="mb-3"
          value={detail.address}
          label={"Address"}
          type={"text"}
          placeHolder={"1234 Main St"}
          controlId={"forGridAddress"}
          onchange={(e: any) =>
            setDetail({ ...detail, address: e.target.value })
          }
        />

        <FormInput
          className="mb-3"
          value={detail.address2}
          label={"Address 2"}
          type={"text"}
          placeHolder={"Apartment, studio, or floor"}
          controlId={"forGridLastName"}
          onchange={(e: any) =>
            setDetail({ ...detail, address2: e.target.value })
          }
        />

        <Row className="mb-3">
          <FormInput
            direction={Col}
            value={detail.city}
            label={"City"}
            type={"text"}
            controlId={"forGridCity"}
            onchange={(e: any) =>
              setDetail({ ...detail, city: e.target.value })
            }
          />
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <FormInput
            direction={Col}
            value={detail.zipcode}
            label={"ZipCode"}
            type={"number"}
            controlId={"forGridZipCode"}
            onchange={(e: any) =>
              setDetail({ ...detail, zipcode: e.target.value })
            }
          />
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            value={detail.check}
            onClick={(e: any) =>
              setDetail({ ...detail, check: e.target.value })
            }
          />
        </Form.Group>

        <Button onClick={() => {}} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default PassportRegistrationForm;
