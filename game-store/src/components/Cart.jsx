// Please always remember to use return in every component.
import { GamesList } from "./GamesList";

// const gamesMap = () => {
//     GamesList.map((item) => {
//         return item.name;
//     })


// }

const Cart = () => {

    const gamesMap = GamesList.map((item) => (
        <div key={item.id}>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.quantity}</li>
            <br></br>
        </div>

    ))

    return (
        <>
            <p>Something important</p>
            <br />
            <ul>
                {gamesMap}
                {/* <li> */}

            </ul>

        </>
    );

}

export default Cart;