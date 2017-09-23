import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {MockPetsAPI} from "../../mocks/mock-pets-api.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import {Pet} from '../models/pet.model';
import {Product} from '../models/product.model';
import {MockProductsAPI} from "../../mocks/mock-products-api.service";

@Injectable()
export class PetsApiService {
  public constructor(
    private http: Http,
    private mockPetsAPI: MockPetsAPI,
    private mockProductsAPI: MockProductsAPI,
  ) {
    this.mockPetsAPI.handleRequest(); // Execute the mock
    this.mockProductsAPI.handleRequest(); // Execute the mock
  }

  // Get an observable of pets
  public getPets(): Observable<Pet[]> {
    return this.http.get(this.getPetsUrl).map((response: Response) => {
      const petsList: Pet[] = response.json();
      return petsList;
    });
  }

  // Get an observable of pets
  public getProducts(): Observable<Product[]> {
    return this.http.get(this.getProductsUrl).map((response: Response) => {
      const productsList: Product[] = response.json();
      return productsList;
    });
  }

  private get getPetsUrl(): string {
    return `/pets/`;
  }

  private get getProductsUrl(): string {
    return `/products/`;
  }
}


