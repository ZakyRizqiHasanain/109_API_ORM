module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define("Komik", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        author: {
            type: DataTypes.STRING
        }
    }, {
        tableName: "Komiks",
        timestamps: true
    });

    return Komik;
};