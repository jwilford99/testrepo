import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutJeremyComponent } from './portfolio/about-jeremy/about-jeremy.component';
import { ContactComponent } from './portfolio/contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { Email1Component } from './portfolio/work-main/emails/email-dialogs/email1/email1.component';
import { Email10Component } from './portfolio/work-main/emails/email-dialogs/email10/email10.component';
import { Email2Component } from './portfolio/work-main/emails/email-dialogs/email2/email2.component';
import { Email3Component } from './portfolio/work-main/emails/email-dialogs/email3/email3.component';
import { Email4Component } from './portfolio/work-main/emails/email-dialogs/email4/email4.component';
import { Email5Component } from './portfolio/work-main/emails/email-dialogs/email5/email5.component';
import { Email6Component } from './portfolio/work-main/emails/email-dialogs/email6/email6.component';
import { Email7Component } from './portfolio/work-main/emails/email-dialogs/email7/email7.component';
import { Email8Component } from './portfolio/work-main/emails/email-dialogs/email8/email8.component';
import { Email9Component } from './portfolio/work-main/emails/email-dialogs/email9/email9.component';
import { EmailsComponent } from './portfolio/work-main/emails/emails.component';
import { WorkComponent } from './portfolio/work-main/websites/work.component';
import { WorkMainComponent } from './portfolio/work-main/work-main.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AboutJeremyComponent,
    WorkComponent,
    EmailsComponent,
    Email1Component,
    Email2Component,
    Email3Component,
    Email4Component,
    Email5Component,
    Email6Component,
    Email7Component,
    Email8Component,
    Email9Component,
    Email10Component,
    WorkMainComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
