import React from 'react'
import { connect } from 'react-redux'
import { getCatalogSubMenu } from '../../redux/header-selectors'
import { AppStateType } from '../../redux/store'
import { CatalogSubMenuType } from '../../redux/types/types'
import Header from './Header'

type MapStatePropsType = {
    submenu: Array<CatalogSubMenuType>
}
type PropsType = MapStatePropsType

class HeaderContainer extends React.Component<PropsType> {
    render() {
        return (
            <Header
                submenu={this.props.submenu} />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        submenu: getCatalogSubMenu(state),
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {

    }
}

export default connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(HeaderContainer)
