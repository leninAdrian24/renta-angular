import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { autheticatedGuard } from './autheticated.guard';

describe('autheticatedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => autheticatedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
