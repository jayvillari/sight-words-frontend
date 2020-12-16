import React, { Component } from "react";
import Card from "react-bootstrap/esm/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Confetti from "react-confetti";

class EndGame extends Component {
  render() {
    return (
      <div>
        <Confetti/>
        <Card bg="" style={{ width: "18rem" }} className="mb-2">
          <Card.Body>
            <Card.Title className="endgame">Game Over</Card.Title>
            <Card.Text>
              <p>
                Total Correct<Badge variant="success">{this.props.numCorrect}</Badge>
              </p>
              <p>
                Total Wrong<Badge variant="success">{this.props.numIncorrect}</Badge>
              </p>
              <Button onClick={this.props.restartGame}>Play Again?</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default EndGame;
