import React, { Component } from "react";
import axios from "axios";
import Word from "./Word";
import { getWords } from "./Api";

const baseURI = "http://localhost:3000";
console.log(getWords());

class WordList extends Component {
  constructor() {
    super();
    this.state = {
      words: [], //[{ word: "default" }]
      index: 0,
      numWords: 0,
    };
  }

  componentDidMount() {
    const that = this;
    if (!this.props.isChild){
      that.setState({
        words: getWords(),
        numWords: 10,
      })
      that.props.setNumWords(10);
    } else {
    this.getWords().then((result) => {
      that.setState({
        words: result.data[0],
        numWords: result.data[0].length,
      }) 
      //console.log(result.data[0]);
      that.props.setNumWords(result.data[0].length);
    });}
  }

  getWords = () => {
    let urlForGet = `${baseURI}`;
    if (this.props.isChild) {
      urlForGet = urlForGet + "/child";
    } else {
      urlForGet = urlForGet + "/adult";
    }
    return axios.get(urlForGet);
  };

  render() {
    return (
      <>
        <Word words={this.state.words} index={this.props.currentIndex} isChild={this.props.isChild}/>
      </>
    );
  }
}

export default WordList;
