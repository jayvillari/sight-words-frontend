import React, { Component } from "react";
import Controls from "./Controls";
import WordList from "./WordList";
import EndGame from "./EndGame";
import Dictaphone from "./Dictaphone";

class Adult extends Component {
  constructor() {
    super();
    this.state = {
      currentCardIndex: 0,
      numCorrect: 0,
      numIncorrect: 0,
      numSkipped: 0,
      numWords:0,
      counter: 1,
      gameOver: false,
      words: [],
    }
  }
  render() {
    const isGameOver = this.state.gameOver;
    const currentLocation = window.location.href;
    let card, controls;
    if (!isGameOver) {
      card = <WordList currentIndex={this.state.currentCardIndex} isChild={false} setNumWords={this.setNumWords} setWords={this.setWordsArray}/>;
    } else {
      card = <EndGame numCorrect={this.state.numCorrect} numIncorrect={this.state.numIncorrect} restartGame={this.restartGame}/>;
    }
    if (currentLocation.includes("/adult/auto")) {
      controls = <Dictaphone checkSpokenWord={this.checkSpokenWord} markAsCorrect={this.markAsCorrect} markAsIncorrect={this.markAsIncorrect} skipWord={this.skipWord} isGameOver={this.state.gameOver}/>;
    } else {
      controls = <Controls markAsCorrect={this.markAsCorrect} markAsIncorrect={this.markAsIncorrect} skipWord={this.skipWord} isGameOver={this.state.gameOver}/>;
    }
    return (
      <>
        {card}
        {controls}
      </>
    );
  }

  /////////////////////////////////////////////////////
  /// Get the next word unless no additional words 
  /// remain, then set the state of game over to true.
  /////////////////////////////////////////////////////
  nextWord = () => {
    if (this.state.counter === this.state.numWords) {
      this.setState({
        gameOver: true,
      })
    } else {
      this.setState({
        currentCardIndex: this.state.currentCardIndex + 1,
        counter: this.state.counter + 1,
        })
    }
  }
  
  /////////////////////////////////////////////////////
  /// Add one to the counter for the number of words
  /// correct and then go to the next word in the list.
  /////////////////////////////////////////////////////
  markAsCorrect = () => {
    this.setState({
      numCorrect: this.state.numCorrect + 1,
      })
      this.nextWord();
  }

  /////////////////////////////////////////////////////
  /// Add one to the counter for the number of words
  /// incorrect and then go to the next word in the list.
  /////////////////////////////////////////////////////
  markAsIncorrect = () => {
   this.setState({
      numIncorrect: this.state.numIncorrect + 1,
      })
      this.nextWord();
  }

  /////////////////////////////////////////////////////
  /// Add one to the counter for the number of words
  /// skipped and then go to the next word in the list.
  /////////////////////////////////////////////////////
  skipWord = () => {
    this.setState({
      numSkipped: this.state.numSkipped + 1,
      })
      this.nextWord();
  }

  /////////////////////////////////////////////////////
  /// Set the number of words in the word list.
  /////////////////////////////////////////////////////
  setNumWords = (num) => {
    this.setState({
      numWords: num,
    })
  }

  /////////////////////////////////////////////////////
  /// Reset the counters back to zero if the player
  /// chooses to play again.
  /////////////////////////////////////////////////////
  restartGame = () => {
    this.setState({
      currentCardIndex: this.state.currentCardIndex + 1,
      numCorrect: 0,
      numIncorrect: 0,
      numSkipped: 0,
      counter: 1,
      gameOver: false,
    })
  }

  checkSpokenWord = (spokenWord) => {
    console.log(spokenWord);
    console.log(this.state.words[this.state.currentCardIndex].word);
    if (spokenWord === this.state.words[this.state.currentCardIndex].word){
      this.markAsCorrect();
    } else {
      this.markAsIncorrect();
    }
  }

  setWordsArray = (arrWords) => {
    this.setState({
      words: arrWords,
    })
  }
}

export default Adult;
