import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Email1Component } from './email-dialogs/email1/email1.component';
import { Email2Component } from './email-dialogs/email2/email2.component';
import { Email3Component } from './email-dialogs/email3/email3.component';
import { Email4Component } from './email-dialogs/email4/email4.component';
import { Email5Component } from './email-dialogs/email5/email5.component';
import { Email6Component } from './email-dialogs/email6/email6.component';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit {

  cards = [
    {
      bgImg: 'bg1',
      modal: '1',
      url: 'https://www.oblivion.cafe/',
      title: 'Oblivion',
      logo: '../../../../../assets/img/gaslamp2.png',
      client: 'Robin Hemley,',
      clientTitle: 'Author',
      image: '../../../../../assets/img/BookCover.jpg',
      imageAlt: 'Oblivion Book Cover',
      button: 'VIEW EMAIL'
    },
    {
      bgImg: 'bg2',
      modal: '2',
      url: 'https://www.oblivion.cafe/',
      title: 'Oblivion',
      logo: '../../../../../assets/img/gaslamp2.png',
      client: 'Robin Hemley,',
      clientTitle: 'Author',
      image: '../../../../../assets/img/BookCover.jpg',
      imageAlt: 'Oblivion Book Cover',
      button: 'VIEW EMAIL'
    },
    {
      bgImg: 'bg1',
      modal: '1',
      url: 'https://www.oblivion.cafe/',
      title: 'Oblivion',
      logo: '../../../../../assets/img/gaslamp2.png',
      client: 'Robin Hemley,',
      clientTitle: 'Author',
      image: '../../../../../assets/img/BookCover.jpg',
      imageAlt: 'Oblivion Book Cover',
      button: 'VIEW EMAIL'
    },
    {
      bgImg: 'bg2',
      modal: '2',
      url: 'https://www.oblivion.cafe/',
      title: 'Oblivion',
      logo: '../../../../../assets/img/gaslamp2.png',
      client: 'Robin Hemley,',
      clientTitle: 'Author',
      image: '../../../../../assets/img/BookCover.jpg',
      imageAlt: 'Oblivion Book Cover',
      button: 'VIEW EMAIL'
    },
    {
      bgImg: 'bg1',
      modal: '1',
      url: 'https://www.oblivion.cafe/',
      title: 'Oblivion',
      logo: '../../../../../assets/img/gaslamp2.png',
      client: 'Robin Hemley,',
      clientTitle: 'Author',
      image: '../../../../../assets/img/BookCover.jpg',
      imageAlt: 'Oblivion Book Cover',
      button: 'VIEW EMAIL'
    },
    {
      bgImg: 'bg2',
      modal: '2',
      url: 'https://www.oblivion.cafe/',
      title: 'Oblivion',
      logo: '../../../../../assets/img/gaslamp2.png',
      client: 'Robin Hemley,',
      clientTitle: 'Author',
      image: '../../../../../assets/img/BookCover.jpg',
      imageAlt: 'Oblivion Book Cover',
      button: 'VIEW EMAIL'
    },
    {
      bgImg: 'bg1',
      modal: '1',
      url: 'https://www.oblivion.cafe/',
      title: 'Oblivion',
      logo: '../../../../../assets/img/gaslamp2.png',
      client: 'Robin Hemley,',
      clientTitle: 'Author',
      image: '../../../../../assets/img/BookCover.jpg',
      imageAlt: 'Oblivion Book Cover',
      button: 'VIEW EMAIL'
    },
    {
      bgImg: 'bg2',
      modal: '2',
      url: 'https://www.oblivion.cafe/',
      title: 'Oblivion',
      logo: '../../../../../assets/img/gaslamp2.png',
      client: 'Robin Hemley,',
      clientTitle: 'Author',
      image: '../../../../../assets/img/BookCover.jpg',
      imageAlt: 'Oblivion Book Cover',
      button: 'VIEW EMAIL'
    },
    {
      bgImg: 'bg1',
      modal: '1',
      url: 'https://www.oblivion.cafe/',
      title: 'Oblivion',
      logo: '../../../../../assets/img/gaslamp2.png',
      client: 'Robin Hemley,',
      clientTitle: 'Author',
      image: '../../../../../assets/img/BookCover.jpg',
      imageAlt: 'Oblivion Book Cover',
      button: 'VIEW EMAIL'
    },
    {
      bgImg: 'bg2',
      modal: '2',
      url: 'https://www.oblivion.cafe/',
      title: 'Oblivion',
      logo: '../../../../../assets/img/gaslamp2.png',
      client: 'Robin Hemley,',
      clientTitle: 'Author',
      image: '../../../../../assets/img/BookCover.jpg',
      imageAlt: 'Oblivion Book Cover',
      button: 'VIEW EMAIL'
    }
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  
  emailDialog(i: number) {
    console.log(i);

    if(i == 0) {
      const dialogRef = this.dialog.open(Email1Component, {
        hasBackdrop: true,
        data: {
          cardInfo: this.cards[i]
        }
      }); 
    } else if (i == 1) {
      const dialogRef = this.dialog.open(Email2Component, {
        hasBackdrop: true,
        data: {
          cardInfo: this.cards[i]
        }
      });
    } else if (i == 2) {
      const dialogRef = this.dialog.open(Email3Component, {
        hasBackdrop: true,
        data: {
          cardInfo: this.cards[i]
        }
      });
    } else if (i == 3) {
      const dialogRef = this.dialog.open(Email4Component, {
        hasBackdrop: true,
        data: {
          cardInfo: this.cards[i]
        }
      });
    } else if (i == 4) {
      const dialogRef = this.dialog.open(Email5Component, {
        hasBackdrop: true,
        data: {
          cardInfo: this.cards[i]
        }
      });
    } else if (i == 5) {
      const dialogRef = this.dialog.open(Email6Component, {
        hasBackdrop: true,
        data: {
          cardInfo: this.cards[i]
        }
      });
    }
    
  }
}