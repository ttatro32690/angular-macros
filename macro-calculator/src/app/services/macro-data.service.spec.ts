import { TestBed } from '@angular/core/testing';

import { MacroDataService } from './macro-data.service';

describe('MacroDataService', () => {
  let service: MacroDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MacroDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
