import {Response, Request} from "express";
import {findHouseHoldDetail} from "../queries/findHouseHoldDetail";
import  * as _ from 'lodash';
import {onSuccess} from "./onSuccess";
import {onError} from "./onError";

export function apiGetHouseHoldDetail(req:Request, res:Response){

    const houseHoldId = parseInt(req.params.id);

    findHouseHoldDetail (houseHoldId)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, res, "Could not find house hold detail"));

}