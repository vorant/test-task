import { TestBed, inject } from '@angular/core/testing';

import { StorageService } from './storage.service';
import { PetsApiService } from './pets-api.service';
import {Http, BaseRequestOptions, ConnectionBackend} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {MockProductsAPI, MockProducts} from "../../mocks/mock-products-api.service";
import {MockPetsAPI, MockPets} from "../../mocks/mock-pets-api.service";

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

  it('Get Pets', inject([StorageService], (service: StorageService) => {
    service.getPetsObservable().subscribe(pets => {
      expect(pets.length).toEqual(MockPets.length);
    });
  }));

  it('Get Products', inject([StorageService], (service: StorageService) => {
    service.getProductsObservable().subscribe(products => {
      expect(products.length).toEqual(MockProducts.length);
    });
  }));
});
