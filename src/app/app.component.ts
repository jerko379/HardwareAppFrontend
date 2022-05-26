import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  title = 'Hardware app';


  ngOnInit(): void {
  }

  constructor(translate: TranslateService) {
    translate.setDefaultLang('hr');
    translate.use('hr')
  }



}


