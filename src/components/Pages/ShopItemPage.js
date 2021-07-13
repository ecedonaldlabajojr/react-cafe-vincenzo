import React from 'react'
import { useParams } from 'react-router-dom'
import shopCoffeeBeans from '../../data/shop-coffee-beans';
import styles from './ShopItemPage.module.css'
import { IoIosCloseCircleOutline } from 'react-icons/io'

const ShopItemPage = () => {
    const { productId } = useParams();
    const product = shopCoffeeBeans.find(product => product._id === productId);
    console.log(product);
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <IoIosCloseCircleOutline className={styles.closeBtn} />
                <div className={styles.row}>
                    <div className={styles["img_wrapper"]}>
                        <img src={product.img} alt={product.name} />
                    </div>
                    <div className="">
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                    </div>
                    <p>{product.description}</p>
                </div>
                <div className={styles.details}>
                    <p>{product.details}</p>
                </div>
            </div>
        </section>
    )
}

export default ShopItemPage
