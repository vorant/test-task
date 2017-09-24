import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PetListFilterComponent } from './pet-list-filter.component';
import { MdSelectModule, MdSlideToggleModule, } from '@angular/material';
import {VegetarianFilterPipe} from "./vegetarian-filter.pipe";
import {StorageService} from "../services/storage.service";
import {PetsApiService} from "../services/pets-api.service";
import {Http, ConnectionBackend, RequestOptions, BaseRequestOptions} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {MockPetsAPI} from "../../mocks/mock-pets-api.service";
import {MockProductsAPI} from "../../mocks/mock-products-api.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


export function HttpFactoryDev(backend: MockBackend, options: BaseRequestOptions) {
  return new Http(backend, options);
}

describe('PetListFilterComponent', () => {
  let component: PetListFilterComponent;
  let fixture: ComponentFixture<PetListFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MdSelectModule,
        MdSlideToggleModule,
        BrowserAnimationsModule
      ],
      declarations: [
        PetListFilterComponent,
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
        // RequestOptions
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
