
import {Request, Response} from "express";
import * as _ from 'lodash';
import {onSuccess} from "./onSuccess";
import {onError} from "./onError";
import {deleteHouseHoldMember} from "../queries/deleteHouseHoldMember";

export function apiDeleteHouseHoldMember(req: Request, res:Response){

    const houseHoldId = req.params.id;

    deleteHouseHoldMember (houseHoldId)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, res, `Could not find course detail ${houseHoldId}`));
}

