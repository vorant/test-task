import { TestBed, inject } from '@angular/core/testing';

import { PetsApiService } from './pets-api.service';
import {Http, BaseRequestOptions, ConnectionBackend} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {MockProductsAPI, MockProducts} from "../../mocks/mock-products-api.service";
import {MockPetsAPI, MockPets} from "../../mocks/mock-pets-api.service";

export function HttpFactoryDev(backend: MockBackend, options: BaseRequestOptions) {
  return new Http(backend, options);
}

describe('PetsApiService -> ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
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

  it('should be created', inject([PetsApiService], (service: PetsApiService) => {
    expect(service).toBeTruthy();
  }));

  it('Get Pets', inject([PetsApiService], (service: PetsApiService) => {
    service.getPets().subscribe(pets => {
      expect(pets.length).toEqual(MockPets.length);
    });
  }));

  it('Get Products', inject([PetsApiService], (service: PetsApiService) => {
    service.getProducts().subscribe(products => {
      expect(products.length).toEqual(MockProducts.length);
    });
  }));
});
