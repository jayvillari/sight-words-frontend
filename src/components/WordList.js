import React, { Component } from 'react';
import axios from 'axios';
import Word from './Word';

const baseURI = "http://localhost:3000/words";

class WordList extends Component {
    constructor() {
      super();
      this.state = {
        words: ''
      }
    }

    componentDidMount() {
      // fetch the project name, once it retrieves resolve the promsie and update the state. 
      this.getWords().then(result => this.setState({
        words: result
      }))
    }
  
    getWords=() => {
        let urlForGet = `${baseURI}`
        return axios.get(urlForGet);
    }
  
    render() {
      return (
        <Word defaultValue ={this.words}/>
      )
    }
}

export default WordList;