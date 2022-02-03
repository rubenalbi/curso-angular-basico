import { TestBed } from '@angular/core/testing';

import { Cmp09HttpService } from './cmp09-http.service';

describe('Cmp09HttpService', () => {
  let service: Cmp09HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cmp09HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
