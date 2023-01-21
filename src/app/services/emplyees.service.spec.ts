import { TestBed } from '@angular/core/testing';

import { EmplyeesService } from './emplyees.service';

describe('EmplyeesService', () => {
  let service: EmplyeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmplyeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
