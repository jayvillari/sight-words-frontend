import React, { Component } from 'react';
import axios from 'axios';
import Word from './Word';
import Button from 'react-bootstrap/Button';

const baseURI = "http://localhost:3000/words";

class WordList extends Component {
    constructor() {
      super();
      this.state = {
        words: [{word: 'test'}, {word: 'test'}],
        index: 0,
      }
    }

    componentDidMount() {
      this.getWords().then(result => this.setState({
        words: result.data[0]
      }))
      //console.log(this.state.words)
    }
  
    getWords=() => {
        let urlForGet = `${baseURI}`
        return axios.get(urlForGet);
    }
  
    render() {
      return (
        <>
            <Word words={this.state.words} index={this.props.currentIndex}/>
        </>
      )
    }
}

export default WordList;
