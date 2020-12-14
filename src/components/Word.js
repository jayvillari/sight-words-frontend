import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
class Word extends Component {
  render() {
      console.log(this.props.words[this.props.index].word) //words[0].word
    return (
      <>
        <Card bg='green' style={{ width: '18rem' }} className='mb-2'>
          <Card.Body>
            <Card.Title>{this.props.words[this.props.index].word}</Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default Word;
