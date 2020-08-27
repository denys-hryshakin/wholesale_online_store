const mongoose = require('mongoose')

const SubmenuSchema = mongoose.Schema({
    groupName: { type: String, required: true },
    isSuperSubMenu: { type: Boolean, default: false },
    superSubMenu: [
        {
            id: { type: mongoose.Types.ObjectId },
            subGroupName: { type: String, required: true },
            img: { type: String, default: "null" },
            html_title: { type: String, default: "null" },
            html_description: { type: String, default: "null" },
            html_keywords: { type: String, default: "null" }
        }
    ],
    html_title: { type: String, default: "null" },
    html_description: { type: String, default: "null" },
    html_keywords: { type: String, default: "null" }
})

module.exports = mongoose.model('Submenu', SubmenuSchema)