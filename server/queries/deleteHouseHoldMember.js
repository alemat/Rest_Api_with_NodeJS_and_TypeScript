"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
function deleteHouseHoldMember(id) {
    return model_1.HouseHoldMemberModel.destroy({
        where: { id: id }
    });
}
exports.deleteHouseHoldMember = deleteHouseHoldMember;
