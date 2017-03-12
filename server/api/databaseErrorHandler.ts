import {Response} from "express";

const hri = require ('human-readable-ids').hri;

export function databaseErrorHandler (res:Response, err:any){

    const id = hri.random();

    console.error("Database error occured", id, err);
    res.status(500).json({code: 'ERR-002',
        message: `Creation of house hold member failed, error code ${id}` });
}

//in order to parse the incoming POST data to database we need to configure express using body-parser .. npm install body-parser -S

