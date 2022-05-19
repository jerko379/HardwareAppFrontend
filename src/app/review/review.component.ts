import { Component, OnInit } from '@angular/core';
import {Hardware} from "../models/hardware";
import {Review} from "../models/review";
import {HardwareService} from "../hardware/hardware.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {


  hardwareList: Hardware[];
  reviewList: Review[];
  filteredReviews : Review[];

  constructor(private hardwareService: HardwareService) {

  }

  ngOnInit(): void {
    this.getHardware();
    this.getReviews();

  }

  getHardware() {
    this.hardwareService.getHardware().subscribe(hardware => {
        this.hardwareList = hardware;
      }
    );
  }

  getReviews() {
    this.hardwareService.getReviews().subscribe(review => {
        this.reviewList = review;
      }
    );


    }

  filterReviews() {

    let from =  parseInt((document.getElementById("from") as HTMLInputElement).value);
    let to =  parseInt((document.getElementById("to") as HTMLInputElement).value);
    console.log(from)
    console.log(to)
    //this.filteredReviews = this.reviewList.filter(p  => p.rating >= from && p.rating <= to );

    this.hardwareService.getReviewsByRating(from,to).subscribe(reviews => {
        this.filteredReviews = reviews;
      }
    );


    console.log(this.filteredReviews)
    console.log(this.reviewList)


  }
}
