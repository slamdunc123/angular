import { Component, OnInit } from '@angular/core';

declare let $:any; //jquery to collapse navbar menu when a link is clicked - need the keyword 'declare' for this to work

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {//place jquery code in here

//jquery to collapse navbar menu when a link is clicked - jquery needs to be installed and referenced in the angular-cli.json file within 'scripts'
   
    $(document).ready(() => {//start of jquery
      $('.nav-link').on('click', () => {
         $('.navbar-collapse').collapse('hide');
       });
     });    
  }

}
