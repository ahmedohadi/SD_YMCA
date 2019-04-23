import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contactus/contact.component';
import { MroomComponent } from './Mroom/mroom.component';
import { DrowningPreventionComponent } from './drowning-prevention/drowning-prevention.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ResourcesComponent } from './resources/recources.component';
<<<<<<< HEAD
// import swal from 'sweetalert';
=======
import { DonoFrameComponent } from './donoframe/donoframe.component';

>>>>>>> knowBeforeYouGo
import { QuizzlerService } from './drowning-prevention/quizzler.service';
import { ThreeRulesComponent } from './three-rules/three-rules.component';
import { HiddendangersComponent } from './hiddendangers/hiddendangers.component';
import { ThreeTopComponent } from './three-top/three-top.component';

const defaultRoute: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'drowning-prevention', component: DrowningPreventionComponent},
  { path: 'events', component: MroomComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'dangers', component: HiddendangersComponent},
  { path: 'resources', component: ResourcesComponent},
  { path: 'donoframe', component: DonoFrameComponent}
];

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
      ResourcesComponent,
      ThreeRulesComponent,
      HiddendangersComponent,
      ThreeTopComponent,
      DonoFrameComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      CommonModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(defaultRoute),
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
