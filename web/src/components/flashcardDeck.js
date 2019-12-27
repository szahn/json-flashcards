import React, {useState} from 'react';
import {FlashcardFront} from './flashcardFront';
import {FlashcardBack} from './flashcardBack';

export function FlashcardDeck(props) {

    const [deckState, setDeskState] = useState({cardIndex: 0, cardSide: 'front'});

    const nextCard = () => setDeskState({cardIndex: (deckState.cardIndex + 1) % props.deck.cards.length, cardSide: 'front'});

    const markCorrect = () => nextCard();
    const markForReview = () => nextCard();
    const flipCard = () => setDeskState({cardIndex: deckState.cardIndex, cardSide: deckState.cardSide === 'front' ? 'back' : 'front'});
    const showHint= () => null;

    return (
        <div className="flashcard-deck">
            <div className="center center-text deck-title">{`${props.deck.title} - ${1 + deckState.cardIndex} / ${props.deck.cards.length} flashcards`}</div>
            <div className="flashcard-side-container">
                {deckState.cardSide === 'front' && <FlashcardFront card={props.deck.cards[deckState.cardIndex]} flipCard={flipCard}/>}
                {deckState.cardSide === 'back' && <FlashcardBack card={props.deck.cards[deckState.cardIndex]} 
                    flipCard={flipCard} 
                    markCorrect={markCorrect} 
                    markForReview={markForReview} 
                    showHint={showHint}/>}
            </div>
        </div>
    )
}