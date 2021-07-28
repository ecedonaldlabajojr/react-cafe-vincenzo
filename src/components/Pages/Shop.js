import React, { useState } from 'react'
import { useLocation } from 'react-router';
import ShopList from '../Shop/ShopList/ShopList'
import ShopFilters from '../Shop/ShopFilters/ShopFilters'
import { ShopFiltersProvider } from '../../store/shop-filters-context'
const Shop = () => {
    const [filterKeyword, setFilterKeyword] = useState("");
    const fiterUpdateHandler = (keyword) => setFilterKeyword(keyword);
    const location = useLocation();
    const query = location.search.substr(3, location.search.length);

    return (
        <React.Fragment>
            <ShopFiltersProvider>
                <ShopFilters onUpdateFilter={fiterUpdateHandler} />
                <ShopList filter={filterKeyword} query={query} />
            </ShopFiltersProvider>
        </React.Fragment>
    )
}

export default Shop;