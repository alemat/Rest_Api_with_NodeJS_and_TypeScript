"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
function createHouseHoldMember(props) {
    return model_1.HouseHoldMemberModel.create(props);
}
exports.createHouseHoldMember = createHouseHoldMember;
