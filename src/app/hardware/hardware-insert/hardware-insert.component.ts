import {Component, Input, OnInit} from '@angular/core';
import {Hardware} from "../../models/hardware";
import {HardwareService} from "../hardware.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-hardware-insert',
  templateUrl: './hardware-insert.component.html',
  styleUrls: ['./hardware-insert.component.css']
})
export class HardwareInsertComponent implements OnInit {

  newHardware: Hardware;
  @Input() hardwareList : Hardware[];
  insertForm: FormGroup;

  constructor(private hardwareService : HardwareService, private router : Router) {
  }


  ngOnInit(): void {

    this.insertForm = new FormGroup({
      'code' : new FormControl(),
      'name' : new FormControl(),
      'type' : new FormControl(),
      'quantity' : new FormControl(),
      'price' : new FormControl(),
    });

  }

  insertNew() {
    console.log(this.hardwareList);
  }

  insertHardware(  code:string, name:string, type:string, quantity:number, price:number) {
    name = name.trim();
    code = code.trim();
    type = type.trim();
    this.newHardware = {name: name, price:price, code: code, type:type, quantity :quantity}
    this.hardwareService.insertHardware( this.newHardware)
      .subscribe((hw) => {
        if(hw != null) {
          this.hardwareList.push(hw);
          this.newHardware = {};
          this.insertForm.reset();
        }

      });


  }





}
