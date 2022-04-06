import styles from "./index.module.css"

export default function Square({id, sumValue}) {


    
    return <div className={styles.square}>
        <h2 id={id} >{sumValue}</h2>
    </div>
}