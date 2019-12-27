import React from 'react';
import logo from './logo.svg';
import './App.css';
import {FlashcardDeck} from './components/flashcardDeck';

const deck = {
  title: "Untitled",
  author: "Anonymous",
  cards: [
    {
        front: "Mean Time to Recovery (MTTR)", 
        back: "Average time to recover service from an outage. Calculated by dividing the total maintenance time by the total number of maintenance actions over a given period of time.",
        hint: ""
    },
    {
        front: "Mean Time Between Failures (MTBF)", 
        back: "Average time between outages.",
        hint: ""
    },
    {
        front: "Recovery Point Objective (RPO)", 
        back: "Interval of time in which data could be lost during a recovery. E.g. 5 minute RPO means up to 5 minutes of data could be lost.",
        hint: ""
    },
    {
        front: "Recovery Time Objective (RTO)", 
        back: "Time requirement for recovery to be completed in before there is business impact.",
        hint: ""
    },
  ]
}

function App() {
  return (
    <div className="App container row">
      <section>
        <FlashcardDeck deck={deck}/>
      </section>
    </div>
  );
}

export default App;
