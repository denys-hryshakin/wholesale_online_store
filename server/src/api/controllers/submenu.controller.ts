const models = require('../models')
const Submenu = models.submenu
const Op = models.Sequelize.Op

const statusOK = 200;
const messageOK = 'OK';
const statusError = 500;
const messageError = 'Internal Server Error!'
exports.findAllPagination = async (req: any, res: any) => {
    try {
        let data = await Submenu.findAll()
        const page = req.query.page;
        const count = req.query.count;
        const startIndex = (page - 1) * count;
        const endIndex = page * count;
        const result = data.slice(startIndex, endIndex);
        res.status(statusOK).json({
            method: 'GET',
            page: page,
            size: count,
            status: statusOK,
            message: messageOK,
            totalCount: data.length,
            items: result,
        })
    } catch (error) {
        res.status(statusError).json({
            status: statusError,
            message: messageError,
            error: error
        })
    }
}

exports.findAll = async (req: any, res: any)=>{
    try {
        let data = await Submenu.findAll()
        res.status(200).json({
            method: 'GET',
            status: statusOK,
            message: messageOK,
            totalCount: data.length,
            items: data,
        })
    } catch (error) {
        res.status(500).json({
            message: messageError
        })
    }
}