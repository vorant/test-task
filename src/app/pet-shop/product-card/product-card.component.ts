import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogConfig} from "@angular/material";
import {AddToCardDialogComponent} from "../add-to-card-dialog/add-to-card-dialog.component";
import {ActivatedRoute} from "@angular/router";
import {ShoppingCartService} from "../services/shopping-cart.service";
import {StorageService} from "../services/storage.service";
import {ProductExtended} from "../models/productExtended.model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  product: ProductExtended;
  allDataFetched = false;

  constructor(
    public dialog: MdDialog,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService,
    private storageService: StorageService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const name = params['name'];
      this.loadProducts(name);
    });
  }

  addToCart() {
    const dialogParams = new MdDialogConfig();
    dialogParams.width = '250px';
    dialogParams.data = {
      name: this.product.name,
      count: 1
    };

    this.openDialog(dialogParams);
  }

  private openDialog(dialogParams) {
    const dialogRef = this.dialog.open(AddToCardDialogComponent, dialogParams);

    dialogRef.afterClosed().subscribe(count => {
      if (!count) {
        return;
      }
      this.shoppingCartService.addToCart({product: this.product, count: count});
    });
  }

  private loadProducts(name) {
    this.storageService.getProductsObservable().subscribe((products: ProductExtended[]) => {
      this.product = products.find(product => product.name === name);
      this.allDataFetched = true;
    });
  }
}
