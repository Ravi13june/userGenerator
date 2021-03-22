import React from "react";
import { Card, CardBody, CardTitle, CardText, CardFooter } from "reactstrap";
import { FaMapMarkedAlt, FaEnvelope } from "react-icons/fa";

const CardData = ({ details }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
          alt="UserPhoto"
        />
        <CardTitle className="text-primary ">
          <h1>
            <spam className="pr-2">{details.name?.title}</spam>
            <spam>{details.name?.first}</spam>
            <spam>{details.name?.last}</spam>
          </h1>
        </CardTitle>
        <CardText>
          <FaMapMarkedAlt />
          {details.location?.city}
        </CardText>
        <CardFooter>
          <h6>
            <FaEnvelope />
            {details.email}
          </h6>
          <h6>Age:{details.dob?.age}</h6>
        </CardFooter>
      </CardBody>
    </Card>
  );
};

export default CardData;
