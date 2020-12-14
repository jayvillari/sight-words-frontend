import React, { Component } from "react";
import WordList from "./WordList";

class Child extends Component {
  render() {
    return (
      <>
        <WordList />
      </>
    );
  }
}

export default Child;
