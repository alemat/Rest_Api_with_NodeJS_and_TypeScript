import * as ORM from "Sequelize";
import {Sequelize, LoggingOptions} from 'Sequelize';
import {initHouseHoldModel} from "./initHouseHoldModel";
import {initHouseHoldMemberModel} from "./initHouseHoldMemberModel";

const dbUrl = 'postgres://postgres:alematgrg@localhost:5432/db-echis';

const options: LoggingOptions = {benchmark: true, logging:console.log};

const sequelize:Sequelize = new ORM(dbUrl, options);

export const HouseHoldModel = initHouseHoldModel(sequelize);

export const HouseHoldMemberModel = initHouseHoldMemberModel(sequelize);

//create relationship between the above two models and create a bidirectional relation

HouseHoldModel.hasMany(HouseHoldMemberModel, {foreignKey: 'houseHoldId'});

HouseHoldMemberModel.belongsTo(HouseHoldModel, {foreignKey: 'houseHoldId'});
