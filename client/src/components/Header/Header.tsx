import { LogoutOutlined, SearchOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { CatalogSubMenuType } from '../../redux/types/types';
import style from './Header.module.css';
import Navbar from './Navbar/Navbar';

type PropsType = {
    subMenu: Array<CatalogSubMenuType>
}

let Header: FC<PropsType> = ({subMenu}) => {
    return (
        <div className={style.bImage}>
            <div className={style.b_c}>
                <div className={style.container}>
                    <header className={style.header}>
                        <div className={style.logo}>IDEAL-AUTO</div>
                        <form className={style.searchBar}>
                            <input type="text" placeholder="Search..." name="search" />
                            <button type="submit" title="Поиск!"><SearchOutlined className={style.icon} /></button>
                        </form>
                        <div className={style.userFnBlock}>
                            <div className={style.iconBlock}>
                                <NavLink to="#" title="Корзина"><ShoppingOutlined className={style.icon} /></NavLink>
                            </div>
                            <div className={style.iconBlock}>
                                <NavLink to="#" title="Настройки профиля"><UserOutlined className={style.icon} /></NavLink>
                            </div>
                            <div className={style.iconBlock}>
                                <NavLink to="#" title="Выйти"><LogoutOutlined className={style.icon} /></NavLink>
                            </div>
                        </div>
                    </header>
                    <Navbar subMenu={subMenu} />
                </div>
            </div>
        </div>
    );
}

export default Header;