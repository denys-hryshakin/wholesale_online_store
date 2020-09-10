import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { CatalogMenuType } from "../../../redux/types/catalogMenu.types";
import BrandsMenu from "./BrandsMenu/BrandsMenu";
import CatalogMenu from "./CatalogMenu/CatalogMenu";
import styles from "./Navbar.module.css";
import { BrandsMenuType } from "../../../redux/types/brands.types";

type PropsType = {
  catalogMenu: Array<CatalogMenuType>;
  brands: Array<BrandsMenuType>;
};

let Navbar: FC<PropsType> = ({ catalogMenu, brands }) => {
  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.mainMenu}>
          <li>
            <NavLink activeClassName={styles.active} to="/home">
              Главная
            </NavLink>
          </li>
          <CatalogMenu catalogMenu={catalogMenu} />
          <BrandsMenu brands={brands} />
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
