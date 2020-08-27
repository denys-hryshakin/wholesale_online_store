import React, { FC } from 'react'
import styles from './Catalog.module.css'

type PropsType = {

}

const Catalog: FC<PropsType> = () => {
    return (
        <div className={styles.main}>
            <h1>Catalog Page.</h1>
        </div>
    )
}

export default Catalog
