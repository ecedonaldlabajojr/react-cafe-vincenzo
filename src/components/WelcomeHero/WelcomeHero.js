import React from 'react'
import { Link } from 'react-router-dom'
import styles from './WelcomeHero.module.scss'

const WelcomeHero = () => {
    return (
        <section className={styles["landing__section"]}>
            <div className={styles["welcome-img"]} />
            <div className={styles["landing__text-wrapper"]}>
                <h1>Brewed to perfection.</h1>
                <button>
                    <Link to="/shop" className={styles.captionLink}>
                        Shop Now
                    </Link>
                </button>
            </div>
        </section>
    )
}

export default WelcomeHero
