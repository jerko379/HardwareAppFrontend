import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import { AppComponent } from './app.component';
import { HardwareComponent } from './hardware/hardware.component';
import { HardwareDetailComponent } from './hardware/hardware-detail/hardware-detail.component';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HardwareInsertComponent } from './hardware/hardware-insert/hardware-insert.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReviewComponent } from './review/review.component';
import { ReviewDetailComponent } from './review/review-detail/review-detail.component';
import { ForbiddenPageComponent } from './forbidden-page/forbidden-page.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AuthenticationInterceptor} from "./security/authentication.interceptor";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FactoryTarget} from "@angular/compiler";

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
    ForbiddenPageComponent,
    LoginComponent,
    PageNotFoundComponent,


  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot( {
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage : 'hr'
    }),
    NgbModule

  ],
  exports : [
    TranslateModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {


}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
