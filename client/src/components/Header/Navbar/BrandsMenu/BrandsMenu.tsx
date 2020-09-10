import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "../Navbar.module.css";
import CaretDownOutlinedIcon from "@ant-design/icons/CaretDownOutlined";
import { BrandsMenuType } from "../../../../redux/types/brands.types";

type PropsType = {
  brands: Array<BrandsMenuType>;
};

let BrandsMenu: FC<PropsType> = ({ brands }) => {
  let brandsElements = brands.map((bm) => (
    <li key={bm._id}>
      <NavLink to="#">
        <img src={bm.image} alt={`${bm.name} Logo`} />
        {bm.name}
      </NavLink>
    </li>
  ));
  return (
    <li>
      <NavLink to="/brands" activeClassName={styles.active}>
        Бренды
        <CaretDownOutlinedIcon className={styles.icon} />
      </NavLink>
      <ul className={`${styles.subMenu} ${styles.brands}`}>{brandsElements}</ul>
    </li>
  );
};

export default BrandsMenu;
