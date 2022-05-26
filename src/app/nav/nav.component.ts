import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../security/authentication.service";
import {TranslateService} from "@ngx-translate/core";
import {translate} from "@angular/localize/tools";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  currentLanguage: string;

  constructor(
    public authenticationService: AuthenticationService,
    private router: Router,
    private translate: TranslateService
  ) {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']).then();
  }

  ngOnInit(): void {
    this.currentLanguage = 'Hrvatski'
  }

  changeLanguage(lang : string) {

    if (lang == 'en') {
      this.currentLanguage = 'English'
      this.translate.use('en')
    }
    if (lang == 'hr') {
      this.currentLanguage = 'Hrvatski'
      this.translate.use('hr')
    }

  }

}
