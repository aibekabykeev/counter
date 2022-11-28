import React, {useState} from "react";
import './App.css';

function App() {
  const [likes, setLikes] = useState(0)


  const increment = () => {
  setLikes(likes + 1)
  }

  const decrement = () => {
    setLikes(likes - 1)
  }

  return (
    <div className="App">
      <h1>{likes}</h1>
      <button className="button" onClick={decrement}>decrement</button>
      <button className="button" onClick={increment}>increment</button>
    </div>
  );
}

export default App;
