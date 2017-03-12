import {HouseHoldModel} from "../model/model";
import {HouseHoldSummary, createHouseHoldSummary, createHouseHoldSummaries} from "../../shared/model/household-summary";
import * as Bluebird from "bluebird";

export function findAllHouseHolds():Bluebird<HouseHoldSummary[]>{
    return HouseHoldModel.findAll({
        order: ['id']
    })
        .then(createHouseHoldSummaries);
/*  .then(dbModel => {
            return createHouseHoldSummary(dbModel);
        })
 */
}

