import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import AssignmentIcon from "@material-ui/icons/Assignment";
import HomeIcon from "@material-ui/icons/Home";
import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getBrands } from "../../redux/reducers/brands.reducer";
import { getBrandsState } from "../../redux/selectors/header.selectors";
import { AppStateType } from "../../redux/store";
import { BrandsMenuType } from "../../redux/types/brands.types";
import styles from "./Brands.module.css";

type MapStatePropsType = {
  brands: Array<BrandsMenuType>;
};
type MapDispatchPropsType = {
  getBrands: () => void;
};

type PropsType = MapStatePropsType & MapDispatchPropsType;

const Brands: FC<PropsType> = ({ brands, getBrands }) => {
  let brandsElements = brands.map((b) => (
    <div key={b._id} className={styles.item}>
      <NavLink to="#">
        <img src={b.image} alt="" />
        <div className={styles.brandName}>{b.name}</div>
      </NavLink>
    </div>
  ));

  useEffect(() => {
    function getData() {
      getBrands();
    }
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs>
          <NavLink to="/home" className={styles.link}>
            <HomeIcon className={styles.breadcrumbIcon} />
            Главная
          </NavLink>
          <Typography color="textPrimary" className={styles.typography}>
            <AssignmentIcon className={styles.breadcrumbIcon} />
            Бренды
          </Typography>
        </Breadcrumbs>
      </div>
      <div className={styles.wrap}>{brandsElements}</div>
    </div>
  );
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    brands: getBrandsState(state),
  };
};

export default connect<
  MapStatePropsType,
  MapDispatchPropsType,
  {},
  AppStateType
>(mapStateToProps, { getBrands })(Brands);
