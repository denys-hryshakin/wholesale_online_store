import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../Navbar.module.css'
import carbi from '../../../../assets/images/navbar/catalog/carbi.svg'
import eikosha from '../../../../assets/images/navbar/catalog/eikosha.svg'
import kixx from '../../../../assets/images/navbar/catalog/kixx.svg'
import littleTrees from '../../../../assets/images/navbar/catalog/little-trees-1.svg'
import mobil1 from '../../../../assets/images/navbar/catalog/mobil.svg'
import motip from '../../../../assets/images/navbar/catalog/motip.svg'
import runway from '../../../../assets/images/navbar/catalog/runway.svg'
import soft99 from '../../../../assets/images/navbar/catalog/soft99.svg'
import total from '../../../../assets/images/navbar/catalog/total.svg'
import turtleWax from '../../../../assets/images/navbar/catalog/turtle-wax.svg'
import valvoline from '../../../../assets/images/navbar/catalog/valvoline.svg'
import xado from '../../../../assets/images/navbar/catalog/xado.svg'
import { CaretDownOutlined } from '@ant-design/icons'

function Brands() {
    return (
        <li><NavLink to="#">Бренды<CaretDownOutlined className={style.icon} /></NavLink>
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
    )
}

export default Brands
