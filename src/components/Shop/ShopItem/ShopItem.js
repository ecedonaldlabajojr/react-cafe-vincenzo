import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './ShopItem.module.css'

const ShopItem = (props) => {
    const { _id, name, description, price, img } = props.item;
    return (
        <NavLink to={`/shop/roasted-beans/${_id}`} className={styles.navlink}>
            <div className={styles.card}>
                <div>
                    <img src={img} alt={`${name}`} />
                </div>
                <div className={styles["item__desc-wrapper"]}>
                    <p className={styles["item-name"]}>{name}</p>
                    <p className={styles["item-desc"]}>{description}</p>
                    <h4 className={styles["item-price"]}>₱ {price.toFixed(2)}</h4>
                </div>
            </div>
        </NavLink>
    )
}

export default ShopItem
