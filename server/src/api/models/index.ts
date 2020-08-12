const dbConfig = require('../config/db.config')
const Sequelize = require("sequelize")

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: Sequelize.Op,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})

const db: any = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.submenu = require("./submenu.model.ts")(sequelize, Sequelize);

module.exports = db