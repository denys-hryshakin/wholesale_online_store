import CaretDownOutlinedIcon from "@ant-design/icons/CaretDownOutlined";
import CaretRightOutlinedIcon from "@ant-design/icons/CaretRightOutlined";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { CatalogSubMenuType } from "../../../../redux/types/catalog-types";
import styles from "../Navbar.module.css";

type PropsType = {
  subMenu: Array<CatalogSubMenuType>;
};

let CatalogMenu: FC<PropsType> = ({ subMenu }) => {
  return (
    <li>
      <NavLink to="/catalog" activeClassName={styles.active}>
        Каталог
        <CaretDownOutlinedIcon className={styles.icon} />
      </NavLink>
      <ul className={styles.subMenu}>
        {subMenu.map((sm) => (
          <>
            {sm.isSuperSubMenu && (
              <li key={sm.id}>
                <NavLink to="#">
                  {sm.name}
                  <CaretRightOutlinedIcon className={styles.subIcon} />
                </NavLink>
                <ul className={styles.superSubMenu}>
                  {sm.superSubMenu.map((ssm) => (
                    <li key={ssm.id}>
                      <NavLink to="#">
                        <img src={ssm.img} alt="" />
                        {ssm.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            )}
            {!sm.isSuperSubMenu && (
              <li>
                <NavLink to="#">{sm.name}</NavLink>
              </li>
            )}
          </>
        ))}
      </ul>
    </li>
  );
};

export default CatalogMenu;