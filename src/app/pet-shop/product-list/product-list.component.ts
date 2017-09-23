import {Component, OnInit} from '@angular/core';
import {Pet} from "../models/pet.model";
import {StorageService} from "../services/storage.service";
import {ProductExtended} from "../models/productExtended.model";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: []
})
export class ProductListComponent implements OnInit {
  products: ProductExtended[];
  chosenPets: Pet[];

  constructor(
    private storageService: StorageService
  ) {

  }

  ngOnInit() {
    this.storageService.getProductsObservable().subscribe((products) => {
      this.products = products;
    });
  }

  onPetsChosen(pets: Pet[]) {
    this.chosenPets = pets;
  }
}
