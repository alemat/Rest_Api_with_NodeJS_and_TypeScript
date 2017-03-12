export interface HouseHoldSummary {

    readonly id: number,
    description ?: string,
    houseNo ?: string,
    phoneNumber ?: string,
    dateOfRegistration ?: string,
    longDescription: string,
    rHouseHoldHeadId ?: string,
    rLKDHouseHoldCategory ?: string,
    isDeleted ?: string,
    isNew ?: boolean,
    updatedBy ?: string,
}

export function createHouseHoldSummary ({
    id,
    description,
    houseNo,
    phoneNumber,
    dateOfRegistration,
    longDescription,
    rHouseHoldHeadId,
    rLKDHouseHoldCategory,
    isDeleted,
    isNew,
    updatedBy,
    }:any): HouseHoldSummary {

        return {
            id, description, houseNo, phoneNumber, dateOfRegistration, longDescription, rHouseHoldHeadId, rLKDHouseHoldCategory, isDeleted, isNew, updatedBy,
        };


}

export function createHouseHoldSummaries(data: any[]): HouseHoldSummary[]{

        return data.map(createHouseHoldSummary);

}