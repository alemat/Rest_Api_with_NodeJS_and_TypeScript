import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HouseHoldDetailComponent } from './household-detail/household-detail.component';
import {HouseHoldsService} from "./services/houseHolds.service";

import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    AppComponent,
    HouseHoldDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HouseHoldsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
