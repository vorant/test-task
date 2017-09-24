import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartComponent } from './shopping-cart.component';
import {PageHeadingComponent} from "../shared/page-heading/page-heading.component";
import {MdListModule} from "@angular/material";
import {ShoppingCartService} from "../services/shopping-cart.service";

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MdListModule
      ],
      declarations: [
        ShoppingCartComponent,
        PageHeadingComponent
      ],
      providers: [
        ShoppingCartService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
