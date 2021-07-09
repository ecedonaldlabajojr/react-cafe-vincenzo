import React from 'react'
import ReactDOM from 'react-dom';
import styles from './CartDrawer.module.css';
import { GrClose } from 'react-icons/gr';
import CartItem from './Cart-Item/CartItem';
import { IoBagCheckOutline } from 'react-icons/io5';


const CartBackdrop = (props) => {
    const { onCloseCart, showCartDrawer } = props;
    return <div className={`${styles["cart-backdrop"]} ${showCartDrawer ? styles.show : ''}`} onClick={onCloseCart}></div>
}
const CartDrawerOverlay = (props) => {
    return <React.Fragment>
        <div className={`${styles.cart} ${props.showCartDrawer ? styles.show : ''}`}>
            <div className={styles["drawer--header"]}>
                <h2>Shopping Bag</h2>
                <div className={styles.closeIconWrapper} onClick={props.onCloseCart}><GrClose className={styles.closeCartDrawer} /></div>
            </div>
            <div className={styles["drawer--internal"]}>
                <CartItem itemId={"7t"} name='Brazil Cerrado' price={700} qty={1} imgUrl={'/images/shop-items/brazil-cerrado.png'} />
            </div>
            <div className={styles["drawer--footer"]}>
                <button className={styles.checkoutBtn}>Check out</button>
                <IoBagCheckOutline className={styles.checkoutIcon}/>
            </div>
        </div>
    </React.Fragment>
}

const CartDrawer = (props) => {
    const { onClick: closeCart, showCartDrawer } = props;
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<CartBackdrop onCloseCart={closeCart} showCartDrawer={showCartDrawer} />, document.getElementById('cart-backdrop'))}
            {ReactDOM.createPortal(<CartDrawerOverlay showCartDrawer={showCartDrawer} onCloseCart={closeCart} />, document.getElementById('cart-drawer-overlay'))}
        </React.Fragment>
    )
}

export default CartDrawer
