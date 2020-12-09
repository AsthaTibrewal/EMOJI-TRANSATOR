import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😂": "face With Tears Of Joy",
  "🎌 ": "flags",
  "🎄": "Christmas Tree",
  "😍": "Smiling Face With Heart-eyes crush",
  "😘": "Face Blowing A kiss"
};
var emojiWeKnow = Object.keys(emojiDictionary);
var headingText = "emoji dictionary";
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>{headingText}</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>emoji we know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
