import { useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import GameCard from './components/GameCard'

function App() {

  return (
    <>
      <div className="store">
        <div className="heading">
          <h1>Welcome to Game store (Version 2.0).</h1>
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