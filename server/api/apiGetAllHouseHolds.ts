import {Request, Response} from "express";
import {findAllHouseHolds} from "../queries/findAllHouseHolds";
import  * as _ from 'lodash';
import {onError} from "./onError";
import {onSuccess} from "./onSuccess";

export function apiGetAllHouseHolds(req:Request, res: Response){

    //throw new Error('error occured');

     findAllHouseHolds()
         // middleware error handling (global error handling)does not catch errors that occur here for instance
       // .then(() => {throw new Error('error')})
        .then(_.partial(onSuccess, res))
       //  .catch(err => res.status(500).send());
         .catch(_.partial(onError, res, "Find all house holds failed"));//to prevent http hanging request we need to handle error in the promise chain as well by adding a catch to the promise

// but we have to move the error handler into a separate file function
}


