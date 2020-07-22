import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons'
import React from 'react'
import { NavLink } from 'react-router-dom'
import carOil from '../../../../assets/images/navbar/catalog/additive-oil.jpg'
import eikoshaMain from '../../../../assets/images/navbar/catalog/air-freshener.png'
import aral from '../../../../assets/images/navbar/catalog/aral.svg'
import carPolishing from '../../../../assets/images/navbar/catalog/car-polishing.jpg'
import carWash from '../../../../assets/images/navbar/catalog/car-wash.jpg'
import castrol from '../../../../assets/images/navbar/catalog/castrol.svg'
import elf from '../../../../assets/images/navbar/catalog/elf-srvc-stations.svg'
import frontWindow from '../../../../assets/images/navbar/catalog/front-window.jpg'
import idemitsu from '../../../../assets/images/navbar/catalog/idemitsu.svg'
import interior from '../../../../assets/images/navbar/catalog/interior-2.png'
import kixx from '../../../../assets/images/navbar/catalog/kixx.svg'
import littleTreesMain from '../../../../assets/images/navbar/catalog/little-trees-2.jpg'
import lubrication from '../../../../assets/images/navbar/catalog/lubrication.jpg'
import mobil1 from '../../../../assets/images/navbar/catalog/mobil.svg'
import originalOil from '../../../../assets/images/navbar/catalog/original-oil-2.png'
import rovas from '../../../../assets/images/navbar/catalog/rovas.png'
import shell from '../../../../assets/images/navbar/catalog/shell.svg'
import throttle from '../../../../assets/images/navbar/catalog/throttle.jpg'
import total from '../../../../assets/images/navbar/catalog/total.svg'
import valvoline from '../../../../assets/images/navbar/catalog/valvoline.svg'
import wheels from '../../../../assets/images/navbar/catalog/wheel.jpg'
import xado from '../../../../assets/images/navbar/catalog/xado.svg'
import style from '../Navbar.module.css'

function Catalog() {
    return (
        <li><NavLink to="#">Каталог<CaretDownOutlined className={style.icon} /></NavLink>
            <ul className={style.subMenu}>
                <li><NavLink to="#">Освежители воздуха Ароматизаторы<CaretRightOutlined className={style.subIcon} /></NavLink>
                    <ul className={style.superSubMenu}>
                        <li><NavLink to="#"><img src={littleTreesMain} alt="" />Ароматизаторы воздуха Little Trees</NavLink></li>
                        <li><NavLink to="#"><img src={eikoshaMain} alt="" />Освежители воздуха Eikosha</NavLink></li>
                    </ul>
                </li>
                <li><NavLink to="#">Автокосметика и автохимия<CaretRightOutlined className={style.subIcon} /></NavLink>
                    <ul className={style.superSubMenu}>
                        <li><NavLink to="#"><img src={interior} alt="" />Средства по уходу за салоном</NavLink></li>
                        <li><NavLink to="#"><img src={frontWindow} alt="" />Средства для стекол</NavLink></li>
                        <li><NavLink to="#"><img src={wheels} alt="" />Средства для колес</NavLink></li>
                        <li><NavLink to="#"><img src={carPolishing} alt="" />Полироли для кузова. Удалители царапин</NavLink></li>
                        <li><NavLink to="#"><img src={carWash} alt="" />Автошампуни</NavLink></li>
                        <li><NavLink to="#"><img src={lubrication} alt="" />Смазки</NavLink></li>
                        <li><NavLink to="#"><img src={throttle} alt="" />Очистители, присадки</NavLink></li>
                    </ul></li>
                <li><NavLink to="#">Всё для покраски</NavLink></li>
                <li><NavLink to="#">Антифриз, тосол, тормозная жидкость<CaretRightOutlined className={style.subIcon} /></NavLink>
                    <ul className={style.superSubMenu}>
                        <li><NavLink to="#"><img src={eikoshaMain} alt="" />Антифриз</NavLink></li>
                        <li><NavLink to="#"><img src={eikoshaMain} alt="" />Тормозная жидость</NavLink></li>
                        <li><NavLink to="#"><img src={eikoshaMain} alt="" />Тосол</NavLink></li>
                    </ul></li>
                <li><NavLink to="#">Масла и смазки<CaretRightOutlined className={style.subIcon} /></NavLink>
                    <ul className={style.superSubMenu}>
                        <li><NavLink to="#"><img src={valvoline} alt="" />Valvoline</NavLink></li>
                        <li><NavLink to="#"><img src={kixx} alt="" />Kixx</NavLink></li>
                        <li><NavLink to="#"><img src={originalOil} alt="" />Оригинальные масла и жидкости</NavLink></li>
                        <li><NavLink to="#"><img src={total} alt="" />TOTAL</NavLink></li>
                        <li><NavLink to="#"><img src={mobil1} alt="" />Mobil</NavLink></li>
                        <li><NavLink to="#"><img src={aral} alt="" />Aral</NavLink></li>
                        <li><NavLink to="#"><img src={shell} alt="" />Shell</NavLink></li>
                        <li><NavLink to="#"><img src={castrol} alt="" />Castrol</NavLink></li>
                        <li><NavLink to="#"><img src={elf} alt="" />Elf</NavLink></li>
                        <li><NavLink to="#"><img src={rovas} alt="" />ROVAS</NavLink></li>
                        <li><NavLink to="#"><img src={idemitsu} alt="" />Idemitsu ZEPRO</NavLink></li>
                        <li><NavLink to="#"><img src={xado} alt="" />Xado</NavLink></li>
                        <li><NavLink to="#"><img src={carOil} alt="" />Промывочные масла</NavLink></li>
                    </ul></li>
                <li><NavLink to="#">Жидкости омывателя стекла</NavLink></li>
                <li><NavLink to="#">Автоаксессуары<CaretRightOutlined className={style.subIcon} /></NavLink>
                    <ul className={style.superSubMenu}>
                        <li><NavLink to="#"><img src={eikoshaMain} alt="" />Сумки органайзеры в авто</NavLink></li>
                    </ul></li>
                <li><NavLink to="#">Автозапчасти</NavLink></li>
            </ul>
        </li>
    )
}

export default Catalog