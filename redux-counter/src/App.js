import { addCount,decCount } from "./store/action.js";
import { useState } from "react";
import { store } from "./store/store.js";
import './App.css';

function App() {
  const [, setVa] = useState(0);
  return (
    <div className="App">
      <h1>Counter:{store.getState().count}</h1>
      <button onClick={() => {
        store.dispatch(addCount(1))
        console.log(store.getState())
        setVa((p)=>(p+1))
      }}>Add Counter</button>
      <button onClick={() => {
        store.dispatch(decCount(1))
        console.log(store.getState())
        setVa((p)=>(p+1))
      }}>Decrease Counter</button>
    </div>
  );
}

export default App;
