import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

// The introduction page contents
const Introduction = () => {
  window.onload = () => {
    let emojis = ["🍉", "🍦", "🍭", "🥞", "🍩", "💤"];
    let emoji = emojis[Math.floor(Math.random() * emojis.length)];
    document.getElementById("text-2").innerText =
      "sometimes i write working codes " + emoji;
  };
  return (
    <div styles={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/1.jpg'})` }} id="introduction" className="page">
      <p className="intro-text intro-1 animated fadeInUp">i'm kyoyo.</p>
      <p id="text-2" className="intro-text intro-2 animated fadeInUp"></p>
      <div></div>
    </div>
  );
};

export default Introduction;
