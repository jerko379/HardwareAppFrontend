import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HardwareComponent} from "./hardware/hardware.component";
import {HardwareDetailComponent} from "./hardware/hardware-detail/hardware-detail.component";
import {HomeComponent} from "./home/home.component";
import {ReviewComponent} from "./review/review.component";
import {ReviewDetailComponent} from "./review/review-detail/review-detail.component";



const routes : Routes = [
  {path:'', component :HomeComponent},
  {path: 'hardware', component : HardwareComponent},
  {path:'hardware/:code', component:HardwareDetailComponent},
  {path:'review' , component : ReviewComponent},
  {path:'review/:index', component:ReviewDetailComponent},

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports : [
    RouterModule
  ]
})


export class AppRoutingModule { }
