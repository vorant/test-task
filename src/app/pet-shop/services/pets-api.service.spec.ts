import { TestBed, inject } from '@angular/core/testing';

import { PetsApiService } from './pets-api.service';

describe('PetsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetsApiService]
    });
  });

  it('should be created', inject([PetsApiService], (service: PetsApiService) => {
    expect(service).toBeTruthy();
  }));
});
