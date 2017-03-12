"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var api_1 = require("./api/api");
var apiErrorHandler_1 = require("./api/apiErrorHandler");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
api_1.initRestApi(app);
app.use(apiErrorHandler_1.apiErrorHandler);
app.listen(8090, function () {
    console.log('server is running now on port 8090, why not isn\'t it so ?...');
});
// for ionic we have to use cordova plugin and check it it can be integrated with the biometric system
// called simprint
/*

 /*import * as ORM from "Sequelize";
 import {Sequelize, LoggingOptions} from 'Sequelize';
 import {initHouseHoldModel} from  "./model/initHouseHoldModel";
 const dbUrl = 'postgres://postgres:alematgrg@localhost:5432/complete-typescript-course';
 //instantiate ORM
 const options: LoggingOptions = {benchmark: true, logging: console.log};

 const sequelize:Sequelize = new ORM(dbUrl, options);

 //now define the model

 const HouseHoldModel = initHouseHoldModel(sequelize);

 //call the data on promise using .then
 // const result = HouseHoldModel.findAll();

 //HouseHoldModel.findAll()
 //  .then(results => console.log(results));
 */
// before the definition of route you need to add the middle ware body-parser
//define middle ware or error handler ,, but it is better to create global error handler
/*app.use((err, req, res) => {
 console.log('middleware executred');

 }) */ 
