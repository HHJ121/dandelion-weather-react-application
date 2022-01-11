import React from "react";
import "./App.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Taipei City" />
        <footer>
          <a
            href="https://github.com/HHJ121/dandelion-weather-react-application"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by
          <a href="http://guidedbythe1.com/" target="_blank" rel="noreferrer">
            {""} Haw-Harn Jiang
          </a>
          , hosted on {""}
          <a
            href="https://hardcore-pasteur-857caf.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
