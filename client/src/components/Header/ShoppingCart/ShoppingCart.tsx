// Material-Ui Components
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
// Material-UI Icons
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
// Default
import React, { FC } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppStateType } from "../../../redux/store";
import styles from "./ShoppingCart.module.css";

type MapStatePropsType = {};
type MapDispatchPropsType = {};

type PropsType = MapStatePropsType & MapDispatchPropsType;

const ShoppingCart: FC<PropsType> = () => {
  return (
    <div className={styles.main}>
      <Breadcrumbs>
        <NavLink to="/home" className={styles.link}>
          <HomeIcon className={styles.breadcrumbIcon} />
          Главная
        </NavLink>
        <Typography color="textPrimary" className={styles.typography}>
          <ShoppingCartOutlinedIcon className={styles.breadcrumbIcon} />
          Корзина
        </Typography>
      </Breadcrumbs>
      <div className={styles.header}></div>
    </div>
  );
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {};
};

export default connect<
  MapStatePropsType,
  MapDispatchPropsType,
  {},
  AppStateType
>(
  mapStateToProps,
  {}
)(ShoppingCart);
