import { CatalogType } from "./types/types";
// import additiveOil from '../assets/images/navbar/catalog/additive-oil.jpg'
// import airFreshener from '../assets/images/navbar/catalog/air-freshener.png'
// import aral from '../assets/images/navbar/catalog/aral.svg'
// import carPolishing from '../assets/images/navbar/catalog/car-polishing.jpg'
// import carWash from '../assets/images/navbar/catalog/car-wash.jpg'
// import castrol from '../assets/images/navbar/catalog/castrol.svg'
// import elf from '../assets/images/navbar/catalog/elf-srvc-stations.svg'
// import frontWindow from '../assets/images/navbar/catalog/front-window.jpg'
// import idemitsu from '../assets/images/navbar/catalog/idemitsu.svg'
// import interior from '../assets/images/navbar/catalog/interior-2.png'
// import kixx from '../assets/images/navbar/catalog/kixx.svg'
// import littleTreesMain from '../assets/images/navbar/catalog/little-trees-2.jpg'
// import lubrication from '../assets/images/navbar/catalog/lubrication.jpg'
// import mobil1 from '../assets/images/navbar/catalog/mobil.svg'
// import originalOil from '../assets/images/navbar/catalog/original-oil-2.png'
// import rovas from '../assets/images/navbar/catalog/rovas.png'
// import shell from '../assets/images/navbar/catalog/shell.svg'
// import throttle from '../assets/images/navbar/catalog/throttle.jpg'
// import total from '../assets/images/navbar/catalog/total.svg'
// import valvoline from '../assets/images/navbar/catalog/valvoline.svg'
// import wheels from '../assets/images/navbar/catalog/wheel.jpg'
// import xado from '../assets/images/navbar/catalog/xado.svg'
// import antifreeze from '../assets/images/navbar/catalog/antifreeze.jpg'
// import tosol from '../assets/images/navbar/catalog/tosol-1.jpg'
// import brakeFluid from '../assets/images/navbar/catalog/brake-fluid.jpg'
import { catalogAPI } from "./actions/actions";

const SET_SUBMENUS = 'GET-SUBMENUS'

let initialState: CatalogType = {
    submenus: [],
}

const catalogReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_SUBMENUS:
            return { ...state, submenus: action.submenus }
        default:
            return state;
    }
}

export const setSubmenus = (submenus: Array<any>) => ({ type: SET_SUBMENUS, submenus })
export const getSubmenus = () => {
    return (dispatch: any) => {
        catalogAPI.getSubmenus()
            .then(data => {
                dispatch(setSubmenus(data.items))
            })
    }
}

export default catalogReducer;