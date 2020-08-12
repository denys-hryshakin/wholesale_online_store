module.exports = (sequelize: any, Sequelize: any) => {
    const Submenu = sequelize.define("submenu", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        group_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        parent_id: {
            type: Sequelize.INTEGER
        },
        html_title: {
            type: Sequelize.STRING
        },
        html_description: {
            type: Sequelize.STRING
        },
        html_keywords: {
            type: Sequelize.STRING
        }
    },
        {
            timestamps: false,
        });

    Submenu.sync = () => Promise.resolve;
    return Submenu;
};