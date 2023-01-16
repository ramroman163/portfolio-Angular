import { TestBed } from '@angular/core/testing';

import { ActivarloginService } from './activarlogin.service';

describe('ActivarloginService', () => {
  let service: ActivarloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivarloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
