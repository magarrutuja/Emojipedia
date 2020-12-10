import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🤨": "Face with Raised Eyebrow",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😌": "Relieved Face",
  "😑": "Expressionless Face",
  "😴": "Sleeping Face",
  "🤤": "Drooling Face",
  "😶": "Face Without Mouth",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes"
};

var knownemojis = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiDisplay(event) {
    var inputText = event.target.value;
    var meaning = emojiDictionary[inputText];
    if (meaning === undefined) {
      meaning = "Sorry! Currently not available. Please try again later";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <nav>
        <h1>Emojipedia</h1>
      </nav>
      <input
        placeholder="Insert the emoji to see what does it means"
        onChange={emojiDisplay}
      />
      <h1> {meaning} </h1>

      {knownemojis.map(function (emoji) {
        return (
          <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
