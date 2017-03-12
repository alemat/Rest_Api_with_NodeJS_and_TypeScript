import {Application} from "express" ;
import {apiGetAllHouseHolds} from "./apiGetAllHouseHolds";
import {apiGetHouseHoldDetail} from "./apiGetHouseHoldDetail";
import {apiCreateHouseHoldMember} from "./apiCreateHouseHoldMember";
import {apiPatchHouseHoldMember} from "./apiPatchHouseHoldMember";
import {apiDeleteHouseHoldMember} from "./apiDeleteHouseHoldMember";

export function initRestApi(app:Application){

    app.route('/api/hhs').get(apiGetAllHouseHolds);
    app.route('/api/hhs/:id').get(apiGetHouseHoldDetail);

    app.route('/api/hhmember').post(apiCreateHouseHoldMember);
    app.route('/api/hhmember/:id').patch(apiPatchHouseHoldMember);
    app.route('/api/hhmember/:id').delete(apiDeleteHouseHoldMember);
}

