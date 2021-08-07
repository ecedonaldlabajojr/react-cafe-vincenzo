import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { RiShoppingBagLine } from 'react-icons/ri'
import { AiOutlineUser } from 'react-icons/ai';
import { GiCoffeeBeans } from 'react-icons/gi';
import styles from './Navbar.module.scss';
import { IconContext } from 'react-icons/lib';
import CartDrawer from '../../Cart/CartDrawer';
import CartContext from '../../../store/cart-context';
import SearchTab from '../SearchTab/SearchTab'

function Navbar() {
    const cartCtx = useContext(CartContext);
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [showSearchTab, setShowSearchTab] = useState(false);

    const toggleSearchTab = () => {
        closeMobileMenu();
        setShowSearchTab(!showSearchTab);
    }
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) setButton(false);
        else setButton(true);
    };

    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return window.removeEventListener('resize', showButton)
    }, []);

    const [showCartDrawer, setShowCartDrawer] = useState(false);
    const showCartDrawerHandler = () => {
        closeMobileMenu();
        setShowCartDrawer(!showCartDrawer);
    }

    var body = document.body;
    if (showCartDrawer) {
        body.classList.add('no-scroll');
    } else body.classList.remove('no-scroll');

    const [itemQtyBump, setItemQtyBump] = useState(false);
    let cartQtyClasses = itemQtyBump ? `${styles["nav__cartItemsQty"]} ${styles.itemAdded}` : `${styles["nav__cartItemsQty"]}`;

    useEffect(() => {
        if (!cartCtx.items.length) return;
        setItemQtyBump(true);
        const timer = setTimeout(() => {
            setItemQtyBump(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [cartCtx.items])
    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <CartDrawer onClick={showCartDrawerHandler} showCartDrawer={showCartDrawer} />
            {showSearchTab && <SearchTab toggleSearchTab={toggleSearchTab} />}
            <nav className={styles.navbar}>
                <div className={`${styles["navbar-container"]} ${styles.container}`}>
                    <div className={`${styles["menu-icon"]}`} onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? `${styles["nav-menu"]} ${styles.active}` : `${styles["nav-menu"]}`}>
                        {/* ______________________________________________________________________________ */}
                        <li className={styles["nav-left"]}>
                            <Link to='/' className={styles["navbar-logo"]} onClick={closeMobileMenu}>
                                <GiCoffeeBeans /> &nbsp; VINCENZO
                            </Link>

                        </li>
                        {/* ______________________________________________________________________________ */}
                        <li className={styles["nav-center"]}>
                            <div className={styles["nav-item"]}>
                                <Link to='/' className={styles["nav-links"]} onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </div>
                            <div className={styles["nav-item"]}>
                                <NavLink to='/menu' className={styles["nav-links"]} activeClassName={styles["nav-active"]} onClick={closeMobileMenu}> Menu
                                </NavLink>
                            </div>
                            <div className={styles["nav-item"]}>
                                <NavLink to='/shop' className={styles["nav-links"]} activeClassName={styles["nav-active"]} onClick={closeMobileMenu}>
                                    SHOP
                                </NavLink>
                            </div>
                            <div className={styles["nav-item"]}>
                                <NavLink
                                    to='/brew-guide'
                                    className={styles["nav-links"]} activeClassName={styles["nav-active"]}
                                    onClick={closeMobileMenu}>
                                    Brew Guide
                                </NavLink>
                            </div>
                        </li>
                        {/* ______________________________________________________________________________ */}
                        <li className={styles["nav-right"]}>
                            <div className={styles["nav-item"]}>
                                <Link
                                    to='/user'
                                    className={styles["nav-links"]}
                                    onClick={closeMobileMenu}>
                                    <AiOutlineUser className='nav-user-actions' />
                                </Link>
                            </div>
                            <div className={styles["nav-item"]}>
                                <span
                                    to='/search'
                                    className={styles["nav-links"]}
                                    onClick={toggleSearchTab}>
                                    <BsSearch className='nav-user-actions' />
                                </span>
                            </div>
                            <div className={styles["nav-item"]}>
                                <span className={styles["nav-links"]} onClick={showCartDrawerHandler}>
                                    <RiShoppingBagLine className={styles["nav-user-actions"]} />
                                    <span className={cartQtyClasses}>{cartCtx.totalQty}</span>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </IconContext.Provider>
    );
}

export default Navbar;
