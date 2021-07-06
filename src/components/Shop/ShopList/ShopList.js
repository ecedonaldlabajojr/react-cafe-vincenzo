import React from 'react'
import ShopItem from '../ShopItem/ShopItem'
import styles from './ShopList.module.css'


const sampleItem = {
    name: "Brazil Cerrado",
    description: "toffee,vanilla,chocolate,roasted wallnut,buttery",
    price: 450.00,
    img: '/images/coffee-6.jpg'
}
const ShopList = () => {
    return (
        <section className={styles["section__shoplist-wrapper"]}>
            <div className={styles["shopItems-container"]}>
                <ShopItem item={sampleItem} />
                <ShopItem item={sampleItem} />
                <ShopItem item={sampleItem} />
                <ShopItem item={sampleItem} />
                <ShopItem item={sampleItem} />
                <ShopItem item={sampleItem} />
                <ShopItem item={sampleItem} />
                <ShopItem item={sampleItem} />
                <ShopItem item={sampleItem} />
                <ShopItem item={sampleItem} />
            </div>
        </section>
    )
}

export default ShopList
