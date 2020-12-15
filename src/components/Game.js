import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import EndGame from "./EndGame";

class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-button1">
          <Button href="/child/auto" variant="success" size="lg">
            Start Game
          </Button>
        </div>
        <EndGame />
      </div>
    );
  }
}

export default Game;
