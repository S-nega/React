//import logo from './logo.svg';
import './App.css';
//import {useState}from "react";

function App() {
  // const[isA, setA] = useState(false);
  // const[asc, desc] = useState(false);
  // const[incr, decr] = useState(false);
  // const a = <b>bold</b>;
  // const b = <div className = "react">back</div>
  let i = 0;
  // const container = [a, b];

  // const arrAsc = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const arrDesc = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  // const handleClick = () => {
  //   // console.log("Clicked");
  //   // setA(isA?false:true);
  //   // setA((prevA)=>!prevA);
  //   // desc((prevAsc)=>!prevAsc);
  //   // decr((prevFunc)=>!prevFunc);
  // }

  // const func = () => {
  //   // incr?plus():minus();

  //   incr?document.getElementById("demo").innerHTML = i++:
  //   document.getElementById("demo").innerHTML = i--;


  //   // console.log("func",i);
  // }
  // document.getElementById("test").innerHTML = 0;

  const plus = () => {
    i++;
    document.getElementById("test").innerHTML = i;
    console.log(i);
  }
  const minus = () =>{
    i--;
    document.getElementById("test").innerHTML = i;
    console.log(i);
  }

  // const{a:{b:{c}}} = obj;

  return (
    <>
      {/* <div>{isA?a:b}, React!</div> {/*container[0]
      <div>{isA?b:a}</div> {/*container[1]

      <div>{asc?arrAsc:arrDesc}</div> */}

      <p id='test'>0</p>
      <button onClick={minus}>{"Minus"}</button>
      <button onClick={plus}>{"Plus"}</button>
      {/* <button onClick={minus}>Minus</button> */}

      {/* <button onClick={handleClick} >Swap</button> */}
    </>
  );
}

export default App;
