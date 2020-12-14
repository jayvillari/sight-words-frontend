import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class Word extends Component {
  render() {
    return (
      <>
        <Card bg="green" style={{ width: "18rem" }} className="mb-2">
          <Card.Body>
            <Card.Title>{this.words}</Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Word;
