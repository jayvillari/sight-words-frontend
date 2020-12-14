import React, { Component } from 'react';
import axios from 'axios';
import Word from './Word';

const baseURI = "http://localhost:3000/words";

class WordList extends Component {
    constructor() {
      super();
      this.state = {
        words: [], //[{word: 'default'}],
        index: 0,
      }
    }

    componentDidMount() {
      this.getWords().then(result => this.setState({
        words: result.data[0]
      }))
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
