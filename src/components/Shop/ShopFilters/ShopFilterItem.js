import React from 'react'
import styles from './ShopFilterItem.module.css'

const ShopFilterItem = (props) => {
    const { filter, onClick } = props;
    const selectFilterHandler = (e) => {
        if (e.target.checked) onClick(filter.keyword);
        else onClick("");
    }
    return (
        <div className={styles["filter-wrapper"]}>
            <input type="checkbox" id="filter" name="filter" value={filter.keyword} onClick={selectFilterHandler} />
            <label htmlFor="filter">{filter.filterName}</label>
        </div>
    )
}
export default ShopFilterItem
