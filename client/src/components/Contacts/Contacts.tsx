import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import LanguageIcon from "@material-ui/icons/Language";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getContacts } from "../../redux/reducers/contacts-reducer";
import { getContactsState } from "../../redux/selectors/contacts-selectors";
import { AppStateType } from "../../redux/store";
import { ContactsInfoType } from "../../redux/types/contacts.types";
import styles from "./Contacts.module.css";

type MapStatePropsType = {
  contacts: Array<ContactsInfoType>;
};
type MapDispatchPropsType = {
  getContacts: () => void;
};

type PropsType = MapStatePropsType & MapDispatchPropsType;

const Contacts: FC<PropsType> = (props) => {
  let contactsElements = props.contacts.map((c) => (
    <List key={c._id} className={styles.list}>
      <ListItem divider={true}>
        <ListItemIcon>
          <LabelImportantIcon />
        </ListItemIcon>
        <ListItemText primary="Название" secondary={c.companyName} />
      </ListItem>
      <ListItem divider={true}>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Контактное лицо" secondary={c.personName} />
      </ListItem>
      <ListItem divider={true}>
        <ListItemIcon>
          <LocationOnIcon />
        </ListItemIcon>
        <ListItemText primary="Адрес" secondary={c.address} />
      </ListItem>
      <ListItem divider={true}>
        <ListItemIcon>
          <PhoneIcon />
        </ListItemIcon>
        <ListItemText primary="Телефон" secondary={c.phoneNumber} />
      </ListItem>
      <ListItem divider={true}>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText primary="Email" secondary={c.email} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <LanguageIcon />
        </ListItemIcon>
        <ListItemText primary="Сайт" secondary={c.site} />
      </ListItem>
    </List>
  ));

  useEffect(() => {
    function getData() {
      props.getContacts();
    }
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.main}>
      <Breadcrumbs>
        <NavLink to="/home" className={styles.link}>
          <HomeIcon className={styles.breadcrumbIcon} />
          Главная
        </NavLink>
        <Typography color="textPrimary" className={styles.typography}>
          <ContactPhoneIcon className={styles.breadcrumbIcon} />
          Контакты
        </Typography>
      </Breadcrumbs>
      <div className={styles.header}>
        <h1>Контактная информация</h1>
        <InfoOutlinedIcon className={styles.icon} />
      </div>
      {contactsElements}
    </div>
  );
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    contacts: getContactsState(state),
  };
};

export default connect<
  MapStatePropsType,
  MapDispatchPropsType,
  {},
  AppStateType
>(mapStateToProps, { getContacts })(Contacts);
