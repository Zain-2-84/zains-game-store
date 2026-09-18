import { GamesList } from "./GamesList";

export default function GameCard() {

    const gameCard = GamesList.map((item) => {
        return (
            <div key={item.id}>
                <ul>
                    <li>{item.name}</li>
                    <li>{item.price}</li>
                    <li>{item.quantity}</li>
                    <li>{item.genre}</li>
                    <br />
                </ul>
            </div>
        )
    })

    return (
        <>
            <p>Something random part 2.</p>
            <br />
            {
                gameCard
            }

        </>
    );
}