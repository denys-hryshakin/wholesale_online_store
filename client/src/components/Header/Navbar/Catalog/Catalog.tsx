import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons'
import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import style from '../Navbar.module.css'
import { CatalogSubMenuType } from '../../../../redux/types/types'
import img from '../../../../assets/images/navbar/catalog/aral.svg'

type PropsType = {
    submenus: Array<CatalogSubMenuType>
}

let Catalog: FC<PropsType> = ({ submenus }) => {
    return (
        <li><NavLink to="#">Каталог<CaretDownOutlined className={style.icon} /></NavLink>
            <ul className={style.subMenu}>
                {submenus.map(sm => <>
                    {
                        sm.parent_id === null &&
                        <li key={sm.id}><NavLink to="#">{sm.group_name}<CaretRightOutlined className={style.subIcon} /></NavLink>
                            <ul className={style.superSubMenu}>
                                <li key={sm.id}><NavLink to="#"><img src={img} alt="" />{sm.group_name}</NavLink></li>
                            </ul>
                        </li>
                    }
                    {/* {
                        sm.parent_id === null && <li><NavLink to="#">{sm.name}</NavLink></li>
                    } */}
                </>)}
            </ul>
        </li >
    )
}

export default Catalog