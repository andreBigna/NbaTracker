import { TestBed } from '@angular/core/testing';

import { ScoresProviderService } from './scores-provider.service';

describe('ScoresProviderService', () => {
  let service: ScoresProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoresProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
