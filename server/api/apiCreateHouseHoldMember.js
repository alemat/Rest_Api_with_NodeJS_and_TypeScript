"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var onError_1 = require("./onError");
var onSuccess_1 = require("./onSuccess");
var createHouseHoldMember_1 = require("../queries/createHouseHoldMember");
var databaseErrorHandler_1 = require("./databaseErrorHandler");
function apiCreateHouseHoldMember(req, res) {
    createHouseHoldMember_1.createHouseHoldMember(req.body)
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(databaseErrorHandler_1.databaseErrorHandler, res))
        .catch(_.partial(onError_1.onError, res, "Could not find course detail"));
    /*  createHouseHoldMember (req.body)
     .then(_.partial(onSuccess, res))
     .catch(err => {

     //throw new Error('Error occured');
     const id = hri.random();
     console.error("Database error occured", id, err);
     res.status(500).json({code: 'ERR-002',
     message: `Creation of lesson failed, error code ${id}` });

     // console.error(err);
     // res.status(500).json({code: 'ERR-002', message: err.message});
     })*/
}
exports.apiCreateHouseHoldMember = apiCreateHouseHoldMember;
