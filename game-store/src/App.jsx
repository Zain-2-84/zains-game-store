import { useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import GameCard from './components/GameCard'
import { GamesList } from './components/GamesList'


function App() {

  const [gameQuantity, setGameQuantity] = useState(0);

  const gameQuantityIncrement = () => {
    // This code below is correct, but don't use return.
    // return setGameQuantity(gameQuantity + 1);
    if (gameQuantity < 5) {
      setGameQuantity((prev) => (prev + 1));
    } else {
      return null;
    }
  }

  function gameQuantityDecrement() {
    if (gameQuantity > 0) {
      setGameQuantity((prev) => {
        return prev - 1;
      })

    } else {
      return null;
    }

  }

  const gameQuantityResetToZero = () => {
    setGameQuantity(0);
  }

  return (
    <>
      <div className="store">
        <div className="heading">
          <h1>Welcome to Game store (Version 2.0).</h1>
        </div>

        <div className="games-section">
          <p>Games section</p>
          <GameCard games={GamesList} />
        </div>
        <div className="cart-section">
          <p>Cart section</p>
          <Cart />

          <button onClick={gameQuantityIncrement} className="addGameButton" disabled={gameQuantity === 5}>
            Add
          </button>

          <button onClick={gameQuantityDecrement} className="removeGameButton" disabled={gameQuantity === 0 ? true : false}>
            Remove
          </button>

          <button onClick={gameQuantityResetToZero} className='resetGameButton'>
            Reset at zero
          </button>

          <br /><br />
          {gameQuantity}
        </div>
      </div>
    </>
  )
}

export default App