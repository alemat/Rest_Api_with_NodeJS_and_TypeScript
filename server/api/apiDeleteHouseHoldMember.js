"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var onSuccess_1 = require("./onSuccess");
var onError_1 = require("./onError");
var deleteHouseHoldMember_1 = require("../queries/deleteHouseHoldMember");
function apiDeleteHouseHoldMember(req, res) {
    var houseHoldId = req.params.id;
    deleteHouseHoldMember_1.deleteHouseHoldMember(houseHoldId)
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(onError_1.onError, res, "Could not find course detail " + houseHoldId));
}
exports.apiDeleteHouseHoldMember = apiDeleteHouseHoldMember;
