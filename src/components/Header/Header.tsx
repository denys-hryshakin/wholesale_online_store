import { LogoutOutlined, SearchOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import style from './Header.module.css';

const Header = () => {
    let logoName: string = "IDEAL-AUTO";
    return (
        <div className={style.b_c}>
            <div className={style.container}>
                <header className={style.header}>
                    <div className={style.logo}>{logoName}</div>
                    <form className={style.searchBar}>
                        <input type="text" placeholder="Search..." name="search" />
                        <button type="submit" title="Search!"><SearchOutlined className={style.icon} /></button>
                    </form>
                    <div className={style.userFnBlock}>
                        <div className={style.iconBlock}>
                            <ShoppingOutlined className={style.icon} />
                        </div>
                        <div className={style.iconBlock}>
                            <UserOutlined className={style.icon} />
                        </div>
                        <div className={style.iconBlock}>
                        <LogoutOutlined className={style.icon} />
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default Header;