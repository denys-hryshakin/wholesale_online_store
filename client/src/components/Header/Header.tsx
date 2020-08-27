import { LogoutOutlined, SearchOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { CatalogSubMenuType } from '../../redux/types/types';
import styles from './Header.module.css';
import Navbar from './Navbar/Navbar';

type PropsType = {
    subMenu: Array<CatalogSubMenuType>
}

let Header: FC<PropsType> = ({subMenu}) => {
    return (
        <div className={styles.bImage}>
            <div className={styles.b_c}>
                <div className={styles.container}>
                    <header className={styles.header}>
                        <div className={styles.logo}>IDEAL-AUTO</div>
                        <form className={styles.searchBar}>
                            <input type="text" placeholder="Search..." name="search" />
                            <button type="submit" title="Поиск!"><SearchOutlined className={styles.icon} /></button>
                        </form>
                        <div className={styles.userFnBlock}>
                            <div className={styles.iconBlock}>
                                <NavLink to="#" title="Корзина"><ShoppingOutlined className={styles.icon} /></NavLink>
                            </div>
                            <div className={styles.iconBlock}>
                                <NavLink to="#" title="Настройки профиля"><UserOutlined className={styles.icon} /></NavLink>
                            </div>
                            <div className={styles.iconBlock}>
                                <NavLink to="#" title="Выйти"><LogoutOutlined className={styles.icon} /></NavLink>
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