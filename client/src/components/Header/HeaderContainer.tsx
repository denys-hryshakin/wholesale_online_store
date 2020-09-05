import React, { FC } from "react";
import { connect } from "react-redux";
import { getCatalogSubMenu } from "../../redux/selectors/header-selectors";
import { AppStateType } from "../../redux/store";
import { CatalogSubMenuType } from "../../redux/types/catalog-types";
import Header from "./Header";

type MapStatePropsType = {
  subMenu: Array<CatalogSubMenuType>;
};

type MapDispatchPropsType = {};

type PropsType = MapStatePropsType & MapDispatchPropsType;

let HeaderContainer: FC<PropsType> = (props) => {
  return <Header subMenu={props.subMenu} />;
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    subMenu: getCatalogSubMenu(state),
  };
};

export default connect<
  MapStatePropsType,
  MapDispatchPropsType,
  {},
  AppStateType
>(
  mapStateToProps,
  {}
)(HeaderContainer);
