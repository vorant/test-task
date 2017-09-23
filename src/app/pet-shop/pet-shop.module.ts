import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HeaderComponent } from './shared/header/header.component';
import { PetShopComponent } from './pet-shop/pet-shop.component';
import { routeConfig } from "./router.config";
import { RouterModule } from "@angular/router";

import {
  MdButtonModule,
  MdCardModule,
  MdChipsModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdSelectModule,
  MdSlideToggleModule,
  MdTableModule,
  MdToolbarModule,
} from '@angular/material';
import { PageHeadingComponent } from './shared/page-heading/page-heading.component';
import { FormsModule } from "@angular/forms";
import { PetListFilterComponent } from './pet-list-filter/pet-list-filter.component';
import { VegetarianFilterPipe } from './pet-list-filter/vegetarian-filter.pipe';
import { ProductByPetPipe } from './product-list/product-by-pet.pipe';
import { AddToCardDialogComponent } from './add-to-card-dialog/add-to-card-dialog.component';
import { PetsApiService } from "./services/pets-api.service";
import {StorageService} from "./services/storage.service";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routeConfig),
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdChipsModule,
    MdListModule,
    MdSelectModule,
    MdSlideToggleModule,
    MdCardModule,
    FormsModule,
    MdDialogModule,
    MdInputModule,
    MdTableModule
  ],
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    ShoppingCartComponent,
    HeaderComponent,
    PetShopComponent,
    PageHeadingComponent,
    PetListFilterComponent,
    VegetarianFilterPipe,
    ProductByPetPipe,
    AddToCardDialogComponent
  ],
  exports: [
    PetShopComponent,
    RouterModule
  ],
  entryComponents: [
    AddToCardDialogComponent
  ],
  providers: [
    PetsApiService,
    StorageService
  ]
})
export class PetShopModule { }
