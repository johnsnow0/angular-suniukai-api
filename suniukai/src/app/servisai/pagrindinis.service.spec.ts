import { TestBed } from '@angular/core/testing';

import { PagrindinisService } from './pagrindinis.service';

describe('PagrindinisService', () => {
  let service: PagrindinisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagrindinisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
