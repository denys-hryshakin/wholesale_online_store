import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import ListAltIcon from "@material-ui/icons/ListAlt";
import HomeIcon from "@material-ui/icons/Home";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Catalog.module.css";

type PropsType = {};

const Catalog: FC<PropsType> = () => {
  return (
    <div className={styles.main}>
      <Breadcrumbs>
        <NavLink to="/home" className={styles.link}>
          <HomeIcon className={styles.breadcrumbIcon} />
          Главная
        </NavLink>
        <Typography color="textPrimary" className={styles.typography}>
          <ListAltIcon className={styles.breadcrumbIcon} />
          Каталог
        </Typography>
      </Breadcrumbs>
    </div>
  );
};

export default Catalog;
