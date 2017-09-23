import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCardDialogComponent } from './add-to-card-dialog.component';

describe('AddToCardDialogComponent', () => {
  let component: AddToCardDialogComponent;
  let fixture: ComponentFixture<AddToCardDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToCardDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
