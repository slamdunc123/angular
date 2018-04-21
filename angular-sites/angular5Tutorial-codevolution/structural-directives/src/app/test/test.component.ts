import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  //used in Tutorial 12 - STRUCTURAL DIRECTIVES - ngIf

  displayName=true;
  displayName2=true;

  //used in Tutorial 13 - STRUCTURAL DIRECTIVES - ngSwitch

  public color="orange";

  //used in Tutorial 14 - STRUCTURAL DIRECTIVES - ngFor

  public colors= [
    "red",
    "blue",
    "green",
    "yellow"
  ];

  //used in Tutorial 15 - COMPONENT INTERACTION
  //sending data from parent component to child component
  @Input() public parentData; //property input into this child component - remember to add Input to the import section at the top of this page
  //@Input('parentData') public name; //alternative version using a differnet property name 

  //sending data from child component to parent component - needs to be done through events
  @Output() public childEvent = new EventEmitter(); //remember to import  Output and EventEmitter at the top of the page

  fireEvent(){
    this.childEvent.emit('Hey Codevolution');//message to be sent to the parent component using emit
  }

  //use in Tutorial 16 - PIPES
  public name = "Codevolution";
  public message = "Welcome to codevolution";
  public person = {
    "firstName": "John",
    "lastName": "Doe"
  }

  public date = new Date();

  

  constructor() { }

  ngOnInit() {
  }

}
