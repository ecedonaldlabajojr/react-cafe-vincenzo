import React from 'react'
import styles from './BrewGuideStep.module.css'

const BrewGuideStep = (props) => {
    return (
        <section className={styles.container}>
            <h3>{props.step.label}</h3>
            <div className={styles.row}>
                {props.step.imgURL && <img src={props.step.imgURL} alt="" className={styles.rowItem} />}
                <p className={styles.rowItem}>{props.step.content}</p>
            </div>
        </section>
    )
}

export default BrewGuideStep
