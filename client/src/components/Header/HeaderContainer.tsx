import React from 'react'
import { connect } from 'react-redux'
import { getCatalogSubMenu } from '../../redux/header-selectors'
import { AppStateType } from '../../redux/store'
import { CatalogSubMenuType } from '../../redux/types/types'
import Header from './Header'

type MapStatePropsType = {
    subMenu: Array<CatalogSubMenuType>
}

type MapDispatchPropsType = {

}

type PropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<PropsType> {

    render() {
        return (
            <Header
                subMenu={this.props.subMenu} />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        subMenu: getCatalogSubMenu(state),
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {})(HeaderContainer)
