import React, { FC, useState } from "react";
import ContainerSection from "../../common/container/Container";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import FormInput from "../../common/formInput/FormInput";
import { useSelector } from "react-redux";
import { selectedLocation } from "../../../state/selectors/selectGlobeData";

const Explore: FC = () => {
  const destination = useSelector(selectedLocation);
  const [tourDetail, setTourDetail] = useState({
    country: destination.city,
    startDate: "",
    endDate: "",
  });
  return (
    <ContainerSection>
      <Card.Title className="py-5 ft-32">
        Explore your next destination
      </Card.Title>
      <Card className="p-3">
        <Form>
          <Row className="justify-content-center">
            <FormInput
              direction={Col}
              value={tourDetail.country}
              label={""}
              className="w-75 ms-2 p-0"
              type={"text"}
              placeHolder={"Enter a Destination"}
              controlId={"forGridFirstName"}
              onchange={(e: any) =>
                setTourDetail({ ...tourDetail, country: e.target.value })
              }
            />

            <FormInput
              direction={Col}
              value={tourDetail.startDate}
              floatingLabel={"From:"}
              type={"date"}
              className="w-25 p-0 mx-2"
              labelStyling="w-25"
              inputStyling="w-25"
              placeHolder={"Last name"}
              controlId={"forGridLastName"}
              onchange={(e: any) =>
                setTourDetail({ ...tourDetail, startDate: e.target.value })
              }
            />
            <FormInput
              direction={Col}
              value={tourDetail.endDate}
              floatingLabel={"To:"}
              type={"date"}
              className="w-25 p-0"
              labelStyling="w-20"
              placeHolder={"Last name"}
              controlId={"forGridLastName"}
              onchange={(e: any) =>
                setTourDetail({ ...tourDetail, endDate: e.target.value })
              }
            />
            <Button onClick = {()=>console.log(tourDetail)} className="row mx-2 w-10 p-0 m-0">Submit</Button>
          </Row>
        </Form>
      </Card>
    </ContainerSection>
  );
};

export default Explore;
