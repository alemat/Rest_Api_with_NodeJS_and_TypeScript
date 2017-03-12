import {HouseHoldMemberModel} from "../model/model";

export  function updateHouseHoldMember(id:string, props:any){

    return HouseHoldMemberModel.update(
        props,
        {
            where: {id}
        }
    );

}
