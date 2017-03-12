/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HouseHoldsService } from './houseHolds.service';

describe('HouseHoldsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HouseHoldsService]
    });
  });

  it('should ...', inject([HouseHoldsService], (service: HouseHoldsService) => {
    expect(service).toBeTruthy();
  }));
});
