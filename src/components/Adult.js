import React, { Component } from "react";

import WordList from "./WordList";
import Controls from "./Controls";
import ReactCardFlip from "react-card-flip";

class Adult extends Component {
  constructor() {
    super();
    this.state = {
      currentCardIndex: 0,
      skipCardIndex: "",
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
    console.log("clicked action");
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <WordList currentIndex={this.state.currentCardIndex}>
          This is the front
          <button onClick={this.handleClick}>Click to flip</button>
        </WordList>
        <Controls>This is the back</Controls>
      </ReactCardFlip>
    );
  }
}

export default Adult;
