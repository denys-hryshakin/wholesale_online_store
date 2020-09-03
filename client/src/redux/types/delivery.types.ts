export type ListOfDeliveryType = {
    deliveryMethod: Array<DeliveryMethodType>,
    deliveryPaymentMethod: Array<DeliveryPaymentMethodType>,
    deliveryRegions: Array<DeliveryRegionsType>
}
export type DeliveryMethodType = {
    _id: number,
    name: string,
}
export type DeliveryPaymentMethodType = {
    _id: number,
    name: string,
    additions?: Array<DeliveryAdditionsType>
}
export type DeliveryAdditionsType = {
    _id: number,
    name: string
}
export type DeliveryRegionsType = {
    _id: number,
    name: string,
    cities?: Array<DeliveryCitiesType>
}
export type DeliveryCitiesType = {
    _id: number,
    name: string
}