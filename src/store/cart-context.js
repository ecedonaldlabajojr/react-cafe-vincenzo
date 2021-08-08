import React, { useReducer } from 'react'


const CartContext = React.createContext({
    items: [],
    totalPrice: 0,
    totalQty: 0,
    addItem: item => { },
    removeItem: itemId => { },
    trashItem: itemId => { },
    clearCart: () => { },
})

const cartReducer = (state, action) => {
    if (action.type === "ADD__ITEM") {
        const newItem = action.payload;
        const updatedCartItems = [...state.items];
        const existingItemIndex = updatedCartItems.findIndex(item => item._id === newItem._id);

        let updatedTotalPrice = state.totalPrice + (+newItem.price * newItem.qty)
        const updatedTotalQty = state.totalQty + (+newItem.qty);
        if (existingItemIndex == -1) updatedCartItems.push(newItem);
        else {
            updatedCartItems[existingItemIndex].qty = +updatedCartItems[existingItemIndex].qty + (+newItem.qty);
        }
        return {
            items: updatedCartItems,
            totalPrice: updatedTotalPrice,
            totalQty: updatedTotalQty
        }

    } else if (action.type === "REMOVE__ITEM") {
        const { _id: itemId } = action.payload;
        let updatedCartItems = [];
        const existingItemIndex = state.items.findIndex(item => item._id === itemId);
        const existingItem = state.items[existingItemIndex];

        if (existingItemIndex > -1) {
            if (existingItem.qty === 1) {
                updatedCartItems = state.items.filter(item => item._id !== itemId);
            } else {
                updatedCartItems = [...state.items];
                updatedCartItems[existingItemIndex].qty--;
            }
            const updatedTotalPrice = state.totalPrice - existingItem.price;
            const updatedTotalQty = state.totalQty - 1;

            return {
                items: updatedCartItems,
                totalPrice: updatedTotalPrice,
                totalQty: updatedTotalQty
            };
        }
        return state;

    } else if (action.type === "TRASH__ITEM") {
        const itemId = action.payload;
        const existingItem = state.items.find(item => item._id === itemId);
        const itemTotalPrice = existingItem.price * existingItem.qty;
        return ({
            items: state.items.filter(item => item._id !== itemId),
            totalPrice: state.totalPrice - itemTotalPrice,
            totalQty: state.totalQty - existingItem.qty
        })


    } else if (action.type === "CLEAR__CART") {
        console.log(`CLEAR CART!!`);
        return state;

    } else return state;
}

export const CartProvider = props => {
    const [cartState, dispatchCartActions] = useReducer(cartReducer, {
        items: [],
        totalPrice: 0,
        totalQty: 0,
    })
    const addItem = item => {
        dispatchCartActions({
            type: "ADD__ITEM",
            payload: item,
        })
    }

    const removeItem = itemId => {
        dispatchCartActions({
            type: "REMOVE__ITEM",
            payload: itemId,
        })
    }

    const clearCart = () => {
        dispatchCartActions({
            type: "CLEAR__CART"
        })
    }

    const trashItem = itemId => {
        dispatchCartActions({
            type: "TRASH__ITEM",
            payload: itemId,
        })
    }

    const cartContextValue = {
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        totalQty: cartState.totalQty,
        addItem,
        removeItem,
        clearCart,
        trashItem
    }
    return <CartContext.Provider value={cartContextValue}>{props.children}</CartContext.Provider>
}


export default CartContext;