import React from 'react'
import Slider from './Slider/Slider'
import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.main}>
            <h1>Home Page.</h1>
            <Slider />
        </div>
    );
};

export default Home;