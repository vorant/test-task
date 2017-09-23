import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetListFilterComponent } from './pet-list-filter.component';

describe('PetListFilterComponent', () => {
  let component: PetListFilterComponent;
  let fixture: ComponentFixture<PetListFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetListFilterComponent ]
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
