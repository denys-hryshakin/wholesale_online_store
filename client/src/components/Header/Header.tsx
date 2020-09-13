// Material-UI Icons
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
// Default
import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getBrandsState } from "../../redux/selectors/header.selectors";
import { getBrands } from "../../redux/reducers/brands.reducer";
import { getCatalogMenu } from "../../redux/reducers/catalogMenu.reducer";
import { getCatalogMenuState } from "../../redux/selectors/header.selectors";
import { AppStateType } from "../../redux/store";
import { BrandsMenuType } from "../../redux/types/brands.types";
import { CatalogMenuType } from "../../redux/types/catalogMenu.types";
import styles from "./Header.module.css";
import Navbar from "./Navbar/Navbar";

type MapStatePropsType = {
  catalogMenu: Array<CatalogMenuType>;
  brands: Array<BrandsMenuType>;
};

type MapDispatchPropsType = {
  getBrands: () => void;
  getCatalogMenu: () => void;
};

type PropsType = MapStatePropsType & MapDispatchPropsType;

let Header: FC<PropsType> = ({
  catalogMenu,
  brands,
  getBrands,
  getCatalogMenu,
}) => {
  useEffect(() => {
    function getData() {
      getBrands();
      getCatalogMenu();
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
            <Navbar catalogMenu={catalogMenu} brands={brands} />
            <form className={styles.searchBar}>
              <input type="text" placeholder="Поиск..." name="search" />
              <button type="submit" title="Поиск!">
                <SearchIcon className={styles.icon} />
              </button>
            </form>
            <div className={styles.userFnBlock}>
              <div className={styles.iconBlock}>
                <NavLink to="/shopping-cart" title="Корзина">
                  <ShoppingCartTwoToneIcon className={styles.icon} />
                </NavLink>
              </div>
              <div className={styles.iconBlock}>
                <NavLink to="/profile" title="Настройки профиля">
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
    catalogMenu: getCatalogMenuState(state),
    brands: getBrandsState(state),
  };
};

export default connect<
  MapStatePropsType,
  MapDispatchPropsType,
  {},
  AppStateType
>(mapStateToProps, { getBrands, getCatalogMenu })(Header);
