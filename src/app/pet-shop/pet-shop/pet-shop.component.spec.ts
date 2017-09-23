import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopComponent } from './pet-shop.component';

describe('PetShopComponent', () => {
  let component: PetShopComponent;
  let fixture: ComponentFixture<PetShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetShopComponent ]
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
