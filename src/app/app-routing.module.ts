import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutJeremyComponent } from './portfolio/about-jeremy/about-jeremy.component';
import { ContactComponent } from './portfolio/contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
// import { Email1Component } from './portfolio/work-main/emails/email-dialogs/email1/email1.component';
// import { EmailsComponent } from './portfolio/work-main/emails/emails.component';
import { WorkComponent } from './portfolio/work-main/websites/work.component';
import { WorkMainComponent } from './portfolio/work-main/work-main.component';



const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
    children: [
      {
        path: 'about',
        component: AboutJeremyComponent
      },
      {
        path: 'work',
        component: WorkMainComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      // {
      //   path: 'email1',
      //   component: Email1Component
      // }
      // {
      //   path: 'websites',
      //   component: WorkComponent
      // }
    ]
  },

  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
