import * as ORM from "Sequelize";
import {Sequelize} from 'Sequelize';

export function initHouseHoldModel(sequelize:Sequelize){

    return sequelize.define('HouseHolds',{

        description: ORM.STRING,
        houseNo: ORM.STRING,
        phoneNumber: ORM.STRING,
        dateOfRegistration: ORM.STRING,
        longDescription: ORM.TEXT,
        rHouseHoldHeadId: ORM.INTEGER,
        rLKDHouseHoldCategory: ORM.STRING,
        isDeleted: ORM.BOOLEAN,
        isNew: ORM.BOOLEAN,
        updatedAt: ORM.TIME,
        updatedBy: ORM.STRING,
        createdAt: ORM.STRING
    });
}



