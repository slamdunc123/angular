import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data',
  templateUrl: './two-way-data.component.html',
  styleUrls: ['./two-way-data.component.css']
})
export class TwoWayDataComponent implements OnInit {

  message: string = "";

  constructor() { }

  ngOnInit() {
  }

  onTypingMessage(event:Event){
    this.message = (<HTMLInputElement> event.target).value;
}
}