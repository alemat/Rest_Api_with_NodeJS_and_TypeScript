import {Request, Response} from "express";
import * as _ from 'lodash';
import {updateHouseHoldMember} from "../queries/updateHouseHoldMember";
import {onSuccess} from "./onSuccess";
import {onError} from "./onError";

export function apiPatchHouseHoldMember(req: Request, res:Response){

    const houseHoldMemberId = req.params.id;
    updateHouseHoldMember (houseHoldMemberId, req.body)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, res, `Could not find course detail ${houseHoldMemberId}`));
}