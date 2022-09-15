import './App.css';

function App() {

  let i = 0;

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

  return (
    <>

      <div id='test'>0</div>
      <button onClick={minus}>{"Minus"}</button>
      <button onClick={plus}>{"Plus"}</button>
    </>
  );
}

export default App;
