import React from 'react';

export function Flashcard(props) {
    return (
        <div className="flashcard flashcard-content plantation-theme center center-text">
            {props.title && <span className="memorization flashcard-content-title">{props.title}</span>}
            <p className="memorization flashcard-content-paragraph">
                {props.content}
            </p>
        </div>
    )
}