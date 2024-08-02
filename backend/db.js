const mongoose = require('mongoose');

const mongoUrl = 'mongodb+srv://vrajprajapati21:qeWtnloZRZs9cN08@cluster0.m3ii3tp.mongodb.net/'

const connetToMongo = () =>{
    mongoose.connect(mongoUrl);
    console.log('connected with url');
}

module.exports = connetToMongo;