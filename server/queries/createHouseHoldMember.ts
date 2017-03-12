
import {HouseHoldMemberModel} from "../model/model";

export  function createHouseHoldMember(props: any){
    return HouseHoldMemberModel.create(props);

}