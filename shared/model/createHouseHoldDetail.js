"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export function createHouseHoldDetail(dbModel:any):HouseHoldDetail{ //we need to destructure dbModel
function createHouseHoldDetail(_a) {
    var id = _a.id, description = _a.description, houseNo = _a.houseNo, phoneNumber = _a.phoneNumber, dateOfRegistration = _a.dateOfRegistration, longDescription = _a.longDescription, rHouseHoldHeadId = _a.rHouseHoldHeadId, rLKDHouseHoldCategory = _a.rLKDHouseHoldCategory, isDeleted = _a.isDeleted, updatedBy = _a.updatedBy, HouseHolds = _a.HouseHolds;
    return {
        id: id,
        description: description,
        houseNo: houseNo,
        phoneNumber: phoneNumber,
        dateOfRegistration: dateOfRegistration,
        longDescription: longDescription,
        rHouseHoldHeadId: rHouseHoldHeadId,
        rLKDHouseHoldCategory: rLKDHouseHoldCategory,
        isDeleted: isDeleted,
        updatedBy: updatedBy,
        households: HouseHolds.map(createHouseHoldMemberFromDbModel)
    };
}
exports.createHouseHoldDetail = createHouseHoldDetail;
function createHouseHoldMemberFromDbModel(_a) {
    var id = _a.id, description = _a.description, houseHoldId = _a.houseHoldId, givenname = _a.givenname, fatherName = _a.fatherName, grandFatherName = _a.grandFatherName, gender = _a.gender, dateOfBirth = _a.dateOfBirth, phoneNumber = _a.phoneNumber, rLKDRelationship = _a.rLKDRelationship, rLKDMaritalStatus = _a.rLKDMaritalStatus, rLKDLevelOfEducation = _a.rLKDLevelOfEducation, rLKDOccupation = _a.rLKDOccupation, updatedBy = _a.updatedBy;
    return {
        id: id,
        description: description,
        houseHoldId: houseHoldId,
        givenname: givenname,
        fatherName: fatherName,
        grandFatherName: grandFatherName,
        gender: gender,
        dateOfBirth: dateOfBirth,
        phoneNumber: phoneNumber,
        rLKDRelationship: rLKDRelationship,
        rLKDMaritalStatus: rLKDMaritalStatus,
        rLKDLevelOfEducation: rLKDLevelOfEducation,
        rLKDOccupation: rLKDOccupation,
        updatedBy: updatedBy
    };
}
exports.createHouseHoldMemberFromDbModel = createHouseHoldMemberFromDbModel;
