import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { CatalogSubMenuType } from '../../../redux/types/types';
import Brands from './Brands/Brands';
import Submenu from './Catalog/Submenu/Submenu';
import style from './Navbar.module.css';

type PropsType = {
    subMenu: Array<CatalogSubMenuType>
}

let Navbar: FC<PropsType> = ({ subMenu }) => {
    return (
        <div className={style.b_c}>
            <div className={style.container}>
                <nav>
                    <ul className={style.mainMenu}>
                        <li><NavLink to="/home">Главная</NavLink></li>
                        <Submenu subMenu={subMenu} />
                        <Brands />
                        <li><NavLink to="/contacts">Контакты</NavLink></li>
                        <li><NavLink to="/about">О нас</NavLink></li>
                        <li><NavLink to="/delivery">Доставка и оплата</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;