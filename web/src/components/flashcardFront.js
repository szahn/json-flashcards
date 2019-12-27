import React from 'react';
import {Flashcard} from './flashcard';

export function FlashcardFront(props) {
    return (
        <div className="flashcard-front">
            <Flashcard content={props.card.front}/>
            <div className="flashcard-controls center center-text">
                <button onClick={props.flipCard}>Flip</button>
            </div>
        </div>
    )
}