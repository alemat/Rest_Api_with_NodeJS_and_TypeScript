"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
var household_summary_1 = require("../../shared/model/household-summary");
function findAllHouseHolds() {
    return model_1.HouseHoldModel.findAll({
        order: ['id']
    })
        .then(household_summary_1.createHouseHoldSummaries);
    /*  .then(dbModel => {
                return createHouseHoldSummary(dbModel);
            })
     */
}
exports.findAllHouseHolds = findAllHouseHolds;
