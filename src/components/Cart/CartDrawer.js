import React from 'react'
import ReactDOM from 'react-dom';
import styles from './CartDrawer.module.css';
import { GrClose } from 'react-icons/gr';
import { Button } from '../../components/UI/Button/Button';

const CartBackdrop = (props) => {
    const { onCloseCart, showCartDrawer } = props;
    return <div className={`${styles["cart-backdrop"]} ${showCartDrawer ? styles.show : ''}`} onClick={onCloseCart}></div>
}
const CartDrawerOverlay = (props) => {
    return <React.Fragment>
        <div className={`${styles.cart} ${props.showCartDrawer ? styles.show : ''}`}>
            <div className={styles.closeIconWrapper}><GrClose className={styles.closeCartDrawer} /></div>
            <h2>Your Bag</h2>
            <div className={styles.checkoutBtnWrapper}><Button buttonSize="btn--outline" buttonColor="green">Checkout</Button></div>
        </div>
    </React.Fragment>
}

const CartDrawer = (props) => {
    const { onClick: closeCart, showCartDrawer } = props;
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<CartBackdrop onCloseCart={closeCart} showCartDrawer={showCartDrawer} />, document.getElementById('cart-backdrop'))}
            {ReactDOM.createPortal(<CartDrawerOverlay showCartDrawer={showCartDrawer} />, document.getElementById('cart-drawer-overlay'))}
        </React.Fragment>
    )
}

export default CartDrawer
