import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contactus/contact.component';
import { MroomComponent } from './Mroom/mroom.component';
import { DrowningPreventionComponent } from './drowning-prevention/drowning-prevention.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ResourcesComponent } from './resources/recources.component';

const defaultRoute = 'home';

@NgModule({
   declarations: [
      AppComponent,
      AboutUsComponent,
      ContactUsComponent,
      MroomComponent,
      DrowningPreventionComponent,
      HomePageComponent,
      NavbarComponent,
      FooterComponent,
      ResourcesComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      CommonModule,
      RouterModule.forRoot([
        { path: 'about-us', component: AboutUsComponent},
        { path: 'drowning-prevention', component: DrowningPreventionComponent},
        { path: 'events', component: MroomComponent},
        { path: 'contact-us', component: ContactUsComponent},
        // { path: 'donate', component: }
        { path: 'home', component: HomePageComponent},
        { path: '', redirectTo: defaultRoute, pathMatch: 'full' },
        { path: '**', redirectTo: defaultRoute, pathMatch: 'full' }
      ])
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
