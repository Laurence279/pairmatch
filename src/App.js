import logo from './logo.svg';
import './App.css';
import Board from './components/Board'
import {useState} from "react";
import Hand from './components/Hand';
import Deck from './components/Deck';

function App() {

  const [gameStarted, setGameStarted] = useState(false);

  const [cards, setCards] = useState(null);

  const [p1Cards, setP1Cards] = useState([])
  const [p2Cards, setP2Cards] = useState([])

  const [squares, setSquares] = useState(
    [null, null, null,
     null, null, null,
     null, null, null]
)

async function handleStartGame() {
  const values = new Array(9);
  for (let i = 0; i < values.length; i++) {
    
    values[i] = getRandomValue(26, 2)
    
  }
  setSquares(values);

  const deck = await getDeck();
  setCards(deck)
  
  setGameStarted(true);
}

async function getDeck(){
  const response = await fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
  const data = await response.json();
  return data;
}

function getHand(player){
  return player === 1 ? p1Cards : p2Cards;
}

function getRandomValue(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

async function handleDrawCard(){
  const response = await fetch(`https://www.deckofcardsapi.com/api/deck/${cards.deck_id}/draw/?count=1`);
  const data = await response.json();
  setP1Cards((prev) => {
    return [...prev, ...data.cards]
  })
  updateCards(data);
}

function updateCards(newCards){
  setCards(newCards)
}


  return (
    <div className="App">

    <div className="container">
      <Hand player={1} cards={getHand(1)}/>
    
      <Board squares={squares}/>

      <Hand player={2} cards={getHand(2)}/>
    </div>


      <button onClick={handleStartGame}>Start</button>
      <button onClick={handleDrawCard}>Draw Card</button>

      <Deck cards={cards}/>

    </div>
  );
}

export default App;
