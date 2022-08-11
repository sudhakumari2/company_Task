const db = require('../database/connection');
const Sequelize=require('sequelize')
const User=db.define("customer",{
    Id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type:Sequelize.INTEGER
    },
    Name:{
        type:Sequelize.STRING},
    DOB:{
        type:Sequelize.STRING},
    Addresss:{
        type: Sequelize.INTEGER},
    Photo: {
        type: Sequelize.STRING},
    createdAt: {
            type: Sequelize.DATE,
            default: Date.now()}
})

module.exports = User;