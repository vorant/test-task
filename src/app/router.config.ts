import { Routes } from "@angular/router";
import {PetShopComponent} from "./pet-shop/pet-shop/pet-shop.component";
import {ProductListComponent} from "./pet-shop/product-list/product-list.component";
import {PetShopModule} from "./pet-shop/pet-shop.module";

export const routeConfig: Routes = [
  {
    path: '',
    loadChildren: "./pet-shop/pet-shop.module#PetShopModule"
  }
];
