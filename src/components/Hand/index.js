import Card from "../Card"
import styles from "./index.module.css"

export default function Hand({player, cards}) {
    
    return <div>
        <h2>Player {player}'s Hand</h2>
        <div className={styles.cards}>
            {cards && cards.map((card, index) => {
                return <Card key={index} card={card}/>
            })}
        </div>
    </div>
}