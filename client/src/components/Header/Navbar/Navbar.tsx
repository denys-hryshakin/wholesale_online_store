import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { CatalogSubMenuType } from '../../../redux/types/types';
import Brands from './Brands/Brands';
import Catalog from './Catalog/Catalog';
import style from './Navbar.module.css';

type PropsType = {
    subMenu: Array<CatalogSubMenuType>
}

let Navbar: FC<PropsType> = ({subMenu}) => {
    return (
        <div className={style.b_c}>
            <div className={style.container}>
                <nav>
                    <ul className={style.mainMenu}>
                        <li><NavLink to="#">Главная</NavLink></li>
                        <Catalog subMenu={subMenu} />
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