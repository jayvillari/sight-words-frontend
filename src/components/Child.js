import React, { Component } from "react";
import Controls from "./Controls";
import WordList from "./WordList";

class Child extends Component {
  constructor() {
    super();
    this.state = {
      currentCardIndex: 0,
      skipCardIndex: ''
    }
  }
  render() {
    return (
      <>
        <WordList currentIndex={this.state.currentCardIndex}/>
        <Controls nextWord={this.nextWord}/>
      </>
    );
  }
  nextWord = () => {
    this.setState({
      currentCardIndex: this.state.currentCardIndex + 1,
      })
      console.log(this.state.currentCardIndex);
    }
}

export default Child;
