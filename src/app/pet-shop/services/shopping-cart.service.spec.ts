import { TestBed, inject } from '@angular/core/testing';
import {MockProducts} from "../../mocks/mock-products-api.service";

import { ShoppingCartService, ShoppingCartMessage } from './shopping-cart.service';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

describe('ShoppingCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingCartService]
    });
  });

  it('should be created', inject([ShoppingCartService], (service: ShoppingCartService) => {
    expect(service).toBeTruthy();
  }));

  it('check addToCard method', inject([ShoppingCartService], (service: ShoppingCartService) => {
    let cart, message;

    const subject = service.getObservable();
    spyOn(subject, 'next');

    cart = service.getCart();
    expect(cart.length).toEqual(0);

    message = {product: MockProducts[0], count: 1};
    service.addToCart(message);
    cart = service.getCart();

    expect(cart.length).toEqual(1);
    expect(subject.next).toHaveBeenCalledWith(message);

    message = {product: MockProducts[2], count: 3};
    service.addToCart(message);
    cart = service.getCart();

    expect(cart.length).toEqual(2);
    expect(subject.next).toHaveBeenCalledWith(message);
  }));

});
