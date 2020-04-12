import { TestBed } from '@angular/core/testing';

import { UsersIdleService } from './users-idle.service';

describe('UsersIdleService', () => {
  let service: UsersIdleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersIdleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
