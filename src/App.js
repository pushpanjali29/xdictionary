import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [meaning, setMeaning] = useState("");

  let data = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  function handleClick() {
    let word = data.find(
      (item) => item.word.toLowerCase() === input.toLowerCase()
    );
    if (word) {
      setMeaning(word.meaning);
    } else {
      setMeaning("Word not found in the dictionary.");
    }
  }

  return (
    <div className="App">
      <h1>Dictionary App</h1>

      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Search for a input..."
      />
      <button onClick={handleClick}>Search</button>
      <p>Definition: </p>
      {meaning && <p>{meaning}</p>}
    </div>
  );
}

export default App;