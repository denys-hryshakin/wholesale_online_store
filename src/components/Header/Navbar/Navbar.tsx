import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';
import { CaretDownOutlined } from '@ant-design/icons';
import turtleWax from '../../../assets/images/db/turtle-wax.svg';
import littleTrees from '../../../assets/images/db/little-trees.svg';
import valvoline from '../../../assets/images/db/valvoline-5.svg';
import motip from '../../../assets/images/db/motip.svg';
import runway from '../../../assets/images/db/runway.svg';
import eikosha from '../../../assets/images/db/eikosha.svg';
import carbi from '../../../assets/images/db/carbi.svg';
import mobil1 from '../../../assets/images/db/mobil-1.svg';
import total from '../../../assets/images/db/total-3.svg';
import soft99 from '../../../assets/images/db/soft99.svg';
import kixx from '../../../assets/images/db/kixx.svg';
import xado from '../../../assets/images/db/xado.svg';
import littleTreesMain from '../../../assets/images/db/little-trees-preview.jpg';
import eikoshaMain from '../../../assets/images/db/eikosha-preview.jpg';


const Navbar = () => {
    return (
        <div className={style.b_c}>
            <div className={style.container}>
                <nav>
                    <ul className={style.mainMenu}>
                        <li><NavLink to="#">Главная</NavLink></li>
                        <li><NavLink to="#">Каталог<CaretDownOutlined className={style.icon} /></NavLink>
                            <ul className={style.subMenu}>
                                <li><NavLink to="#">Освежители воздуха Ароматизаторы</NavLink>
                                    <ul className={style.superSubMenu}>
                                        <li><NavLink to="#"><img src={littleTreesMain} alt=""/>Ароматизаторы воздуха Little Trees</NavLink></li>
                                        <li><NavLink to="#"><img src={eikoshaMain} alt=""/>Освежиели воздуха Eikosha</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink to="#">Автокосметика и автохимия</NavLink>
                                    <ul className={style.superSubMenu}>
                                        <li><NavLink to="#"><img src={eikoshaMain} alt=""/>Средства по уходу за салоном</NavLink></li>
                                        <li><NavLink to="#"><img src={eikoshaMain} alt=""/>Средства для стекол</NavLink></li>
                                        <li><NavLink to="#"><img src={eikoshaMain} alt=""/>Средства для колес</NavLink></li>
                                        <li><NavLink to="#"><img src={eikoshaMain} alt=""/>Полироли для кузова. Удалители царапин</NavLink></li>
                                        <li><NavLink to="#"><img src={eikoshaMain} alt=""/>Автошампуни</NavLink></li>
                                        <li><NavLink to="#"><img src={eikoshaMain} alt=""/>Смазки</NavLink></li>
                                        <li><NavLink to="#"><img src={eikoshaMain} alt=""/>Очистители, присадки</NavLink></li>
                                        <li><NavLink to="#"><img src={eikoshaMain} alt=""/>Клеи, герметики, фиксаторы</NavLink></li>
                                    </ul></li>
                                <li><NavLink to="#">Всё для покраски</NavLink>
                                    <ul className={style.superSubMenu}>
                                        <li><NavLink to="#">Ароматизаторы воздуха</NavLink></li>
                                        <li><NavLink to="#">Освежиели воздуха</NavLink></li>
                                    </ul></li>
                                <li><NavLink to="#">Антифриз, тосол, тормозная жидкость</NavLink>
                                    <ul className={style.superSubMenu}>
                                        <li><NavLink to="#">Ароматизаторы воздуха</NavLink></li>
                                        <li><NavLink to="#">Освежиели воздуха</NavLink></li>
                                    </ul></li>
                                <li><NavLink to="#">Масла и смазки</NavLink>
                                    <ul className={style.superSubMenu}>
                                        <li><NavLink to="#">Ароматизаторы воздуха</NavLink></li>
                                        <li><NavLink to="#">Освежиели воздуха</NavLink></li>
                                    </ul></li>
                                <li><NavLink to="#">Жидкости омывателя стекла</NavLink>
                                    <ul className={style.superSubMenu}>
                                        <li><NavLink to="#">Ароматизаторы воздуха</NavLink></li>
                                        <li><NavLink to="#">Освежиели воздуха</NavLink></li>
                                    </ul></li>
                                <li><NavLink to="#">Автоаксессуары</NavLink>
                                    <ul className={style.superSubMenu}>
                                        <li><NavLink to="#">Ароматизаторы воздуха</NavLink></li>
                                        <li><NavLink to="#">Освежиели воздуха</NavLink></li>
                                    </ul></li>
                                <li><NavLink to="#">Автозапчасти</NavLink>
                                    <ul className={style.superSubMenu}>
                                        <li><NavLink to="#">Ароматизаторы воздуха</NavLink></li>
                                        <li><NavLink to="#">Освежиели воздуха</NavLink></li>
                                    </ul></li>
                            </ul>
                        </li>
                        <li><NavLink to="#">Бренды</NavLink>
                        <ul className={`${style.subMenu} ${style.brands}`}>
                                <li><NavLink to="#"><img src={carbi} alt="CarBi Logo" />CarBi</NavLink></li>
                                <li><NavLink to="#"><img src={eikosha} alt="Eikosha Logo" />Eikosha</NavLink></li>
                                <li><NavLink to="#"><img src={kixx} alt="Kixx Logo" />Kixx</NavLink></li>
                                <li><NavLink to="#"><img src={littleTrees} alt="Little Trees Logo" />Little Trees</NavLink></li>
                                <li><NavLink to="#"><img src={mobil1} alt="Mobil 1 Logo" />Mobil 1</NavLink></li>
                                <li><NavLink to="#"><img src={motip} alt="Motip Logo" />Motip</NavLink></li>
                                <li><NavLink to="#"><img src={runway} alt="Runway Logo" />Runway</NavLink></li>
                                <li><NavLink to="#"><img src={soft99} alt="Soft99 Logo" />Soft99</NavLink></li>
                                <li><NavLink to="#"><img src={total} alt="Total Logo" />Total</NavLink></li>
                                <li><NavLink to="#"><img src={turtleWax} alt="Turtle Wax Logo" />Turtle Wax</NavLink></li>
                                <li><NavLink to="#"><img src={valvoline} alt="Valvoline Logo" />Valvoline</NavLink></li>
                                <li><NavLink to="#"><img src={xado} alt="Xado Logo" />Xado</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="#">Контакты</NavLink></li>
                        <li><NavLink to="#">О нас</NavLink></li>
                        <li><NavLink to="#">Доставка и оплата</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;