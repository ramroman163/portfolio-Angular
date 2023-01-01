import { TestBed } from '@angular/core/testing';

import { DataPortafolioService } from './dataPortafolio-service.service';

describe('PortafolioServiceService', () => {
  let service: DataPortafolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPortafolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
