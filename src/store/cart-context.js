import React, { useReducer } from 'react'


const CartContext = React.createContext({
    items: [],
    totalPrice: 0,
    addItem: item => { },
    removeItem: itemId => { },
    clearCart: () => { },
})

const cartReducer = (state, action) => {
    if (action.type === "ADD__ITEM") {
        const newItem = action.payload;
        console.log(`ADD ITEM!!`);
        const updatedCartItems = [...state.items];
        const existingItemIndex = updatedCartItems.findIndex(item => item._id === newItem._id);

        let updatedTotalPrice = state.totalPrice + (+newItem.price)

        if (existingItemIndex == -1) updatedCartItems.push(newItem);
        else updatedCartItems[existingItemIndex].qty++;

        return {
            items: updatedCartItems,
            totalPrice: updatedTotalPrice
        }

    } else if (action.type === "REMOVE__ITEM") {
        console.log(`REMOVE ITEM!!`);
        return state;

    } else if (action.type === "CLEAR__CART") {
        console.log(`CLEAR CART!!`);
        return state;

    } else return state;
}

export const CartProvider = props => {
    const [cartState, dispatchCartActions] = useReducer(cartReducer, {
        items: [],
        totalPrice: 0,
    })
    const addItem = item => {
        dispatchCartActions({
            type: "ADD__ITEM",
            payload: item,
        })
    }

    const removeItem = itemId => {
        dispatchCartActions({
            type: "REMOVE__ITEM"
        })
    }

    const clearCart = () => {
        dispatchCartActions({
            type: "CLEAR__CART"
        })
    }

    const cartContextValue = {
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        addItem,
        removeItem,
        clearCart
    }
    return <CartContext.Provider value={cartContextValue}>{props.children}</CartContext.Provider>
}


export default CartContext;