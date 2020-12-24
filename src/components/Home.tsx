import React from "react";
import Element from "./Element";
import emojipedia from "../emojipedia";
import "./home.css";
import Navbar from "./Navbar";

function createEntery(emojiterm: any) {
  return (
    <Element
      key={emojiterm.key}
      emoji={emojiterm.emoji}
      name={emojiterm.name}
      info={emojiterm.meaning}
    />
  );
}

function Home() {
  return (
    <div className="home-body">
      <Navbar />
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntery)}</dl>
    </div>
  );
}

export default Home;
