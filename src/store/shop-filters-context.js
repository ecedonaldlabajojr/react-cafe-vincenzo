import React, { useState } from 'react'

const shopFiltersContext = React.createContext({
    appliedFilter: [],
    applyFilter: (filterObject) => { },
    removeFilter: (filterObject) => { },
})

export const ShopFiltersProvider = (props) => {
    const [appliedFilter, setAppliedFilter] = useState([]);
    console.table(appliedFilter);
    const applyFilter = (filterObject) => {
        let updatedAppliedFilter = [...Object.values(filterObject)];
        setAppliedFilter(updatedAppliedFilter);
    }

    const removeFilter = (filterObject) => {
        setAppliedFilter([]);
    }
    const ctxValue = {
        appliedFilter, applyFilter, removeFilter
    }
    return <shopFiltersContext.Provider value={ctxValue}>{props.children}</shopFiltersContext.Provider>
}

export default shopFiltersContext;