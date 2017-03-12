import {Request, Response} from "express";
import * as _ from "lodash";
import {onError} from "./onError";
import {onSuccess} from "./onSuccess";
import {createHouseHoldMember} from "../queries/createHouseHoldMember";
import {databaseErrorHandler} from "./databaseErrorHandler";
import sequelize = require("sequelize");


export function apiCreateHouseHoldMember (req: Request, res:Response){

    createHouseHoldMember (req.body)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(databaseErrorHandler, res))
        .catch( _.partial(onError, res, `Could not find course detail`));

}
