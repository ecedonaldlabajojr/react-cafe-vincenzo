import React, { useState } from 'react'
import ShopList from '../Shop/ShopList/ShopList'
import ShopFilters from '../Shop/ShopFilters/ShopFilters'
import { ShopFiltersProvider } from '../../store/shop-filters-context'
const Shop = () => {
    const [filterKeyword, setFilterKeyword] = useState("");
    const fiterUpdateHandler = (keyword) => setFilterKeyword(keyword);

    return (
        <React.Fragment>
            <ShopFiltersProvider>
                <ShopFilters onUpdateFilter={fiterUpdateHandler} />
                <ShopList filter={filterKeyword} />
            </ShopFiltersProvider>
        </React.Fragment>
    )
}

export default Shop;