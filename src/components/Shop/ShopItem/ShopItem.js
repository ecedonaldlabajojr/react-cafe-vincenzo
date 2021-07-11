import React, { useContext } from 'react'
import styles from './ShopItem.module.css'
import CartContext from '../../../store/cart-context';

const ShopItem = (props) => {
    const { _id, name, description, price, img } = props.item;
    const cartCtx = useContext(CartContext);
    const addItemHandler = () => {
        cartCtx.addItem({
            _id,
            name,
            price,
            img,
            qty: 1,
        });
    }
    return (
        <div className={styles.card}>
            <div>
                <img src={img} alt={`${name}`} />
            </div>
            <div className={styles["item__desc-wrapper"]}>
                <p className={styles["item-name"]}>{name}</p>
                <p className={styles["item-desc"]}>{description}</p>
                <h4 className={styles["item-price"]}>₱ {price.toFixed(2)}</h4>
            </div>
            <button onClick={addItemHandler}>Add item</button>
        </div>
    )
}

export default ShopItem
