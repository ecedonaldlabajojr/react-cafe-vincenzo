import React, { useContext } from 'react'
import ReactDOM from 'react-dom';
import styles from './CartDrawer.module.scss';
import { GrClose } from 'react-icons/gr';
import { IoBagCheckOutline } from 'react-icons/io5';
import CartItemsList from './Cart-List/CartItemsList';
import CartContext from '../../store/cart-context';


const CartBackdrop = (props) => {
    const { onCloseCart, showCartDrawer } = props;
    return <div className={`${styles["cart-backdrop"]} ${showCartDrawer ? styles.show : ''}`} onClick={onCloseCart}></div>
}
const CartDrawerOverlay = (props) => {
    const cartCtx = useContext(CartContext);
    const cartClasses = `${styles.cart} ${props.showCartDrawer ? styles.show : ''}`;
    return <React.Fragment>
        <div className={cartClasses}>
            <div className={styles["drawer--header"]}>
                <h2>Shopping Bag  {!!cartCtx.totalQty && <span>( {cartCtx.totalQty} item/s )</span>}</h2>
                <div className={styles.closeIconWrapper} onClick={props.onCloseCart}><GrClose className={styles.closeCartDrawer} /></div>
            </div>
            <div className={styles["drawer--internal"]}>
                <CartItemsList />
            </div>
            <div className={styles["drawer--footer"]}>
                <h3>Subtotal: ₱{cartCtx.totalPrice.toFixed(2)}</h3>
                <button className={styles.checkoutBtn}>Check out</button>
                <IoBagCheckOutline className={styles.checkoutIcon} />
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
