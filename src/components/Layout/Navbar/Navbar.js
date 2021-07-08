import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { RiShoppingBagLine } from 'react-icons/ri'
import { AiOutlineUser } from 'react-icons/ai';
import { GiCoffeeBeans } from 'react-icons/gi';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import CartDrawer from '../../Cart/CartDrawer';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

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


    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <CartDrawer onClick={showCartDrawerHandler} showCartDrawer={showCartDrawer} />
            <nav className='navbar'>
                <div className='navbar-container container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <GiCoffeeBeans /> &nbsp; VINCENZO
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/services'
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
                                to='/'
                                className='nav-links'
                                onClick={closeMobileMenu}>
                                Brew Guide
                            </NavLink>
                        </li>
                    </ul>
                    <ul className={click ? 'nav-menu nav-right active' : 'nav-menu nav-right'}>
                        <li className='nav-item'>
                            <Link
                                to='/'
                                className='nav-links'
                                onClick={closeMobileMenu}>
                                <AiOutlineUser className='nav-user-actions' />
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/'
                                className='nav-links'
                                onClick={closeMobileMenu}>
                                <BsSearch className='nav-user-actions' />
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/'
                                className='nav-links'
                                onClick={showCartDrawerHandler}>
                                <RiShoppingBagLine className='nav-user-actions' />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </IconContext.Provider>
    );
}

export default Navbar;
