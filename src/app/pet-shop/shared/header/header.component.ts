import { Component, OnInit } from '@angular/core';
import {ShoppingCartService, ShoppingCartMessage} from "../../services/shopping-cart.service";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  count = 0;
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartService.getObservable().subscribe((res: ShoppingCartMessage) => {
      this.count += res.count;
    });
  }
}
