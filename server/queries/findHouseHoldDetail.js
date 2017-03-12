"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
var createHouseHoldDetail_1 = require("../../shared/model/createHouseHoldDetail");
function findHouseHoldDetail(houseHoldId) {
    //go and define a new model first at model.ts with relations
    return model_1.HouseHoldModel.findById(houseHoldId, {
        include: [
            {
                model: model_1.HouseHoldMemberModel
            }
        ]
    })
        .then(createHouseHoldDetail_1.createHouseHoldDetail);
}
exports.findHouseHoldDetail = findHouseHoldDetail;
