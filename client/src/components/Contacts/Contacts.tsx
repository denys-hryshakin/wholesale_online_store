import React, { FC } from 'react'
import styles from './Contacts.module.css'

type PropsType = {

}

const Contacts: FC<PropsType> = () => {
    return (
        <div className={styles.main}>
            <h1>Contacts Page.</h1>
        </div>
    )
}

export default Contacts
