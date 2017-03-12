export interface HouseHoldMember {
    readonly id: number,
    description: string,
    houseHoldId: string,
    givenname: string,
    fatherName: string,
    grandFatherName: string,
    gender: string,
    dateOfBirth: string,
    phoneNumber: string,
    rLKDRelationship: string,
    rLKDMaritalStatus: string,
    rLKDLevelOfEducation: string,
    rLKDOccupation: string,
    updatedBy: string
}