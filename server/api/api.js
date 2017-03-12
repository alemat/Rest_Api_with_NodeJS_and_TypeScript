"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apiGetAllHouseHolds_1 = require("./apiGetAllHouseHolds");
var apiGetHouseHoldDetail_1 = require("./apiGetHouseHoldDetail");
var apiCreateHouseHoldMember_1 = require("./apiCreateHouseHoldMember");
var apiPatchHouseHoldMember_1 = require("./apiPatchHouseHoldMember");
var apiDeleteHouseHoldMember_1 = require("./apiDeleteHouseHoldMember");
function initRestApi(app) {
    app.route('/api/hhs').get(apiGetAllHouseHolds_1.apiGetAllHouseHolds);
    app.route('/api/hhs/:id').get(apiGetHouseHoldDetail_1.apiGetHouseHoldDetail);
    app.route('/api/hhmember').post(apiCreateHouseHoldMember_1.apiCreateHouseHoldMember);
    app.route('/api/hhmember/:id').patch(apiPatchHouseHoldMember_1.apiPatchHouseHoldMember);
    app.route('/api/hhmember/:id').delete(apiDeleteHouseHoldMember_1.apiDeleteHouseHoldMember);
}
exports.initRestApi = initRestApi;
