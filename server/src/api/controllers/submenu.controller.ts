const Submenu = require('../models/submenu.model')

const statusOK = 200;
const messageOK = 'OK';
const statusError = 500;
const messageError = 'Internal Server Error!'
exports.findAllPagination = async (req: any, res: any) => {
    try {
        let data = await Submenu.find()
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

exports.postSubmenuItem = async (req: any, res: any) => {
    try {
        await Submenu.findOne()
        const newSubmenuItem = new Submenu({
            groupName: req.body.groupName,
            isSuperSubMenu: req.body.isSuperSubMenu,
            superSubMenu: [
                {
                    subGroupName: req.body.superSubMenu.subGroupName,
                    html_title: req.body.superSubMenu.html_title,
                    html_description: req.body.superSubMenu.html_description,
                    html_keywords: req.body.superSubMenu.html_keywords,
                }
            ],
            html_title: req.body.html_title,
            html_description: req.body.html_description,
            html_keywords: req.body.html_keywords,
        })
        newSubmenuItem.save()
        res.status(statusOK).json({
            method: 'POST',
            status: statusOK,
            message: messageOK,
        })
    } catch (error) {
        res.status(statusError).json({
            status: statusError,
            message: messageError,
            error: error
        })
    }
}