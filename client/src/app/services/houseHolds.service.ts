import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {HouseHoldDetail} from "../../../../shared/model/household-detail";

@Injectable()
export class HouseHoldsService {

  constructor(private http:Http) { }

  loadHouseHoldDetail(houseHoldId :number) :Observable<HouseHoldDetail> {

    // now here inorder to load data from the back end we gonna need the http module .. which is
    // already available for injection on the contructor on the app.module.ts under the imports section
      return this.http.get(`/api/hh/${houseHoldId}` )
        .map(res => res.json().payload);

  }
}
