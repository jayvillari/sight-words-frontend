import React, { Component } from 'react';
import Controls from "./Controls";
import WordList from "./WordList";

class Adult extends Component {
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
            <WordList currentIndex={this.state.currentCardIndex} isChild={false}/>
            <Controls nextWord={this.nextWord}/>
          </>
        );
      }
      nextWord = () => {
        this.setState({
          currentCardIndex: this.state.currentCardIndex + 1,
          })
        }
}

export default Adult;