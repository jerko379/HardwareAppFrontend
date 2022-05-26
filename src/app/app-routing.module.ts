import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HardwareComponent} from "./hardware/hardware.component";
import {HardwareDetailComponent} from "./hardware/hardware-detail/hardware-detail.component";
import {HomeComponent} from "./home/home.component";
import {ReviewComponent} from "./review/review.component";
import {ReviewDetailComponent} from "./review/review-detail/review-detail.component";
import {LoginComponent} from "./login/login.component";
import {LoggedInGuard} from "./security/logged-in.guard";
import {ForbiddenPageComponent} from "./forbidden-page/forbidden-page.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";



const routes : Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'hardware',
    component: HardwareComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'hardware/:code',
    component: HardwareDetailComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'forbidden',
    component: ForbiddenPageComponent
  },
  {
    path: 'review',
    component: ReviewComponent,
    canActivate: [LoggedInGuard]
  },

  {
    path: 'review/:index',
    component: ReviewDetailComponent,
    canActivate: [LoggedInGuard]
  },

  {
    path: '**',
    component: PageNotFoundComponent
  }



]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],

  exports : [
    RouterModule
  ]
})
export class AppRoutingModule {}
