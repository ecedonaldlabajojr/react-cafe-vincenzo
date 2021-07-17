import React from 'react'
import styles from './ShopFilters.module.css';
import ShopFilterItem from './ShopFilterItem';
import shopItemFilters from '../../../data/shopItem-filters-data';

const sampleFilter = {
    keyword: 'colombia',
    filterName: 'Colombia',
}
console.log(shopItemFilters);

const ShopFilters = (props) => {
    const selectFilterHandler = (keyword) => {
        const { onUpdateFilter } = props;
        onUpdateFilter(keyword);
    }

    const shopFilterComponents = shopItemFilters.map(filter =>
        <ShopFilterItem filter={filter} onClick={selectFilterHandler} key={filter.keyword} selectFilterHandler={selectFilterHandler} />)

    return (
        <section className={styles["filters-container"]}>
            <div className={styles["filters-wrapper"]}>
                <div className={styles["filter-column"]}>
                    <h1 className={styles["filter-column-title"]}>Coffee</h1>
                    {shopFilterComponents}
                </div>
                <div className={styles["filter-column"]}>
                    <h1>Gear</h1>
                </div>
            </div>
        </section>
    )
}

export default ShopFilters
