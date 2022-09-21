import './App.css';
import {useState}from "react";

function App() {

  const [count, setCount] = useState(0);
  
  const plus = () => {
        setCount(count+1);
  }
  const minus = () =>{
        setCount(count-1);
  }

  return (
    <>

      <div>{count}</div>
      <button onClick={minus}>{"Minus"}</button>
      <button onClick={plus}>{"Plus"}</button>
    </>
  );
}

export default App;
