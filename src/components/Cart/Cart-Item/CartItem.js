import React from 'react'
import styles from './CartItem.module.css'
import { BsTrashFill } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib';

const CartItem = (props) => {
    const { name, price, qty, img } = props;
    return (
        <IconContext.Provider value={{ color: 'black' }}>
            <div className={styles["cart__item-row"]}>
                <div className={styles["item-imgWrapper"]}>
                    <img src={img} alt={name} />
                </div>
                <div className={styles["item-info"]}>
                    <p className={styles["item-name"]}>{name}</p>
                    <p className={styles["item-price"]}>₱{price}</p>
                    <p className={styles["item-qty"]}>Quantity: {qty}</p>
                </div>
                <div className={styles["item-action"]}>
                    <button className={styles["item-remove-btn"]}><BsTrashFill className={styles.trashIcon} /></button>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default CartItem
