import React from "react";
import ReactDOM from "react-dom";

const name = "Alessandra";
const surname = "Guglielmana";
const randomNum = Math.round(Math.random() * 10 + 1);

ReactDOM.render(
  <div>
    <h1>
      Hello {name} {surname}!
    </h1>
    <p>Your lucky number is {randomNum}.</p>
  </div>,
  document.getElementById("root")
);
