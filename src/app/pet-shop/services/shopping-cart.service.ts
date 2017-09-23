import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Product} from "../models/product.model";
import {Observable} from "rxjs/Observable";

export class ShoppingCartMessage {
  product: Product;
  count: number;
}

@Injectable()
export class ShoppingCartService {
  private subject = new Subject<ShoppingCartMessage>();
  private cart: ShoppingCartMessage[] = [];

  getObservable(): Observable<ShoppingCartMessage> {
    return this.subject;
  }

  addToCart(message: ShoppingCartMessage): void {
    this.cart.push(message);
    this.sendMessage(message);
  }

  getCart(): ShoppingCartMessage[] {
    return this.cart;
  }

  private sendMessage(message: ShoppingCartMessage): void {
    this.subject.next(message)
  }
}

