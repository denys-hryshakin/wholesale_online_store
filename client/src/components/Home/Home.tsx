import React from 'react'
import Slider from './Slider/Slider'
import style from './Home.module.css'

const Home = () => {
    return (
        <div className={style.main}>
            <h1>Welcome. Home page</h1>
           <Slider /> 
        </div>
    );
};

export default Home;