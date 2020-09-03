import { ListOfDeliveryType } from "../types/delivery.types";
import { deliveryPageAPI } from "../actions/actions";

export const SET_DELIVERY_METHOD = 'GET-DELIVERY-METHOD';
export const SET_DELIVERY_PAYMENT_METHOD = 'GET-DELIVERY-PAYMENT-METHOD';
export const SET_DELIVERY_REGIONS = 'GET-DELIVERY-REGIONS';

let initialState: ListOfDeliveryType = {
    deliveryMethod: [],
    deliveryPaymentMethod: [],
    deliveryRegions: []
}

const deliveryReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_DELIVERY_METHOD:
            return { ...state, deliveryMethod: action.deliveryMethod };
        case SET_DELIVERY_PAYMENT_METHOD:
            return { ...state, deliveryPaymentMethod: action.deliveryPaymentMethod };
        case SET_DELIVERY_REGIONS:
            return { ...state, deliveryRegions: action.deliveryRegions };
        default:
            return state;
    }
}

export const setDeliveryMethod = (deliveryMethod: any) => {
    return ({ type: SET_DELIVERY_METHOD, deliveryMethod });
}
export const setDeliveryPaymentMethod = (deliveryPaymentMethod: any) => {
    return ({ type: SET_DELIVERY_PAYMENT_METHOD, deliveryPaymentMethod });
}
export const setDeliveryRegions = (deliveryRegions: any) => {
    return ({ type: SET_DELIVERY_REGIONS, deliveryRegions });
}


export const getDelivery = () => {
    return (dispatch: any) => {
        deliveryPageAPI.getDelivery()
            .then((data: any) => {
                dispatch(setDeliveryMethod(data.deliveryMethod))
                dispatch(setDeliveryPaymentMethod(data.deliveryPaymentMethod))
                dispatch(setDeliveryRegions(data.deliveryRegions))
            })
    }
}

export default deliveryReducer;