"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var HouseHoldsService = (function () {
    function HouseHoldsService(http) {
        this.http = http;
    }
    HouseHoldsService.prototype.loadHouseHoldDetail = function (houseHoldId) {
        // now here inorder to load data from the back end we gonna need the http module .. which is
        // already available for injection on the contructor on the app.module.ts under the imports section
        return this.http.get("/api/hh/" + houseHoldId)
            .map(function (res) { return res.json().payload; });
    };
    return HouseHoldsService;
}());
HouseHoldsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HouseHoldsService);
exports.HouseHoldsService = HouseHoldsService;
