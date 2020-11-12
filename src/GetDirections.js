import React from "react";
import { Button, Container, Col } from "react-bootstrap";
function GetDirections() {
  return (
    <Container fluid>
      <div className="Map">
        <div className="Map-Address">
          <img className="Map-Pin" width="25px" height="25px" alt="Map-Pin" />
          <p>
            12348 Sunset blvd.<br></br>Hollywood,Fl 90028
          </p>
        </div>
        <Button size="sm" className="Directions-Btn">
          Get Directions
        </Button>
      </div>
    </Container>
  );
}
export default GetDirections;
