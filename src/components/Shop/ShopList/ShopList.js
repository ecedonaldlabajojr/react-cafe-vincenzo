import React, { useContext } from 'react'
import ShopItem from '../ShopItem/ShopItem'
import styles from './ShopList.module.css'
import shopCoffeeBeans from '../../../data/shop-coffee-beans';
import shopFiltersContext from '../../../store/shop-filters-context';

const ShopList = (props) => {
    const shopFiltersCtx = useContext(shopFiltersContext);
    const appliedFilters = shopFiltersCtx.appliedFilter;

    let shownProducts = [];
    // let filteredProducts = [];
    // if (!props.query.isNullOrWhiteSpace()) filteredProducts = shopCoffeeBeans.filter(product => product.name.search(`/${props.query}/i`));

    // console.log(filteredProducts);
    if (appliedFilters.length) {
        shownProducts = shopCoffeeBeans.filter(item => {
            return (item.keywords.every(keyword => appliedFilters.includes(keyword)));
        }).map(item => <ShopItem key={item._id} item={item} />);
    } else {
        shownProducts = shopCoffeeBeans.map(item => <ShopItem key={item._id} item={item} />);
    }

    return (
        <section className={styles["section__shoplist-wrapper"]}>
            <div className={styles["shopItems-container"]}>
                {shownProducts}
            </div>
        </section>
    )
}

export default ShopList
