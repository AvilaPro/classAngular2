import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { controlHoraGuard } from './control-hora.guard';

describe('controlHoraGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => controlHoraGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
