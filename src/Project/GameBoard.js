import React, { useState, useEffect } from "react"; 
import Data from "./Data";
import Card from "./Card"; 

function GameBoard() {
 
  const [cardsArray, setCardsArray] = useState([]); 
  const [moves, setMoves] = useState(0); 
  const [firstCard, setFirstCard] = useState(null); 
  const [secondCard, setSecondCard] = useState(null);
  const [stopFlip, setStopFlip] = useState(false); 
  const [won, setWon] = useState(0); 

  // Function to start a new game
  function NewGame() {
    setTimeout(() => {
      
      const randomOrderArray = Data.sort(() => 0.5 - Math.random());
      setCardsArray(randomOrderArray); 
      setMoves(0); 
      setFirstCard(null); 
      setSecondCard(null);
      setWon(0); 
    }, 1200); 
  }

  // Function to handle card selection
  function handleSelectedCards(item) {
    if (firstCard !== null && firstCard.id !== item.id) {
      setSecondCard(item); 
    } else {
      setFirstCard(item); 
    }
  }

  // Function to check if the two selected cards match
  useEffect(() => {
    if (firstCard && secondCard) {
      setStopFlip(true); 

      if (firstCard.name === secondCard.name) {

        setCardsArray((prevArray) => {
          return prevArray.map((unit) => {
            if (unit.name === firstCard.name) {
              return { ...unit, matched: true }; 
            } else {
              return unit;
            }
          });
        });
        setWon((prevVal) => prevVal + 1); 
        removeSelection(); 
      } else {
       
        setTimeout(() => {
          removeSelection();
        }, 1000);
      }
    }
  }, [firstCard, secondCard]);


  function removeSelection() {
    setFirstCard(null); 
    setSecondCard(null); 
    setStopFlip(false); 
    setMoves((prevValue) => prevValue + 1); 
  }


  useEffect(() => {
    NewGame();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Memory Game</h1>
      </div>
      <div className="board">
        {

          cardsArray.map((item) => (
            <Card
              item={item}
              key={item.id}
              handleSelectedCards={handleSelectedCards}
              toggled={item === firstCard || item === secondCard || item.matched}
              stopflip={stopFlip}
            />
          ))
        }
      </div>

      <div className="comments">
        {
          won !== 6
            ? `Moves: ${moves}`
            : `You Won in ${moves} moves!` 
        }
      </div>

      <button className="button" onClick={NewGame}>New Game</button>
    </div>
  );
}

export default GameBoard;
