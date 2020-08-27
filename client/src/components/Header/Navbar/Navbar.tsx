import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { CatalogSubMenuType } from '../../../redux/types/types';
import BrandsMenu from './BrandsMenu/BrandsMenu';
import CatalogMenu from './CatalogMenu/CatalogMenu';
import styles from './Navbar.module.css';

type PropsType = {
    subMenu: Array<CatalogSubMenuType>
}

let Navbar: FC<PropsType> = ({ subMenu }) => {
    return (
        <div className={styles.b_c}>
            <div className={styles.container}>
                <nav>
                    <ul className={styles.mainMenu}>
                        <li><NavLink to="/home">Главная</NavLink></li>
                        <CatalogMenu subMenu={subMenu} />
                        <BrandsMenu />
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