import React from 'react'
import { connect } from 'react-redux'
import { getCatalogSubMenu } from '../../redux/header-selectors'
import { AppStateType } from '../../redux/store'
import { CatalogSubMenuType } from '../../redux/types/types'
import { getSubmenus } from '../../redux/catalog-reducer'
import Header from './Header'

type MapStatePropsType = {
    submenus: Array<CatalogSubMenuType>
}

type MapDispatchPropsType = {
    getSubmenus: () => void,
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getSubmenus()
    }
    render() {
        return (
            <Header
                submenus={this.props.submenus} />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        submenus: getCatalogSubMenu(state),
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, { getSubmenus })(HeaderContainer)
