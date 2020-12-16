import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
class Word extends Component {
  render() {
      //console.log(this.props.words[this.props.index].word) //words[0].word
    return (
      <>
        <Card bg='green' style={{ width: '18rem' }} className='mb-2'>
          <Card.Body>
            <Card.Title>{this.props.words.length ? this.props.words[this.props.index].word : ''}</Card.Title>
            <div className="back-of-card">
              {this.props.words.length ? this.props.words[this.props.index].definition : ''}
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default Word;
