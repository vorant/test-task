import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import {PageHeadingComponent} from "../shared/page-heading/page-heading.component";

import { RouterTestingModule } from '@angular/router/testing';
import {ShoppingCartService} from "../services/shopping-cart.service";
import {StorageService} from "../services/storage.service";
import {Http, ConnectionBackend, BaseRequestOptions} from "@angular/http";
import {PetsApiService} from "../services/pets-api.service";
import {MockBackend} from "@angular/http/testing";
import {MockPetsAPI} from "../../mocks/mock-pets-api.service";
import {MockProductsAPI} from "../../mocks/mock-products-api.service";
import {PetListFilterComponent} from "../pet-list-filter/pet-list-filter.component";
import {ProductByPetPipe} from "./product-by-pet.pipe";
import {MdListModule, MdSelectModule, MdSlideToggleModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {VegetarianFilterPipe} from "../pet-list-filter/vegetarian-filter.pipe";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export function HttpFactoryDev(backend: MockBackend, options: BaseRequestOptions) {
  return new Http(backend, options);
}

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MdSelectModule,
        MdListModule,
        RouterTestingModule,
        MdSlideToggleModule,
        BrowserAnimationsModule
      ],
      declarations: [
        ProductListComponent,
        PageHeadingComponent,
        PetListFilterComponent,
        ProductByPetPipe,
        VegetarianFilterPipe
      ],
      providers: [
        StorageService,
        PetsApiService,
        Http,
        ConnectionBackend,
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: HttpFactoryDev
        },
        MockPetsAPI,
        MockProductsAPI
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
