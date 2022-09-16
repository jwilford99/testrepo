import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  rightSlide: boolean = false;
  mobileText: boolean = true;
  mobileSlide: boolean = false;
  menuOpen: boolean = false;
  route: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
       this.route = event['url'];
       if (this.route.includes('contact') || this.route.includes('about') || this.route.includes('work')) {
        this.slideRight();
        console.log(this.route);
       }
      }
    });
  }

  ngOnInit(): void {}




  slideRight() {
    this.rightSlide = true;
    this.mobileText = false;
    this.mobileSlide = true;
  }

  reset() {
    this.rightSlide = false;
    this.mobileText = true;
    this.mobileSlide = false;
    setTimeout(() => {
      this.router.navigate(['/'])
    }, 300);
  }

  openMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
