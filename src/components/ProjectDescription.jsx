import React from "react";
import { Card } from "react-bootstrap";

const ProjectDescription = ({ title, description, img }) => {
  return (
    <div className="col col-lg-3 col-md-6 col-sm-12 text-center pb-2">
      <Card style={{ width: "18rem" }} className="shadow">
        <Card.Img variant="top" src={img} alt="Card Image" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectDescription;
