import {useEffect} from "react";
import styles from "./index.module.css";

export default function Deck({cards}){

    const remainingCards = cards && cards.remaining;

useEffect(() => {
  
    console.log(cards)


},[cards])


    return <div className={styles.container}>
        <h2>Cards In Deck: {remainingCards}</h2>
    </div>
}