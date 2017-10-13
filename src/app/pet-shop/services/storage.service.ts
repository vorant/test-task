import { Injectable } from '@angular/core';
import {ProductExtended} from "../models/productExtended.model";
import {Product} from "../models/product.model";
import {Pet} from "../models/pet.model";
import {PetsApiService} from "./pets-api.service";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/merge';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class StorageService {
  private products: ProductExtended[] = [];
  private pets: Pet[] = [];
  private productsObservable: Subject<ProductExtended[]> = new Subject();
  private petsObservable: Subject<Pet[]> = new Subject();

  constructor(
    private petsApiService: PetsApiService
  ) {
    this.init();
  }

  getProductsObservable(): Observable<ProductExtended[]> {
    return this.products.length ? Observable.of(this.products) : this.productsObservable;
  }

  getPetsObservable(): Observable<Pet[]> {
    return this.pets.length ? Observable.of(this.pets) : this.petsObservable;
  }

  private init(): void {
    Observable
      .forkJoin(
        this.petsApiService.getProducts(),
        this.petsApiService.getPets()
      )
      .subscribe((results: [Product[], Pet[]]) => {
        /**
         * I wanted to use this code,
         * this.setData(...results);
         * but sometimes it throws ERROR
         * `ERROR in .../src/app/pet-shop/services/storage.service.ts (29,9): Supplied parameters do not match any signature of call target.
         */
        this.setData(results[0], results[1]);
      });
  }

  private setData(products, pets) {
    this.pets = pets;

    this.products = products.map(product => {
      const extendedProduct = new ProductExtended();

      Object.assign(extendedProduct, product);

      extendedProduct.isForVegetarians = product.pets.every(this.isPetVegetarian.bind(this));
      return extendedProduct;
    });

    this.productsObservable.next(this.products);
    this.petsObservable.next(this.pets);
  }

  private isPetVegetarian(petName): boolean {
    const foundedPet = this.pets.find(pet => pet.name === petName);
    return foundedPet.isVegetarian;
  }
}
