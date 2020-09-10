// MATERIAL-UI Components
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
// MATERIAL-UI Icons
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HomeIcon from "@material-ui/icons/Home";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
// Default imports
import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getDelivery } from "../../redux/reducers/delivery.reducer";
import {
  getDeliveryMethodState,
  getDeliveryPaymentMethodState,
  getDeliveryRegionsState,
} from "../../redux/selectors/delivery.selectors";
import { AppStateType } from "../../redux/store";
import {
  DeliveryMethodType,
  DeliveryPaymentMethodType,
  DeliveryRegionsType,
} from "../../redux/types/delivery.types";
import styles from "./Delivery.module.css";
import DeliveryMethod from "./DeliveryMethods/DeliveryMethod";
import DeliveryPaymentMethod from "./DeliveryMethods/DeliveryPaymentMethod";
import DeliveryRegions from "./DeliveryMethods/DeliveryRegions";

type MapStatePropsType = {
  deliveryMethod: Array<DeliveryMethodType>;
  deliveryPaymentMethod: Array<DeliveryPaymentMethodType>;
  deliveryRegions: Array<DeliveryRegionsType>;
};

type MapDispatchPropsType = {
  getDelivery: () => void;
};

type PropsType = MapStatePropsType & MapDispatchPropsType;

const Delivery: FC<PropsType> = ({
  deliveryMethod,
  deliveryPaymentMethod,
  deliveryRegions,
  getDelivery,
}) => {
  let deliveryMethodElements = deliveryMethod.map((dm) => (
    <DeliveryMethod key={dm._id} name={dm.name} />
  ));
  let deliveryPaymentMethodElements = deliveryPaymentMethod.map((dpm) => (
    <DeliveryPaymentMethod
      key={dpm._id}
      name={dpm.name}
      additions={dpm.additions}
    />
  ));
  let deliveryRegionsElements = deliveryRegions.map((dr) => (
    <DeliveryRegions key={dr._id} name={dr.name} cities={dr.cities} />
  ));

  useEffect(() => {
    function getData() {
      getDelivery();
    }
    getData();
    // eslint-disable-next-line
  }, []);

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={styles.main}>
      <Breadcrumbs>
        <NavLink to="/home" className={styles.link}>
          <HomeIcon className={styles.breadcrumbIcon} />
          Главная
        </NavLink>
        <Typography color="textPrimary" className={styles.typography}>
          <LocalShippingIcon className={styles.breadcrumbIcon} />
          Доставка
        </Typography>
      </Breadcrumbs>
      <div className={styles.header}>
        <h1>Условия доставки и оплаты</h1>
        <InfoOutlinedIcon className={styles.icon} />
      </div>
      <div className={styles.root}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <CheckCircleOutlineIcon />
            <h3>Способы доставки</h3>
          </AccordionSummary>
          <AccordionDetails>
            <List>{deliveryMethodElements}</List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <CheckCircleOutlineIcon />
            <h3>Cпособы оплаты</h3>
          </AccordionSummary>
          <AccordionDetails>
            <List>{deliveryPaymentMethodElements}</List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <CheckCircleOutlineIcon />
            <h3>Регионы доставки</h3>
          </AccordionSummary>
          <AccordionDetails>
            <List>{deliveryRegionsElements}</List>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    deliveryMethod: getDeliveryMethodState(state),
    deliveryPaymentMethod: getDeliveryPaymentMethodState(state),
    deliveryRegions: getDeliveryRegionsState(state),
  };
};

export default connect<
  MapStatePropsType,
  MapDispatchPropsType,
  {},
  AppStateType
>(mapStateToProps, { getDelivery })(Delivery);
