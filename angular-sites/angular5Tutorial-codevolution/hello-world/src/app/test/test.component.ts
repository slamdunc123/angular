import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  //used in INTERPOLATION
  /*public name="Codevolution";
  public siteUrl =window.location.href;*/

  //used in PROPERTY BINDING
  /*public name="Codevolution";
  public myId="testId";
  public isDisabled=false;*/

  //used in BINDING CLASSES TO HTML ELEMENTS
  /*public name="Codevolution";
  public successClass="text-success";
  public hasError=true;
  public isSpecial=true;
  public messageClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  };
  public highlightColor="orange";
  public titleStyles={
    color:"blue",
    fontStyle:"italic"
  }*/

  //used in EVENT BINDING
  public greeting="";
  public greeting2="";

  onClick(){
    console.log('Welcome to Codevolution');
    this.greeting='Welcome to Codevolution';
  }
  onClick2(event){
    console.log(event);
    this.greeting2=event.path[1].baseURI;
  }

  //used in Tutorial 10 - TEMPLATE REFERENCE VARIABLES
  public msgValue: "";

  logMessage(value){
    console.log(value);
    this.msgValue=value;
  }

  //used in Tutorial 11 - TWO WAY BINDING
  public name="";




  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
