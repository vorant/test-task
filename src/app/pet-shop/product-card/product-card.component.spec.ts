import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ProductCardComponent } from './product-card.component';
import {PageHeadingComponent} from "../shared/page-heading/page-heading.component";
import {MdDialogModule} from "@angular/material";
import { RouterTestingModule } from '@angular/router/testing';
import {ShoppingCartService} from "../services/shopping-cart.service";
import {StorageService} from "../services/storage.service";
import {Http, ConnectionBackend, BaseRequestOptions} from "@angular/http";
import {PetsApiService} from "../services/pets-api.service";
import {MockBackend} from "@angular/http/testing";
import {MockPetsAPI} from "../../mocks/mock-pets-api.service";
import {MockProductsAPI} from "../../mocks/mock-products-api.service";

export function HttpFactoryDev(backend: MockBackend, options: BaseRequestOptions) {
  return new Http(backend, options);
}

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MdDialogModule,
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        ProductCardComponent,
        PageHeadingComponent
      ],
      providers: [
        ShoppingCartService,
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
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
