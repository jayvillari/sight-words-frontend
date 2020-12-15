import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Controls extends Component {
    render() {
        return (
            <>
                <div className="controls">
                    <Button onClick={this.props.markAsIncorrect} variant="danger" size="lg" className="control-buttons">Incorrect</Button>{' '}                  
                    <Button onClick={this.props.skipWord} variant="secondary" size="lg"className="control-buttons">Skip</Button>{' '}
                    <Button onClick={this.props.markAsCorrect} variant="success" size="lg" className="control-buttons">Correct</Button>{' '}
                </div>
            </>
        )
    }
}

export default Controls;