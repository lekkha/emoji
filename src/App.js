import "./styles.css";
import React, { useState } from "react";
const emojiDictionary = {
  "📈": "stonks",
  "😭": "its so funny it made me cry",
  "😔": "semd",
  "😄": "totally faking it",
  "😳": "whut",
  "🛐": "surviving on your help king/queen",
  "🫡": "salam shabji",
  "😑": "how to use this without seeming too rude",
  "🫠": "hahahahah could it get any worse",
  "🙈": "bura mat dekho",
  "🙉": "bura mat suno",
  "🙊": "bura mat bolo (is site ke bare mein)",
  "👀": "sneakaboo",
  "🦾": "im a cyborg but thats okay(yt channel)",
  "🦿": "the yt channel->https://bit.ly/wont-regret-clicking",
  "🫵": "YOU, yes you",
  "🫶": "fav emoji",
  "🫷": "bas bahut hua (gopi bahu)",
  "🫰": " sarange",
  "🤏": "kuncham-kuncham",
};
var Emojis = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setmeaning] = useState(" ");
  function emojiinputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (userInput in emojiDictionary) {
      setmeaning(meaning);
    } else {
      setmeaning("oops- app normie emojis use karte hai");
    }
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>there is more to an emoji</h1>
      <input onChange={emojiinputHandler} />

      <h3>meaning: {meaning} </h3>

      <h3>Curious-Much?</h3>

      {Emojis.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
