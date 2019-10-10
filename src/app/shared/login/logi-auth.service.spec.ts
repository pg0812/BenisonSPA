import { TestBed } from '@angular/core/testing';

import { LogiAuthService } from './logi-auth.service';

describe('LogiAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogiAuthService = TestBed.get(LogiAuthService);
    expect(service).toBeTruthy();
  });
});
