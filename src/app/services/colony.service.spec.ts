import { TestBed } from '@angular/core/testing';

import { ColonyService } from './colony.service';

describe('ColonyService', () => {
  let service: ColonyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColonyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
