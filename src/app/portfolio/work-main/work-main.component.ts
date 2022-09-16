import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WorkComponent } from './websites/work.component';

@Component({
  selector: 'app-work-main',
  templateUrl: './work-main.component.html',
  styleUrls: ['./work-main.component.scss']
})
export class WorkMainComponent implements OnInit {

  examplesClicked: boolean = false;
  sitesClicked: boolean = true;
  emailsClicked: boolean = true;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  // showSites() {
  //   this.examplesClicked = true;
  //   this.sitesClicked = true;
  //   this.emailsClicked = false;
  // }

  showSites() {
    const dialogRef = this.dialog.open(WorkComponent, {
      hasBackdrop: true,
    });
  }

  showEmails() {
    this.examplesClicked = true;
    this.emailsClicked = true;
    this.sitesClicked = false;
  }

  backToMain() {
    this.examplesClicked = false;
  }

}
