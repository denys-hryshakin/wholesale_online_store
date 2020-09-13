import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import DescriptionIcon from "@material-ui/icons/Description";
import HomeIcon from "@material-ui/icons/Home";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
// import about from "../../assets/images/Productpage KTM car.png";
import about from "../../assets/images/ideal-1.png";
import styles from "./About.module.css";

type PropsType = {};

const About: FC<PropsType> = () => {
  let text = (
    <div className={styles.text}>
      <p>
        Интернет Автомагазин "Идеал Авто" - всё для комфорта вашего
        автомобиля!!! Доведите свой автомобиль до идеала, а мы вам поможем
        подобрать всё для этого! Это простые правила, которых мы придерживаемся
        в нашей работе.
      </p>
      <p>
        <br />
        Наша компания является официальным дилером продукции Turtle Wax и ещё
        нескольким направлениям автомобильных товаров, поэтому мы предлагаем вам
        постоянное наличие на складе и привлекательные цены для всех
        покупателей, розничных и оптовых.
        <br />
        <br />
        Все наши товары очень высокого качества, поэтому хорошо зарекомендовали
        себя среди профессионалов в автомобильных вопросах и автолюбителей.
        Нашими клиентами уже являются много автомагазинов, автомоек и
        автосервисов, потому что они понимают как важно качество продукции в их
        деле, а также простых водителей, которые любят свой автомобиль и
        покупают для него все самое лучшее.
      </p>
      <h4>Добро пожаловать в наш автомагазин! Всегда рады вас видеть!</h4>
    </div>
  );

  return (
    <div className={styles.main}>
      <Breadcrumbs>
        <NavLink to="/home" className={styles.link}>
          <HomeIcon className={styles.breadcrumbIcon} />
          Главная
        </NavLink>
        <Typography color="textPrimary" className={styles.typography}>
          <DescriptionIcon className={styles.breadcrumbIcon} />О нас
        </Typography>
      </Breadcrumbs>
      <div className={styles.wrapper}>
        {text}
        <img src={about} alt="About-Img" />
      </div>
    </div>
  );
};

export default About;
