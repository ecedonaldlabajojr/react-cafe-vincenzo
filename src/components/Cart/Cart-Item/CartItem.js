import React, { useContext } from 'react'
import styles from './CartItem.module.css'
import { BsTrashFill } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib';
import CartContext from '../../../store/cart-context'

const CartItem = (props) => {
    const cartCtx = useContext(CartContext);
    const { _id, name, price, qty, img, onQtyChange } = props;
    const thisItem = {
        _id: _id,
        name,
        price,
        img,
        qty: 1,
    }
    const qtyChangeHandler = (e) => {
        if (e.target.value !== qty) {
            onQtyChange({
                type: e.target.value > qty ? "ADD" : "REMOVE",
                payload: thisItem,
            })
        }
    }

    const trashHandler = () => cartCtx.trashItem(_id);

    return (
        <IconContext.Provider value={{ color: 'black' }}>
            <div className={styles["cart__item-row"]}>
                <div className={styles["item-imgWrapper"]}>
                    <img src={img} alt={name} />
                </div>
                <div className={styles["item-info"]}>
                    <p className={styles["item-name"]}>{name}</p>
                    <div className={styles["item-qty-price"]}>
                        <p className={styles["item-price"]}>₱{price}</p>
                        <div className={styles["item-x-wrapper"]}>
                            <p>x</p>
                        </div>
                        <div className={styles["item-qty"]} >
                            <input type="number" pattern="[0-9]*" min="0" value={qty} onChange={qtyChangeHandler} />
                        </div>
                    </div>
                </div>
                <div className={styles["item-action"]}>
                    <button className={styles["item-remove-btn"]} onClick={trashHandler}><BsTrashFill className={styles.trashIcon} /></button>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default CartItem
