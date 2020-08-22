import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons'
import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import style from '../Navbar.module.css'
import { CatalogSubMenuType } from '../../../../redux/types/types'
import img from '../../../../assets/images/navbar/catalog/aral.svg'

type PropsType = {
    subMenu: Array<CatalogSubMenuType>
}

let Catalog: FC<PropsType> = ({ subMenu }) => {
    return (
        <li><NavLink to="#">Каталог<CaretDownOutlined className={style.icon} /></NavLink>
            <ul className={style.subMenu}>
                {subMenu.map(sm => <>
                    {
                        sm.isSuperSubMenu &&
                        <li key={sm.id}><NavLink to="#">{sm.name}<CaretRightOutlined className={style.subIcon} /></NavLink>
                            <ul className={style.superSubMenu}>
                                {sm.superSubMenu.map(ssm =>
                                    <li key={ssm.id}><NavLink to="#"><img src={ssm.img} alt="" />{ssm.name}</NavLink></li>
                                )}
                                <li key={sm.id}><NavLink to="#"><img src={img} alt="" />{sm.name}</NavLink></li>
                            </ul>
                        </li>
                    }
                    {
                        !sm.isSuperSubMenu && <li><NavLink to="#">{sm.name}</NavLink></li>
                    }
                </>)}
            </ul>
        </li >
    )
}

export default Catalog