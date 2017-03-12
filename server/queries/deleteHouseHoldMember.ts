
import {HouseHoldMemberModel} from "../model/model";

export function deleteHouseHoldMember(id:string){
    return HouseHoldMemberModel.destroy(
        {
            where: {id}
        }
    );
}