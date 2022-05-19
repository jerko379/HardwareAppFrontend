import {Component, Input, OnInit} from '@angular/core';
import {Hardware} from "../../models/hardware";
import {Review} from "../../models/review";
import {HardwareService} from "../../hardware/hardware.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {


  hardwareList: Hardware[];
  reviewList: Review[];
  selectedReview;
  hw : Hardware;



    constructor(private hardwareService: HardwareService ,private route:ActivatedRoute, private router : Router) {

      this.getReviews();


    }

  ngOnInit(): void {




  }

  getHardware() {
    this.hardwareService.getHardware().subscribe(hardware => {
        {
          this.hardwareList = hardware;
          this.hw = this.hardwareList.find(h => h.code === this.selectedReview.hwCode);
          console.log(this.hw)
          console.log(this.selectedReview.hwCode)
        }

      }
    )
  };


  getReviews() {
    this.hardwareService.getReviews().subscribe(review => {
      {
        this.reviewList = review;
        console.log(this.reviewList)
        const selReview = this.route.snapshot.params['r'];
        //this.selectedReview = this.reviewList[index];
        this.getHardware();
        console.log("Selected review:")
        console.log(this.selectedReview);
      }

      }
    );

  }

  goBack() {
    this.router.navigate(['review']);
  }
}
