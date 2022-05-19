import { Component, OnInit } from '@angular/core';
import {HardwareService} from "./hardware.service";
import {Hardware} from "../models/hardware";
import {catchError, Observable, tap} from "rxjs";

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.css']
})
export class HardwareComponent implements OnInit {

  hardwareList : Hardware[];
  selectedHardware?  : Hardware;
  selectedInsert ?: boolean;

  constructor(private hardwareService : HardwareService) {
    this.selectedInsert =false;

  }

   ngOnInit() {
    this.getHardware();
  }
   getHardware() {
      this.hardwareService.getHardware().subscribe(hardware => {
       this.hardwareList = hardware;
      }
    );
  }


 deleteHardware(hw : Hardware) {
   if (confirm('Are you sure you want to delete this hardware?')) {
     console.log(hw)
     this.hardwareService.deleteHardware(hw).subscribe(
       () => this.hardwareList.splice(this.hardwareList.indexOf(hw),1)
     );
   }
 }




}
