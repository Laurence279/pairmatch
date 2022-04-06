import styles from "./index.module.css"

export default function Card({card}) {
    
    return <div>
        <img className={styles.card} src={card.image}></img>
    </div>
}