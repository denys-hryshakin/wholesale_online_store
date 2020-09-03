import additiveOil from '../../assets/images/navbar/catalog/additive-oil.jpg';
import airFreshener from '../../assets/images/navbar/catalog/air-freshener.png';
import antifreeze from '../../assets/images/navbar/catalog/antifreeze.jpg';
import aral from '../../assets/images/navbar/catalog/aral.svg';
import brakeFluid from '../../assets/images/navbar/catalog/brake-fluid.jpg';
import carPolishing from '../../assets/images/navbar/catalog/car-polishing.jpg';
import carWash from '../../assets/images/navbar/catalog/car-wash.jpg';
import castrol from '../../assets/images/navbar/catalog/castrol.svg';
import elf from '../../assets/images/navbar/catalog/elf-srvc-stations.svg';
import frontWindow from '../../assets/images/navbar/catalog/front-window.jpg';
import idemitsu from '../../assets/images/navbar/catalog/idemitsu.svg';
import interior from '../../assets/images/navbar/catalog/interior-2.png';
import kixx from '../../assets/images/navbar/catalog/kixx.svg';
import littleTreesMain from '../../assets/images/navbar/catalog/little-trees-2.jpg';
import lubrication from '../../assets/images/navbar/catalog/lubrication.jpg';
import mobil1 from '../../assets/images/navbar/catalog/mobil.svg';
import originalOil from '../../assets/images/navbar/catalog/original-oil-2.png';
import rovas from '../../assets/images/navbar/catalog/rovas.png';
import shell from '../../assets/images/navbar/catalog/shell.svg';
import throttle from '../../assets/images/navbar/catalog/throttle.jpg';
import tosol from '../../assets/images/navbar/catalog/tosol-1.jpg';
import total from '../../assets/images/navbar/catalog/total.svg';
import valvoline from '../../assets/images/navbar/catalog/valvoline.svg';
import wheels from '../../assets/images/navbar/catalog/wheel.jpg';
import xado from '../../assets/images/navbar/catalog/xado.svg';
import { CatalogType } from "../types/catalog-types";


let initialState: CatalogType = {
    subMenu: [
        {
            id: 1,
            name: "Освежители воздуха Ароматизаторы",
            isSuperSubMenu: true,
            superSubMenu: [
                { id: 1, name: "Ароматизаторы воздуха Little Trees", img: `${littleTreesMain}` },
                { id: 2, name: "Освежители воздуха Eikosha", img: `${airFreshener}` },
            ]
        },
        {
            id: 2,
            name: "Автокосметика и автохимия",
            isSuperSubMenu: true,
            superSubMenu: [
                { id: 1, name: "Средства по уходу за салоном", img: `${interior}` },
                { id: 2, name: "Средства для стекол", img: `${frontWindow}` },
                { id: 3, name: "Средства для колес", img: `${wheels}` },
                { id: 4, name: "Полироли для кузова", img: `${carPolishing}` },
                { id: 5, name: "Автошампуни", img: `${carWash}` },
                { id: 6, name: "Смазки", img: `${lubrication}` },
                { id: 7, name: "Очистители, присадки", img: `${throttle}` },
            ]
        },
        {
            id: 3,
            name: "Всё для покраски",
            isSuperSubMenu: false,
            superSubMenu: []
        },
        {
            id: 4,
            name: "Антифриз, тосол, тормозная жидкость",
            isSuperSubMenu: true,
            superSubMenu: [
                { id: 1, name: "Антифриз", img: `${antifreeze}` },
                { id: 3, name: "Тормозная жидкость", img: `${brakeFluid}` },
                { id: 2, name: "Тосол", img: `${tosol}` },
            ]
        },
        {
            id: 5,
            name: "Масла и смазки",
            isSuperSubMenu: true,
            superSubMenu: [
                { id: 1, name: "Valvoline", img: `${valvoline}` },
                { id: 2, name: "Kixx", img: `${kixx}` },
                { id: 3, name: "Оригинальные масла и жидкости", img: `${originalOil}` },
                { id: 4, name: "TOTAL", img: `${total}` },
                { id: 5, name: "Mobil", img: `${mobil1}` },
                { id: 6, name: "Aral", img: `${aral}` },
                { id: 7, name: "Shell", img: `${shell}` },
                { id: 8, name: "Castrol", img: `${castrol}` },
                { id: 9, name: "Elf", img: `${elf}` },
                { id: 10, name: "ROVAS", img: `${rovas}` },
                { id: 11, name: "Idemitsu ZEPRO", img: `${idemitsu}` },
                { id: 12, name: "Xado", img: `${xado}` },
                { id: 13, name: "Промывочные масла", img: `${additiveOil}` },
            ]
        },
        {
            id: 6,
            name: "Жидкости омывателя стекла",
            isSuperSubMenu: false,
            superSubMenu: []
        },
        {
            id: 7,
            name: "Автоаксессуары",
            isSuperSubMenu: true,
            superSubMenu: [
                { id: 1, name: "Сумки органайзеры в авто", img: `${airFreshener}` },
            ]
        },
        {
            id: 8,
            name: "Автозапчасти",
            isSuperSubMenu: false,
            superSubMenu: []
        }
    ]
};

const catalogReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default catalogReducer;