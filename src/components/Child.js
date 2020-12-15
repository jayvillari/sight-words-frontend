import React, { Component } from "react";
import Controls from "./Controls";
import WordList from "./WordList";

class Child extends Component {
  constructor() {
    super();
    this.state = {
      currentCardIndex: 0,
      numCorrect: 0,
      numIncorrect: 0,
      numSkipped: 0,
    }
  }
  render() {
    console.log('Number Correct: ' + this.state.numCorrect);
    console.log('Number Incorrect: ' + this.state.numIncorrect);
    console.log('Number Skipped: ' + this.state.numSkipped);
    return (
      <>
        <WordList currentIndex={this.state.currentCardIndex} isChild={true}/>
        <Controls markAsCorrect={this.markAsCorrect} markAsIncorrect={this.markAsIncorrect} skipWord={this.skipWord}/>
      </>
    );
  }
  
  nextWord = () => {
    this.setState({
      currentCardIndex: this.state.currentCardIndex + 1,
      })
  }

    markAsCorrect = () => {
      this.setState({
        numCorrect: this.state.numCorrect + 1,
        })
        this.nextWord();
    }

    markAsIncorrect = () => {
     this.setState({
        numIncorrect: this.state.numIncorrect + 1,
        })
        this.nextWord();
    }

    skipWord = () => {
      this.setState({
        numSkipped: this.state.numSkipped + 1,
        })
        this.nextWord();
    }
}

export default Child;
