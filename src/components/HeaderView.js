import React, { useState } from 'react';
import './headerview.css';

const HeaderView = () => {
    const [activated, setActivated] = useState(false);

    const handlleClick = (e) => {
        const target = e.target;
        if (target.closest('.menu-nav__icon')) {
            setActivated(!activated);
        }

        if (target.classList.contains('menu-nav__overlay') || target.closest('.menu-nav__link')) {
            setActivated(false);
        }
    };

    return (
        <header className='header'>
            <div className='header-content'>
                <svg className='header__svg'>
                    <use xlinkHref='sprite.svg#logo'></use>
                </svg>
                <nav className='header-nav'>
                    <ul className='header-nav__list'>
                        <li className='header-nav__item'>
                            <a className='header-nav__link fw-500'>About</a>
                        </li>
                        <li className='header-nav__item'>
                            <a className='header-nav__link fw-500'>Discover</a>
                        </li>
                        <li className='header-nav__item'>
                            <a className='header-nav__link fw-500'>Get Started</a>
                        </li>
                    </ul>
                </nav>
                <div className='menu-nav' onClick={ handlleClick }>
                    <svg className={ `menu-nav__icon ${activated ? 'activated' : ''}` }>
                        <use xlinkHref='sprite.svg#icon-hamburger' className='menu-nav__icon--hamburger' />
                        <use xlinkHref='sprite.svg#icon-close-menu' className='menu-nav__icon--close' />
                    </svg>
                    <div className={ `menu-nav__overlay ${activated ? 'show' : ''}` } >
                        <div className='menu-nav__container'>
                            <nav className='menu-nav__element'>
                                <ul className='menu-nav__list'>
                                    <li className='menu-nav__item'>
                                        <a className='menu-nav__link fw-700'>About</a>
                                    </li>
                                    <li className='menu-nav__item'>
                                        <a className='menu-nav__link fw-700'>Discover</a>
                                    </li>
                                    <li className='menu-nav__item'>
                                        <a className='menu-nav__link fw-700'>Get Started</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default HeaderView;
