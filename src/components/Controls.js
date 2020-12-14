import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
class Controls extends Component {
    render() {
        return (
            <>
                <div className="controls">
                    <Button variant="danger" size="lg" className="control-buttons">Incorrect</Button>{' '}                  
                    <Button variant="secondary" size="lg"className="control-buttons">Skip</Button>{' '}
                    <Button onClick={this.props.nextWord} variant="success" size="lg" className="control-buttons">Correct</Button>{' '}
                </div>
            </>
        )
    }
}

export default Controls;