import React from 'react'
import styles from './ShopItem.module.css'

const ShopItem = (props) => {
    const { name, description, price, img } = props.item;
    return (
        <div className={styles.card}>
            <div>
                <img src={img} alt={`${name}`} />
            </div>
            <div className={styles["item__desc-wrapper"]}>
                <p className={styles["item-name"]}>{name}</p>
                <p className={styles["item-desc"]}>{description}</p>
                <h4 className={styles["item-price"]}>₱ {price}</h4>
            </div>
        </div>
    )
}

export default ShopItem
