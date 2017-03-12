"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createHouseHoldSummary(_a) {
    var id = _a.id, description = _a.description, houseNo = _a.houseNo, phoneNumber = _a.phoneNumber, dateOfRegistration = _a.dateOfRegistration, longDescription = _a.longDescription, rHouseHoldHeadId = _a.rHouseHoldHeadId, rLKDHouseHoldCategory = _a.rLKDHouseHoldCategory, isDeleted = _a.isDeleted, isNew = _a.isNew, updatedBy = _a.updatedBy;
    return {
        id: id, description: description, houseNo: houseNo, phoneNumber: phoneNumber, dateOfRegistration: dateOfRegistration, longDescription: longDescription, rHouseHoldHeadId: rHouseHoldHeadId, rLKDHouseHoldCategory: rLKDHouseHoldCategory, isDeleted: isDeleted, isNew: isNew, updatedBy: updatedBy,
    };
}
exports.createHouseHoldSummary = createHouseHoldSummary;
function createHouseHoldSummaries(data) {
    return data.map(createHouseHoldSummary);
}
exports.createHouseHoldSummaries = createHouseHoldSummaries;
