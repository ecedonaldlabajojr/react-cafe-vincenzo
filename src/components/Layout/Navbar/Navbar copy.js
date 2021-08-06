import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { RiShoppingBagLine } from 'react-icons/ri'
import { AiOutlineUser } from 'react-icons/ai';
import { GiCoffeeBeans } from 'react-icons/gi';
import "./Navbar.css";
import { IconContext } from 'react-icons/lib';
import CartDrawer from '../../Cart/CartDrawer';
import CartContext from '../../../store/cart-context';
import SearchTab from '../SearchTab/SearchTab'

function Navbar() {
    const cartCtx = useContext(CartContext);
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [showSearchTab, setShowSearchTab] = useState(false);

    const toggleSearchTab = () => setShowSearchTab(!showSearchTab);
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
        setShowCartDrawer(!showCartDrawer);
    }

    var body = document.body;
    if (showCartDrawer) {
        body.classList.add('no-scroll');
    } else body.classList.remove('no-scroll');

    const [itemQtyBump, setItemQtyBump] = useState(false);
    let cartQtyClasses = itemQtyBump ? 'nav__cartItemsQty itemAdded' : 'nav__cartItemsQty';

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
            <nav className='navbar'>
                <div className='navbar-container container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <GiCoffeeBeans /> &nbsp; VINCENZO
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <div className={'nav-group nav-center'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <NavLink
                                    to='/menu'
                                    className='nav-links'
                                    onClick={closeMobileMenu}>
                                    Menu
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink
                                    to='/shop'
                                    className='nav-links'
                                    activeClassName='nav-active'
                                    onClick={closeMobileMenu}>
                                    SHOP
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink
                                    to='/brew-guide'
                                    className='nav-links'
                                    activeClassName='nav-active'
                                    onClick={closeMobileMenu}>
                                    Brew Guide
                                </NavLink>
                            </li>
                        </div>
                        <div className={'nav-right nav-group'}>
                            <li className='nav-item'>
                                <Link
                                    to='/user'
                                    className='nav-links'
                                    onClick={closeMobileMenu}>
                                    <AiOutlineUser className='nav-user-actions' />
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <span
                                    to='/search'
                                    className='nav-links'
                                    onClick={toggleSearchTab}>
                                    <BsSearch className='nav-user-actions' />
                                </span>
                            </li>
                            <li className='nav-item'>
                                <span className='nav-links' onClick={showCartDrawerHandler}>
                                    <RiShoppingBagLine className='nav-user-actions' />
                                    <span className={cartQtyClasses}>{cartCtx.totalQty}</span>
                                </span>
                            </li>
                        </div>
                    </ul>
                </div>
            </nav>
        </IconContext.Provider>
    );
}

export default Navbar;
