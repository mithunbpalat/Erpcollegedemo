import { TestBed } from '@angular/core/testing';

import { ErpcollegeService } from './erpcollege.service';

describe('ErpcollegeService', () => {
  let service: ErpcollegeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErpcollegeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
