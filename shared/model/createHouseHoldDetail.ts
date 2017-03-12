import {HouseHoldDetail} from "./household-detail";

// export function createHouseHoldDetail(dbModel:any):HouseHoldDetail{ //we need to destructure dbModel
export function createHouseHoldDetail({
    id,
    description,
    houseNo,
    phoneNumber,
    dateOfRegistration,
    longDescription,
    rHouseHoldHeadId,
    rLKDHouseHoldCategory,
    isDeleted,
    updatedBy,
    HouseHolds}:any):HouseHoldDetail {

        return {
            id,
            description,
            houseNo,
            phoneNumber,
            dateOfRegistration,
            longDescription,
            rHouseHoldHeadId,
            rLKDHouseHoldCategory,
            isDeleted,
            updatedBy,
            households: HouseHolds.map(createHouseHoldMemberFromDbModel)
        };
}

export function createHouseHoldMemberFromDbModel ({
    id,
    description,
    houseHoldId,
    givenname,
    fatherName,
    grandFatherName,
    gender,
    dateOfBirth,
    phoneNumber,
    rLKDRelationship,
    rLKDMaritalStatus,
    rLKDLevelOfEducation,
    rLKDOccupation,
    updatedBy,
}:any){

    return {
        id,
        description,
        houseHoldId,
        givenname,
        fatherName,
        grandFatherName,
        gender,
        dateOfBirth,
        phoneNumber,
        rLKDRelationship,
        rLKDMaritalStatus,
        rLKDLevelOfEducation,
        rLKDOccupation,
        updatedBy
    }

}