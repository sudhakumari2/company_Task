const db = require('../database/connection');
const Sequelize=require('sequelize')
const User=db.define("customer",{
    customerId:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type:Sequelize.INTEGER
    },
    Name:{
        type:Sequelize.STRING},
    UserName:{
        type:Sequelize.STRING},
    Email:{
        type:Sequelize.STRING},
    phoneNumber:{
        type: Sequelize.INTEGER},
    status: {
        type: Sequelize.STRING},
    password:{
        type:Sequelize.STRING},
    conformPassword:{
        type: Sequelize.STRING}
})

module.exports = User;