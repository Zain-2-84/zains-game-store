import { useState } from 'react'
import './App.css'
// I don't know why cart needs to be written in smallcase.
import Cart from './components/Cart'
import GameCard from './components/GameCard'

function App() {

  return (
    <>
      <div className="store">
        <div className="heading">
          <h1>Welcome to Game store.</h1>
        </div>

        <div className="games-section">
          <p>Games section</p>
          <GameCard />
        </div>
        <div className="cart-section">
          <p>Cart section</p>
          <Cart />
        </div>
      </div>
    </>
  )
}

export default App