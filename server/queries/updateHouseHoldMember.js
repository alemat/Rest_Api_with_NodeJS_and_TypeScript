"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
function updateHouseHoldMember(id, props) {
    return model_1.HouseHoldMemberModel.update(props, {
        where: { id: id }
    });
}
exports.updateHouseHoldMember = updateHouseHoldMember;
