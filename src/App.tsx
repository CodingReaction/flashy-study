import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import Card from './Components/Card/Card'
import {CARD_STATE} from "./Components/Card/Card.types";


function App() {

  return (
    <div className="App">
        <Card cardState={CARD_STATE.USABLE}/>
    </div>
  )
}

export default App
