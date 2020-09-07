import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getBrandsMenu } from "../../redux/reducers/brandsMenu-reducer";
import { getBrandsMenuState } from "../../redux/selectors/brandsMenu-selectors";
import { getCatalogSubMenu } from "../../redux/selectors/header-selectors";
import { AppStateType } from "../../redux/store";
import { BrandsMenuInfoType } from "../../redux/types/brandsMenu.types";
import { CatalogSubMenuType } from "../../redux/types/catalog-types";
import styles from "./Header.module.css";
import Navbar from "./Navbar/Navbar";

type MapStatePropsType = {
  subMenu: Array<CatalogSubMenuType>;
  brandsMenu: Array<BrandsMenuInfoType>;
};

type MapDispatchPropsType = {
  getBrandsMenu: () => void;
};

type PropsType = MapStatePropsType & MapDispatchPropsType;

let Header: FC<PropsType> = ({ subMenu, brandsMenu, getBrandsMenu }) => {
  useEffect(() => {
    function getData() {
      getBrandsMenu();
    }
    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <div className={styles.bImage}>
      <div className={styles.b_c}>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.logo}>IDEAL-AUTO</div>
            <Navbar subMenu={subMenu} brandsMenu={brandsMenu} />
            <form className={styles.searchBar}>
              <input type="text" placeholder="Поиск..." name="search" />
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
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    subMenu: getCatalogSubMenu(state),
    brandsMenu: getBrandsMenuState(state),
  };
};

export default connect<
  MapStatePropsType,
  MapDispatchPropsType,
  {},
  AppStateType
>(mapStateToProps, { getBrandsMenu })(Header);
