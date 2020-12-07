import { TestBed } from '@angular/core/testing';

import { FlaggedPreloadingStrategyService } from './flagged.preloading-strategy';

describe('FlaggedPreloadingStrategyService', () => {
  let service: FlaggedPreloadingStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlaggedPreloadingStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
