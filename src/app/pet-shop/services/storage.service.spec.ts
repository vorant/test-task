import { TestBed, inject } from '@angular/core/testing';

import { StorageService } from './storage.service';
import { PetsApiService } from './pets-api.service';
import {Http, BaseRequestOptions, ConnectionBackend} from "@angular/http";
import {MockProductsAPI} from "../../mocks/mock-products-api.service";
import {MockBackend} from "@angular/http/testing";
import {MockPetsAPI} from "../../mocks/mock-pets-api.service";

export function HttpFactoryDev(backend: MockBackend, options: BaseRequestOptions) {
  return new Http(backend, options);
}

describe('StorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StorageService,
        PetsApiService,
        Http,
        ConnectionBackend,
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: HttpFactoryDev
        },
        MockPetsAPI,
        MockProductsAPI
      ]
    });
  });

  it('should be created', inject([StorageService], (service: StorageService) => {
    expect(service).toBeTruthy();
  }));
});
