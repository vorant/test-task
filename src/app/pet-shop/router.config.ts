import {Routes} from "@angular/router";
import {ProductCardComponent} from "./product-card/product-card.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {PetShopComponent} from "./pet-shop/pet-shop.component";


export const routeConfig: Routes = [
  {
    path: '',
    component: PetShopComponent,
    children: [
      {
        path: '',
        redirectTo: 'product-list',
        pathMatch: 'prefix'
      },
      {
        path: 'product-list',
        component: ProductListComponent
      },
      {
        path: 'product/:name',
        component: ProductCardComponent
      },
      {
        path: 'cart',
        component: ShoppingCartComponent
      },
      {
        path: 'product',
        redirectTo: 'product-list',
        pathMatch: 'prefix'
      }
    ]
  }
];
