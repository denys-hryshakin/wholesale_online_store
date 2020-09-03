import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { InfoOutlined, LabelImportant, Phone, Email, Language, LocationOn, AccountCircle } from '@material-ui/icons'
import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { getContacts } from '../../redux/reducers/contacts-reducer'
import { getContactsState } from '../../redux/selectors/contacts-selectors'
import { AppStateType } from '../../redux/store'
import { ContactsInfoType } from '../../redux/types/contacts.types'
import styles from './Contacts.module.css'

type MapStatePropsType = {
    contacts: Array<ContactsInfoType>
}
type MapDispatchPropsType = {
    getContacts: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const Contacts: FC<PropsType> = (props) => {

    let contactsElements = props.contacts.map(c =>
        <List component="ul" aria-label="main">
            <ListItem divider={true}>
                <ListItemIcon>
                    <LabelImportant />
                </ListItemIcon>
                <ListItemText primary="Название" secondary={c.companyName} />
            </ListItem>
            <ListItem divider={true}>
                <ListItemIcon>
                    <AccountCircle />
                </ListItemIcon>
                <ListItemText primary="Контактное лицо" secondary={c.personName} />
            </ListItem>
            <ListItem divider={true}>
                <ListItemIcon>
                    <LocationOn />
                </ListItemIcon>
                <ListItemText primary="Адрес" secondary={c.address} />
            </ListItem>
            <ListItem divider={true}>
                <ListItemIcon>
                    <Phone />
                </ListItemIcon>
                <ListItemText primary="Телефон" secondary={c.phoneNumber} />
            </ListItem>
            <ListItem divider={true}>
                <ListItemIcon>
                    <Email />
                </ListItemIcon>
                <ListItemText primary="Email" secondary={c.email} />
            </ListItem>
            <ListItem divider={true}>
                <ListItemIcon>
                    <Language />
                </ListItemIcon>
                <ListItemText primary="Сайт" secondary={c.site} />
            </ListItem>
        </List>
    )

    useEffect(() => {
        function getData() {
            props.getContacts()
        }
        getData();
        // eslint-disable-next-line
    }, []);

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <h1>Контактная информация</h1>
                <InfoOutlined className={styles.icon} />
            </div>
            {contactsElements}
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        contacts: getContactsState(state),
    }
}

export default connect<MapStatePropsType,
    MapDispatchPropsType, {},
    AppStateType>
    (mapStateToProps,
        { getContacts })
    (Contacts)
