import React, { Component } from 'react';
import WordList from './WordList';

class Child extends Component {
    render() {
        return (
            <>
                <h3>Child Component</h3>
                <WordList/>
            </>
        )
    }
}

export default Child;