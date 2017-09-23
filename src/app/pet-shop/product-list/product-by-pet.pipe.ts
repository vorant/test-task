import { Pipe, PipeTransform } from '@angular/core';
import {Pet} from "../models/pet.model";
import {ProductExtended} from "../models/productExtended.model";

@Pipe({
  name: 'productByPet'
})
export class ProductByPetPipe implements PipeTransform {

  transform(products: ProductExtended[], args?: Pet[]): ProductExtended[] {
    return !args || !args.length ? products : products.filter(product => this.isProductForPet(product, args)) ;
  }

  private isProductForPet(product: ProductExtended, pets: Pet[]): boolean {
    return  product.pets.some(petName => pets.some(pet => pet.name === petName));
  }

}
