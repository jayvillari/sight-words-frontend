import React, { Component } from 'react';
import Word from './Word';

class WordList extends Component {
    render() {
        return (
            <>
                <h4>Word List</h4>
                <Word/>
                <Word/>
                <Word/>
            </>
        )
    }
}

export default WordList;