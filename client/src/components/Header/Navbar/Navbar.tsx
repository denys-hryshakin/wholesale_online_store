import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { CatalogSubMenuType } from "../../../redux/types/catalog-types";
import BrandsMenu from "./BrandsMenu/BrandsMenu";
import CatalogMenu from "./CatalogMenu/CatalogMenu";
import styles from "./Navbar.module.css";

type PropsType = {
  subMenu: Array<CatalogSubMenuType>;
};

let Navbar: FC<PropsType> = ({ subMenu }) => {
  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.mainMenu}>
          <li>
            <NavLink activeClassName={styles.active} to="/home">
              Главная
            </NavLink>
          </li>
          <CatalogMenu subMenu={subMenu} />
          <BrandsMenu />
          <li>
            <NavLink to="/contacts" activeClassName={styles.active}>
              Контакты
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName={styles.active}>
              О нас
            </NavLink>
          </li>
          <li>
            <NavLink to="/delivery" activeClassName={styles.active}>
              Доставка
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
