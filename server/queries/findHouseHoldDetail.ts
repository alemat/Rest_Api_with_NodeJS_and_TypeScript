import {HouseHoldModel, HouseHoldMemberModel} from "../model/model";
import * as Bluebird from "bluebird";
import {HouseHoldDetail} from "../../shared/model/household-detail";
import {createHouseHoldDetail} from "../../shared/model/createHouseHoldDetail";

export function findHouseHoldDetail(houseHoldId:number): Bluebird<HouseHoldDetail>{

    //go and define a new model first at model.ts with relations

    return HouseHoldModel.findById(houseHoldId, {
        include: [
            {
                model: HouseHoldMemberModel
            }
        ]
    })
    .then(createHouseHoldDetail);

}