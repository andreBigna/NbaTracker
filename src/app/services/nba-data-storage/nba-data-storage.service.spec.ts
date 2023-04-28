import { TestBed } from '@angular/core/testing';

import { NbaDataStorageService } from './nba-data-storage.service';

describe('NbaDataStorageService', () => {
  let service: NbaDataStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NbaDataStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
