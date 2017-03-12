//remember an object can implement an interface
import {HouseHoldMember} from "./householdmember";
import {HouseHoldSummary} from "./household-summary";
import DateTimeFormat = Intl.DateTimeFormat;


export interface HouseHoldDetail
        extends HouseHoldSummary{
    description ?: string,
    houseNo ?: string,
    phoneNumber ?: string,
    dateOfRegistration ?: string,
    longDescription: string,
    rHouseHoldHeadId : string,
    rLKDHouseHoldCategory : string,
    isDeleted ?: string,
    isNew ?: boolean,
    updatedBy : string,
    households: HouseHoldMember[]

}