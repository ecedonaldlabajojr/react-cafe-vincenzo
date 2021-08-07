import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './ShopFilters.module.scss';
import ShopFilterItem from './ShopFilterItem';
import shopItemFilters from '../../../data/shopItem-filters-data';

const ShopFilters = () => {
    const coffeeFilterComponents = shopItemFilters.filter(filter => filter.category === 'coffee')
        .map(filter => <ShopFilterItem filter={filter} key={filter.tag} />);

    const gearFilterComponents = shopItemFilters.filter(filter => filter.category === 'gear')
        .map(filter => <ShopFilterItem filter={filter} key={filter.tag} />)

    const history = useHistory();
    const location = useLocation();
    const query = location.search.substr(3, location.search.length);

    const [searchQuery, setSearchQuery] = useState("");
    useEffect(() => setSearchQuery(query), [query])

    const onSearchChange = (e) => setSearchQuery(e.target.value);
    const searchHandler = (e) => {
        e.preventDefault();
        if (searchQuery.isNullOrWhiteSpace()) return;
        history.replace(`/shop?q=${searchQuery}`)
    }

    const queryValid = query && !query.isNullOrWhiteSpace();

    return (
        <section className={styles["filters-container"]}>
            <div className={styles["filters-max-width"]}>
                {queryValid && <div className={styles.searchGroup}>
                    <form onSubmit={searchHandler}>
                        <label htmlFor="search">SEARCH</label>
                        <input placeholder="HEHE" id="search" placeholder={query} onChange={onSearchChange} value={searchQuery} />
                    </form>
                </div>}

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
            </div>
        </section>
    )
}

export default ShopFilters
