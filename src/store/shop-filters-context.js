import React, { useState } from 'react'

const shopFiltersContext = React.createContext({
    appliedFilters: [],
    removeAppliedFilter: (tagsArray) => { },
})

const [appliedFilters, setAppliedFilters] = useState([]);
const removeAppliedFilter = (tagsArray) => {
    console.log(tagsArray);
}

const [appliedFilters, setAppliedFilters] = useState([]);