import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import shopCoffeeBeans from '../../data/shop-coffee-beans';
import styles from './ShopItemPage.module.css'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { BsStarFill } from 'react-icons/bs'
import CartContext from '../../store/cart-context';

const ShopItemPage = () => {
    const { productId } = useParams();
    const history = useHistory();
    const cartCtx = useContext(CartContext);
    const product = shopCoffeeBeans.find(product => product._id === productId);
    const [selectedQty, setSelectedQty] = useState(1);

    const closeHandler = () => history.goBack();
    const addToCartHandler = () => {
        cartCtx.addItem({
            _id: product._id,
            name: product.name,
            img: product.img,
            price: product.price,
            qty: selectedQty,
        })
    }

    const starItems = []
    for (let x = 0; x < 5; x++) {
        starItems.push(<BsStarFill key={x} />)
    }
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <IoIosCloseCircleOutline className={styles.closeBtn} onClick={closeHandler} />
                <div className={styles.row}>
                    <div className={styles["img_wrapper"]}>
                        <img src={product.img} alt={product.name} />
                    </div>
                    <div className={styles.rowItem}>
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <p>250g pack</p>
                        <div>
                            {starItems}
                        </div>
                    </div>
                    <div className={styles.rowItem}>
                        <div className={styles.actions}>
                            <p><input type="number" value={selectedQty} min="1" />Qty</p>
                            <button onClick={addToCartHandler} className={styles.addToCartBtn}>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className={styles.details}>
                    <p>{product.details}</p>
                </div>
            </div>
        </section>
    )
}

export default ShopItemPage
