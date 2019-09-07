import { TestBed } from '@angular/core/testing';

import { MyControlLibraryService } from './my-control-library.service';

describe('MyControlLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyControlLibraryService = TestBed.get(MyControlLibraryService);
    expect(service).toBeTruthy();
  });
});
