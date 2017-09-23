import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../services/shopping-cart.service";
import {StorageService} from "../services/storage.service";

@Component({
  selector: 'app-pet-shop',
  templateUrl: './pet-shop.component.html',
  styleUrls: ['./pet-shop.component.scss'],
  providers: [
    ShoppingCartService,
    StorageService
  ]
})
export class PetShopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
