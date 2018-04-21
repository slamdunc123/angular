import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickEvent(){
    console.log("event performed from the template.");
  }
  toggle:boolean = true;
  onToggleAction(){    
    this.toggle = !this.toggle;
    console.log('Value of toggle: ' + this.toggle);
  }

}
