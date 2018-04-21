import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {

  errorCode: string = "ER02";

  itemList: [{
    name:string,
    description:string
  }];


  constructor() {
    this.itemList = [
      {
      name:'Mac Air',
      description:'Mac Air Laptop'
      },
      {
      name:'Lenovo G50',
      description:'Lenovo G50 Laptop'
      }
    ];
  }

  ngOnInit() {
  }

}
