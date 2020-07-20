import { LogoutOutlined, SearchOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

function Header() {
    let logoName: string = "IDEAL-AUTO"
    return (
        <div className={style.bImage}>
            <div className={style.b_c}>
                <div className={style.container}>
                    <header className={style.header}>
                        <div className={style.logo}>{logoName}</div>
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
                    <Navbar />
                </div>
            </div>
        </div>
    );
}

export default Header;