import {Response} from "express";

export function onError(res:Response, message:String, err:any){

    console.error("Promise error chain", message, err);
    res.status(500).send();
}

