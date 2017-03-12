"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var findHouseHoldDetail_1 = require("../queries/findHouseHoldDetail");
var _ = require("lodash");
var onSuccess_1 = require("./onSuccess");
var onError_1 = require("./onError");
function apiGetHouseHoldDetail(req, res) {
    var houseHoldId = parseInt(req.params.id);
    findHouseHoldDetail_1.findHouseHoldDetail(houseHoldId)
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(onError_1.onError, res, "Could not find house hold detail"));
}
exports.apiGetHouseHoldDetail = apiGetHouseHoldDetail;
