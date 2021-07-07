import React from 'react'
import ShopItem from '../ShopItem/ShopItem'
import styles from './ShopList.module.css'
import shopCoffeeBeans from '../../../data/shop-coffee-beans';

const sampleItem = {
    name: "Brazil Cerrado",
    description: "toffee,vanilla,chocolate,roasted wallnut,buttery",
    price: 450.00,
    img: '/images/coffee-6.jpg'
}
const coffeeBeansList = shopCoffeeBeans.map(item => <ShopItem key={item._id} item={item} />)
const ShopList = () => {
    return (
        <section className={styles["section__shoplist-wrapper"]}>
            <div className={styles["shopItems-container"]}>
                {coffeeBeansList}
            </div>
        </section>
    )
}

export default ShopList
