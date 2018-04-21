import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {

  backgroundColor2:string='yellow';
  textColor2:string='red';

  backgroundColor3:string[]=[
    'red',
    'blue',
    'green'
  ];
  textColor3:string='white';

  errorFlag:boolean=true;

  constructor() { }

  ngOnInit() {  

  }

  getBackgroundColor(id:number){
    return this.backgroundColor3[id];
  }

}
