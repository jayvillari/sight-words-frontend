import React, { Component } from "react";
import axios from "axios";
import Word from "./Word";

const baseURI = "http://localhost:3000";

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
    this.getWords().then((result) =>
      this.setState({
        words: result.data[0],
        numWords: result.data[0].length,
      })
    );
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
        <Word words={this.state.words} index={this.props.currentIndex} />
      </>
    );
  }
}

export default WordList;
