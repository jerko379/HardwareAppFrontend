import { Injectable } from '@angular/core';
//import {hardware} from "./repo/mockedRepo";
import {catchError, Observable, of, tap} from "rxjs";
import {Hardware} from "../models/hardware";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Review} from "../models/review";

@Injectable({
  providedIn: 'root'
})

export class HardwareService {

  private hardwareURL='http://localhost:8080/hardware';
  private reviewUrl = 'http://localhost:8080/review';
  httpOptions = {
    headers : new HttpHeaders({'Content-type' : 'application/json'})
  }

  constructor(
    private http : HttpClient
  ) { }

  /*getHardware() : Observable<Hardware[]> {
    return of(hardware);
  }
   */

  getHardware(): Observable<Hardware[]> {
    return this.http.get<Hardware[]>(this.hardwareURL);
  }

  /*getHardwarebyCode(paramCode : string ) : Hardware {
    return hardware.find(hw => hw.code == paramCode);
  }
   */
  deleteHardware(hardware: Hardware | string) : Observable<Hardware> {
    const code = typeof hardware === 'string' ? hardware : hardware.code;
    const url = `${this.hardwareURL}/${code}`;
    console.log(url)
    return this.http.delete<Hardware>(url, this.httpOptions).pipe(
      tap(() => console.log(`deleted hw with code=${code}`)) ,
      catchError(this.handleError<Hardware>('deleteHardware'))
    );


  }

  insertHardware(hardware: Hardware): Observable<Hardware> {
    return this.http.post<Hardware>(this.hardwareURL, hardware, this.httpOptions).pipe(
      tap((newHardware: Hardware) => console.log(`added hw with code =${newHardware.code}`)),
      catchError(this.handleError<Hardware>('addHardware'))
    );
  }

  handleError <T> (operation = 'operation', result?: T) {
    return (error: any) : Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    }
  }

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.reviewUrl);
  }


  getReviewsForHardware(code:string) : Observable<Review[]> {
    const url = `${this.reviewUrl}/?code=${code}`;
    console.log(url)
    return this.http.get<Review[]>(url);
  }


  getReviewsByRating(from:number, to:number) : Observable<Review[]> {
    const url = `${this.reviewUrl}/?fromto=${from}-${to}`;
    console.log(url)
    return this.http.get<Review[]>(url);
  }

}
