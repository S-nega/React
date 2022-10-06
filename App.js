import { useState} from "react";
import Board from './board';
import "./App.css";


function App() {
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState('');

  const resetBoard = () => {
    setReset(true);
  }
  
  return (
    <>
    <Board reset={reset} setReset={setReset} winner={winner} setWinner={setWinner} 
    />
    <br></br>
    <div className="info">
        <div>Player 1: X</div>
        <div>Player 2: O</div>
    </div>
    <br></br>
    <div className="info">
        {winner}
        <br></br>
        <button className="button" onClick={() => resetBoard()}>
            Reset Board
        </button>
    </div>
    </>
  );
}

export default App;