import CaretDownOutlinedIcon from "@ant-design/icons/CaretDownOutlined";
import CaretRightOutlinedIcon from "@ant-design/icons/CaretRightOutlined";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { CatalogMenuType } from "../../../../redux/types/catalogMenu.types";
import styles from "../Navbar.module.css";

type PropsType = {
  catalogMenu: Array<CatalogMenuType>;
};

let CatalogMenu: FC<PropsType> = ({ catalogMenu }) => {
  return (
    <li>
      <NavLink to="/catalog" activeClassName={styles.active}>
        Каталог
        <CaretDownOutlinedIcon className={styles.icon} />
      </NavLink>
      <ul className={styles.subMenu}>
        {catalogMenu.map((sm) => (
          <li key={sm._id}>
            {sm.isSubMenu && (
              <>
                <NavLink to="#">
                  {sm.name}
                  <CaretRightOutlinedIcon className={styles.subIcon} />
                </NavLink>
                <ul className={styles.superSubMenu}>
                  {sm.subMenu.map((ssm) => (
                    <li key={ssm._id}>
                      <NavLink to="#">
                        <img src={ssm.image} alt="" />
                        {ssm.subName}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {!sm.isSubMenu && (
              <>
                <NavLink to="#">{sm.name}</NavLink>
              </>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default CatalogMenu;
