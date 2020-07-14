import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={style.b_c}>
            <div className={style.container}>
                <div className={style.navbar}>
                    <div className={style.navLink}><NavLink to="#">Главная</NavLink></div>
                    <div className={style.navLink}><NavLink to="#">Магазин</NavLink></div>
                    <div className={style.category}>
                        <div className={style.navLink}><NavLink to="#">Категории</NavLink></div>
                        <div className={style.category_list}>
                            <NavLink to="#">Масла</NavLink>
                            <NavLink to="#">Автокосметика</NavLink>
                            <NavLink to="#">Автохимия</NavLink>
                        </div>
                    </div>
                    <div className={style.navLink}><NavLink to="#">Контакты</NavLink></div>
                    <div className={style.navLink}><NavLink to="#">О нас</NavLink></div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;