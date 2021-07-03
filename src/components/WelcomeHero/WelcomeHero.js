import React from 'react'
import { Button } from '../UI/Button/Button';
import styles from './WelcomeHero.module.css'

const WelcomeHero = () => {
    return (
        <section className={styles["landing__section"]}>
            <div className={styles["landing__text-wrapper"]}>
                <h1>Brewed to perfection.</h1>
                <Button buttonSize="btn--wide" buttonStyle="btn--primary" buttonColor="blue">SHOP</Button>
            </div>
        </section>
    )
}

export default WelcomeHero
