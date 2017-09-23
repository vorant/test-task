import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product.model";
import {ShoppingCartService, ShoppingCartMessage} from "../services/shopping-cart.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cart: ShoppingCartMessage[] = [];
  total = 0;

  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.cart  = this.shoppingCartService.getCart();

    this.cart.forEach(cartItem => {
      this.total += cartItem.product.price * cartItem.count;
    });
  }
}
