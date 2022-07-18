const {DataTypes} = require('sequelize');


module.exports = (sequelize)=>{
    sequelize.define('notescat',{
        
    },{
        timestamps : false
    });
}