import { Injectable } from '@angular/core';
import {ProductExtended} from "../models/productExtended.model";
import {Product} from "../models/product.model";
import {Pet} from "../models/pet.model";
import {PetsApiService} from "./pets-api.service";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/merge'
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

    Observable
      .forkJoin(
        this.petsApiService.getProducts(),
        this.petsApiService.getPets()
      )
      .subscribe((results: [Product[], Pet[]]) => {
        this.setData(...results);
      });
  }

  getProductsObservable(): Observable<ProductExtended[]> {
    return this.products.length ? Observable.of(this.products) : this.productsObservable;
  }

  getPetsObservable(): Observable<Pet[]> {
    return this.pets.length ? Observable.of(this.pets) : this.petsObservable;
  }

  private setData(products, pets) {
    this.pets = pets;

    this.products = products.map(product => {
      let extendedProduct = new ProductExtended();

      Object.assign(extendedProduct, product);

      extendedProduct.isForVegetarians = product.pets.every(this.isPetVegetarian.bind(this));
      return extendedProduct;
    });

    this.productsObservable.next(this.products);
    this.petsObservable.next(this.pets);
  }

  private isPetVegetarian(petName): boolean {
    const pet = this.pets.find(pet => pet.name === petName);
    return pet.isVegetarian;
  }
}
