import React, { FC } from 'react'
import styles from './Brands.module.css'

type PropsType = {

}

const Brands: FC<PropsType> = () => {
    return (
        <div className={styles.main}>
            <h1>Brands Page.</h1>
        </div>
    )
}

export default Brands
