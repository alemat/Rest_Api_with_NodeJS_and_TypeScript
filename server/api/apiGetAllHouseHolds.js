"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var findAllHouseHolds_1 = require("../queries/findAllHouseHolds");
var _ = require("lodash");
var onError_1 = require("./onError");
var onSuccess_1 = require("./onSuccess");
function apiGetAllHouseHolds(req, res) {
    //throw new Error('error occured');
    findAllHouseHolds_1.findAllHouseHolds()
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(onError_1.onError, res, "Find all house holds failed")); //to prevent http hanging request we need to handle error in the promise chain as well by adding a catch to the promise
    // but we have to move the error handler into a separate file function
}
exports.apiGetAllHouseHolds = apiGetAllHouseHolds;
