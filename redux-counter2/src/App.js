import { addCount,decCount,multCount,devCount } from "./store/action.js";
import { useState } from "react";
import { store } from "./store/store.js";
import './App.css';

function App() {
  const [value,setValue]=useState(0)
  const [, setVa] = useState(0);
  return (
    <div className="App">
      <h1>Counter:{store.getState().count}</h1>
      <input type="number" placeholder="Enter Number" onChange={ (e)=>{setValue(e.target.value)}}/>
      <button onClick={() => {
        store.dispatch(addCount(value))
        
        setVa((p)=>(p+1))
      }}>Add Counter</button>
      <button onClick={() => {
        store.dispatch(decCount(value))
        
        setVa((p)=>(p+1))
      }}>Decrease Counter</button>
      <button onClick={() => {
        store.dispatch(multCount(value))
        
        setVa((p)=>(p+1))
      }}>Multiply Counter</button>
      <button onClick={() => {
        store.dispatch(devCount(value))
        
        setVa((p)=>(p+1))
      }}>Devide Counter</button>
    </div>
  );
}

export default App;
