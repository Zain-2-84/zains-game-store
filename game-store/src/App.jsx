import { useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import GameCard from './components/GameCard'
import { GamesList } from './components/GamesList'


function App() {

  const [cartItems, setCartItems] = useState(0);

  const CartItemsIncrement = () => {
    // let increment = 0;
    // increment = increment + 1;
    // setCartItems(increment);

    return setCartItems(cartItems + 1);
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

          <button onClick={CartItemsIncrement}>
            Increment Cart Items
          </button>

          <br /><br />
          {cartItems}
        </div>
      </div>
    </>
  )
}

export default App