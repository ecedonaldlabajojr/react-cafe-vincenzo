import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router'
import styles from './SearchTab.module.css'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { IconContext } from 'react-icons/lib';
import { BsSearch } from 'react-icons/bs';



const SearchTab = ({ toggleSearchTab }) => {
    const history = useHistory();
    const searchRef = useRef();

    const searchItemsHandler = () => {
        history.replace(`/shop?q=${searchRef.current.value}`)
        toggleSearchTab();
    }

    return (
        <IconContext.Provider value={{ color: 'black' }}>
            {ReactDOM.createPortal(<section className={styles.searchWrap}>
                <h1>SEARCH OUR STORE</h1>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="Search for a product" ref={searchRef} />
                    <BsSearch className={styles.searchIcon} onClick={searchItemsHandler} />
                </div>
                <IoIosCloseCircleOutline className={styles.closeBtn} onClick={toggleSearchTab} />
            </section>, document.getElementById('search-tab-overlay'))}
        </IconContext.Provider>
    )
}

export default SearchTab;
