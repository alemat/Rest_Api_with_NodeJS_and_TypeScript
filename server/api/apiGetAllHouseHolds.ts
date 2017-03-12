import {Request, Response} from "express";
import {findAllHouseHolds} from "../queries/findAllHouseHolds";
import  * as _ from 'lodash';
import {onError} from "./onError";
import {onSuccess} from "./onSuccess";

export function apiGetAllHouseHolds(req:Request, res: Response){

     findAllHouseHolds()
        .then(_.partial(onSuccess, res))
         .catch(_.partial(onError, res, "Find all house holds failed"));
}


