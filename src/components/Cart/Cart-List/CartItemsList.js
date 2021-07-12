import React, { useContext } from 'react'
import CartContext from '../../../store/cart-context';
import CartItem from '../Cart-Item/CartItem';
const CartItemsList = () => {
    const cartCtx = useContext(CartContext);
    const itemQtyChangeHandler = action => {
        if (action.type === "ADD") cartCtx.addItem(action.payload);
        else cartCtx.removeItem(action.payload.itemId);
    }

    const cartItemsList = cartCtx.items.map(item =>
        <CartItem key={item._id}
            itemId={item._id}
            name={item.name}
            price={item.price}
            img={item.img}
            qty={item.qty}
            onQtyChange={itemQtyChangeHandler} />)
    return (
        <React.Fragment>
            {cartItemsList}
        </React.Fragment>
    )
}

export default CartItemsList
