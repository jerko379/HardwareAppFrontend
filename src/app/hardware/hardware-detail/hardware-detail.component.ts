import {Component, Input, OnInit} from '@angular/core';
import {Hardware} from "../../models/hardware";
import {ActivatedRoute, Router} from "@angular/router";
import {HardwareService} from "../hardware.service";
import {Review} from "../../models/review";

@Component({
  selector: 'app-hardware-detail',
  templateUrl: './hardware-detail.component.html',
  styleUrls: ['./hardware-detail.component.css']
})
export class HardwareDetailComponent implements OnInit {
  selectedHardware? : Hardware;
  reviewList?:Review[];




  ngOnInit(): void {
    const paramCode = this.route.snapshot.params['code'];
    this.getHardwareByCode(paramCode)
    this.getReviewsforHardware(paramCode);
  }

  constructor(private route:ActivatedRoute, private hardwareService : HardwareService, private router : Router) {


  }



  /*getHardware(paramCode : string) {
      return this.hardwareService.getHardwarebyCode(paramCode);

  }

   */

  getHardwareByCode(paramCode : string)  {
     return this.hardwareService.getHardware().subscribe(hardware => {
        this.selectedHardware = hardware.find(hw => hw.code == paramCode);
      }
    );
  }

  getReviewsforHardware(paramCode : string) {
    return this.hardwareService.getReviewsForHardware(paramCode).subscribe(
      reviewList => {
        this.reviewList = reviewList
        console.log(this.reviewList)
      }

  )
  }

  goBack() {
    this.router.navigate(['hardware']);
  }




}
