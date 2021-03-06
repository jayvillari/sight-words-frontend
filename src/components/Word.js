import React, { Component } from "react";
import Card from "react-bootstrap/Card";
class Word extends Component {
  render() {
    //console.log(this.props.words[this.props.index].word) //words[0].word
    //console.log(this.props.words[this.props.index].definition);
    return (
      <Card
        bg="green"
        style={{ width: "18rem" }}
        className={!this.props.isChild ? "mb-2 flip-card" : "mb-2"}
      >
        <Card.Body>
          <Card.Title className="side front">
            {this.props.words.length
              ? this.props.words[this.props.index].word
              : ""}
          </Card.Title>

          <Card.Text className="side back">
            {this.props.words.length
              ? this.props.words[this.props.index].definition
              : ""}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
export default Word;
