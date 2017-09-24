import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AddToCardDialogComponent } from './add-to-card-dialog.component';
import { FormsModule } from '@angular/forms';
import {
  MdDialog,
  MdDialogModule,
  MdDialogRef, MD_DIALOG_DATA
} from '@angular/material';

describe('AddToCardDialogComponent', () => {
  let component: AddToCardDialogComponent;
  let fixture: ComponentFixture<AddToCardDialogComponent>;
  let dialog: MdDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MdDialogModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AddToCardDialogComponent
      ],
      providers: [
        {provide: MD_DIALOG_DATA, useValue: {} },
        {provide: MdDialogRef, useValue: {} },
      ]
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
