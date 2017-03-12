"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ORM = require("Sequelize");
var initHouseHoldModel_1 = require("./initHouseHoldModel");
var initHouseHoldMemberModel_1 = require("./initHouseHoldMemberModel");
var dbUrl = 'postgres://postgres:alematgrg@localhost:5432/db-echis';
var options = { benchmark: true, logging: console.log };
var sequelize = new ORM(dbUrl, options);
exports.HouseHoldModel = initHouseHoldModel_1.initHouseHoldModel(sequelize);
exports.HouseHoldMemberModel = initHouseHoldMemberModel_1.initHouseHoldMemberModel(sequelize);
//create relationship between the above two models and create a bidirectional relation
exports.HouseHoldModel.hasMany(exports.HouseHoldMemberModel, { foreignKey: 'houseHoldId' });
exports.HouseHoldMemberModel.belongsTo(exports.HouseHoldModel, { foreignKey: 'houseHoldId' });
