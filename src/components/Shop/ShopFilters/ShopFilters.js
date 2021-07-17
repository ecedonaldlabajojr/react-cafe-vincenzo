import React from 'react'
import styles from './ShopFilters.module.css';
import ShopFilterItem from './ShopFilterItem';
import shopItemFilters from '../../../data/shopItem-filters-data';

const ShopFilters = () => {
    const coffeeFilterComponents = shopItemFilters.filter(filter => filter.category === 'coffee')
        .map(filter => <ShopFilterItem filter={filter} key={filter.tag} />);

    const gearFilterComponents = shopItemFilters.filter(filter => filter.category === 'gear')
        .map(filter => <ShopFilterItem filter={filter} key={filter.tag} />)

    return (
        <section className={styles["filters-container"]}>
            <div className={styles["filters-wrapper"]}>
                <div className={styles["filter-column"]}>
                    <h1 className={styles["filter-column-title"]}>Coffee</h1>
                    <div className={styles["filter-column-inner"]}>
                        {coffeeFilterComponents}
                    </div>
                </div>
                <div className={styles["filter-column"]}>
                    <h1 className={styles["filter-column-title"]}>Gear</h1>
                    <div className={styles["filter-column-inner"]}>
                        {gearFilterComponents}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShopFilters
