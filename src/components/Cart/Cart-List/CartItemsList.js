import React, { useContext } from 'react'
import CartContext from '../../../store/cart-context';
import CartItem from '../Cart-Item/CartItem';
const CartItemsList = () => {
    const cartCtx = useContext(CartContext);

    const cartItemsList = cartCtx.items.map(item => <CartItem key={item._id} itemId={item._id} name={item.name} price={item.price} img={item.img} qty={item.qty} />)
    return (
        <React.Fragment>
            {cartItemsList}
        </React.Fragment>
    )
}

export default CartItemsList
