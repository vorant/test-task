import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopComponent } from './pet-shop.component';
import {HeaderComponent} from "../shared/header/header.component";
import {RouterTestingModule} from "@angular/router/testing";
import {MdIconModule} from "@angular/material";

describe('PetShopComponent', () => {
  let component: PetShopComponent;
  let fixture: ComponentFixture<PetShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MdIconModule
      ],
      declarations: [
        PetShopComponent,
        HeaderComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
