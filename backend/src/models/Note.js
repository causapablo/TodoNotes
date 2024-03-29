const {DataTypes} = require('sequelize');


module.exports = (sequelize)=>{
    sequelize.define('note',{
        title : {
            type : DataTypes.STRING,
            allowNull : false
        },
        content : {
            type : DataTypes.STRING,
            allowNull : false
        },
        archived : {
            type : DataTypes.BOOLEAN,
            defaultValue : false
        }
    },{
        timestamps : true
    });
}