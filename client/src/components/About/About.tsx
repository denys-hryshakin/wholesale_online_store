import React, { FC } from 'react'
import styles from './About.module.css'

type PropsType = {

}

const About: FC<PropsType> = () => {
    return (
        <div className={styles.main}>
            <h1>About Page.</h1>
        </div>
    )
}

export default About
