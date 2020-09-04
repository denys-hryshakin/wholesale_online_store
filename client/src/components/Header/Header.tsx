import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { CatalogSubMenuType } from "../../redux/types/catalog-types";
import styles from "./Header.module.css";
import Navbar from "./Navbar/Navbar";

type PropsType = {
  subMenu: Array<CatalogSubMenuType>;
};

let Header: FC<PropsType> = ({ subMenu }) => {
  return (
    <div className={styles.bImage}>
      <div className={styles.b_c}>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.logo}>IDEAL-AUTO</div>
            <form className={styles.searchBar}>
              <input type="text" placeholder="Search..." name="search" />
              <button type="submit" title="Поиск!">
                <SearchIcon className={styles.icon} />
              </button>
            </form>
            <div className={styles.userFnBlock}>
              <div className={styles.iconBlock}>
                <NavLink to="#" title="Корзина">
                  <ShoppingCartTwoToneIcon className={styles.icon} />
                </NavLink>
              </div>
              <div className={styles.iconBlock}>
                <NavLink to="#" title="Настройки профиля">
                  <AccountBoxIcon className={styles.icon} />
                </NavLink>
              </div>
              <div className={styles.iconBlock}>
                <NavLink to="#" title="Выйти">
                  <ExitToAppIcon className={styles.icon} />
                </NavLink>
              </div>
            </div>
          </header>
          <Navbar subMenu={subMenu} />
        </div>
      </div>
    </div>
  );
};

export default Header;
