import React, { Component } from "react";
import Card from "react-bootstrap/esm/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

class EndGame extends Component {
  render() {
    return (
      <div>
        <Card bg="" style={{ width: "18rem" }} className="mb-2">
          <Card.Body>
            <Card.Title className="endgame">Game Over</Card.Title>
            <Card.Text>
              <p>
                Total Correct<Badge variant="success">10</Badge>
              </p>
              <p>
                Total Wrong<Badge variant="success">10</Badge>
              </p>
              <Button>Play Again?</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default EndGame;
