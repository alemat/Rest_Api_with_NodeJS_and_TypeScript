"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ORM = require("Sequelize");
function initHouseHoldMemberModel(sequelize) {
    return sequelize.define('HouseHoldMembers', {
        houseHoldId: ORM.INTEGER,
        description: ORM.STRING,
        givenname: ORM.STRING,
        fatherName: ORM.STRING,
        grandFatherName: ORM.STRING,
        gender: ORM.STRING,
        dateOfBirth: ORM.STRING,
        phoneNumber: ORM.STRING,
        rLKDRelationship: ORM.STRING,
        rLKDMaritalStatus: ORM.STRING,
        rLKDLevelOfEducation: ORM.STRING,
        rLKDOccupation: ORM.STRING,
        updatedAt: ORM.TIME,
        updatedBy: ORM.STRING,
        createdAt: ORM.STRING
    });
}
exports.initHouseHoldMemberModel = initHouseHoldMemberModel;
