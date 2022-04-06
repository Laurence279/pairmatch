import Square from "../Square"
import styles from "./index.module.css"
import {useState} from "react"

export default function Board({squares}) {


    
    return <div className={styles.container}>
        {squares.map((square, index)=>{
            return <Square key={index} id={index} sumValue={square}/>
        })}
    </div>
}