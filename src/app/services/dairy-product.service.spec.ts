import { TestBed } from '@angular/core/testing';

import { DairyProductService } from './dairy-product.service';

describe('DairyProductService', () => {
  let service: DairyProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DairyProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
