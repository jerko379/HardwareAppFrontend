import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import { AppComponent } from './app.component';
import { HardwareComponent } from './hardware/hardware.component';
import { HardwareDetailComponent } from './hardware/hardware-detail/hardware-detail.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HardwareInsertComponent } from './hardware/hardware-insert/hardware-insert.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ReviewComponent } from './review/review.component';
import { ReviewDetailComponent } from './review/review-detail/review-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HardwareComponent,
    HardwareDetailComponent,
    HomeComponent,
    NavComponent,
    HardwareInsertComponent,
    ReviewComponent,
    ReviewDetailComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
