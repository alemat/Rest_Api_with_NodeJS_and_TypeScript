import {Component, OnInit, Input} from '@angular/core';
import {HouseHoldDetail} from "../../../../shared/model/household-detail";


@Component({
  selector: 'houseHold-detail',
  templateUrl: 'household-detail.component.html',
  styleUrls: ['household-detail.component.css']
})
export class HouseHoldDetailComponent implements OnInit {

  @Input()
  houseHoldDetail:HouseHoldDetail;
  constructor() {
  }

  ngOnInit() {

  }

}

//to fetch the course detail from the back end using the REST API call , and for that we need an angular 2 service ,
// create the service skeleton using angula cli /> ng generate service services/courses
