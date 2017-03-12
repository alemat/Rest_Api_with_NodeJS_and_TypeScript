"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var updateHouseHoldMember_1 = require("../queries/updateHouseHoldMember");
var onSuccess_1 = require("./onSuccess");
var onError_1 = require("./onError");
function apiPatchHouseHoldMember(req, res) {
    var houseHoldMemberId = req.params.id;
    updateHouseHoldMember_1.updateHouseHoldMember(houseHoldMemberId, req.body)
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(onError_1.onError, res, "Could not find course detail " + houseHoldMemberId));
}
exports.apiPatchHouseHoldMember = apiPatchHouseHoldMember;
