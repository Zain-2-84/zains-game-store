export default function GameCard({ games }) {
    // const gamesListProp = props;

    const gameCard = games.map((item) => {
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