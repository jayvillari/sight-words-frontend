import React, { Component } from 'react';
import axios from 'axios';
import Word from './Word';

const baseURI = "http://localhost:3000/words";

class WordList extends Component {
    constructor() {
      super();
      this.state = {
        words: '',
        index: ''
      }
    }

    componentDidMount() {
      // fetch the project name, once it retrieves resolve the promsie and update the state. 
      this.getWords().then(result => this.setState({
        words: result.data[0]
      }))
      console.log(this.state.words)
    }
  
    getWords=() => {
        let urlForGet = `${baseURI}`
        return axios.get(urlForGet);
    }
  
    render() {
      return (
        <Word words={this.state.words} index={1}/>
      )
    }
}

export default WordList;
