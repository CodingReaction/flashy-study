import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import { CardsDisplay } from "./Components/Card/Card";
import { CARD_STATE } from "./Components/Card/Card.types";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <CardsDisplay />
      </QueryClientProvider>
    </div>
  );
}

export default App;
