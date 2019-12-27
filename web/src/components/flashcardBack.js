import React from 'react';
import {Flashcard} from './flashcard';

export function FlashcardBack(props) {
    return (
        <div className="flashcard-back">
            <Flashcard content={props.card.back} title={props.card.front}/>
            <div className="flashcard-controls center center-text">
                <button onClick={props.flipCard}>Flip</button>
                <button onClick={props.markCorrect}>Correct</button>
                <button onClick={props.markForReview} className="red-border">Review</button>
                <button onClick={props.showHint}>Hint</button>
            </div>
        </div>
    )
}