import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ang-binding',
  templateUrl: './ang-binding.component.html',
  styleUrls: ['./ang-binding.component.css']
})
export class AngBindingComponent implements OnInit {

  message:string='Welcome to the data binding example';

  constructor() { }

  ngOnInit() {
  }

}
