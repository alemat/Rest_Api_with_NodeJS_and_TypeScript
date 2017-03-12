import {Component, OnInit} from '@angular/core';
import {HouseHoldsService} from "./services/houseHolds.service";
import {Observable} from "rxjs";
import {HouseHoldDetail} from "../../../shared/model/household-detail";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  course$: Observable<HouseHoldDetail>;

  constructor (private houseHoldsService:HouseHoldsService){

  }

  ngOnInit() {

    this.course$ = this.houseHoldsService.loadHouseHoldDetail(9);
    /*this.houseHoldsService.loadHouseHoldDetail(1)
      .subscribe(console.log); */
  }
}
