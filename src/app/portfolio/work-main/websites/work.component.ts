import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  showSites: boolean = true;
  panelOpenState = false;

  cards = [
    {
      url: '',
      attribute: 'hideToggle',
      id: 'ok',
      class: '',
      class2: '',
      date: 'Est. December 2022',
      title: 'InJoy Coffee',
      logo: '../../../assets/img/coming-soon.png',
      client: 'InJoy Coffee Company',
      clientTitle: 'Non-Profit Organization',
      myRole: 'Lead Developer',
      type: 'Ecommerce',
      image: '../../../assets/img/coming-soon.png',
      imageAlt: 'Coming Soon',
      button: '',
      buttonColor: '',
      www: '',
      wwwAlt: 'InJoy Coffee Company',
      comments: 'Stay tuned for updates on InJoy Coffee Company\'s upcoming website launch.  InJoy Coffee\'s ecommerce site will serve to not only sell coffee, but also to support worthy causes, such as an orphanage in Mexico.',
    },
    {
      url: 'https://www.oblivion.cafe/',
      attribute: 'hideToggle',
      id: 'ok',
      class: '',
      class2: '',
      date: 'June 2022',
      title: 'Oblivion',
      logo: '../../../assets/img/gaslamp2.png',
      client: 'Long Island University',
      clientTitle: '(Robin Hemley)',
      myRole: 'Lead Developer',
      type: 'Ecommerce, Game',
      image: '../../../assets/img/BookCover.jpg',
      imageAlt: 'Oblivion Book Cover',
      button: 'VISIT SITE',
      buttonColor: 'warn',
      www: 'Oblivion.cafe',
      wwwAlt: '',
      comments: '&nbsp;is a literary ecommerce site that was completed under the direction of Jason Robinson, Sr UX Designer for a large game studio in Seattle. <br><br> This was a fun and challenging project, due to its art-centricity and has very little traditional HTML structure. I enjoyed having the freedom to implement some CSS techniques and animations that most sites don\'t warrant.',
    },
    {
      url: 'https://defunct.site/',
      attribute: '(opened)="panelOpenState = true" (closed)="panelOpenState = false"',
      id: 'ok',
      class: 'defunct-flex',
      class2: 'defunct-class',
      date: 'Feb 2022',
      title: 'Defunct Magazine',
      logo: '../../../assets/img/liu.png',
      client: 'Long Island University',
      clientTitle: '(Creative Writing Department)',
      myRole: 'Front-End Developer',
      type: 'Literary publication, Content management system (CMS)',
      image: '',
      imageAlt: 'Defunct Logo',
      button: 'VISIT SITE',
      buttonColor: 'warn',
      www: 'Defunct.site',
      wwwAlt: '',
      comments: '&nbsp;is not just a University publication, but it serves as a Content Management System (CMS) for the Creative Writing department of Long Island University. <br><br> The back end of Defunct is an Admin Panel that gives users the ability to create and customize new magazine issues and articles.  It also keeps track of students, staff and contributors along with all of their respective literary works. A custom <i>markdown editor</i> has been incorporated to guarantee that all articles appear rich and render seamlessly with the <i>aging & decaying</i> feature. <br><br> This digital magazine sets itself apart with a unique <i>aging & decaying</i> feature that causes each article to visually decay with time and use (the way a paper magazine might deteriorate). Oh...if you want to see the site <i>un-decay</i>, just click the <b>orange toggle</b> in the upper-left corner!'
    },
    {
      url: '',
      attribute: '(opened)="panelOpenState = true" (closed)="panelOpenState = false"',
      id: 'complete',
      class: '',
      class2: '',
      date: 'June 2021',
      title: 'Dealer Enrollment',
      logo: '../../../assets/img/Toyota-Logo.png',
      client: 'Toyota',
      clientTitle: '',
      myRole: 'Front-End Developer',
      type: 'Marketing, Enrollment',
      image: '../../../assets/img/postcard.png',
      imageAlt: 'Toyota Dealer Enrollment',      
      button: 'Completed*',
      buttonColor: 'basic',
      www: '',
      wwwAlt: 'Site inactive - enrollment complete',
      comments: 'This site was commissioned by Toyota to enroll over 1500 Toyota dealerships across America for a marketing campaign.  The enrollment process gave dealerships the ability to customize the campaign based on their specific needs. <br><br> The enrollment concluded in 2021, and the site is no longer active.'
    },
    {
      url: '',
      attribute: '(opened)="panelOpenState = true" (closed)="panelOpenState = false"',
      id: 'no-link',
      class: '',
      class2: '',
      date: 'Postponed - pandemic*',
      title: 'Whereaoke',
      logo: '../../../assets/img/KaraKoin.png',
      client: 'Whereaoke,',
      clientTitle: 'Troy Ross',
      myRole: 'Junior Front-End Developer',
      type: 'Business search & review site',
      image: '../../../assets/img/logo3.png',
      imageAlt: 'Whereaoke Logo',
      button: '',
      buttonColor: '',
      www: '',
      wwwAlt: 'www.whereaoke.com',
      comments: '<strong>Whereaoke.com</strong> is intended to be a business search app specifically targeting karaoke bars.  The project was postponed prior to completion due to the pandemic.  Features include <i>search by day of week & location</i>, <i>free online digital songbook</i>, <i>rate & review karaoke bars</i>, <i>cashless tips</i> and more.  <br><br> We developed Whereaoke using Ionic Framework with the intention of adding it to the App Store and Google Play. <br><br>  I worked on this project for three years and it is responsible, in large part, for me becoming a front-end developer.  I hold Whereaoke close to my heart and it was fun to work on.  Needless to say, I hope this project gets revived someday!',
    },
    {
      url: 'http://iamjeremy.xyz',
      attribute: 'hideToggle',
      id: 'ok',
      class: '',
      class2: '',
      date: 'August 2022',
      title: 'Portfolio Website',
      logo: '../../../assets/img/avatar2.png',
      client: 'I back myself',
      clientTitle: '',
      myRole: 'Lead Developer',
      type: 'Portfolio',
      image: '../../../assets/img/avatar2.png',
      imageAlt: 'Portfolio Image',
      button: 'VISIT SITE',
      buttonColor: 'warn',
      www: 'http://iamjeremy.xyz',
      wwwAlt: '',
      comments: '&nbsp; is my portfolio website.  And YES, it counts because I made it...and it\'s really cool. This minimalist portfolio site majors on elegant simplicity and elevated UX/UI. If you like this site and need to find a full-time front end developer, give me a call!',
    }
  ]

  constructor(public dialogRef: MatDialogRef<WorkComponent>, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }
}
