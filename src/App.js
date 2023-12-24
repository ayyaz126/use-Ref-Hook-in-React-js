
import './App.css';
import React,{useRef} from 'react';

function App() {

     let inputref = useRef(null)

     function handleinput()
     {
      console.log("functin call")
      inputref.current.value ="1000"
      inputref.current.focus();
      inputref.current.style.color="red"
      inputref.current.style.display="none"
     }
  return (
    <div className="App">
         <h1> useRef in React js </h1>
        <input type='text'  ref={inputref}/>
        <button onClick={handleinput}  > Handle input </button>
    </div>
  );
}

export default App;
