import { TestBed } from '@angular/core/testing';

import { DataOpsService } from './data-ops.service';

describe('DataOpsService', () => {
  let service: DataOpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataOpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
