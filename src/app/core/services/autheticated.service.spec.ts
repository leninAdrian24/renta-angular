import { TestBed } from '@angular/core/testing';

import { AutheticatedService } from './autheticated.service';

describe('AutheticatedService', () => {
  let service: AutheticatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutheticatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
