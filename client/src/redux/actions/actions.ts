import axios from 'axios'

export const deliveryPageAPI = {
    getDeliveryMethod() {
        return (
            axios.get('/deliveryMethod')
                .then((response: any) => {
                    return response.data
                })
        )
    },
    getDeliveryPaymentMethod() {
        return (
            axios.get('/deliveryPaymentMethod')
                .then((response: any) => {
                    return response.data
                })
        )
    },
    getDeliveryRegions() {
        return (
            axios.get('/deliveryRegions')
                .then((response: any) => {
                    return response.data
                })
        )
    },
    getDelivery() {
        return (
            axios.get('/delivery')
                .then((response: any) => {
                    return response.data
                })
        )
    }
}