import React, { FC } from 'react'
import styles from './Delivery.module.css'

type PropsType = {

}

const Delivery: FC<PropsType> = () => {
    return (
        <div className={styles.main}>
            <h1>Delivery Page.</h1>
        </div>
    )
}

export default Delivery
