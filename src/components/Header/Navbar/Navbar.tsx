import React from 'react';
import { NavLink } from 'react-router-dom';
import Brands from './Brands/Brands';
import Catalog from './Catalog/Catalog';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={style.b_c}>
            <div className={style.container}>
                <nav>
                    <ul className={style.mainMenu}>
                        <li><NavLink to="#">Главная</NavLink></li>
                        <Catalog />
                        <Brands />
                        <li><NavLink to="#">Контакты</NavLink></li>
                        <li><NavLink to="#">О нас</NavLink></li>
                        <li><NavLink to="#">Доставка и оплата</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;