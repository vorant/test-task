import {Component, Inject, OnInit} from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-to-card-dialog',
  templateUrl: './add-to-card-dialog.component.html',
  styleUrls: ['./add-to-card-dialog.component.scss']
})
export class AddToCardDialogComponent implements OnInit {
  public dialogRef: MdDialogRef<AddToCardDialogComponent>;

  constructor(
    @Inject(MD_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
