import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-email1',
  templateUrl: './email1.component.html',
  styleUrls: ['./email1.component.scss']
})
export class Email1Component implements OnInit {

  cards: any;

  constructor(public dialogRef: MatDialogRef<Email1Component>, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.cards = this.data['cardInfo'];
    console.log(this.cards);
  }

  ngOnInit(): void {
  }

}
