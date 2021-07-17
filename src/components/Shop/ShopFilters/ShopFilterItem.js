import React, { useContext } from 'react'
import styles from './ShopFilterItem.module.css'
import shopFiltersContext from '../../../store/shop-filters-context'

const ShopFilterItem = (props) => {
    const shopFiltersCtx = useContext(shopFiltersContext);
    const appliedFilters = shopFiltersCtx.appliedFilter;

    const { tag, category } = props.filter;

    let formattedTag = tag.toLowerCase();
    if (tag.includes(" ")) formattedTag = formattedTag.replace(' ', '-');
    const filterObject = {
        category: category,
        tag: formattedTag,
    }

    let isChecked = appliedFilters[0] === category && appliedFilters[1] === formattedTag;

    const selectFilterHandler = (e) => {
        if (e.target.checked) shopFiltersCtx.applyFilter(filterObject);
        else shopFiltersCtx.removeFilter(filterObject);
    }

    return (
        <div className={styles["filter-wrapper"]}>
            <input type="checkbox" id="filter" name="filter" onChange={selectFilterHandler} checked={isChecked} />
            <label htmlFor="filter">{tag}</label>
        </div>
    )
}
export default ShopFilterItem
