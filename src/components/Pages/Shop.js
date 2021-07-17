import React, { useState } from 'react'
import ShopList from '../Shop/ShopList/ShopList'
import ShopFilters from '../Shop/ShopFilters/ShopFilters'
const Shop = () => {
    const [filterKeyword, setFilterKeyword] = useState("");
    const fiterUpdateHandler = (keyword) => setFilterKeyword(keyword);

    return (
        <React.Fragment>
            <ShopFilters onUpdateFilter={fiterUpdateHandler} />
            <ShopList filter={filterKeyword} />
        </React.Fragment>
    )
}

export default Shop;