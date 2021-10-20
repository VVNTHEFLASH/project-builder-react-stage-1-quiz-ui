import React, { Component } from 'react'
import './quizcomponent.css';


export default class Quizcomponent extends Component {
    render() {
        return (
            <div className='quiz-container'>
                <div className='question-container'>
                <h1>Question</h1>
                <h3>Which is the only that can't jump?</h3>
                <span>4 of 15</span>
                </div>
                <div className='choice-btn'> 
                    <button>Dog</button>
                    <button>Goat</button>
                    <button>Elephant</button>
                    <button>Lion</button>
                </div>
                <div className='action-btn'>
                    <button id='p-btn'>Previous</button>
                    <button id='n-btn'>Next</button>
                    <button id='q-btn'>Quit</button>
                </div>
            </div>
        )
    }
}
