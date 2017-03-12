"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ORM = require("Sequelize");
function initHouseHoldModel(sequelize) {
    return sequelize.define('HouseHolds', {
        description: ORM.STRING,
        houseNo: ORM.STRING,
        phoneNumber: ORM.STRING,
        dateOfRegistration: ORM.STRING,
        longDescription: ORM.TEXT,
        rHouseHoldHeadId: ORM.INTEGER,
        rLKDHouseHoldCategory: ORM.STRING,
        isDeleted: ORM.BOOLEAN,
        isNew: ORM.BOOLEAN,
        updatedAt: ORM.TIME,
        updatedBy: ORM.STRING,
        createdAt: ORM.STRING
    });
}
exports.initHouseHoldModel = initHouseHoldModel;
