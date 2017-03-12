import {Response} from "express";

const hri = require ('human-readable-ids').hri;

export function databaseErrorHandler (res:Response, err:any){

    const id = hri.random();

    console.error("Database error occured", id, err);
    res.status(500).json({code: 'ERR-002',
        message: `Creation of house hold member failed, error code ${id}` });
}
