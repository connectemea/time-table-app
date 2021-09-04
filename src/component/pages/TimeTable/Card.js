import React from 'react'
import styles from "./styles.module.css";
import CardComponent from './CardComponent';

function Card() {
    return (
        <div className={styles.CardContainer}>              
            <CardComponent/>
        </div>
    )
}

export default Card
