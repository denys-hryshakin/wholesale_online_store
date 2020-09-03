export { }
const DeliveryMethod = require('../models/deliveryMethod.model')
const DeliveryPaymentMethod = require('../models/deliveryPaymentMethod.model')
const DeliveryRegions = require('../models/deliveryRegions.model')

const statusOK = 200;
const statusError = 500;
const messageOK = 'OK';
const messageError = 'Internal Server Error!'

exports.findAll = async (req: any, res: any) => {
    try {
        let dm = await DeliveryMethod.find()
        let dpm = await DeliveryPaymentMethod.find()
        let dr = await DeliveryRegions.find()
        res.status(statusOK).json({
            method: 'GET',
            status: statusOK,
            message: messageOK,
            deliveryMethod: dm, 
            deliveryPaymentMethod: dpm, 
            deliveryRegions: dr,
        })
    } catch (error) {
        res.status(statusError).json({
            status: statusError,
            message: messageError,
            error: error
        })
    }
}