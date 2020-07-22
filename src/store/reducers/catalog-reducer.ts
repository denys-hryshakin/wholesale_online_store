
export type initialStateType = {
    subMenu: Array<Object>,
}

let initialState: initialStateType = {
    subMenu: [
        {
            id: 1,
            name: "Освежители воздуха Ароматизаторы",
            superSubMenu: [
                { id: 1, name: "Ароматизаторы воздуха Little Trees", img: "" },
                { id: 2, name: "Освежители воздуха Eikosha", img: "" }
            ]
        },
        {
            id: 2,
            name: "Автокосметика и автохимия",
            superSubMenu: [
                { id: 1, name: "Средства по уходу за салоном", img: "" },
                { id: 2, name: "Средства для стекол", img: "" },
                { id: 3, name: "Средства для колес", img: "" },
                { id: 4, name: "Полироли для кузова. Удалители царапин", img: "" },
                { id: 5, name: "Автошампуни", img: "" },
                { id: 6, name: "Смазки", img: "" },
                { id: 7, name: "Очистители, присадки", img: "" },
            ]
        },
        {
            id: 3,
            name: "Всё для покраски",
        },
        {
            id: 4,
            name: "Антифриз, тосол, тормозная жидкость",
            superSubMenu: [
                { id: 1, name: "Антифриз", img: "" },
                { id: 2, name: "Тосол", img: "" },
                { id: 3, name: "Тормозная жидкость", img: "" },
            ]
        },
        {
            id: 5,
            name: "Масла и смазки",
            superSubMenu: [
                { id: 1, name: "Valvoline", img: "" },
                { id: 2, name: "Kixx", img: "" },
                { id: 3, name: "Оригинальные масла и жидкости", img: "" },
                { id: 4, name: "TOTAL", img: "" },
                { id: 5, name: "Mobil", img: "" },
                { id: 6, name: "Aral", img: "" },
                { id: 7, name: "Shell", img: "" },
                { id: 8, name: "Castrol", img: "" },
                { id: 9, name: "Elf", img: "" },
                { id: 10, name: "ROVAS", img: "" },
                { id: 11, name: "Idemitsu ZEPRO", img: "" },
                { id: 12, name: "Xado", img: "" },
                { id: 13, name: "Промывочные масла", img: "" },
            ]
        },
        {
            id: 6,
            name: "Жидкости омывателя стекла",
        },
        {
            id: 7,
            name: "Автоаксессуары",
            superSubMenu: [
                { id: 1, name: "Сумки органайзеры в авто", img: "" }
            ]
        },
        {
            id: 8,
            name: "Автозапчасти"
        }
    ]
};

const dialogsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        // case SEND_MESSAGE:
        //     let body = state.newMessageBody;
        //     return {
        //         ...state,
        //         newMessageBody: '',
        //         messages: [...state.messages, { id: 6, message: body }]
        //     };
        // case UPDATE_NEW_MESSAGE_BODY:
        //     return {
        //         ...state,
        //         newMessageBody: action.body
        //     };

        default:
            return state;
    }
}

// export const sendMessage = () => ({ type: SEND_MESSAGE });
// export const updateNewMessageBody = (body: any) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;