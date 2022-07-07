import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { CardsDisplay } from "./Components/Card/Card";
import { CARD_STATE } from "./Components/Card/Card.types";

function App() {
  return (
    <div className="App">
      <CardsDisplay />
    </div>
  );
}

export default App;
